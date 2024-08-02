var express = require('express')
var router = express.Router()

const BASE_PATH = 'additional';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/additional/nino-search';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});
  
router.post('/nino-search', function (req, res) {
    let data = req.session.data;
    if (data['scenario'] == 'F1' | data['scenario'] == 'F2' | data['scenario'] == 'F3' | data['scenario'] == 'F4') {
        res.redirect('duplicates');
    } else if (data['scenario'] == 'F5' | data['scenario'] == 'F6') {
        res.redirect('view-claim?claimant=kb&claimStatus=new-claim');
    } else {
        res.redirect('view-claim');
    }
});

module.exports = router