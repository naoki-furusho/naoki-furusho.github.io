$(window).scroll(function(){
  if ($(window).scrollTop() > 1) {
    $('#tf-menu').addClass('stick');
  } else {
    $('#tf-menu').removeClass('stick');
  }
});