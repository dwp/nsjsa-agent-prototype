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

  //Separate input from presentation - 01 to January use | toMonth
  filters.toMonth = function(x){ 
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];   
    if (x > 0){ return months[x - 1]; // returns date as per month      
    } else {
            return x ;      
    }}  

// Add the filters using the addFilter function
Object.entries(filters).forEach(([name, fn]) => addFilter(name, fn))

// Render content as bold
addFilter('bold', function (content) {
  return '<strong>' + content + '</strong>'
}, { renderAsHtml: true })
