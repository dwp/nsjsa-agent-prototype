var express = require('express')
var router = express.Router()

const BASE_PATH = 'i4';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/service-centre/i4/screens';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});

router.get('/start', function (req, res) {
    let data = req.session.data;
    answer = data['s'];

    // all registration scenarios
    if (['s1','s2','s3','s4'].includes(answer)) {

        data['task'] = 'register';
        data['claimStatus'] = 'not-registered';

    // all processing scenarios
    } else if (['s5','s6','s7','s8','s9','s10','s11','s12','s13','s14','s15','s21','s22'].includes(answer)) {

        data['task'] = 'process';
        data['claimant'] = 'ij';

    // remainder
    } else {
        data['task'] = 'none';
    }

    // specific scenarios
    if (answer === 's1') {

        data['claimant'] = 'sh';
        data['nino'] = 'RN 00 00 35 C';
        data['noReg'] = 1;

    } else if (answer === 's2') {

        data['claimant'] = 'kb';
        data['nino'] = 'RN 00 00 35 C';
        data['niMatchCis'] = 1;

    } else if (answer === 's3') {
 
        data['claimant'] = 'sh';
        data['nino'] = 'RN 00 00 35 C';
        data['dupe'] = 1;

    } else if (answer === 's4') {
 
        data['claimant'] = 'kb';
        data['nino'] = 'RN 00 00 35 C';
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

    } else if (answer === 's21') {
        // entitlement note
        data['claimant'] = 'ij';
        data['claimStatus'] = 'awaiting-appointment';
        data['entNote'] = 1;

    } else if (answer === 's22') {
        // full time work note
        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-entitled';
        data['FTWNote'] = 1;
    
    }

    res.redirect('choose-task');
});

router.post('/confirmation', function (req, res) {
    let data = req.session.data;

    data['updated'] = 1;

    res.redirect('confirmation');
});

router.get('/r-view-claim', function (req, res) {
    let data = req.session.data;

    if (['s22'].includes(answer) && data['updated'] === 1) {

        data['claimStatus'] = 'not-eligible';
        data['FTWNote'] = 0;

    } else if (['s21'].includes(answer) && data['updated'] === 1) {

        data['entNote'] = 0;

    }

        res.redirect('view-claim');
});

router.post('/nino-search', function (req, res) {
    let data = req.session.data;

    answer = data['niNumber'];

    // all registration scenarios
    if (['s1','s2','s3','s4'].includes(answer)) {

        data['task'] = 'register';
        data['claimStatus'] = 'not-registered';
    
        // all processing scenarios
    } else if (['s5','s6','s7','s8','s9','s10','s11','s12','s13','s14','s15','s21','s22'].includes(answer)) {

        data['task'] = 'process';
        data['claimant'] = 'ij';

    // remainder
    } else {
        data['task'] = 'none';
    }

    // specific scenarios
    if (answer === 's1') {

        data['claimant'] = 'sh';
        data['nino'] = 'RN 00 00 35 C';
        data['noReg'] = 1;

    } else if (answer === 's2') {

        data['claimant'] = 'kb';
        data['nino'] = 'RN 00 00 35 C';
        data['niMatchCis'] = 1;

    } else if (answer === 's3') {
 
        data['claimant'] = 'sh';
        data['nino'] = 'RN 00 00 35 C';
        data['dupe'] = 1;
        res.redirect('duplicates');

    } else if (answer === 's4') {
 
        data['claimant'] = 'kb';
        data['nino'] = 'RN 00 00 35 C';
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

    } else if (answer === 's21') {
        // entitlement note
        data['claimant'] = 'ij';
        data['claimStatus'] = 'awaiting-appointment';
        data['entNote'] = 1;

    } else if (answer === 's22') {
        // full time work note
        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-entitled';
        data['FTWNote'] = 1;
    
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
    delete data['entNote'];
    delete data['FTWNote'];
    delete data['niNumber'];
    delete data['updated'];

    res.redirect('screens');
});

module.exports = router