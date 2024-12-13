var express = require('express')
var router = express.Router()

const BASE_PATH = 'v2_0-agent/dfc-agent';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/v2_0-agent/dfc-agent/choose-task';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});

// NiNo search scenarios
router.post("/nino-search", function (req, res) {
    const answer = req.body.nino;
  
    // nino invalid
    if (answer === "invalid") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=invalid`);
  
      // duplicate claim
    } else if (answer === "duplicates") {
      res.redirect(`${ABS_BASE_PATH}/duplicates`);
  
      // all claims processed
    } else if (answer === "processed") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=processed`);
  
          // nino not found
    } else if (answer === "") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=blank`);
  
             // claimant not found
    } else if (answer === "claimant") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=claimant`);
      // nino not found
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=errors`);
      // dowload failed
    } else if (answer === "failed") {
      res.redirect(`${ABS_BASE_PATH}/failed-download`);
    } else {
      // happy patch view claim - all redirect if other value
        res.redirect(`${ABS_BASE_PATH}/view-claim?task=new&claimant=lm&claimStatus=new-claim&guidMismatch=0`);
      
    }
});
  

// reset the data back to defaults when end is got
router.get('/end', function (req, res) {
  let data = req.session.data;


  delete data['nino'];
  delete data['show'];


  res.redirect('choose-task');
});




module.exports = router