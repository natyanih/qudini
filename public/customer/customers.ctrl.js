( function () {
	'use strict';

	function Customers ( $scope, _, $http ) {
		var self = this;

		function queuedTime ( customer ) {
			return new Date() - new Date( customer.joinedTime );
		}

		function serveCustomer( customer ) {
			$scope.customersServed.push( customer );
			$scope.customers = _.without( $scope.customers, customer );

			// persist to DB
			// TODO: catch errors
			$http( {
                'method' : 'POST',
                'url'    : '/api/customer/serve',
                'params' : { 'id' : customer.id }
            } ).then( function ( res ) {
                console.log( res );
            } );
		}

		function deleteCustomer( customer ) {
			$scope.customers = _.without( $scope.customers, customer );

			// persist to database
			// TODO: catch errors
            $http( {
                'method' : 'DELETE',
                'url'    : '/api/customer/remove',
                'params' : { 'id' : customer.id }
            } ).then( function ( res ) {
                console.log( res );
            } );

		}

		function activate () {
			console.log( 'Customers list activated.' );
		}

		activate();

		self.queuedTime     = queuedTime;
		self.serveCustomer  = serveCustomer;
		self.deleteCustomer = deleteCustomer;
	}

	angular
		.module( 'app' )
		.controller( 'CustomersCtrl', Customers );

	Customers.$inject = [ '$scope', '_', '$http' ];
} )();
