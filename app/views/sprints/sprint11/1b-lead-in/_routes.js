const express = require('express');
const router = express.Router();

const BASE_PATH = 'sprints/sprint11/1b-lead-in';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprints/sprint11/2-details';

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/apply-expectations`);
})

module.exports = router;
