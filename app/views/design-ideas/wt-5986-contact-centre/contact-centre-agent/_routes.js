var express = require('express')
var router = express.Router()

const BASE_PATH = 'design-ideas/wt-5986-contact-centre/contact-centre-agent';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/design-ideas/wt-5986-contact-centre/contact-centre-agent/nino-search';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});


// Appointment booking - Direct to update reason screen or directly to confirmation screen
router.post('/update-book', function (req, res) {
  const answer = req.body.claimStatus;
  if (answer === 'first-fail') {
    res.redirect(`${ABS_BASE_PATH}/confirmation`);

  } else if (answer === 'final-fail') {
    res.redirect(`${ABS_BASE_PATH}/update-reason-book`);
  
  } else {
      res.redirect(`${ABS_BASE_PATH}/confirmation`);
    
  }
});

// New claim - Direct to update reason screen or directly to confirmation screen
router.post('/update-new', function (req, res) {
  const answer = req.body.claimStatus;
  if (answer === 'first-fail') {
    res.redirect(`${ABS_BASE_PATH}/confirmation`);

  } else if (answer === 'final-fail') {
    res.redirect(`${ABS_BASE_PATH}/update-reason-new`);
  
  } else {
      res.redirect(`${ABS_BASE_PATH}/confirmation`);
    
  }
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
  
      // no more claims in the queue
    } else if (answer === "processed") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=processed`);
  
          // nino not found
    } else if (answer === "") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=blank`);
  
      // nino not found
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=errors`);
 
      // Welsh written
    } else if (answer === "welsh1") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning=welsh1`);

      // Welsh spoken
    } else if (answer === "welsh2") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning=welsh2`);
  
      // Welsh written and spoken
    } else if (answer === "welsh3") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning=welsh3`);

      // Cis mismatch
    } else if (answer === "mismatch") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning=mismatch`);

      // Check cis manually
    } else if (answer === "manually") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning=manually`);

       // Claimant has appointee
    } else if (answer === "appointee") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning=appointee`);

      // Member of household potentially violent
    } else if (answer === "violent3") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning=violent3`);
 
      // Partner pontentially
    } else if (answer === "violent2") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning=violent2`);
 
      // Claimant is potentially violent
    } else if (answer === "violent1") {
      res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning=violent1`);
      // happy path view claim - all redirect if other value
    } else {
        res.redirect(`${ABS_BASE_PATH}/view-claim?task=book&agent=cca&claimant=ij&claimStatus=awaiting-appointment&warning`);
      
    }
});
  
// reset the data back to defaults when end is got
router.get('/end', function (req, res) {
  let data = req.session.data;


  delete data['nino'];
  delete data['show'];


  res.redirect(`choose-task`);
});

module.exports = router