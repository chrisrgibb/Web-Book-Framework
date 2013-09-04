$(document).ready(function() {
  // Preload Images
  var preloadImages = ['images/page1.jpg',
  					           'images/page2.jpg',
  					           'images/page3.jpg',
  					           'images/page4.jpg',
  					           'images/page5.jpg'  ];

  var preloadarrows = ['images/nextpage.png',
                       'images/previouspage.png'];

  // Store preloaded images in new Array             
                
  var imgs = [];
  var currentPage = 0;
  var numberOfPages = preloadImages.length;

  for (var i=0; i < numberOfPages;i++){
  	imgs[i] = new Image();
  	imgs[i].src = preloadImages[i];
  }

  var newPhoto = new Image();
  newPhoto.src = preloadImages[0];

  var previousPage$ = $('#previous-page');
  var nextPage$ = $('#next-page');

  if(currentPage==0){
    previousPage$.hide();
  }else{
    previousPage$.show();
  }

  // Check for click to change picture
  $('#image').click(function(){

  }); // end click function

$("body").keydown(function (e){
  // press left key
  if(e.keyCode == 37 && currentPage > 0){ // left
    gotoPreviousPage();
  // press right key
  }else if(e.keyCode == 39 && currentPage<numberOfPages-1){
     gotoNextPage();
  }
}); // end keydown function



$('#next-page').click(function(){
  gotoNextPage();
}); // end next-page click function

$('#previous-page').click(function() {
  gotoPreviousPage();
});  // end previous-page click function 


function gotoPreviousPage(){
    console.log("clicked on yes!!!!");
   if (currentPage>0){
      currentPage--;
      $('#image').attr('src', imgs[currentPage].src);
    }
    else{
      alert('too far!!!');
    }

    if(currentPage<numberOfPages-1 && currentPage > 0){
      nextPage$.show();
    }else if (currentPage==0) {
    previousPage$.hide();
    }
}

function gotoNextPage(){
  console.log("Next PAGE!!!");
    if (currentPage<numberOfPages-1){
      currentPage++;
      $('#image').attr('src', imgs[currentPage].src);
    }
    else{
      alert('too far!!!');
    }
      if(currentPage>=numberOfPages-1){
    nextPage$.hide();
    }else{
    nextPage$.show();
  }
    if(currentPage>0){
      previousPage$.show();
    }
}


  	
}); // end ready