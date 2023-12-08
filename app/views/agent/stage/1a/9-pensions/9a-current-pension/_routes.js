const express = require('express');
const router = express.Router();
//const pensionTracker = require('pension-tracker');

const LIMIT_WARNING_PATH = '/agent/stage/1a/9-pensions/limit-warning';
const BASE_PATH = 'agent/stage/1a/9-pensions/9a-current-pension';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/agent/stage/1a/10-education';

// Track which type of pension the user is interacting with
router.all('/*', function (req, res) {
  //pensionTracker.setCurrentType(pensionTracker.PENSION_TYPES.CURRENT);
  req.next();
});

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/guard`);
});

router.post('/guard', function (req, res) {
  // const answer = req.body.currentPensionGuard;

  // if (typeof answer !== 'undefined') {
  //   if (answer === 'current-pension-guard-yes') {
  //     //if (pensionTracker.reachedMax()) {
  //     //  res.redirect(LIMIT_WARNING_PATH);
  //     //} else {
  //       res.redirect(`${ABS_BASE_PATH}/provider-name`);
  //     //}
  //   } else {
  //     res.redirect(NEXT_PATH);
  //   }
  // } else {
  //   res.redirect(`${ABS_BASE_PATH}/guard`);
  // }

  res.redirect(NEXT_PATH);
});

router.post('/when-start', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/payment-frequency`);
});

router.post('/payment-frequency', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/increase-does-it`);
});

router.post('/increase-does-it', function (req, res) {
  const answer = req.body.currentPensionDoesItIncrease;

  if (typeof answer !== 'undefined') {
    if (answer === 'current-pension-does-it-increase-yes') {
      res.redirect(`${ABS_BASE_PATH}/increase-when`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/another-one`);
    }
  } else {
    res.redirect(`${ABS_BASE_PATH}/increase-does-it`);
  }
});

router.post('/increase-when', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/another-one`);
});

router.post('/increase-frequency', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/increase-when`);
});

router.post('/provider-name', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/provider-address`);
});

router.post('/provider-address', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/payment-frequency`);
});

router.post('/another-one', function (req, res) {
  const answer = req.body.currentPensionAnotherOne;

  if (typeof answer !== 'undefined') {
    //pensionTracker.add();

    if (answer === 'current-pension-another-one-yes') {
      //if (pensionTracker.reachedMax()) {
      //  res.redirect(LIMIT_WARNING_PATH);
      //} else {
        res.redirect(`${ABS_BASE_PATH}/provider-name`);
      //}
    } else {
      res.redirect(NEXT_PATH);
    }
  } else {
    res.redirect(`${ABS_BASE_PATH}/another-one`);
  }
});

module.exports = router;
