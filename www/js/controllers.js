var app = angular.module('app.controllers', ['ionic', 'ngCordova', 'ngMaterial']) //, 'ja.qr', 'ngMessages', ''material.svgAssetsCache', '$scope', '$stateParams', , 

/*==========================================
=            Controller for App            =
==========================================*/
app.controller('AppCtrl', function($scope, $timeout, $stateParams) {

})

/*===========================================
=            Controller for Home            =
===========================================*/
app.controller('HomeCtrl', function($scope, $stateParams) {
    $scope.title = 'QR School';
})

/*=============================================================
=            Controller for Device Especifications            =
=============================================================*/
app.controller('deviceCtrl', function($scope, $cordovaDevice) {

        $scope.title = 'Informações do Dispositivo';

        //$scope.getDevice = function(){
			//var device = $cordovaDevice.getDevice();
			$scope.cordova = $cordovaDevice.getCordova();
			$scope.m = $cordovaDevice.getModel();
			$scope.f = device.manufacture;
			$scope.p = $cordovaDevice.getPlatform();
			$scope.uuid = $cordovaDevice.getUUID();
			$scope.v = $cordovaDevice.getVersion();
		//}
		
    })
    /*=============================================
    =            Controller for signup            =
    =============================================*/
app.controller('Signup', function($scope, $stateParams) {})

/*=============================================
=            Controller for search            =
=============================================*/
app.controller('SearchCtrl', function($scope, $stateParams) {})
    /*====================================================================
    =            Controller for Scan of the qr code vs alunos            =
    ====================================================================*/
app.controller('ScanCtrl', function($scope, $cordovaBarcodeScanner, $cordovaDialogs, $cordovaVibration) {
    $scope.title = 'Confirmar Presença';
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
            $cordovaVibration.vibrate(200);
            alert(console.log("An error happened -> " + imageData.format));
        }, function(error) {
            alert(console.log("An error happened -> " + error));
        });
    };
    /*document.addEventListener("deviceready", function() {
        $scope.scanBarcode = function() {
            $cordovaBarcodeScanner.scan().then(function(imageData) {
                //alert(imageData.text);
                console.log("Barcode Format -> " + imageData.format);
                console.log("Cancelled -> " + imageData.cancelled);
                $cordovaVibration.vibrate(200);
            }, function(error) {
                alert(console.log("An error happened -> " + error));
            });
        };*/
    // NOTE: encoding not functioning yet
    /*$cordovaBarcodeScanner
        	.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
        	.then(function(success) {
        		// Success!
        	}, function(error) {
        		// An error occurred
        	});
        }, false);*/
})

/*===============================================
=            Controller for scanning            =
===============================================*/
app.controller('dashStudentCtrl', function($scope, $stateParams) {
        cordova.plugins.barcodeScanner.scan(
            function(result) {
                alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
            },
            function(error) {
                alert("Scanning failed: " + error);
            }, {
                "preferFrontCamera": true, // iOS and Android
                "showFlipCameraButton": true, // iOS and Android
                "prompt": "Place a barcode inside the scan area", // supported on Android only
                "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                "orientation": "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
            }
        );
    })
    /*=====  End of Controller for scanning  ======*/


/*============================================
=            Controller for Login            =
============================================*/
app.controller('LoginCtrl', function($scope, $stateParams) { //, $timeout, $ionicMaterialMotion, $ionicLoading, $cordovaDialoge
        /*$scope.loading = function() {
            $ionicLoading.show({
                template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
            });

            // For example's sake, hide the sheet after two seconds
            $timeout(function() {
                $ionicLoading.hide();
            }, 2000);
        };*/
        $scope.auth = function($scope) {

            var a = $('input');

            if (a[0].value == '1234' && a[1].value == '1234') {
                $scope.go("/app/home");
                //alert('Entrou', '', 'Sucesso', 'Ok');
            }
            if (a[0].value == '' || a[1].value == '') {
                alert('Os campos devem ser preenchidos', '', 'Erro', 'Tentar novamente');
            } else {

            }
        };
        logar = function() {
            $scope.go("/app/cadastro");
            //$scope.window.location.href = 'app/cadastro.html';
        };
        //$scope.go("/app/cadastro");
        //$scope.window.location.href = 'app/cadastro.html';
    })
    /*========================================
    =            DASH FOR STUDENT            =
    ========================================*/
app.controller('dashStudentCtrl', function($scope, $stateParams) {})
    /*=====  End of DASH FOR STUDENT  ======*/

app.controller('generateQRCtrl', function($scope, $stateParams) {
        /*Gerar o código com
         * type number
         *- supported are all levels **1-40**
         *- use **0** for the lowest complexity*
         *
         *## correction 
         *- Integer **1** - Level L (Low)
         *- Integer **0** - Level M (Medium)*            
         *- Integer **3** - Level Q (Quartile)
         *- Integer **2** - Level H (High)
         
         *## input mode 
         *- `NUMBER`: *0, 1, 2, 3, 4, 5, 6, 7, 8, 9*
         *- `ALPHA_NUM`: *0–9, A–Z (upper-case only), space, $, %, *, +, -, ., /, :*
         *- `8bit` (default): *[ISO 8859-1](http://en.wikipedia.org/wiki/ISO_8859-1)*
         */

        /*var typeNumber = $scope.typeNumber;
         *var correction = $scope.correction;
         */ //var inputMode = $scope.inputMode;

        var qr = new QRCode(typeNumber, correction, inputMode);
        qr.addData(text);
        qr.make();
    })
    /*=====================================
    =            TESTE NG-MENU            =
    =====================================*/
app.controller('ngMenuCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function() {
        return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler(navID) {
        return function() {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function() {
                    $log.debug("toggle " + navID + " is done");
                });
        }
    }
})
app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
            .then(function() {
                $log.debug("close LEFT is done");
            });

    };
})
app.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('right').close()
            .then(function() {
                $log.debug("close RIGHT is done");
            });
    };
});
/**
	Copyright 2016 Google Inc. All Rights Reserved. 
	Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
	**/

/*=====  End of TESTE NG-MENU  ======*/

/*==========================================
=            Controller for map            =
==========================================*/
app.controller('MapCtrl', function($scope, $ionicLoading, $cordovaGeolocation) {
        $scope.title = 'Localização';

        $scope.mapCreated = function(map) {
            $scope.map = map;
            //$scope.centerOnMe();
        };

        $scope.centerOnMe = function() {
            console.log("Centralizando o mapa");
            if (!$scope.map) {
                return;
            }

            navigator.geolocation.getCurrentPosition(function(pos) {
                console.log('Got pos', pos);
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            }, function(error) {
                alert('Unable to get location: ' + error.message);
            });
        };
})
    /*Mapa 2*/
/*app.controller('Map2Ctrl', function($scope, $ionicLoading, $cordovaGeolocation) {
        $scope.title = 'Localização2';

        var posOptions = {
            timeout: 10000,
            enableHighAccuracy: false
        };
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude
            }, function(err) {
                // error
            });


        var watchOptions = {
            timeout: 3000,
            enableHighAccuracy: false // may cause errors if true
        };

        var watch = $cordovaGeolocation.watchPosition(watchOptions);
        watch.then(
            null,
            function(err) {
                // error
            },
            function(position) {
                var lat = position.coords.latitude
                var long = position.coords.longitude
            });


        watch.clearWatch();
        // OR
        $cordovaGeolocation.clearWatch(watch)
            .then(function(result) {
                // success
            }, function(error) {
                // error
            });
    })*/
    /*===== Mapa 3 ======*/
/*app.controller('Map3Ctrl', function($scope, $ionicLoading, $cordovaGeolocation) {
    $scope.title = 'Localização2';

    $scope.initMap = function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: {
                lat: -34.397,
                lng: 150.644
            }
        });
    }
})*/



/*=====  End of Controller for map  ======*/



/*----------  Controller for connectionCtrl  ----------*/
app.controller('connectionCtrl', function($scope, $log, $stateParams, $cordovaNetwork, $rootScope) {

    var type = $cordovaNetwork.getNetwork()

    var isOnline = $cordovaNetwork.isOnline()

    var isOffline = $cordovaNetwork.isOffline()


    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
        var onlineState = networkState;
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
        var offlineState = networkState;
    })

    /*$scope.checkConnection = function($scope) {
            var netWorkState = navigator.connection.type;

            var states = {};

            states[Connection.UNKNOWN] = 'Online';
            states[Connection.ETHERNET] = 'Ethernet';
            states[Connection.WIFI] = 'WiFi';
            states[Connection.CELL_2G] = '2G';
            states[Connection.CELL_3G] = '3G';
            states[Connection.CELL_4G] = '4G';
            states[Connection.CELL] = 'Genérica';
            states[Connection.NONE] = 'Offline';

            //alert('Conexão: ' + states[netWorkState], '', '', 'OK');
        }
        //checkConnection();

    //caso offline
    //--document.addEventListener("offline", onOffline, false);

    function onOffline() {
        // Handle the offline event 
        console.log("lost connection");
    }

    //caso online
    //--document.addEventListener("online", onOnline, false);

    function onOnline() {
        // Handle the online event 
        var networkState = navigator.connection.type;

        if (networkState !== Connection.NONE) {
            if (dataFileEntry) {
                tryToUploadFile();
            }
        }
        display('Connection type: ' + networkState);
    }*/
});
/*---------- End for Controller for  ----------*/