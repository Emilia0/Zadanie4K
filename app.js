(function () {
    var app = angular.module('fundProfit',['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'html/main.html'
            })
            .state('compare', {
                url: '/compare',
                templateUrl: 'html/compare.html'
            });

    });

    //app.config(["$locationProvider", function ($locationProvider) {
    //    $locationProvider.html5Mode(true);
    //}]);

    app.controller('DataController', ['$scope','$location', function($scope, $location){

        var datepicker = $('.datepicker').datepicker({
            weekStart: 1,
            autoclose: true,
            format: "dd/mm/yyyy",
            endDate: '12/05/2016',
            startDate: '08/01/1998'
        })
            .on('changeDate', function () {
            date1 = $("#date1").val();
            date2 = $("#date2").val();
        });

        $scope.goCompare = function(){
            $location.url('/compare');
        };


    }]);

    //$.ajax({
    //    type: "GET",
    //    url: "data/data.json",
    //    dataType: "json",
    //    error: function () {
    //        console.log('Opps error');
    //    },
    //    success: function (response) {
    //         var myArray = [
    //            "05/01/1998",
    //            "06/01/1998",
    //            "07/01/1998",
    //
    //
    //        var firstDate = myArray[11];
    //
    //        console.log(response);
    //        //dateArray.push(Object.getOwnPropertyNames(response));
    //
    //        var value = (response["01/01/1998"]);
    //
    //        console.log(value)
    //    }
    //});

//    To do List:

//    1. Wybór dwóch dat - datepicker
//    2. Lista dni pomiędzy datami - zapisana w tablicy
//    3. Użyć wszystkich pozycji z tablicy jako property names i stworzyć listę wartości w drugiej tablicy
//    4. Dla dat, których nie ma w jsonie - wartości z dnia poprzedniego (lub jeszcze wcześniejszego).
//    5. Przeliczyć wartości z drugiej tablicy na zysk, zapisać w trzeciej tablicy.
//    6. Wykres - tablica zysku, labels tablica z datami.




})();