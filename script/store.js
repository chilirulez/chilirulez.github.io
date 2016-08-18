$(document).ready(function() {
    var leftBut = $('.store__button_prev');
    var rightBut = $('.store__button_next');
    var elementsList = $('.store__entire');
 
    var pixelsOffset = 417;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;
 
    leftBut.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 417;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }    
    });
 
    rightBut.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 417;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }     
    });
 
});