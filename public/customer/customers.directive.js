( function () {
	'use strict';

	function customers () {

		function link () {

		}

		var directiveData = {
			'restrict'     : 'E',
			'templateUrl'  : '/customer/customers.html',
			'controller'   : 'CustomersCtrl',
			'controllerAs' : 'vm',
			'link'         : link,
			'scope'        : {
				'customers' : '=',
				'customersServed' : '=',
				'queue' : '='
			}
		};

		return directiveData;
	}

	angular
		.module( 'app' )
		.directive( 'customers', customers );

	customers.$inject = [];
} )();
