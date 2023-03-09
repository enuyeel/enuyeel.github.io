//[https://masonry.desandro.com/methods.html]

var grid = document.querySelector('.grid');

//layout Masonry after each image loads
imagesLoaded( grid ).on( 'progress', function() {

  // using a selector string
  var msnry = Masonry.data( grid );

  if ((typeof(msnry) === 'undefined') || 
      (msnry === null))
    return;
  
  msnry.layout();
});

// imagesLoaded( grid, function() {
//   // init Isotope after all images have loaded
//   msnry = new Masonry( grid, {
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     gutter: '.gutter-sizer',
//     percentPosition: true
//   });
// });

// init Masonry
// var grid = document.querySelector('.grid');

// var msnry = new Masonry( grid, {
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   gutter: '.gutter-sizer',
//   percentPosition: true
// });