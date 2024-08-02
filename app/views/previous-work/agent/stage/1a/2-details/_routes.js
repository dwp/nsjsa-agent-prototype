const express = require('express');
const router = express.Router();

const BASE_PATH = 'previous-work/agent/stage/1a/2-details';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/previous-work/agent/stage/1a/3-claim-start';

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/nino`);
})


router.get('/add-different-postal-address', function (req, res) {
  const answer = req.query.detailsAddDifferentPostalAddress;

  if (answer === 'add-different-postal-address-no') {
    res.redirect(`${ABS_BASE_PATH}/contact-phone`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/address-postal-address`);
  }
});

// Validate DOB against year
router.post('/address', function (req, res) {
  var dobYear = parseInt(req.session.data['dobYear']);
  var currentYear = new Date().getFullYear();

  if (currentYear - dobYear < 16) {
    // res.redirect('/v1_4-citizen/3-details/dob?under16');
    res.redirect(`${ABS_BASE_PATH}/dob?under16`);
  } else if (currentYear - dobYear > 64) {
    // res.redirect('/v1_4-citizen/3-details/dob?over64');
    res.redirect(`${ABS_BASE_PATH}/dob?over64`);
  } else if (currentYear - dobYear === 16) {
    // res.redirect('/v1_4-citizen/3-details/under18');
    res.redirect(`${ABS_BASE_PATH}/under18`);
  } else if (currentYear - dobYear === 17) {
    // res.redirect('/v1_4-citizen/3-details/under18');
    res.redirect(`${ABS_BASE_PATH}/under18`);
  } else {
    // res.redirect('/v1_4-citizen/3-details/address');
    res.redirect(`${ABS_BASE_PATH}/address`);
  }
});

router.post('/contact-phone', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/contact-do-you-have-an-email`);
});

// router.post('/contact-do-you-have-an-email', function (req, res) {
//   const answer = req.body.contactDoYouHaveAnEmail;

//   if (typeof answer !== 'undefined') {
//     if (answer === 'Yes') {
//       res.redirect(`${ABS_BASE_PATH}/contact-email`);
//     } else {
//       res.redirect(`${ABS_BASE_PATH}/bank-account`);
//     }
//   } else {
//     res.redirect(`${ABS_BASE_PATH}/contact-do-you-have-an-email`);
//   }
// });

router.post('/contact-do-you-have-an-email', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/bank-account`);
});

router.post('/bank-account', function (req, res) {
  res.redirect(NEXT_PATH);
});

module.exports = router;
