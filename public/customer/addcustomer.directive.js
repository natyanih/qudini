( function () {
	'use strict';

	function customer () {

		function link () {
		}

		var directiveData = {
			'restrict'     : 'E',
			'templateUrl'  : '/customer/addcustomer.html',
			'controller'   : 'AddCustomerCtrl',
			'controllerAs' : 'vm',
			'link'         : link,
			'scope'        : {
				'customers' : '=',
				'onAdded'   : '&'
			}
		};

		return directiveData;
	}

	angular
		.module( 'app' )
		.directive( 'addCustomer', customer );

	customer.$inject = [];
} )();
