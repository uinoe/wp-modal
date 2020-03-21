$(function(){
  $(".wp-block-image").on('click touchstart', function () {
    // preparation
    var img_height = $(this).height();
    var img_width = $(this).width();
    var data = $(this).children('img').attr('src');
    var margin = (img_height /8)

    if (img_height > 650){
      // bigger than 650
      $("#wp-modal-img").attr('src', data);
      $("#wp-modal-img").height(img_height *2);
      $("#wp-modal-img").width(img_width *2);
      $("#wp-modal-img").css({'margin-top': margin + "px"});
      $("#wp-modal-img").css({'margin-bottom': margin + "px"});
      $("#wp-modal1").show();
    }else {
      // smaller than 650
      $("#wp-modal-img2").attr('src', data);
      $("#wp-modal-img2").height(img_height *2);
      $("#wp-modal-img2").width(img_width *2);
      $("#wp-modal2").show();
    }
  });
  $(".wp-modal-bg").on('click touchstart', function () {
    // close
    $("#wp-modal1, #wp-modal2").hide();
    $(".wp-modal-content").delay(300).queue(function () {
    });
  });
});
