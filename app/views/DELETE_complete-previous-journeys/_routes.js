var express = require('express');
var router = express.Router();

const BASE_PATH = 'complete-previous-journeys';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = 'complete-previous-journeys/index-previous';



// routing for which agent journey to follow
router.post('/index-current', function (req, res) {
  var answer = req.session.data['useServiceAs'];
  if (answer === 'contact-centre-agent') {
    res.redirect(`${ABS_BASE_PATH}/contact-centre-agent/choose-task.html`);
  } else if (answer === 'contact-centre-manager') {
    res.redirect(`${ABS_BASE_PATH}/contact-centre-manager/#`);
  } else if (answer === 'work-coach') {
    res.redirect(`${ABS_BASE_PATH}/work-coach/#`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/service-centre-agent/#`);
  }
});



module.exports = router;
