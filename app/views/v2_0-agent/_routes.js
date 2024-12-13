var express = require('express');
var router = express.Router();

const BASE_PATH = 'v2_0-agent';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = 'v2_0-agent/index-current';



// routing for which agent journey to follow
router.post('/index-current', function (req, res) {
  var answer = req.session.data['useServiceAs'];
  if (answer === 'contact-centre-agent') {
    res.redirect(`${ABS_BASE_PATH}/contact-centre-agent/choose-task.html`);
  } else if (answer === 'contact-centre-manager') {
    res.redirect(`${ABS_BASE_PATH}/contact-centre-manager/choose-task.html`);
  } else if (answer === 'work-coach') {
    res.redirect(`${ABS_BASE_PATH}/work-coach/nino-search`);
  } else if (answer === 'dfc-agent') {
    res.redirect(`${ABS_BASE_PATH}/dfc-agent/choose-task.html`);
  } else {
    res.redirect(`${ABS_BASE_PATH}/service-centre-agent/nino-search`);
  }
});


module.exports = router;
