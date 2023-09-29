// Create a new script element
var script = document.createElement('script');

// Set the src attribute to the CDN URL
// script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jsbarcode/3.11.3/JsBarcode.all.min.js';
script.src = './JsBarcode.all.min.js';
// Add an event listener to handle when the script is loaded
script.onload = function() {
  // The library is now available for use
  JsBarcode("#barcode1", "94041");
  JsBarcode("#barcode2", "4044");
  JsBarcode("#barcode3", "15038");
  JsBarcode("#barcode4", "TBA308773732023");
  JsBarcode("#barcode5", "049000551051");
  JsBarcode("#barcode6", "770118709026");

};

// Append the script element to the document
document.head.appendChild(script);


// Scroll up function
window.addEventListener('scroll', function() {
  var goTopButton = document.getElementById('goTop');
  if (window.scrollY > 100) {
      goTopButton.classList.add('visible');
  } else {
      goTopButton.classList.remove('visible');
  }
});

document.getElementById('goTop').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('body').scrollIntoView({
      behavior: 'smooth'
  });
});

// Search
document.getElementById('searchInput').addEventListener('input', function() {
  var searchTerm = this.value.toLowerCase();
  var elementsToSearch = document.querySelectorAll('.card h1, .card h2, .card h3, .card h4, .card h5, .card h6, .card p');

  elementsToSearch.forEach(function(element) {
      var textContent = element.textContent.toLowerCase();
      var elementParent = element.closest('.card'); 

      if (textContent.includes(searchTerm)) {
          elementParent.style.display = 'block';
      } else {
          elementParent.style.display = 'none';
      }
  });
});


// barcode generator
