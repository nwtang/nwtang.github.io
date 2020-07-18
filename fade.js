(function() {

    var titles = $(".titles");
    var titleIndex = -1;
    
    function showNextQuote() {
        ++titleIndex;
        titles.eq(titleIndex % titles.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();