/*use strict*/
(function (mamDirectives) {

    /*ngModel Change Directive (UI Helper Directive) - start */
    mamDirectives.directive('componentmodelChange', componentmodelChangeFunc);

    function componentmodelChangeFunc() {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ngModel) {
                scope.$watch(function () {
                    return ngModel.$modelValue;
                }, function (v) {
                    console.log('!!!' + v);
                })
            }
        };
    };
    /*ngModel Change Directive (UI Helper Directive) - end */

    /*Image Blur (UI Helper Directive) - start*/

    mamDirectives.directive('bgblurComponent', bgblurComponentFunc);

    function bgblurComponentFunc() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div id="profileBgBlur" style="width:304px; height:200px;"></div>',
            scope: {
                blurimgSrc: "@",
                blurimgIntensity: '@',
                blurimageClass: '@'
            },
            link: function (scope, element, attrs) {
                attrs.$observe('blurimgSrc', function (val) {
                    if (val != "data:image/png;base64,") {
                        element.backgroundBlur({
                            imageURL: val,
                            blurAmount: parseInt(scope.blurimgIntensity),
                            imageClass: scope.blurimageClass
                        });
                    }
                });
            }
        }
    };
    /*Image Blur (UI Helper Directive) - end*/

    /*Pannel Control (UI Component Directive) - start*/
    mamDirectives.directive('panelcontrolComponent', panelcontrolComponentFunc);

    function panelcontrolComponentFunc() {
        return {
            scope: {
                componentdata: '='
            },
            template: '<div class="panelControllerHolder">' +
                '<md-button ng-repeat="functionality in panelFunctionalityList" class="md-icon-button" aria-label="{{functionality.controlName}}">' +
                '<md-icon md-svg-icon="{{functionality.controlIcon}}" class="s24" alt="Search Components"></md-icon>' +
                '<md-tooltip>{{functionality.controlName}}</md-tooltip>' +
                '</md-button>' +
                '</div>',
            controller: function ($scope) {
                $scope.panelFunctionalityList = [{
                    controlName: 'Search Components',
                    controlIcon: 'icons/ic_search_24px.svg',
                    controlFunction: 'searchPanelComponents'
                }, {
                    controlName: 'Change Component View',
                    controlIcon: 'icons/ic_view_list_24px.svg',
                    controlFunction: 'switchComponentView'
                }, {
                    controlName: 'Panel Settings',
                    controlIcon: 'icons/ic_settings_24px.svg',
                    controlFunction: 'accessPanelSettings'
                }];
            }
        };
    };
    /*Pannel Control (UI Component Directive) - end*/

    /*Background Directive (UI Helper Directive) - start*/
    mamDirectives.directive('backgroundComponent', backgroundComponentFunc);

    function backgroundComponentFunc() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                attrs.$observe('backgroundComponent', function (val) {
                    console.log('this was triggered within the bgComponent Directive');
                    var data = JSON.parse(val);

                    for (i = 0; i < data.length; i++) {
                        if (data[i].backgroundtypeactive === true) {
                            var selectedbackgroundtype = data[i].backgroundtype;
                            switch (data[i].backgroundtype) {
                                case "solid":
                                    var solidbgcolor = data[i].backgroundcolor;
                                    element.css({
                                        'background-color': '' + solidbgcolor + ''
                                    });
                                    break;
                                case "gradient":
                                    var color1 = data[i].backgroundgradientconfig.color1;
                                    var color2 = data[i].backgroundgradientconfig.color2;
                                    var gradientdirection = data[i].backgroundgradientconfig.orientation;
                                    switch (gradientdirection) {
                                        case "horizontal":
                                            element.css({
                                                'background': '' + color1 + '',
                                                'background': 'linear-gradient(to right,' + color1 + ' 0%, ' + color2 + ' 100%)'
                                            });
                                            break;
                                        case "vertical":
                                            element.css({
                                                'background': '' + color1 + '',
                                                'background': 'linear-gradient(to bottom,' + color1 + ' 0%, ' + color2 + ' 100%)'
                                            });
                                            break;
                                        case "diagonaldown":
                                            element.css({
                                                'background': '' + color1 + '',
                                                'background': 'linear-gradient(-45deg,' + color1 + ' 0%, ' + color2 + ' 100%)'
                                            });
                                            break;
                                        case "diagonalup":
                                            element.css({
                                                'background': '' + color1 + '',
                                                'background': 'linear-gradient(45deg,' + color1 + ' 0%, ' + color2 + ' 100%)'
                                            });
                                            break;
                                        case "radial":
                                            element.css({
                                                'background': '' + color1 + '',
                                                'background': 'radial-gradient(ellipse at center,' + color1 + ' 0%, ' + color2 + ' 100%)'
                                            });
                                            break;
                                    }
                                    break;
                                case "image":
                                    var imgurl = data[i].backgroundimageconfig.imageurl;
                                    var imgblursettings = data[i].backgroundimageconfig.imageblur;
                                    var imgtexture = data[i].backgroundimageconfig.textureoverlay;
                                    var imgvignette = data[i].backgroundimageconfig.vignetteoverlay;

                                    //                                    element.append('<img id="backgroundImage" src="' + imgurl + '" style="width:100%; height:100%;">');


                                    if (imgblursettings.status == true) {
                                        angular.element('#backgroundImage').css(
                                            '-webkit-filter', 'blur(' + imgblursettings.amount + 'px)'
                                            //                                            'filter': 'blur(' + imgblursettings.ammount + 'px)'
                                        );
                                    } else {
                                        angular.element('#backgroundImage').css(
                                            '-webkit-filter', 'blur(0px)'
                                        );
                                    }

                                    break;
                            }
                        }
                    }
                });
            }
        };
    };
    /*Background Directive (UI Helper Directive) - end*/


    /*Wave Component (UI Component Directive) - start*/
    mamDirectives.directive('waveComponent', ['$compile', waveComponentFunc]);

    function waveComponentFunc($compile) {
        return {
            template: '<canvas id="waves"></canvas>',
            link: function (scope, element) {
                var waves = new SineWaves({
                    el: document.getElementById('waves'),

                    speed: 4,

                    width: function () {
                        return $(window).width();
                    },

                    height: function () {
                        return $(window).height();
                    },

                    ease: 'SineInOut',

                    wavesWidth: '70%',

                    waves: [
                        {
                            timeModifier: 4,
                            lineWidth: 1,
                            amplitude: -30,
                            wavelength: 25
              },
                        {
                            timeModifier: 2,
                            lineWidth: 2,
                            amplitude: -75,
                            wavelength: 50
              },
                        {
                            timeModifier: 1,
                            lineWidth: 1,
                            amplitude: -150,
                            wavelength: 100
              },
                        {
                            timeModifier: 0.5,
                            lineWidth: 1,
                            amplitude: -300,
                            wavelength: 200
              },
                        {
                            timeModifier: 0.25,
                            lineWidth: 2,
                            amplitude: -400,
                            wavelength: 400
              }
            ],

                    // Called on window resize
                    resizeEvent: function () {
                        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
                        gradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
                        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
                        gradient.addColorStop(1, "rgba(255, 255, 255, 0.2)");

                        var index = -1;
                        var length = this.waves.length;
                        while (++index < length) {
                            this.waves[index].strokeStyle = gradient;
                        }

                        // Clean Up
                        index = void 0;
                        length = void 0;
                        gradient = void 0;
                    }
                });
            }
        };
    };
    /*Wave Component (UI Component Directive) - end*/


    /*Dynamic Pannel Slider (UI Component Directive) - start*/
    mamDirectives.directive('panelsliderComponent', panelsliderComponentFunc);

    function panelsliderComponentFunc() {
        return {
            scope: {
                componentdata: '='
            },
            template: '<ks-swiper-container override-parameters="{{componentdata.dockOverideParameters}}" initial-slide="{{componentdata.dockInitialPannel}}" direction="{{componentdata.dockTransitionDirection}}" loop="{{componentdata.dockPannelLoop}}" pagination-is-active="{{componentdata.dockPagination}}" slides-per-view="" space-between="300" pagination-clickable="true">' +
                '<ks-swiper-slide class="swiper-slide" ng-repeat="panel in shellDockConfig >' +
                '<div class="dockPanels">' +
                '<div class="sliderPanelContainer" ng-include="panel.pannnelDirectiveContentTemplate"></div>' +
                '<panneltitle-component title="panel.panelTitle"></panneltitle-component>' +
                '</div>' +
                '</ks-swiper-slide>' +
                '</ks-swiper-container>'
        };
    };
    /*Dynamic Pannel Slider (UI Component Directive) - end*/


    /*Dynamic Component Generator Directive (UI Helper Directive) - start*/
    mamDirectives.directive('componentGenerator', ['$compile', componentGeneratorFunc]);

    function componentGeneratorFunc($compile) {
        return {
            scope: {
                component: '=',
                componentdata: '='
            },
            link: function (scope, element) {
                console.log(scope.component);
                console.log(scope.componentdata);
                var generatedTemplate = '<div ' + scope.component + '-component componentdata="componentdata" class="wh-inherit"></div>';
                element.append($compile(generatedTemplate)(scope));
            }
        };
    };
    /*Dynamic Component Generator Directive (UI Helper Directive) - end*/

    /*Dynamic Control Directive - start*/
    mamDirectives.directive('mbDynamicCtrl', ['$compile', '$parse', mbDynamicCtrlFunc]);

    function mbDynamicCtrlFunc($compile, $parse) {
        return {
            restrict: 'A',
            terminal: true,
            priority: 10000,
            link: function (scope, elem) {
                var name = $parse(elem.attr('mb-dynamic-ctrl'))(scope);
                elem.removeAttr('mb-dynamic-ctrl');
                elem.attr('ng-controller', name);
                $compile(elem)(scope);
            }
        };
    };
    /*Dynamic Control Directive - end*/


    /*Application Document Interface Header Directive - start*/

    /*Application Document Interface Header Directive - end*/

    /*All Application Component - start*/
    mamDirectives.directive('allapplistComponent', allapplistComponentFunc);

    function allapplistComponentFunc() {
        return {
            scope: {
                allappdetails: '='
            },
            template: '<div md-ink-ripple="#333" ng-click="favoriteAppLauncher();" style="position:relative" class="favoriteAppItemContainer" layout="row" layout-align="start start">' +
                '<div class="favoriteAppItemContainerIcon" layout="column" layout-align="center center">' +
                '<img ng-src="images/nikkang.png" err-src="images/appIcons/untitledapplication.png" width="32" height="32">' +
                '</div>' +
                '<div class="favoriteAppItemContainerDetails" layout="column" layout-align="center start">' +
                '<span>Sample Application</span>' +
                '<span><md-icon md-svg-icon="icons/ic_favorite_24px.svg" class="favoriteAppIconIndicator" alt="Favorited"></md-icon>Favorited</span>' +
                '</div>' +
                '</div>',
            controller: function ($scope) {

            }
        };
    };
    /*All Application Component - end*/

    /*Active Application Component - start*/
    mamDirectives.directive('activeapplistComponent', activeapplistComponentFunc);

    function activeapplistComponentFunc() {
        return {
            scope: {
                activeappdetails: '='
            },
            template: '<div md-ink-ripple="#333" ng-click="favoriteAppLauncher();" style="position:relative" class="favoriteAppItemContainer" layout="row" layout-align="start start">' +
                '<div class="favoriteAppItemContainerIcon" layout="column" layout-align="center center">' +
                '<img ng-src="images/nikkang.png" err-src="images/appIcons/untitledapplication.png" width="32" height="32">' +
                '</div>' +
                '<div class="favoriteAppItemContainerDetails" layout="column" layout-align="center start">' +
                '<span>Sample Application</span>' +
                '<span><md-icon md-svg-icon="icons/ic_favorite_24px.svg" class="favoriteAppIconIndicator" alt="Favorited"></md-icon>Favorited</span>' +
                '</div>' +
                '</div>',
            controller: function ($scope) {

            }
        };
    };
    /*Active Application Component - end*/

    /*Favorite Application Component - start*/
    mamDirectives.directive('favoriteapplistComponent', favoriteapplistComponentFunc);

    function favoriteapplistComponentFunc() {
        return {
            scope: {
                favoriteappdetails: '='
            },
            template: '<div md-ink-ripple="#333" ng-click="favoriteAppLauncher();" style="position:relative" class="favoriteAppItemContainer" layout="row" layout-align="start start">' +
                '<div class="favoriteAppItemContainerIcon" layout="column" layout-align="center center">' +
                '<img ng-src="images/nikkang.png" err-src="images/appIcons/untitledapplication.png" width="32" height="32">' +
                '</div>' +
                '<div class="favoriteAppItemContainerDetails" layout="column" layout-align="center start">' +
                '<span>Sample Application</span>' +
                '<span><md-icon md-svg-icon="icons/ic_favorite_24px.svg" class="favoriteAppIconIndicator" alt="Favorited"></md-icon>Favorited</span>' +
                '</div>' +
                '</div>',
            controller: function ($scope) {

            }
        };
    };
    /*Favorite Application Component - end*/

    /*Tennant Switcher Component - start*/
    mamDirectives.directive('tenantswitcherComponent', tenantswitcherComponentFunc);

    function tenantswitcherComponentFunc() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                currenttennant: '=',
            },
            template: '<div class="dw-current-tennant-container" layout="row" layout-align="center center" ng-click="switchTennant()">' +
                '<md-icon md-svg-icon="icons/ic_swap_vert_circle_24px.svg" class="s24" alt="switch tennants"></md-icon>' +
                '<span class="dw-current-tennant">{{currenttennant}}</span>' +
                '<md-tooltip>Switch Tennant</md-tooltip>' +
                '</div>',
            controller: function ($rootScope, $scope, $element, $mdDialog) {
                $scope.switchTennant = function (ev) {
                    var tennantCollection = $rootScope.recivedTennantCollection;
                    $mdDialog.show({
                        controller: tennantInfoController,
                        templateUrl: 'partials/modal-templates/partials.modal-templates.tennantswitcher.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        locals: {
                            tennantCollection: tennantCollection
                        },
                        clickOutsideToClose: true
                    });

                    function tennantInfoController($scope, tennantCollection) {
                        $scope.newTennantCollection = tennantCollection;

                        $scope.makeSwitchTennant = function (tennantDomain) {
                            var switchConfirm = $mdDialog.confirm()
                                .title('Tennant switch confirm.')
                                .content('Are you sure you want to switch to "' + tennantDomain + '" ?')
                                .ariaLabel('Switch Tennant')
                                .ok('Yes go ahead !')
                                .cancel('Dont do it')
                                .targetEvent(ev);
                            $mdDialog.show(switchConfirm).then(function () {
                                window.open('http://' + tennantDomain, '_blank');
                                // location.replace('http://'+tennantDomain);
                            }, function () {

                            });
                        };
                    };
                };
            }
        };
    };
    /*Tennant Switcher Component - end*/

    /*Tennant Switch List Component - start*/
    mamDirectives.directive('tennantswitchlistComponent', tennantswitchlistComponentFunc);

    function tennantswitchlistComponentFunc() {
        return {
            scope: {
                tennantid: '=',
            },
            template: '<div md-ink-ripple="#333" style="position:relative" class="tennantItemContainer" layout="row" layout-align="start start">' +
                '<div class="tennantItemContainerIcon" layout="column" layout-align="center center">' +
                '<md-icon md-svg-icon="icons/ic_exit_to_app_24px.svg" class="switchTennantHeaderIcon" alt="switch to {{tennantid}} tennant"></md-icon>' +
                '</div>' +
                '<div class="tennantItemContainerText" layout="column" layout-align="center start">' +
                '<span>{{tennantid}}</span>' +
                '</div>' +
                '</div>'
        };
    };
    /*Tennant Switch List Component - end*/

    /*App Shortcut Component Directive (UI Component Directive) - start*/
    mamDirectives.directive('appshortcutComponent', appshortcutComponentFunc);

    function appshortcutComponentFunc2($rootScope, $scope, $element, $state, $location, $mdDialog, $mdToast) {
        $scope.wasDoubleClicked = false;
        //console.log('this is the controller for - '+$scope.componentdata.applicationID);
        $scope.data = $scope.componentdata;

        $scope.singleClick = function (ev) {
            console.log($scope.componentdata);
            console.log(ev);
            $rootScope.openedAppPosition = ev;
            //var locationParams = {childAppID:$scope.componentdata.ApplicationID, childAppName:$scope.componentdata.Name, childAppIcon:$scope.componentdata.iconUrl};
            //var encodedParams = $base64.encode(JSON.stringify(locationParams));
            var locationUri = "launcher/customapp/" + $scope.componentdata.ApplicationID + "/" + $scope.componentdata.Name;
            //console.log(locationUri);
            $location.path(locationUri);
            $rootScope.opendAppIconUrl = $scope.componentdata.iconUrl;
            $scope.wasDoubleClicked = false;
        };

        $scope.doubleClick = function () {
            $scope.wasDoubleClicked = !$scope.wasDoubleClicked;
        };

        $scope.closeAll = function () {
            $scope.wasDoubleClicked = false;
        };


        $scope.deleteApp = function (data, ev) {

            $rootScope.showCustomConfirmDialog("icons/ic_delete_24px.svg", "Delete Application", "are you sure you want to continue?", "do it!", "oh no!", ev).then(function (confirm) {
                if (confirm) {
                    $rootScope.deleteApp(data);
                };
            });
        };


        $scope.findAppInfo = function (ev) {
            $scope.wasDoubleClicked = false;
            var selectedApp = $scope.componentdata;
            $mdDialog.show({
                controller: appInfoController,
                templateUrl: 'partials/modal-templates/partials.modal-templates.appinfo.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: {
                    selectedAppInfo: selectedApp
                },
                clickOutsideToClose: true
            });
        };

        function appInfoController($scope, selectedAppInfo) {
            $scope.selectedAppInfo = selectedAppInfo;
        }

        // $scope.launchApplication = function(appName){
        //   $state.go('launcher.marketplace');
        // }
    }
    appshortcutComponentFunc2.$inject = ['$rootScope', '$scope', '$element', '$state', '$location', '$mdDialog', '$mdToast'];

    function appshortcutComponentFunc() {
        return {
            scope: {
                //component: '=',
                componentdata: '='
            },
            template: '<div class="appShorcutContainer" ng-class="{shortcutExpanded:wasDoubleClicked}">' +
                '<md-button class="appshortcutWidget" sglclick="singleClick($event)" ng-dblClick="doubleClick()" click-outside="closeAll()" layout="column" layout-align="center center">' +
                '<div class="md-applicationIcon-icon-section" >' +
                //                '<img ng-src="{{componentdata.iconUrl}}" show-sm  hide-lg hide-md hide-gt-lg err-src="images/appIcons/untitledapplication.png" width="40" height="40">' +
                '<img ng-src="{{componentdata.iconUrl}}"  err-src="images/appIcons/untitledapplication.png" width="56" height="56">' +
                //                '<img ng-src="{{componentdata.iconUrl}}"  show-lg hide-sm hide-md err-src="images/appIcons/untitledapplication.png" width="70" height="70">' +
                '</div>' +
                '<div class="md-applicationIcon-appname-section">{{componentdata.Name}}</div>' +
                //                '<p class="md-applicationIcon-appname-section">{{componentdata.Name}}</p></div>' +
                '</md-button>' +
                '<div class="md-appControls-container" layout="row" layout-align="space-around start">' +
                '<md-button class="md-icon-button" aria-label="delete app" ng-click="deleteApp(componentdata,$event)">' +
                '<md-icon md-svg-icon="icons/ic_delete_24px.svg" class="s24" alt="delete app"></md-icon>' +
                '</md-button>' +
                '<md-button class="md-icon-button" aria-label="info about app" ng-click="findAppInfo(componentdata)">' +
                '<md-icon md-svg-icon="icons/ic_info_outline_24px.svg" class="s24" alt="app info"></md-icon>' +
                '</md-button>' +
                '</div>' +
                '</div>',
            controller: appshortcutComponentFunc2
        };
    };


    /*App Shortcut Component Directive (UI Component Directive) - end*/

    /*Force Single Click Directive (UI Helper Directive) - start*/
    mamDirectives.directive('sglclick', ['$parse', sglclickFunc]);

    function sglclickFunc($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var fn = $parse(attr['sglclick']);
                var delay = 200,
                    clicks = 0,
                    timer = null;
                element.on('click', function (event) {
                    clicks++; //count clicks
                    if (clicks === 1) {
                        timer = setTimeout(function () {
                            scope.$apply(function () {
                                fn(scope, {
                                    $event: event
                                });
                            });
                            clicks = 0; //after action performed, reset counter
                        }, delay);
                    } else {
                        clearTimeout(timer); //prevent single-click action
                        clicks = 0; //after action performed, reset counter
                    }
                });
            }
        };
    };
    /*Force Single Click Directive (UI Helper Directive) - end*/

    /*Pannel Title Directive (UI Component Directive) - start*/
    mamDirectives.directive('panneltitleComponent', panneltitleComponentFunc);

    function panneltitleComponentFunc() {
        var linkFunction = function (scope, elem, attrs) {

        };

        return {
            restrict: 'E',
            scope: {
                title: '='
            },
            template: '<div class="panelTitleHolder"><h1>{{title}}<h1></div>',
            link: linkFunction
        };
    };
    /*Pannel Title Directive (UI Component Directive) - end*/

    /*Slide Animation Directive (UI Animation Directive) - start*/
    mamDirectives.animation('.slide-animation', slideAnimationFunc);

    function slideAnimationFunc() {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if (scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.3, {
                        left: finishPoint,
                        onComplete: done
                    });
                } else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if (scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.3, {
                        left: startPoint
                    }, {
                        left: 0,
                        onComplete: done
                    });
                } else {
                    done();
                }
            }
        };
    };
    /*Slide Animation Directive (UI Animation Directive) - end*/

    /*Image SRC Error Directive (UI Helper Directive) - start*/
    mamDirectives.directive('errSrc', errSrcFunc);

    function errSrcFunc() {
        return {
            link: function (scope, element, attrs) {
                element.bind('error', function () {
                    if (attrs.src != attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });

                attrs.$observe('ngSrc', function (value) {
                    if (!value && attrs.errSrc) {
                        attrs.$set('src', attrs.errSrc);
                    }
                });
            }
        }
    };
    /*Image SRC Error Directive (UI Helper Directive) - end*/

    /*Shell Branding Directive (UI Component Directive) - start*/
    mamDirectives.directive('shellBranding', shellBrandingFunc);

    function shellBrandingFunc() {
        var linkFunction = function (scope, elem, attrs) {

        };

        return {
            restrict: 'E',
            replace: 'true',
            template: '<img  width="122" height="32" style="cursor:pointer;"/>',
            scope: {},
            link: linkFunction
        };
    };
    /*Shell Branding Directive (UI Component Directive) - end*/


    mamDirectives.directive('sectionTitle', sectionTitleFunc);

    function sectionTitleFunc() {
        return {
            restrict: 'E',
            template: "<div id='newdiv' layout='row' style='width: 255px; margin-top:8px; margin-left:8px;' flex layout-sm='row'><div flex='25'>	<img src={{catogeryLetter}} style='margin-top:22px;border-radius:20px'/>	</div> <div flex style='margin-top:27px;'>	<label style='font-weight:700'>{{title}}</label> </div></div>",
            scope: {
                title: '@',
                catogeryLetter: '='
            },
            link: function (scope, element) {

                    if (scope.title == "" || scope.title == null) {

                        element.find('#newdiv').attr('hide-sm', '');
                        //console.log("one of the pic is empty");
                    } else {
                        scope.catogeryLetter = "images/material alperbert/avatar_tile_" + scope.title.charAt(0).toLowerCase() + "_28.png";

                        element.find('#newdiv').attr('new', '');
                    }




                } //end of link
        };
    };

    window.directiveResources = {};

    mamDirectives.service('notifications', ['$mdToast', '$mdDialog', notificationsFunc]);

    function notificationsFunc($mdToast, $mdDialog) {

        this.toast = function (content, status, delay) {

            window.directiveResources.toastRef = $mdToast;

            if (!delay)
                delay = 2000;
            $mdToast.show({
                template: '<md-toast class="md-toast-' + status + '"><span flex>' + content + ' </span> <md-button  style="margin-left: 20px !important;" onclick="(function(e){ window.directiveResources.toastRef.hide() })(event)">Close</md-button></md-toast>',
                hideDelay: delay,
                position: 'bottom right'
            });
        };

        this.alertDialog = function (title, content) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('input[name="editForm"]')))
                .clickOutsideToClose(true)
                .title(title)
                .textContent(content)
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
            );
        }
    };

    mamDirectives.directive('onLongPress', ['$timeout', onLongPressFunc]);

    function onLongPressFunc($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, $elm, $attrs) {
                $elm.bind('mousedown', function (evt) {
                    // Locally scoped variable that will keep track of the long press
                    $scope.longPress = true;

                    // We'll set a timeout for 600 ms for a long press
                    $timeout(function () {
                        if ($scope.longPress) {
                            // If the touchend event hasn't fired,
                            // apply the function given in on the element's on-long-press attribute
                            $scope.$apply(function () {
                                $scope.$eval($attrs.onLongPress)
                            });
                        }
                    }, 500);
                });

                $elm.bind('mousemove', function (evt) {
                    $scope.longPress = false;
                    //console.log('mouse moving');
                });

                $elm.bind('mouseup', function (evt) {
                    // Prevent the onLongPress event from firing
                    $scope.longPress = false;
                    // If there is an on-touch-end function attached to this element, apply it
                    if ($attrs.onTouchEnd) {
                        $scope.$apply(function () {
                            $scope.$eval($attrs.onTouchEnd)
                        });
                    }
                });
            }
        };
    };

    mamDirectives.directive('ngCroppie', ['$compile', ngCroppieFunc]);

    function ngCroppieFunc($compile) {
        return {
            restrict: 'AE',
            scope: {
                src: '=',
                viewport: '=',
                boundry: '=',
                type: '@',
                zoom: '@',
                mousezoom: '@',
                update: '=',
                ngModel: '='
            },
            link: function (scope, elem, attr) {

                // defaults
                if (scope.viewport == undefined) {
                    scope.viewport = {
                        w: null,
                        h: null
                    }
                }

                if (scope.boundry == undefined) {
                    scope.boundry = {
                        w: null,
                        h: null
                    }
                }

                // catches
                scope.viewport.w = (scope.viewport.w != undefined) ? scope.viewport.w : 300;
                scope.viewport.h = (scope.viewport.h != undefined) ? scope.viewport.h : 300;
                scope.boundry.w = (scope.boundry.w != undefined) ? scope.boundry.w : 400;
                scope.boundry.h = (scope.boundry.h != undefined) ? scope.boundry.h : 400;

                // viewport cannot be larger than the boundaries
                if (scope.viewport.w > scope.boundry.w) {
                    scope.viewport.w = scope.boundry.w
                }
                if (scope.viewport.h > scope.boundry.h) {
                    scope.viewport.h = scope.boundry.h
                }

                // convert string to Boolean
                var zoom = (scope.zoom === "true"),
                    mouseZoom = (scope.mousezoom === "true");

                // define options
                var options = {
                    viewport: {
                        width: scope.viewport.w,
                        height: scope.viewport.h,
                        type: scope.type || 'square'
                    },
                    boundary: {
                        width: scope.boundry.w,
                        height: scope.boundry.h
                    },
                    showZoom: zoom,
                    mouseWheelZoom: mouseZoom,
                }

                if (scope.update != undefined) {
                    options.update = scope.update
                }

                // create new croppie and settime for updates
                var c = new Croppie(elem[0], options);
                var intervalID = window.setInterval(function () {
                    c.result('canvas').then(function (img) {
                        scope.$apply(function () {
                            scope.ngModel = img
                        })
                    })
                }, 250);

                scope.$on("$destroy",
                    function (event) {
                        clearInterval(intervalID);
                    }
                );

                // respond to changes in src
                scope.$watch('src', function (newValue, oldValue) {
                    if (scope.src != undefined) {
                        c.bind(scope.src);
                        c.result('canvas').then(function (img) {
                            scope.$apply(function () {
                                scope.ngModel = img
                            })
                        })
                    }
                })


            }

        };
    };


})(angular.module('mambatiDirectives', []));
