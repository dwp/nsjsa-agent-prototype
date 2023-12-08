var express = require('express')
var router = express.Router()


const BASE_PATH = 'agent/stage/1a/dth';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/agent/stage/1a/confirmation';

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/email-address`);
})

router.post('/enter-your-details', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/choose-2-items`);
})


router.post('/choose-2-items', function (req, res) {

  let data = req.session.data;

  // Items
  // ukPassport payslipsP60 taxCreditsPayments transunion

  let answer1;

  if (data['ivQuestionLogic']){
    answer1 = data['ivQuestionLogic']
  }
  else {
    answer1 = []
  }

  // make something an array
  answer1 = [].concat(answer1)
  console.log(answer1, typeof answer1);

  // Paylip or P60?
  var answer2 = data['payslipOrP60'];
  // payslip or p60

  // Voice ID?
  var answer3 = data['tcOptions'];
  // voiceIdYes voiceIdNo

  // Credit reference
  var answer4 = data['cra-consent'];
  // true
  

  if ( answer1.includes('ukPassport') ) {
    res.redirect('your-passport-details');

  } else if (answer1.length == 0) {
    res.redirect('payslip-q1');
  }

})


module.exports = router