/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

function statusUpdate() {
  const elem = document.getElementsByClassName("govuk-tag");
  elem[0].innerHTML = "STATEMENT DOWNLOADED"
}

function printCheck() {
  statusUpdate();
  window.print();
}



$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
