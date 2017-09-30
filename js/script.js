
// Search input function
$(function() {
  $('.srch-button').click(function(){
    var $wrapper = $('.srch-wrapper'),
        isOpen = $wrapper.hasClass('open');
    $wrapper.toggleClass('open')
      .find('.srch-input')[isOpen ? 'blur' : 'focus']();
    // remove this - onyl for demo
    return false;
  });

})
