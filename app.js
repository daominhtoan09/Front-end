var app = angular.module('app', ["ngTable"]);




app.controller('Datetimepicker', function ($scope, NgTableParams) {
  $scope.item = {};
  $scope.lstItem = [{ network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "1", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "2", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "2", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "2", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "2", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "2", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "2", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "2", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "2", createDate: "30-10-2019 14:10:37", number: "23" },
  { network: "2", createDate: "30-10-2019 14:10:37", number: "23" }];

  $scope.save = function (item) {
    console.log(item);
    $scope.lstItem.push(item);
    $scope.item = {};
  }

  var self = this;
  $scope.tableParams = new NgTableParams({
    page: 1,            // show first page
    count: 10           // count per page
  }, {
    total: $scope.lstItem.length, // length of data
    getData: function ( params) {
      // data = $scope.lstItem.slice((params.page() - 1) * params.count(), params.page() * params.count());
     return $scope.lstItem.slice((params.page() - 1) * params.count(), params.page() * params.count());
    }
  });

});