// app.factory('crudFactory',function () {
app.factory('crudFactory',function ($http) {

   /* var icecreamFactory =[
        {
            name:'igloo',
            address:'nganj',
            price: 20
        },
        {
            name:'polar',
            address:'barisal',
            price:15
        },
    ];*/


   /* function getIcecream() {

        return icecreamFactory;
    }*/

    function getIcecream() {

        return $http.get('/angular-crud/app/data/data.json');
    }

    return {
        getIcecreammm:getIcecream
    }
});