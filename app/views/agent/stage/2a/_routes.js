const express = require('express');
const router = express.Router();

const BASE_PATH = 'agent/stage/2a';
const ABS_BASE_PATH = `/${BASE_PATH}`;

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/nino-search`);
})

router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?task=view&claimant=sh&claimStatus=new-claim');
});

router.post('/nino', function (req, res) {
    res.redirect('view-claim?guidMismatch=0');
});

module.exports = router;
