(function() {

    var titles = $(".titles");
    var titleIndex = -1;
    
    function showNextQuote() {
        ++titleIndex;
        titles.eq(titleIndex % titles.length)
            .fadeIn(1000)
            .delay(1000)
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
    
})();