const express = require('express');
const router = express.Router();

const BASE_PATH = 'sprints/sprint14/dth-lead-in';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprints/sprint14/confirmation';

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/dth-things-needed`);
})

module.exports = router;
