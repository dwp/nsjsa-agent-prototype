const express = require('express');
const router = express.Router();

const BASE_PATH = 'v1_0-agent/contact-centre-agent/get-new-claim';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/v1_0-agent/contact-centre-agent/get-new-claim/view-claim';

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/choose-task`);
})

router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?task=book');
});


module.exports = router;
