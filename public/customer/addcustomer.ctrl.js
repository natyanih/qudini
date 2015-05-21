( function () {
	'use strict';

	function Customer ( $scope, $http ) {
		var self = this;
		self.disabled = true;

		self.products = [
			{ 'name' : 'Grammatical advice' },
			{ 'name' : 'Magnifying glass repair' },
			{ 'name' : 'Cryptography advice' }
		];

		function activate () {
			console.log( 'Customers list activated.' );
		}

		function setDisabled () {
			if ( self.name.length && self.product && self.product.name.length ) {
				self.disabled = false;
			}
		}

		function addCustomer () {

			var data = {
				'name' : self.name,
				'product' : {
					'name' : self.product.name
				}
			};

			$http( {
				url: '/api/customer/add',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				data: data
			} ).then( function ( res ) {
				self.name     = '';
				self.disabled = true;

				console.log( res.data );

				$http.get( '/api/customers').then( function( data ) {
					$scope.customers = data.data;
				} );
			} );

		}

		self.setDisabled = setDisabled;
		self.addCustomer = addCustomer;

		activate();
	}

	angular
		.module( 'app' )
		.controller( 'AddCustomerCtrl', Customer );

	Customer.$inject = [ '$scope', '$http' ];
} )();
