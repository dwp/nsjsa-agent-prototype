var express = require('express')
var router = express.Router()

const BASE_PATH = 'v1_1-agent/service-centre-agent';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/v1_1-agent/service-centre-agent/nino-search';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});


  
/*router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?scenario=0&task=view&claimant=sh&claimStatus=new-claim');
});
*/

router.post("/nino-search", function (req, res) {
    const answer = req.body.nino;
  
    // nino invalid
    if (answer === "invalid") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=invalid`);
  
      // duplicate claim
    } else if (answer === "duplicates") {
      res.redirect(`${ABS_BASE_PATH}/duplicates`);
  
      // claimant not found
    } else if (answer === "claimant") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=claimant`);
  
          // nino not found
    } else if (answer === "") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=blank`);
  
      // nino not found
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=errors`);
    
      // Welsh written
    } else if (answer === "welsh1") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=new&agent=sca&claimStatusaimant=ij&cl=push-successful&warning=welsh1`);
       // Welsh spoken
    } else if (answer === "welsh2") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=new&agent=sca&claimant=ij&claimStatus=push-successful&warning=welsh2`);
       // Welsh written and spoken
    } else if (answer === "welsh3") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=new&agent=sca&claimant=ij&claimStatus=push-successful&warning=welsh3`);
      // Cis mismatch
    } else if (answer === "mismatch") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=new&agent=sca&claimant=ij&claimStatus=push-successful&warning=mismatch`);
      // Check cis manually
    } else if (answer === "manually") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=new&agent=sca&claimant=ij&claimStatus=push-successful&warning=manually`);
      // CIS match
    } else {
      // happy path view claim - all redirect if other value
        res.redirect(`${ABS_BASE_PATH}/view-claim?task=new&agent=sca&claimant=ij&claimStatus=push-successful&warning=match`);
      
    }
  });

module.exports = router