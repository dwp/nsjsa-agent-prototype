const express = require('express');
const router = express.Router();

const BASE_PATH = 'sprints/sprint14/3-claim-start';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprints/sprint14/4-other-benefits';

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/start-date`);
})

router.post('/start-date', function (req, res) {
  res.redirect(`${NEXT_PATH}`);
})

// Just skip for this journey
// router.post('/start-date', function (req, res) {
//   const answer = req.body.claimstart;

//   if (answer === 'yes') {
//     // Yes, I want my claim to start from today {current-date}
//     res.redirect(`${NEXT_PATH}`);
//   } else {
//     // No, I want my claim to start from an earlier date
//     res.redirect(`${ABS_BASE_PATH}/change-date`);
//   };
// });

// When do you want your claim to start?
router.post('/change-date', function (req, res) {
  res.redirect(`${NEXT_PATH}`);
});

// Did you ask for advice?
router.post('/asked-for-advice', function (req, res) {
  res.redirect(`${NEXT_PATH}`);
});

module.exports = router;
