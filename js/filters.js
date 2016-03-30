'use strict';

app.filter('myFilter', [
    function() {
        var filter = function(data) {
            return data;
        };

        return filter;
    }
]);
