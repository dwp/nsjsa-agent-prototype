const express = require('express');
const router = express.Router();

const BASE_PATH = 'previous-work/agent/stage/3';
const ABS_BASE_PATH = `/${BASE_PATH}`;

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/choose-task`);
})

router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?task=ID-check');
});

router.post('/nino', function (req, res) {
    res.redirect('view-claim?guidMismatch=0');
});

module.exports = router;
