module.exports = (app) => {
  const express = require('express');
  const router = express.Router();
  const config = require('./../../../../config.js');

  if (!app.locals.selectedClaimStatuses) {
    app.locals.selectedClaimStatuses = [{
      date: config.todaysDate.original,
      label: config.claimStatuses[0].label,
      reason: '',
      agent: {
        firstName: app.locals.loggedInAgent.firstName,
        lastName: app.locals.loggedInAgent.lastName
      }
    }];
  }

  router.post(`/outbound-journey/update-status`, (req, res) => {
    const status = req.body.updateStatus;
    const reason = status === app.locals.CLAIM_STATUSES.CANCELLED.value ? req.body['cancellation-reason'] : req.body[`${status}Reason`];
    app.locals.setClaimStatus(status, reason);

    res.redirect('/common/status-update-confirmation');
  });

  return router;
};
