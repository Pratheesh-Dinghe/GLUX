function imageonclick(x,y,z){

$(document).ready(function() {
    $('.productImage').mouseover(function(){
      
      var idimg = x;
      var srcimg = y;
      var idimgnew=z;
      
      $(".img2").attr('src',srcimg);

       var newImg = '<img src='
                                + srcimg + '></img>';

       $('#idimgnew')
                    .html($(newImg)
                    .animate({ height: '395', width: '420' }));
     
      
      
    });
  });
}