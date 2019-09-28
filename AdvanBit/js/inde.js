$('.floatingContainer').hover(function(){
  //$('.subActionButton').addClass('display');
}, function(){
  $('.subActionButton').removeClass('display');
  $('.actionButton').removeClass('open');
});
$('.subActionButton').hover(function(){
  $(this).find('.floatingText').addClass('show');
}, function(){
  $(this).find('.floatingText').removeClass('show');
});

$('.actionButton').hover(function(){
  $(this).addClass('open');
  $(this).find('.floatingText').addClass('show');
  $('.subActionButton').addClass('display');
}, function(){
  $(this).find('.floatingText').removeClass('show');
});