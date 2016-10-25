var app = angular.module('app.controllers', ['ionic', 'ngCordova', 'ngMaterial', 'ngMessages', ]) //, 'ja.qr', 'ngMessages', ''material.svgAssetsCache', '$scope', '$stateParams', , 

/*==========================================
=            Controller for App            =
==========================================*/
app.controller('AppCtrl', function($scope, $timeout, $stateParams) {})

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

        //document.addEventListener("deviceready", function() {

            var device = $cordovaDevice.getDevice();

            var cordova = $cordovaDevice.getCordova();

            var model = $cordovaDevice.getModel();

            var platform = $cordovaDevice.getPlatform();

            var uuid = $cordovaDevice.getUUID();

            var version = $cordovaDevice.getVersion();

            $scope.device = device;
            $scope.cordova = cordova;
            $scope.model = model;
            $scope.platform = platform;
            $scope.uuid = uuid;
            $scope.version = version;
            $scope.fabricante = 'Bruno Leone';

        //}, false);

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
        /*$cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
            $cordovaVibration.vibrate(200);
            alert(console.log("An error happened -> " + imageData.format));
        }, function(error) {
            alert(console.log("An error happened -> " + error));
        });*/
        cordova.plugins.barcodeScanner.scan(
            function(result) {
                alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
                $cordovaVibration.vibrate(200);
            },
            function(error) {
                alert("Scanning failed: " + error);
            }, {
                "preferFrontCamera": false, // iOS and Android
                "showFlipCameraButton": true, // iOS and Android
                "prompt": "Place a barcode inside the scan area", // supported on Android only
                "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                "orientation": "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
            }
        );
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
                navigator.notification.alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
            },
            function(error) {
                navigator.notification.alert("Scanning failed: " + error);
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

        $scope.logar = function($scope) {

            var a = $('input');
            var b = $('md-radio-button');
            var done = false;
            var acesso = 0;

            if (b[0]) {}

            if (a[0].value == '1234' && a[1].value == '1234') {
                //$scope.go("/app/home");
                //alert('Entrou', '', 'Sucesso', 'Ok');
                acesso = 1;
                $scope.go("/app/home");
                done = 1;

            } else if (a[0].value == '' || a[1].value == '') {
                function alertDismissed() {
                    // do something
                }
                navigator.notification.alert(
                    'Os campos devem ser preenchidos!', // message
                    alertDismissed, // callback
                    'Erro', // title
                    'Tentar novamente' // buttonName
                );
            }
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
        var qr = new QRCode(typeNumber, correction, inputMode);
        qr.addData(text);
        qr.make();
    })
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
    })
    /*---------- End for Controller for  ----------*/
