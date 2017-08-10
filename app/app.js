import angular from 'angular';
import uirouter from 'angular-ui-router';
// Custom
import { Router } from './router';
import { HomeCtrl } from './templates/home/HomeCtrl';
import { AboutCtrl } from './templates/about/AboutCtrl';
import { ShopCtrl } from './templates/shop/ShopCtrl';
import { CheckoutCtrl } from './templates/checkout/CheckoutCtrl';
import { HeaderCtrl } from './templates/header/HeaderCtrl';
import { FooterCtrl } from './templates/footer/FooterCtrl';

import { HeaderDirective } from './directives/headerDir';
import { DataService } from './services/DataService';
import { dataFactory } from './services/dataFactory';
(function(angular) {
  'use strict';
	// Vendors

	angular.module('angularWebpack', [uirouter])
		.config(Router)
		.controller('HomeCtrl', HomeCtrl)
		.controller('AboutCtrl', AboutCtrl)
		.controller('ShopCtrl', ShopCtrl)
		.controller('CheckoutCtrl', CheckoutCtrl)
		.controller('HeaderCtrl', HeaderCtrl)
		.controller('FooterCtrl', FooterCtrl)
		.factory('dataFactory', ['$http', () => new dataFactory])
		.directive("headerDirective", () => new HeaderDirective)
		.service('DataService', ['$http', () => new DataService]);
})(window.angular);