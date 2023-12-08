var express = require('express')
var router = express.Router()

const BASE_PATH = 'design-ideas/agent-flags/wt-3555-welsh';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/design-ideas/agent-flags/screens';

router.post("/nino-search", function (req, res) {
    const answer = req.body.nino;
  
    // Claimant has asked to be written to in Welsh
    if (answer === "welsh1") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?sc=welsh1&claimant=ij&claimStatus=push-successful`);
  
      // Claimant has asked to be spoken to in Welsh
    } else if (answer === "welsh2") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=welsh2&claimant=ij&claimStatus=push-successful`);
  
        // Claimant has asked to be written and spoken to in Welsh
    } else if (answer === "welsh3") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=welsh30&claimant=ij&claimStatus=push-successful`);
    } else {
      // no value entered
        res.redirect(`${ABS_BASE_PATH}/nino-search`);
      
    }
  });

module.exports = router