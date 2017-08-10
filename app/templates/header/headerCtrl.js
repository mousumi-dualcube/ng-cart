import "./index.css"
class HeaderCtrl {
    constructor($scope, $http, dataFactory) {
    	var tt = [];
        this.$scope = $scope;
        this.$http = $http;
        this.message = "dataFactory.getCustomers()";
        this.data = ["Home", "Shop", "Cart", "Checkout"];
        
        var nav = dataFactory.getCustomers(this.$http);
    	//this.links = dataFactory.getCustomers().links;
    	var navData = [];
    	this.navFn = function(){
    		console.log(nav)
    		if(nav.status==1) {
    			navData = nav.value.data;
    		} else {
				console.log("Out")
    		}
    		return nav.status
    	}
    	this.navData = navData;
    	console.log(this.navData)
		this.$scope.$watch(() => this.navFn(), function (newValue, oldValue) {
			console.log(newValue, oldValue);
		});
    }
    coolNumberChanged (newValue, oldValue) {
        return () => {
            //this.numberLover.itHasChanged(newValue, oldValue);
            console.log(newValue, oldValue);
        };
    }
}
HeaderCtrl.$inject = ['$scope', '$http', 'dataFactory'];
export { HeaderCtrl }
