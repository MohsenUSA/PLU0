// Create a new script element
var script = document.createElement('script');

// Set the src attribute to the CDN URL
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jsbarcode/3.11.3/JsBarcode.all.min.js';

// Add an event listener to handle when the script is loaded
script.onload = function() {
  // The library is now available for use
  JsBarcode("#barcode1", "123456111");
  JsBarcode("#barcode2", "123456222");
  JsBarcode("#barcode3", "123456333");
  JsBarcode("#barcode4", "123456444");
  JsBarcode("#barcode5", "123456555");
  JsBarcode("#barcode6", "123456666");

};

// Append the script element to the document
document.head.appendChild(script);
