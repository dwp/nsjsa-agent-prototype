var express = require('express')
var router = express.Router()

const BASE_PATH = 'i6';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/previous-work/service-centre/i6/screens';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});

router.get('/start', function (req, res) {
    let data = req.session.data;
    answer = data['s'];
    data['claimant'] = 'ij';

    // all scenarios
    if ( ['s16', 's17'].includes(answer) ) {

        data['task'] = 'id-check';
        data['claimStatus'] = 'ID-check-needed';

    // remainder
    } else {
        data['task'] = 'none';
    }

    // specific scenarios
    if (answer === 's16') {

        data['OIDVskip'] = 1;
        data['guidMismatch'] = 0;

    } else if (answer === 's17') {
  
        data['OIDVskip'] = 0;
        data['guidMismatch'] = 1;
    
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
    delete data['multipleFraud'];
    delete data['niMatchCis'];
    delete data['cis'];
    delete data['appointee'];
    delete data['noReg'];
    delete data['build'];
    delete data['nicCheck'];
    delete data['bsError'];
    delete data['note'];
    delete data['guidMismatch'];

    answer = data['niNumber'];

    // all processing scenarios
    if ( ['s16', 's17'].includes(answer) ) {

        data['task'] = 'id-template';
        data['claimStatus'] = 'ID-template-needed';

        data['claimant'] = 'ij';

    // remainder
    } else {
        data['task'] = 'none';
    }

    // specific scenarios
    if (answer === 's16') {

        data['OIDVskip'] = 1;

    } else if (answer === 's17') {
  
        data['OIDVskip'] = 0;
        data['guidMismatch'] = 1;
    
    }

    res.redirect('view-claim');
});

router.post('/nino', function (req, res) {
    let data = req.session.data;
    // console.log( data['niMatchCis'] );
    if ( data['s'] != 'p4' ) {
        data['cis'] = 0;
        data['niMatchCis'] = 0;
        data['noReg'] = 1;
        res.redirect('view-claim');
    } else {
        res.redirect('duplicates');
    }
});

router.post('/update', function (req, res) {
    let data = req.session.data;

    if ( data['claimStatus'] == 'ID-check-needed' ) {
        data['task'] = 'id-check';
    }
    res.redirect('confirmation');
});

// reset the data back to defaults when end is got
router.get('/end', function (req, res) {
    let data = req.session.data;
    answer = data['s'];

    if (data['claimStatus'] == 'ID-check-needed') {

        data['task'] = 'id-check';
        res.redirect('view-claim');

    } else {

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
        delete data['guidMismatch'];

        res.redirect('screens');
    }

});

module.exports = router