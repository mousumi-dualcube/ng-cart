import headerTemp from '../templates/header/header.html';

class HeaderDirective {
    constructor() {
        this.restrict = 'A'
        this.templateUrl = headerTemp
        this.scope = {}
    }

    controller($scope, $state) {
        $scope.state = $state;
        console.log("kk")
    }

    link(scope, element, attrs) {
        console.log('state', scope.state)
    }
    
}

export { HeaderDirective }