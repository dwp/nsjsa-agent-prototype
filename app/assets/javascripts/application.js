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

