var express = require('express')
var router = express.Router()

const BASE_PATH = 'design-ideas/wt-3358-id-risk';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/design-ideas/wt-3358-id-risk/screens';

router.post("/nino-search", function (req, res) {
    const answer = req.body.nino;
  
    // sc1
    if (answer === "sc1") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc1&claimant=ij&claimStatus=push-successful`);
  
      // sc2
    } else if (answer === "sc2") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc2&claimant=ij&claimStatus=push-successful`);
  
      // sc3
    } else if (answer === "sc3") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc3&claimant=ij&claimStatus=push-successful`);
  
         // sc4
    } else if (answer === "sc4") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc4&claimant=ij&claimStatus=push-successful`);
  
      // sc5
    } else if (answer === "sc5") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc5&claimant=ij&claimStatus=push-successful`);
    
        // sc6
    } else if (answer === "sc6") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc6&claimant=ij&claimStatus=push-successful`);

        // sc7
    } else if (answer === "sc7") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc7&claimant=ij&claimStatus=push-successful`);

        // sc8
    } else if (answer === "sc8") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc8&claimant=ij&claimStatus=push-successful`);

        // sc9
    } else if (answer === "sc9") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc9&claimant=ij&claimStatus=push-successful`);
        // sc10
    } else if (answer === "sc10") {
        res.redirect(`${ABS_BASE_PATH}/view-claim?sc=sc10&claimant=ij&claimStatus=push-successful`);
    } else {
      // no value entered
        res.redirect(`${ABS_BASE_PATH}/nino-search`);
      
    }
  });

module.exports = router