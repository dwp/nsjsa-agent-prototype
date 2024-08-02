const express = require('express');
const router = express.Router();
//const pensionTracker = require('pension-tracker');

const BASE_PATH = 'sprints/sprint14/9-pensions';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprints/sprint14/10-education';

// Redirect /education to first question in sequence
router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/9a-current-pension`);
});

// Display the warning once reached maximum number of pensions
router.get('/limit-warning', function (req, res) {
  //const currentPensionType = pensionTracker.getCurrentType();

  let formAction = NEXT_PATH;
  //let pageTitle = `You have entered a maximum number of ${pensionTracker.getMax().toString()} pensions.`;
  let pageText = 'Please bring evidence of any other FUTURE pensions to your jobcentre visit.';

  //if (currentPensionType === pensionTracker.PENSION_TYPES.CURRENT) {
  //  pageText = 'Please bring evidence of any other CURRENT pensions to your jobcentre visit.';
  //  formAction = '/citizen/pensions/deferred-pension';
  //} else if (currentPensionType === pensionTracker.PENSION_TYPES.DEFERRED) {
  //  pageText = 'Please bring evidence of any other DEFERRED pensions to your jobcentre visit.';
  //  formAction = '/citizen/pensions/future-pension';
  //}

  res.render(`${BASE_PATH}/limit-warning`, {
    formAction,
    pageTitle,
    pageText
  });
});

router.post('/limit-warning', function (req, res) {
  res.redirect(NEXT_PATH);
});

// This moves `current-pension` routing to `current-pension` directory
router.use('/9a-current-pension', require('./9a-current-pension/_routes'));

// This moves `deferred-pension` routing to `deferred-pension` directory
// router.use('/9b-deferred-pension', require('./9b-deferred-pension/_routes'));

// This moves `previous-pension` routing to `previous-pension` directory
// router.use('/9c-future-pension', require('./9c-future-pension/_routes'));

module.exports = router;
