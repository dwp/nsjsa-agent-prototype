var express = require('express')
var router = express.Router()

const BASE_PATH = 'sprint5';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/sprint5/i3';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});

router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?task=view&claimant=sh&claimStatus=new-claim&idRisk=1');
});

module.exports = router