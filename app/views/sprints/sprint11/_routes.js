var express = require('express')
var router = express.Router()

const BASE_PATH = 'sprints/sprint11/hand-off';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprints/sprint11/dth';



router.post('/hand-off', function (req, res) {
  let data = req.session.data;
  const answer = data['confirmID'];

  if (answer === 'yes') {
    res.redirect(`${NEXT_PATH}`);
  } else {
    res.redirect('/sprints/sprint11/confirmation?id=not-verified');
  };
});

module.exports = router