var express = require('express')
var router = express.Router()

const BASE_PATH = 'sprint4';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/previous-work/agent/stage/1a/dth';

// router.get('/', function (req, res) {
//     res.redirect(`${ABS_BASE_PATH}/1-eligibility`);
// })

// router.post('/hand-off', function (req, res) {
//   let data = req.session.data;
//   const answer = data['confirmID'];

//   if (answer === 'yes') {
//     res.redirect(`${NEXT_PATH}`);
//   } else {
//     res.redirect('/agent/stage/1a/complete-confirmation?id=not-verified');
//   };
// });

module.exports = router