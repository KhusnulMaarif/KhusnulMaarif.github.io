$(document).ready(function() {
  var currentSection = 0;
  $('#hasil').hide();
  $('#menu li a').click(function() {       
      $('#menu li a').removeClass('run');
      $(this).addClass('run');
      var href = $(this).attr('href');
      $('#naruto>div').hide();
      $(href).show();
      if(currentSection == 0){
          $('#hasil').slideToggle(200);
          currentSection = href;
      }else if(currentSection == href){
           $('#hasil').slideToggle(200);
           currentSection = 0;    
      }else{
          currentSection = href;
      }
      return false;
  });
});