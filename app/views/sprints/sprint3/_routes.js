var express = require('express')
var router = express.Router()

const BASE_PATH = 'sprint3';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/sprints/sprint3/nino-search';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});
  
router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?scenario=0&task=view&claimant=sh&claimStatus=new-claim');
});

module.exports = router