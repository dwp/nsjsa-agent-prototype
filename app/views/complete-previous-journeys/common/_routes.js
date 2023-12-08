module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const BASE_PATH = "common";
  const ABS_BASE_PATH = `/${BASE_PATH}`;
  const config = require("./../../config.js");

  router.get("/", (req, res, next) => {
    res.redirect(`${ABS_BASE_PATH}/status-update-confirmation`);
  });

  // NiNo search
  router.get("/nino-search", function (req, res) {
    req.session.data.show = undefined;
    req.next();
  });

  router.post("/nino-search", function (req, res) {
    const answer = req.body.nino;

    // nino invalid
    if (answer === "invalid") {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=invalid`);

      // duplicate claim
    } else if (answer === "duplicate") {
      res.redirect(`${ABS_BASE_PATH}/duplicate`);

      // SC allocated claim
    } else if (answer === "allocated") {
      res.redirect(`/service-centre/allocated-claim`);

      // WC incompatible benefit
    } else if (answer === "incompatible") {
      res.redirect(`${ABS_BASE_PATH}/claim?view=incompatible`);

      // WC CIS error
    } else if (answer === "cis") {
      res.redirect(`${ABS_BASE_PATH}/claim?push=cisError`);

      // nino not found
    } else if (!answer.length) {
      res.redirect(`${ABS_BASE_PATH}/nino-search?show=errors`);
    } else {
      // CC agent redirect
      if (app.locals.loggedInAgent === app.locals.agents[0]) {
        res.redirect(`/contact-centre/outbound-journey`);

        // CC manager redirect
      } else if (app.locals.loggedInAgent === app.locals.agents[1]) {
        res.redirect(`${ABS_BASE_PATH}/customer-statement`);

        // All redirect if other value
      } else {
        res.redirect(`${ABS_BASE_PATH}/claim`);
      }
    }
  });

  // Search from top bar
  router.post("/query", function (req, res) {
    req.session.data.query = req.body.query;

    if (req.session.data.query === "invalid") {
      res.redirect(`/common/nino-search?show=invalid`);
    } else if (req.session.data.query.length) {
      if (app.locals.loggedInAgent === app.locals.agents[1]) {
        res.redirect(`/common/customer-statement`);
      } else if (app.locals.loggedInAgent === app.locals.agents[3]) {
        res.redirect(`/common/claim`);
      } else {
        res.redirect(`/common/claim`);
      }
    } else {
      res.redirect(`/common/nino-search?show=errors`);
    }
  });

  // Give not push status to claim screen
  router.get("/claim", function (req, res, next) {
    const answer = req.session.data["nino"];

    // SC
    if (answer === "fail") {
      app.locals.setClaimStatus(config.CLAIM_STATUSES.PUSH_FAILED.value);
    } else if (answer === "success") {
      app.locals.setClaimStatus(config.CLAIM_STATUSES.SUCCESS.value);
    } else if (answer === "pushed") {
      app.locals.setClaimStatus(config.CLAIM_STATUSES.PUSHED.value);
    } else if (app.locals.loggedInAgent === app.locals.agents[3]) {
      app.locals.setClaimStatus(config.CLAIM_STATUSES.PUSHED.value);
    } else {
      app.locals.setClaimStatus(config.CLAIM_STATUSES.NOT_PUSHED.value);
    }
    next();
  });

  return router;
};
