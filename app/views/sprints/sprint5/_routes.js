var express = require('express')
var router = express.Router()

const BASE_PATH = 'sprint5';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/sprint5/choose-task';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});


router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?task=needsId&claimant=sh&claimStatus=pre-checks-complete&idRisk=1&fraud=0&cis=0&noReg=0');
});

module.exports = router