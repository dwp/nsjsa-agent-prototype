module.exports = (app) => {
  const express = require('express');
  const router = express.Router();

  const config = require('./../../config.js');

  const BASE_PATH = 'work-coach';
  const ABS_BASE_PATH = `/${BASE_PATH}`;

  router.get('/*', (req, res, next) => {
    const status = req.query.status;

    const newStatus = config.workCoachClaimStatuses.find(statusObj => statusObj.value === status);
    if (typeof newStatus !== 'undefined') {
      app.locals.selectedClaimStatuses[0] = newStatus;
    }

    next();
  });

  // redirect work coach
  router.get('/', function (req, res) {  
    res.redirect(`/common/nino-search`);
  });

  // Iteration 1
  router.get('/1', function (req, res) {  
    res.redirect(`${ABS_BASE_PATH}/1/nino-search`);
  });

  router.post('/1/nino-search', function (req, res) {
    const answer = req.body.nino;

    if (answer === 'invalid') {
      res.redirect(`${ABS_BASE_PATH}/1/nino-search?show=invalid`);
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/1/nino-search?show=errors`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/1/claim-summary`);
    }
  });

  // Iteration 2
  router.get('/2', function (req, res) {  
    res.redirect(`${ABS_BASE_PATH}/2/nino-search`);
  });

  router.post('/2/nino-search', function (req, res) {
    const answer = req.body.nino;

    if (answer === 'invalid') {
      res.redirect(`${ABS_BASE_PATH}/2/nino-search?show=invalid`);
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/2/nino-search?show=errors`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/2/claim-summary`);
    }
  });

  // Iteration 3
  router.get('/3', function (req, res) {  
    res.redirect(`${ABS_BASE_PATH}/3/nino-search`);
  });

  router.post('/3/nino-search', function (req, res) {
    const answer = req.body.nino;

    if (answer === 'invalid') {
      res.redirect(`${ABS_BASE_PATH}/3/nino-search?show=invalid`);
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/3/nino-search?show=errors`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/3/1`);
    }
  });

  // Iteration 4
  router.get('/4', function (req, res) {  
    res.redirect(`${ABS_BASE_PATH}/4/nino-search`);
  });

  router.post('/4/nino-search', function (req, res) {
    const answer = req.body.nino;

    if (answer === 'invalid') {
      res.redirect(`${ABS_BASE_PATH}/4/nino-search?show=invalid`);
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/4/nino-search?show=errors`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/4/1`);
    }
  });

  // Iteration 5
  router.get('/5/99', function (req, res) {  
    res.redirect(`${ABS_BASE_PATH}/5/claim?status=notPushed`);
  });

  router.get('/5', function (req, res) {  
    res.redirect(`${ABS_BASE_PATH}/5/nino-search`);
  });

  router.post('/5/nino-search', function (req, res) {
    const answer = req.body.nino;

    if (answer === 'invalid') {
      res.redirect(`${ABS_BASE_PATH}/5/nino-search?show=invalid`);
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/5/nino-search?show=errors`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/5/99?status=notPushed`);
    }
  });

  // Option 6 with secondary nav
  router.get('/6', function (req, res) {  
    res.redirect(`${ABS_BASE_PATH}/6/nino-search`);
  });

  router.post('/6/nino-search', function (req, res) {
    const answer = req.body.nino;

    if (answer === 'invalid') {
      res.redirect(`${ABS_BASE_PATH}/6/nino-search?show=invalid`);
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/6/nino-search?show=errors`);
    } else {
      res.redirect(`${ABS_BASE_PATH}/6/claim?status=notPushed`);
    }
  });

  router.get('/push', (req, res, next) => {
    app.locals.setClaimStatus(req.query.status);
    next();
  });

  router.post(`/push-clerical`, (req, res) => {
    const status = app.locals.CLAIM_STATUSES.CLERICAL.value;
    app.locals.setClaimStatus(status);

    res.redirect('/common/status-update-confirmation');
  });

  router.post(`/push-failed`, (req, res) => {
    const status = app.locals.CLAIM_STATUSES.PUSH_FAILED.value;
    app.locals.setClaimStatus(status);

    res.redirect('/common/status-update-confirmation');
  });

  router.post(`/pushed`, (req, res) => {
    const status = app.locals.CLAIM_STATUSES.PUSHED.value;
    app.locals.setClaimStatus(status);

    res.redirect('/common/status-update-confirmation');
  });

  router.post(`/push-failed-clerical`, (req, res) => {
    const status = app.locals.CLAIM_STATUSES.PUSH_FAILED.value;
    app.locals.setClaimStatus(status);

    res.redirect(`${ABS_BASE_PATH}/push?push=failedClericalPush`);
  });

  router.post(`/push-cis-error`, (req, res) => {
    res.redirect(`${ABS_BASE_PATH}/push?show=manualUpdate`);
  });

  router.post('/cancel', function (req, res) {
    const answer = req.body.cancel;

    if (answer === 'yes') {
      const reason = req.body['cancellation-reason'];
      app.locals.setClaimStatus(config.CLAIM_STATUSES.CANCELLED.value, reason);
      res.redirect('/common/status-update-confirmation');
    } else {
      app.locals.setClaimStatus(config.CLAIM_STATUSES.NOT_PUSHED.value);
      res.redirect(`/common/claim?status=notPushed`);
    }
  });

  return router;
};
