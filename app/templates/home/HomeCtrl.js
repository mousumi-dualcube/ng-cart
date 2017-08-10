import img from '../../images/image1.jpg'
import './index.css'
//import '../../js/carousel.js'
class HomeCtrl {
    constructor($state) {
        this.$state = $state;
        this.message = 'Angular with Webpack and Babel!1';
        this.img = img;
    }
}

export { HomeCtrl }
