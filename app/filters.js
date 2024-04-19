//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here


  var filters = {}

  filters.randomise = (array, limit) => {
    let results = [];
    let myArray = array.slice(0, array.length);

    for (var i = 0; i < limit; i ++) {
      var r = Math.floor(Math.random() * myArray.length);
      results.push(myArray[r]);
      myArray.splice(r, 1);
    }

    return results;
  }

// Add the filters using the addFilter function
Object.entries(filters).forEach(([name, fn]) => addFilter(name, fn))
