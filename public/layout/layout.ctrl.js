( function () {
	'use strict';

	function Layout ( $scope, $http ) {
		var self   = this;
		self.title = 'Layout';

		self.customers = [];
        self.customersServed = [];

        function getServedCustomers () {
            return $http.get('/api/customers/served').then(function(res){
                $scope.customersServed = res.data;
            })
        }

        function getCustomers () {
        	console.log( 'getting customers' );

            return $http.get('/api/customers').then(function(res){
                $scope.customers = res.data;
            })
        }

       	function activate () {
			console.log( self.title + ' loaded!' );

			getCustomers();
			getServedCustomers();
		}

        self.getCustomers       = getCustomers;
        self.getServedCustomers = getServedCustomers;

		activate();
	}

	angular
		.module( 'app.layout' )
		.controller( 'Layout', Layout );

	Layout.$inject = [ '$scope', '$http' ];

} )( );
