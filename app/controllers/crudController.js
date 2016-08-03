

    app
        .controller('crudController',function ($scope, crudFactory) {
        
            // $scope.icecreams = crudFactory.getIcecreammm();
            $scope.icecreams ;
            // $scope.sala = {};
                $scope.addIcream = {};
            $scope.addNew = function (addIcream) {
                $scope.icecreams.push(addIcream);
                // $scope.sala = addIcream;
                // $scope.icecreams = {};
            }
            
            $scope.editIcecream = function (icecream) {
                $scope.editItem = true;
                $scope.editIcecream = icecream;

            }
            $scope.saveChange = function () {
                $scope.editIcecream = {};
                $scope.editItem = false;


            }

            crudFactory.getIcecreammm().success(function(data){
                $scope.icecreams = data;

            }).error(function(error){
                console.log(error);
            });
            // $scope.showMessage = true;
            $scope.sayHello = function () {
                
                $scope.showMessage = !$scope.showMessage;
            }


    });