// Create a new script element
var script = document.createElement('script');

// Set the src attribute to the CDN URL
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jsbarcode/3.11.3/JsBarcode.all.min.js';

// Add an event listener to handle when the script is loaded
script.onload = function() {
  // The library is now available for use
  JsBarcode("#barcode1", "94041");
  JsBarcode("#barcode2", "4044");
  JsBarcode("#barcode3", "15038");
  JsBarcode("#barcode4", "4225");
  JsBarcode("#barcode5", "049000551051");
  JsBarcode("#barcode6", "770118709026");

};

// Append the script element to the document
document.head.appendChild(script);
