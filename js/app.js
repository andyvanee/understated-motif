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
    $('.currentColor').text(col);
    if ($(ev.currentTarget).attr('name') == 'b') {
      $('body').css('background-color', 'hsl(0,0%,'+b+'%)').toggleClass('active');
    }
  }

  $('.toggleBG').click(function(){
    $('body').toggleClass('light').toggleClass('dark');
  })

  $(".colors").change(setColor);
  $('input[name="b"]').trigger('change');

  $('.swatch').click(function(){
    $(this).toggleClass('active');
  });
});
