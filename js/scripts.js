$(document).ready(function() {
  $(".walrus").click(function() {
    $("#walrus-showing").fadeToggle() ;
    $("#walrus-hidden").fadeToggle() ;
  });
  $(".ostric").click(function(){
    $("#ostric-showing").slideToggle();
    $("#ostric-hidden").slideToggle();
  })
})