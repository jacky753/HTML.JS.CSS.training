(function(){
    'use strict';
    var age = 16;
    var isFemale = 'Female';
    var fee = 0;
    if (age <= 15) {
        fee = 800;   
    } else if (isFemale = 'Female') {
            fee = 1000;
    } else {
        fee = 1800;
    }
    document.write(fee + "円");
})();