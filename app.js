(function () {
    //var app = angular.module('fundCompare',[]);

    $.ajax({
        type: "GET",
        url: "data/data.json",
        dataType: "json",
        error: function() {
            console.log('Opps error');
        },
        success: function(response){
            var dateArray = [];

            //console.log(response);
            dateArray.push(Object.getOwnPropertyNames(response));
            //console.log(dateArray.length);
        }
    })





})();