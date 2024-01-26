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
    } else {
      // happy patch view claim - all redirect if other value
        res.redirect(`${ABS_BASE_PATH}/view-claim?task=new&claimant=ij&claimStatus=push-successful&guidMismatch=0`);
      
    }
  });

module.exports = router