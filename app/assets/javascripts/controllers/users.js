$(document).on('ready page:load', function() {
  $('.submenu').hide();

  $('.maps-trigger').bind('click', function(e) {
    $('.graphPage').hide();
    $('.globe').hide();
    $('#chart-box').hide();
    $('.maps-submenu').show('fast');
    // apply the toggle to the ul
    $(this).parent().toggleClass('is-expanded');
    e.preventDefault();
  });

  $('.graphs-trigger').bind('click', function(e) {
    $('.graphPage').show();
    $('.globe').hide();
    $('#chart-box').show();
    $('.submenu').hide()
    $('.map').css("height", '0px');
    $('#map_edu').css("height", '0px');
    $('#map_trans').css("height", '0px');
    $('#map_inc').css("height", '0px');
    $('#map_shelter').css("height", '0px');
    $('#map_pop').css("height", '0px');
    e.preventDefault();
  });


  $('.maps-menu a').click(function() {

    $('.maps-menu .active').removeClass('active'); // remove the class from the currently selected
    $(this).addClass('active'); // add the class to the newly clicked link

  });



});
