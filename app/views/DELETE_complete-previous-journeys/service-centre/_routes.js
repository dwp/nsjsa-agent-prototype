module.exports = (app) => {
  const express = require('express');
  const router = express.Router();

  const config = require('./../../config.js');

  const BASE_PATH = 'service-centre';
  const ABS_BASE_PATH = `/${BASE_PATH}`;

  // reset the show? query string and continue
  router.get('/bc-search', function (req, res) {
    req.session.data.show = undefined;
    req.next();
  });

  // Benefit centre search
  router.post('/bc-search', function (req, res) {
    const answer = req.body.code;

    if (answer === 'invalid') {
      res.redirect(`${ABS_BASE_PATH}/bc-search?show=invalid`);
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/bc-search?show=errors`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/list`);
    }
  });

  // Search from top bar
  router.post('/query', function (req, res) {
    req.session.data.query = req.body.query;

    if (req.session.data.query === 'invalid') {
      res.redirect(`${ABS_BASE_PATH}/bc-search?show=invalid`);
    } else if (req.session.data.query.length) {
      res.redirect(`${ABS_BASE_PATH}/list`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/bc-search?show=errors`);
    }
  });

  // redirect to print option
  router.get('/print', function (req, res) {  
    res.redirect(`${ABS_BASE_PATH}/print-option-1?print=bc`);
  });

  // routing
  router.post('/print-option-3', function (req, res) {
    const answer = req.body.next;

    if (typeof answer !== 'undefined') {
      if (answer === 'return') {
        res.redirect(`${ABS_BASE_PATH}/list`);
      } else {
        res.redirect(`${ABS_BASE_PATH}/print-option-3?print=bc`);
      }
    }
  });

  // routing
  router.post('/print-option-4', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/list`);
  });

  // routing
  router.post('/print-option-5', function (req, res) {
    const answer = req.body.success;

    if (typeof answer !== 'undefined') {
      if (answer === 'yes') {
        res.redirect(`${ABS_BASE_PATH}/list`);
      } else {
        res.redirect(`${ABS_BASE_PATH}/print-option-5?print=bc`);
      }
    }
  });

  // reset the show? query string and continue
  router.get('/list', function (req, res) {
    const claimID = req.query.claimid;
    app.locals.markClaimListDatasetViewed(claimID);
    req.next();
  });

  return router;
};

