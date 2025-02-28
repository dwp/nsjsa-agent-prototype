var express = require('express')
var router = express.Router()

const BASE_PATH = 'sprint10';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/sprint10/choose-task';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});


router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?task=register&claimStatus=registration-needed&claimant=sh&nino=RN 00 00 35 A&idRisk=0&fraud=0&cis=1&dupe=0&niUpdate=0');
});

router.post('/nino', function (req, res) {
    let data = req.session.data;
    data['cis'] = 0;
    data['niMatchCis'] = 1;
    data['noReg'] = 1;
    // console.log( data['niMatchCis'] );
    res.redirect('view-claim');
});

module.exports = router