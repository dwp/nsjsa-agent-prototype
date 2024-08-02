const express = require('express');
const router = express.Router();
const app = express();

const BASE_PATH = 'sprints/sprint14/6-current-employment';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprints/sprint14/7-previous-employment';

const MAX_PREVIOUS_JOBS = 4;

// Redirect /current-employment to first question in sequence
router.all('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/guard`);
});

router.post('/guard', function (req, res) {
  // const answer = req.body.ceCurrentlyWorking;
  // app.locals.currentJobCount = 1;
  // if (typeof answer !== 'undefined') {
  //   if (answer === 'ce-currently-working-yes') {
  //     res.redirect(`${ABS_BASE_PATH}/type?job=1`);
  //   } else if (answer === 'ce-currently-working-no') {
  //     res.redirect(NEXT_PATH);
  //   }
  // } else {
  //   res.redirect(`${ABS_BASE_PATH}/guard`);
  // }
  res.redirect(NEXT_PATH);
});

router.post('/type', function (req, res) {
  const answer = req.body.ceCurrentWorkType;

  if (answer === 'Paid') {
    res.redirect(`${ABS_BASE_PATH}/payment-frequency`);
  } else if (answer === 'Voluntary') {
    res.redirect(`${ABS_BASE_PATH}/choose-to-be-paid`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/payment-frequency`);
  }
});

router.post('/choose-to-be-paid', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/get-paid`);
});

router.post('/get-paid', function (req, res) {
  const answer = req.body.ceGetPaid;

  if (answer === 'ce-get-paid-no') {
    res.redirect(`${ABS_BASE_PATH}/employer-name`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/payment-frequency`);
  }
});

router.post('/payment-frequency', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/employer-name`);
});

router.post('/employer-name', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/employer-address`);
});

router.post('/employer-address', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/employer-contact`);
});

router.post('/employer-contact', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/hours`);
});

router.post('/hours', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/self-employed-or-company-director`);
});

router.post('/self-employed-or-company-director', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/another-one`);
});

router.post('/another-one', function (req, res) {
  const answer = req.body.ceAnotherJob;

  if (answer === 'ce-another-job-yes') {
    app.locals.currentJobCount = typeof app.locals.currentJobCount === 'undefined' ? 1 : ++app.locals.currentJobCount;
    if (app.locals.currentJobCount === MAX_PREVIOUS_JOBS) {
      res.redirect(`${ABS_BASE_PATH}/employer-limit-warning`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/type?job=` + app.locals.currentJobCount);
    }
  } else {
    res.redirect(NEXT_PATH);
  }
});

router.get('/employer-limit-warning', function (req, res) {
  res.render(`${BASE_PATH}/employer-limit-warning`, {
    maxPreviousJobs: MAX_PREVIOUS_JOBS.toString()
  });
});

router.post('/employer-limit-warning', function (req, res) {
  res.redirect(NEXT_PATH);
});

module.exports = router;
