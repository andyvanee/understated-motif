$(function(){
  $("#toggleColor").click(function(){
    $('.swatch').css('background-color', randomColor());
  });

  var setColor = function(ev){
    var h = $('input[name="h"]').val(),
        s = $('input[name="s"]').val(),
        l = $('input[name="l"]').val(),
        b = $('input[name="b"]').val(),
        col = 'hsl('+h+','+s+'%,'+l+'%)';

    $('.swatch').css('background-color', col);

    if ($(ev.currentTarget).attr('name') == 'b') {
      $('body').css('background-color', 'hsl(0,0%,'+b+'%)').toggleClass('active');
    }
  }

  var setCSS = function(){
    var col = $('.swatch.active').css('background-color'),
        bg = $('.swatch.active').css('background-image');

    $('.current-color').text(col);

    if (bg) {
      bg = /img\/.*/.exec(bg)[0];
      $('.current-bg').text(bg);
    }
  }

  $(".colors").change(setColor);

  $('input[name="b"]').trigger('change');

  $('.swatch').click(function(){
    $(this).toggleClass('active');
    setCSS();
  });
});
