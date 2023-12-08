const express = require('express');
const router = express.Router();

const MAX_PREVIOUS_JOBS = 4;

const BASE_PATH = 'sprints/sprint14/7-previous-employment';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprints/sprint14/8-abroad';

/*
 * Branching for previous employment
 * */

// Redirect /previous-employment to first question in sequence
router.get('/', function (req, res) {
  res.redirect('/sprints/sprint14/7-previous-employment/job-ended-last-six-months');
});

// After last 6 months we ask when did you work for employer
router.get('/when-employer', function (req, res) {
  // var lastSixMonths = req.query.peLastSixMonths;
  // if (lastSixMonths === 'pe-last-six-months-no') {
  //   res.redirect(NEXT_PATH);
  // } else {
  //   res.render(`${BASE_PATH}/when-employer`);
  // }
  res.redirect(NEXT_PATH);
});

// Afer when did you work for this employer we ask why did this job end
router.get('/why-end', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/why-did-it-end`);
});

// After why did this job end we ask the employer name
router.get('/name', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/employer-name`);
});

// After asking the employer name we ask for their address
router.get('/address', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/employer-address`);
});

// After asking for their address we ask for the employer contact number
router.get('/contact', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/employer-contact`);
});

// After asking for the empoyer contact number we ask if any payment is expected
router.get('/expect-payment', function (req, res) {
  const peExpectPayment = req.query.peExpectPayment;
  // We want a 'yes' or a 'no' answer here
  if (!peExpectPayment) {
    res.render(`${BASE_PATH}/expect-payment`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/self-employed-or-company-director`);
  }
});

// After expecting any payment we ask if they were a company director or self-employed
router.post('/self-employed-or-company-director', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/another-job-ended-last-six-months`);
});

// After asking if they were a company directot or self-employed we ask if you had another job that ended in last 6 months
router.post('/another-job-ended-last-six-months', function (req, res) {
  const answer = req.body.peAnotherLastSixMonths;
  if (answer === 'yes') {
    res.redirect(`${ABS_BASE_PATH}/when-employer`);
  } else {
    res.redirect(NEXT_PATH);
  }
});

// Counter, although unsure if it actually works due to reliance on a module that isn't available
router.get('/employer-limit-warning', function (req, res) {
  res.render(`${BASE_PATH}/employer-limit-warning`, {
    maxPreviousJobs: MAX_PREVIOUS_JOBS.toString()
  });
});

module.exports = router;
