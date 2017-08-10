class dataFactory {
    constructor($http) {
    	this.$http = $http;
    	this.urlBase = 'http://57c64baac1fc8711008f2a82.mockapi.io/Cart';
    	this.dataFactoryData = {};
    }
    
    getCustomers($http) {
        this.dataFactoryData = $http.get(this.urlBase).$$state;
        
        return this.dataFactoryData;
    }
    getData() {
    	this.dataFactory = $http.get(this.urlBase).$$state;
        return this.dataFactory//$http.get(this.urlBase).$$state;
    }
}

/*function dataFactory($http) {

    var urlBase = 'http://57c64baac1fc8711008f2a82.mockapi.io/Cart';
    var dataFactory = {};

    dataFactory.getCustomers = function () {
        return $http.get(urlBase).then(function(res){
        	console.log(res.data)
        });
    };

    /*dataFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    dataFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    dataFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };*/
/*
    return dataFactory;
}*/
export { dataFactory }