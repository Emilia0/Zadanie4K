(function () {
    //var app = angular.module('fundCompare',[]);

    $.ajax({
        type: "GET",
        url: "data/data.json",
        dataType: "json",
        error: function () {
            console.log('Opps error');
        },
        success: function (response) {
             var myArray = [
                "05/01/1998",
                "06/01/1998",
                "07/01/1998",
                "08/01/1998",
                "09/01/1998",
                "12/01/1998",
                "13/01/1998",
                "14/01/1998",
                "15/01/1998",
                "16/01/1998",
                "19/01/1998",
                "20/01/1998",
                "21/01/1998",
                "22/01/1998",
                "23/01/1998",
                "26/01/1998",
                "27/01/1998",
                "28/01/1998",
                "29/01/1998",
                "30/01/1998"];

            var firstDate = myArray[11];

            console.log(response);
            //dateArray.push(Object.getOwnPropertyNames(response));

            var value = (response["01/01/1998"]);

            console.log(value)
        }
    });

//    To do List:

//    1. Wybór dwóch dat - datepicker
//    2. Lista dni pomiędzy datami - zapisana w tablicy
//    3. Użyć wszystkich pozycji z tablicy jako property names i stworzyć listę wartości w drugiej tablicy
//    4. Dla dat, których nie ma w jsonie - wartości z dnia poprzedniego (lub jeszcze wcześniejszego).
//    5. Przeliczyć wartości z drugiej tablicy na zysk, zapisać w trzeciej tablicy.
//    6. Wykres - tablica zysku, labels tablica z datami.




})();