    app.controller('ChartController', ['$scope','$http', function ($scope, $http) {
            
        var date1;
        $scope.date1 = date1;
        var date2;
        $scope.date2 = date2;
        
        var dateArray = [];
        var dataArray = [];
        var allData = {};
        $scope.allData = allData;
   
        $scope.drawChart = function() {
            var lineChartData = {
            labels: dateArray,
            datasets: [{
                label: "My First dataset",
                fillColor: "rgba(77, 145, 228, 0.27)",
                strokeColor: "rgba(18, 89, 175, 0.51)",
                pointColor: "rgb(228, 15, 122)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: dataArray
                }]
            };
                   
        var chartOptions = {
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: false,
            bezierCurveTension: 0.4,
            pointDot: false,
            pointDotRadius: 1,
            pointHitDetectionRadius: 1,
            animationSteps: 1,
            animationEasing: "easeOutQuart",
            showXLabels: 10,
            responsive: true,
            showTooltips: true,
            tooltipFillColor: "rgb(9, 102, 163)"
            };            
            var ctx = document.getElementById("myCanvas").getContext("2d");
            window.myLine = new Chart(ctx).Line(lineChartData, chartOptions);
        };        

        var datepicker = $('.datepicker').datepicker({
            weekStart: 1,
            autoclose: true,
            format: "yyyy-mm-dd"
//          endDate: '2015-12-31',
//          startDate: '2000-01-03'
            }).on('changeDate', function () {
                date1 = new Date($("#date1").val());
                date2 = new Date($("#date2").val());
            });
            
        $scope.getDateRange = function (firstDate, lastDate) {
            Date.prototype.addDays = function (numberOfDays) {
                this.setDate(this.getDate() + parseInt(numberOfDays));
                return this;
            };           
            Date.prototype.yyyymmdd = function () {
                var yyyy = this.getFullYear().toString();
                var mm = (this.getMonth() + 1).toString();
                var dd = this.getDate().toString();
                return yyyy +"-"+(mm[1] ? mm : "0" + mm[0])+"-" + (dd[1] ? dd : "0" + dd[0]);
            };               
            dateArray = [];                
            while (firstDate <= lastDate) {
                dateArray.push((new Date(firstDate)).yyyymmdd());
                firstDate = firstDate.addDays(1);
            }
            return dateArray;            
        };
                
        $scope.getData = function() {
            return $http.get('../data/nyse_adv.json').then(function success(response){
                allData = response.data;
                return $scope.alldata;
            }, function error(response) {
                console.log('Ooops sth went wrong'+ response);
            }); 
        };
        
        $scope.getDataArray = function() {
            $scope.getData().then(function() {
                dataArray = [];
                var arrayLength = dateArray.length;
                
                for (var i = 0; i < arrayLength; i++) {
                    var val = allData[dateArray[i]];
                        if (val !== undefined){
                        var singleValue = val;
                        }
                        else {
                            val = allData[dateArray[i-1]];
                            if (val !== undefined){
                                var singleValue = val;
                            }
                            else {
                                val = allData[dateArray[i-2]];
                                if(val !== undefined) {
                                    var singleValue = val;
                                }
                                else {
                                    val = allData[dateArray[i-3]];
                                    var singleValue = val;
                                }                                                           
                            }
                        }
                    
                    dataArray.push(singleValue);
                }
                return dataArray;                                         
            }).then(function(){
                 $scope.drawChart();
            });                    
        };
                    
        $scope.test = function () {
            $scope.getDateRange(date1, date2); 
            $scope.getDataArray(); 
           
                      
        };


    }]);
