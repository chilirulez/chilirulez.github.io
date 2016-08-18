$(document).ready(function() {
    var leftBut = $('.feedback__button_prev');
    var rightBut = $('.feedback__button_next');
    var elementsList = $('.feedback__entire');
 
    var pixelsOffset = 415;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;
 
    leftBut.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 415;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }    
    });
 
    rightBut.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 415;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }     
    });
 
});