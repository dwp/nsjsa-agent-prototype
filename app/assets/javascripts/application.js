//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

function statusUpdate() {
  const elem = document.getElementsByClassName("govuk-tag");
  elem[0].innerHTML = "STATEMENT DOWNLOADED"
}

function printCheck() {
  statusUpdate();
  window.print();
}



window.GOVUKPrototypeKit.documentReady(function () {
})


new MOJFrontend.FilterToggleButton({
  bigModeMediaQuery: "(min-width: 48.063em)",
  startHidden: true,
  toggleButton: {
    container: document.querySelector(".moj-action-bar__filter"),
    showText: "Show filter",
    hideText: "Hide filter",
    classes: "govuk-button--secondary",
  },
  closeButton: {
    container: document.querySelector(".moj-filter__header-action"),
    text: "Close",
  },
  filter: {
    container: document.querySelector(".moj-filter"),
  },
});
