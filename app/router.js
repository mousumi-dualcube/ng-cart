// Templates
import HeaderTemplate from './templates/header/header.html'
import FooterTemplate from './templates/footer/footer.html'
import HomeTemplate from './templates/home/home.html'
import AboutTemplate from './templates/about/about.html'
import ShopTemplate from './templates/shop/shop.html'
import CheckoutTemplate from './templates/checkout/checkout.html'

/* @ngInject */
function Router($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/");
    var header = {
      templateUrl: HeaderTemplate,
      controller: "HeaderCtrl as header"

    }
     var footer = {
      templateUrl: FooterTemplate,
      controller: "FooterCtrl as footer"

    }
   $stateProvider
       .state('home', {
           url: "/",
           views: {
                header: header,
                content: {
                   controller : "HomeCtrl as home",
                   templateUrl: HomeTemplate
                },
                footer: footer
            }
       })
       .state('shop', {
           url: "/shop",
           views: {
                header: header,
                content: {
                   controller : "ShopCtrl as shop",
                   templateUrl: ShopTemplate
                },
                footer: footer
            }
       })
       .state('about', {
           url: "/about",
           views: {
                header: header,
                content: {
                    controller : "AboutCtrl as about",
                    templateUrl: AboutTemplate
                },
                footer: footer
            }
       })
       .state('checkout', {
           url: "/checkout",
           views: {
                header: header,
                content: {
                   controller : "CheckoutCtrl as checkout",
                   templateUrl: CheckoutTemplate
                },
                footer: footer
            }
       });
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

export { Router }
