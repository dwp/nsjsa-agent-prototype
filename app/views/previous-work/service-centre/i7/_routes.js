var express = require('express')
var router = express.Router()

const BASE_PATH = 'i7';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/previous-work/service-centre/i7/screens';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});

router.get('/start', function (req, res) {
    let data = req.session.data;
    answer = data['s'];
    
    // specialist review
    if (['s1','s2','s3','s11','s12','s13','s14','s18','s19','s20'].includes(answer)) {
        data['task'] = 'specialist-review';
        data['claimStatus'] = 'escalate-to-specialist';
    }

    // not registered escalated
    if (['s1'].includes(answer)) {

        data['claimant'] = 'sh';
        data['nino'] = 'RN 00 00 35 A';
        data['noReg'] = 1;

    } else if (['s2'].includes(answer)) {

        data['noReg'] = 1;
        data['claimant'] = 'kb';
        data['nino'] = 'RN 00 00 35 A';
        data['niMatchCis'] = 1;

    } else if (['s3'].includes(answer)) {

        data['claimant'] = 'kb';
        data['nino'] = 'RN 00 00 35 A';
        data['dupe'] = 1;

    // appointee
    } else if (['s6'].includes(answer)) {

        data['task'] = 'appointee';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'appointee-check-needed';
        data['appointee'] = 1;

    // multi claim fraud
    } else if (['s9'].includes(answer)) {

        data['task'] = 'fraud-review';
        data['claimant'] = 'ij';
        data['multiFraud'] = 1;
        data['claimStatus'] = 'fraud-check-needed';

    // not built
    } else if (['s11'].includes(answer)) {

        data['claimant'] = 'ij';
        data['build'] = 1;

    // MBR fail
    } else if (['s12'].includes(answer)) {

        data['claimant'] = 'ij';
        data['nicCheck'] = 1;

    // Complex for robotics
    } else if (['s13'].includes(answer)) {

        data['claimant'] = 'ij';

    // Robotics error
    } else if (['s14'].includes(answer)) {

        data['claimant'] = 'ij';
        data['bsError'] = 1;

    // Not built and been TTC
    } else if (['s18'].includes(answer)) {

        data['claimant'] = 'sh';
        data['claimStatus'] = 'transfer-to-clerical';

    } else if (['s19'].includes(answer)) {

        data['noReg'] = 1;
        data['claimant'] = 'kb';
        data['nino'] = 'RN 00 00 35 A';

    } else if (['s20'].includes(answer)) {

        data['claimant'] = 'ij';

    // remainder
    } else {
        data['task'] = 'none';
    }

    res.redirect('choose-task');
});


router.post('/nino-search', function (req, res) {
    let data = req.session.data;

    // reset data
    delete data['s'];
    delete data['task'];
    delete data['claimant'];
    delete data['nino'];
    delete data['claimStatus'];
    delete data['northernIreland'];
    delete data['dupe'];
    delete data['idRisk'];
    delete data['singleFraud'];
    delete data['multiFraud'];
    delete data['niMatchCis'];
    delete data['cis'];
    delete data['appointee'];
    delete data['noReg'];
    delete data['build'];
    delete data['nicCheck'];
    delete data['bsError'];
    delete data['note'];

    answer = data['niNumber'];

    // all registration scenarios
    if (['s1','s2','s3','s4'].includes(answer)) {

        data['task'] = 'register';
        data['claimStatus'] = 'not-registered';
    
        // all processing scenarios
    } else if (['s5','s6','s7','s8','s9','s10','s11','s12','s13','s14','s15'].includes(answer)) {

        data['task'] = 'process';
        data['claimant'] = 'ij';

    // remainder
    } else {
        data['task'] = 'none';
    }

    // specific scenarios
    if (answer === 's1') {

        data['claimant'] = 'sh';
        data['nino'] = 'RN 00 00 35 A';
        data['noReg'] = 1;

    } else if (answer === 's2') {

        data['claimant'] = 'kb';
        data['nino'] = 'RN 00 00 35 A';
        data['niMatchCis'] = 1;

    } else if (answer === 's3') {
 
        data['claimant'] = 'sh';
        data['nino'] = 'RN 00 00 35 A';
        data['dupe'] = 1;
        res.redirect('duplicates');

    } else if (answer === 's4') {
 
        data['claimant'] = 'kb';
        data['nino'] = 'RN 00 00 35 A';
        data['niMatchCis'] = 1;

    } else if (answer === 's5') {

        data['claimStatus'] = 'northern-ireland';
        data['northernIreland'] = 1;

    } else if (answer === 's6') {

        data['claimStatus'] = 'appointee-check-needed';
        data['appointee'] = 1;

    } else if (answer === 's7') {

        data['claimStatus'] = 'ID-check-needed';
        data['cis'] = 1;

    } else if (answer === 's8') {
  
        data['claimStatus'] = 'fraud-check-needed';
        data['singleFraud'] = 1;

    } else if (answer === 's9') {
  
        data['claimStatus'] = 'fraud-check-needed';
        data['multiFraud'] = 1;

    } else if (answer === 's10') {

        data['claimant'] = 'ij';
        data['claimStatus'] = 'ID-at-risk-check-needed';
        data['idRisk'] = 1;

    } else if (answer === 's11') {

        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-built';
        data['build'] = 1;

    } else if (answer === 's12') {

        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';
        data['nicCheck'] = 1;

    } else if (answer === 's13') {
        // robot
        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';

    } else if (answer === 's14') {
        // robot error
        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';
        data['bsError'] = 1;

    } else if (answer === 's15') {
        // decision note
        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-entitled';
        data['note'] = 1;

    }

    res.redirect('view-claim');
});

router.post('/nino', function (req, res) {
    let data = req.session.data;
    // console.log( data['niMatchCis'] );
    if ( data['s'] != 's4' ) {
        data['cis'] = 0;
        data['niMatchCis'] = 0;
        data['noReg'] = 1;
        res.redirect('view-claim');
    } else {
        res.redirect('duplicates');
    }
});

// reset the data back to defaults when end is got
router.get('/end', function (req, res) {
    let data = req.session.data;

    delete data['s'];
    delete data['task'];
    delete data['claimant'];
    delete data['nino'];
    delete data['claimStatus'];
    delete data['northernIreland'];
    delete data['dupe'];
    delete data['idRisk'];
    delete data['singleFraud'];
    delete data['multiFraud'];
    delete data['niMatchCis'];
    delete data['cis'];
    delete data['appointee'];
    delete data['noReg'];
    delete data['build'];
    delete data['nicCheck'];
    delete data['bsError'];
    delete data['note'];

    res.redirect('screens');
});

module.exports = router