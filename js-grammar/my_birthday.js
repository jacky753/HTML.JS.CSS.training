(function(){
    'use strict';
    var myBirthTime = new Date(1996, 12, 13, 23, 55);
    function updateParagraph(){
        var now = new Date();
        var day = (now.getTime() - myBirthTime.getTime()) / 1000 / (24 * 60 * 60);
        
        document.getElementById('birth-time').innerText = '生まれてから' + day + '日経過。　';
    }
    setInterval(updateParagraph, 50);
})();