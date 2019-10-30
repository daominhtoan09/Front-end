app.directive('jqdatepicker', function () {
    return {
      restrict: 'A',
      scope: true,
      require: 'ngModel',
      link: function (scope, element, attrs, Datetimepicker) {
        $(element).datetimepicker({     
          format: 'd-m-Y',
          timepicker: false,
          onChangeDateTime: function (ct) {
            scope.item.createDate = $(element).val();
          }
        });
  
      }
    };
  });