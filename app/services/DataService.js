
class DataService {
    
    constructor($state, $http) {
    	this.$state = $state;
    	this.$http = $http;
        this.mm = {
				    "projectTitle" : "My Website Title",
				    "links" : [
				        {"name" : "Home", "url" : "home", "className" : ""},
				        {"name" : "About", "url" : "about", "className" : ""},
				        {"name" : "Shop", "url" : "shop", "className" : ""},
				        {"name" : "Checkout", "url" : "checkout", "className" : ""}
				    ]
				};
		this.dd = $http.get('http://57c64baac1fc8711008f2a82.mockapi.io/Cart').then(function(res){
		        	console.log(res.data)
		        });
		
    }
    getFullName() {
        return $http.get('http://57c64baac1fc8711008f2a82.mockapi.io/Cart').then(function(res){
		        	console.log(res.data)
		        });
    }
}

export { DataService }