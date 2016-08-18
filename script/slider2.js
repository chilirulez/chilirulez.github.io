$(function() {      
  var slider = $('.slider__wrap'),
    sliderContent = slider.html(),                      
    slideWidth = $('.slider__box').outerWidth(),         
    slideCount = $('.slider__wrap img').length,               
    prev = $('.slider .slider__button_prev'),                     
    next = $('.slider .slider__button_next'),                      
    sliderInterval = 3300,                            
    animateTime = 1000,                               
    course = 1,                                       
    margin = - slideWidth;                            
 
  $('.slider__wrap img:last').clone().prependTo('.slider__wrap');  
  $('.slider__wrap img').eq(1).clone().appendTo('.slider__wrap');    
  $('.slider__wrap').css('margin-left', -slideWidth);         
 
  function nextSlide(){                                 
    interval = window.setInterval(animate, sliderInterval);
  }
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     
      slider.css({'marginLeft':-slideWidth});           
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              
    margin = margin - slideWidth*(course);              
    }
    slider.animate({'marginLeft':margin},animateTime);  
  }
 
  function sliderStop(){                                      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = -1;                                        
    animate();                                          
    course = course2 ;                                  
  });
  next.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = 1;                                         
    animate();                                          
    course = course2 ;                                  
  });
 
  slider.add(next).add(prev).hover(function() {         
    sliderStop();                                       
  }, nextSlide);                                        
 
  nextSlide();                                          
});