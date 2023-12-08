var express = require('express')
var router = express.Router()


const BASE_PATH = 'sprints/sprint14/dth';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprints/sprint14/confirmation';

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/email-address`);
})

router.post('/enter-your-details', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/choose-2-items`);
})


router.post('/choose-2-items', function (req, res) {

  let data = req.session.data;

  // Passport consent
  // true if checked
  let passportConsent = data['passport-consent'];

  // Paylip or P60 option
  // Options are payslip, p60
  let payslipOrP60Option = data['payslipOrP60'];
  // payslip or p60

  // Voice ID option
  // Options are voiceIdYes, voiceIdNo
  let taxCreditOption = data['tcOptions'];

  // Credit reference consent
  // true if checked
  let creditConsent = data['cra-consent'];

  // console.log(
  //   'Passport Consent:', passportConsent,
  //   'PP60:', payslipOrP60Option,
  //   'Tax Credit Options:', taxCreditOption,
  //   'Credit Reference Consent:', creditConsent
  // );

  if ( passportConsent == 'true') {
    res.redirect('your-passport-details');
  } else if ( payslipOrP60Option == 'payslip' ) {
    res.redirect('payslip-q1');
  } else if ( payslipOrP60Option == 'p60' ) {
    res.redirect('p60-q1');
  } else if ( taxCreditOption == 'voiceIdYes' ) {
    res.redirect('voice-id');
  } else if ( taxCreditOption == 'voiceIdNo' ) {
    res.redirect('tax-credits-q1');
  } else if ( creditConsent == 'true' ) {
    res.redirect('tu-q1');
  }

});

router.post('/your-passport-details', function (req, res) {

  let data = req.session.data;

  // Paylip or P60 option
  // Options are payslip, p60
  let payslipOrP60Option = data['payslipOrP60'];
  // payslip or p60

  // Voice ID option
  // Options are voiceIdYes, voiceIdNo
  let taxCreditOption = data['tcOptions'];

  // Credit reference consent
  // true if checked
  let creditConsent = data['cra-consent'];

  if ( payslipOrP60Option == 'payslip' ) {
    res.redirect('payslip-q1');
  } else if ( payslipOrP60Option == 'p60' ) {
    res.redirect('p60-q1');
  } else if ( taxCreditOption == 'voiceIdYes' ) {
    res.redirect('voice-id');
  } else if ( taxCreditOption == 'voiceIdNo' ) {
    res.redirect('tax-credits-q1');
  } else if ( creditConsent == 'true' ) {
    res.redirect('tu-q1');
  } else {
    res.redirect('../confirmation');
  }

});

router.post('/payslip-q2', function (req, res) {

  let data = req.session.data;

  // this one doesnt need passport as if it was checked it would come before payslip anyway
  // it doesnt need p60 as its payslip OR p60 so we're in payslip here like.

  // Voice ID option
  // Options are voiceIdYes, voiceIdNo
  let taxCreditOption = data['tcOptions'];

  // Credit reference consent
  // true if checked
  let creditConsent = data['cra-consent'];

  if ( taxCreditOption == 'voiceIdYes' ) {
    res.redirect('voice-id');
  } else if ( taxCreditOption == 'voiceIdNo' ) {
    res.redirect('tax-credits-q1');
  } else if ( creditConsent == 'true' ) {
    res.redirect('tu-q1');
  } else {
    res.redirect('../confirmation');
  }

});

router.post('/p60-q2', function (req, res) {

  let data = req.session.data;

  // this one doesnt need passport as if it was checked it would come before p60 anyway
  // it doesnt need payslip as its payslip OR p60 so we're in p60 here like.

  // Voice ID option
  // Options are voiceIdYes, voiceIdNo
  let taxCreditOption = data['tcOptions'];

  // Credit reference consent
  // true if checked
  let creditConsent = data['cra-consent'];

  if ( taxCreditOption == 'voiceIdYes' ) {
    res.redirect('voice-id');
  } else if ( taxCreditOption == 'voiceIdNo' ) {
    res.redirect('tax-credits-q1');
  } else if ( creditConsent == 'true' ) {
    res.redirect('tu-q1');
  } else {
    res.redirect('../confirmation');
  }

});

router.post('/voice-id', function (req, res) {

  let data = req.session.data;

  // this one just needs to check credit consent as its next

  // Credit reference consent
  // true if checked
  let creditConsent = data['cra-consent'];

  if ( creditConsent == 'true' ) {
    res.redirect('tu-q1');
  } else {
    res.redirect('../confirmation');
  }

});

router.post('/tax-credits-q2', function (req, res) {

  let data = req.session.data;

  // this one just needs to check credit consent as its next

  // Credit reference consent
  // true if checked
  let creditConsent = data['cra-consent'];

  if ( creditConsent == 'true' ) {
    res.redirect('tu-q1');
  } else {
    res.redirect('../confirmation');
  }

});






module.exports = router