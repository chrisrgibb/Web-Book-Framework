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
  var count = 0;

  for (var i=0; i<preloadImages.length;i++){
  	imgs[i] = new Image();
  	imgs[i].src = preloadImages[i];
  }

  var newPhoto = new Image();
  newPhoto.src = preloadImages[0];


  var previousPage$ = $('#previous-page');
  var nextPage$ = $('#next-page');

  if(count==0){
    previousPage$.hide();
  }else{
    previousPage$.show();
  }



  // Check for click to change picture
  $('#image').click(function(){
    if (count<imgs.length-1){
      count++;
      $(this).attr('src', imgs[count].src);
      
    }
    else{
      alert('too far!!!');
    }
  }); // end click function
/*
$("body").keydown(function (e){
  if(e.keyCode == 37 && count > 0){ // left
    count--;
    alert(count)
    $('#image').attr('src', imgs[count].src);
  }else if(e.keyCode == 39 && count<imgs.length-1){
    count++;  
    alert(count)
    $('#image').attr('src', imgs[count].src);
  

  }
}); // end keydown function
*/

/*
$("#yes-icon").hover(
  function(){
  $(this).attr('border', '5px solid red');
  },
  function(){
  $(this).attr('border', 'none');
  });// end yes icon hover
$("#no-icon").hover(
  function(){
  $(this).attr('border', '5px solid red');
  },
  function(){
  $(this).attr('border', 'none');
  });// end no icon hover
  
*/
console.log($('#image').width());

$('#next-page').click(function(){
  console.log("Next PAGE!!!");
   if (count<imgs.length-1){
      count++;
      $('#image').attr('src', imgs[count].src);
      console.log("count = " + count);
    }
    else{
      alert('too far!!!');
    }
      if(count>=imgs.length-1){
    nextPage$.hide();
    }else{
    nextPage$.show();
  }

    if(count>0){
      previousPage$.show();
    }

});

$('#previous-page').click(function() {
    console.log("clicked on yes!!!!");
   if (count>0){
      count--;
      $('#image').attr('src', imgs[count].src);
    }
    else{
      alert('too far!!!');
    }

    if(count<imgs.length-1 && count > 0){
      nextPage$.show();
    }else if (count==0) {
    previousPage$.hide();
    }


});

  	
}); // end ready