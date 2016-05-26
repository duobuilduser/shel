<?php

$useragent=$_SERVER['HTTP_USER_AGENT'];

if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4)))

header('Location: /../mobile_shell');
?>

    <!DOCTYPE html>
    <html manifest="shell.appcache">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>DuoWorld</title>
        <link rel="shortcut icon" href="images/shellassets/dw-favicon.png" type="image/png">

        <link rel="stylesheet" type="text/css" href="bower_components/angular-material/angular-material.css" />
        <link rel="stylesheet" type="text/css" href="/bower_components/animate.css/animate.min.css" />
        <link rel="stylesheet" type="text/css" href="/bower_components/swiper/dist/css/swiper.css" />
        <link rel="stylesheet" type="text/css" href="/bower_components/angular-gridster/dist/angular-gridster.min.css" />
        <link rel="stylesheet" type="text/css" href="bower_components/perfect-scrollbar/src/perfect-scrollbar.css">
        <link rel="stylesheet" type="text/css" href="shell_specific_components/styles/animations.min.css" />
        <link rel="stylesheet" type="text/css" href="shell_specific_components/styles/appshellcommon.min.css" />
        <link rel="stylesheet" type="text/css" href="shell_specific_components/styles/refractoredStyles.min.css" />
        <link rel="stylesheet" type="text/css" href="shell_specific_components/styles/custommaterialstyling.min.css" />
        <link rel="stylesheet" type="text/css" href="shell_specific_components/styles/themestyles.min.css" />
        <link rel="stylesheet" type="text/css" href="shell_specific_components/styles/v-accordion.min.css" />

    </head>

    <body ng-app="mambatiFrameworkShell" layout="column" ng-cloak>
        <!-- framework outer container .start -->
        <div id="dw-loadingFrame">
            <div class="dw-cygilContainer" style="background:url(images/tennantassets/duoworldbannerCustom.png);"></div>
            <div class="dw-platformLoadingContainer">
                Loading the platform, please wait !
            </div>
            <canvas id="waves"></canvas>
        </div>
        <div ngsf-fullscreen id="duoWorld-framework-main-container" ng-controller="duoworld-framework-shell-ctrl" md-theme="{{shellConfig.themeconfiguration.palettename}}" md-theme-watch="true" background-component="{{shellConfig.backgroundconfiguration}}">
            <!--        style="background-image:url( {{shellConfig.backgroundconfiguration[2].backgroundimageconfig.imageurl }});"-->

            <!-- framework inner container .start -->
            <div id="duoworld-framework-container">
                <!-- left side nav .start -->
                <md-sidenav class="md-sidenav-left md-primary" layout="column" layout-align="start start" md-component-id="left">
                    <div class="md-profile-widget">
                        <!--
                    <div class="md-profile-widget-banner" style="background-image:linear-gradient(rgba(20,20,20,0.3), rgba(20,20,20,0.8)), url({{userProfileDetails.userProfileResources.coverImgUrl}});" layout="column" layout-align="end end">
                    </div>
-->
                        <div class="md-profile-widget-banner" style="background-image:linear-gradient(rgba(20,20,20,0.3), rgba(20,20,20,0.8)), url('images/tennantassets/duoworldlogin.png');background-size:contain;" layout="column" layout-align="end end">
                        </div>
                    </div>
                    <div class="dw-quickaccess-appdrawer">
                        <v-accordion class="vAccordion--default">
                            <!-- <v-pane>
                            <v-pane-header layout="column" layout-align="start start">
                                <md-icon md-svg-icon="icons/ic_favorite_24px.svg" style="color:#F44336;" class="accoridanIcon" alt="Favorite Apps"></md-icon><span>Favorite Applications</span>
                            </v-pane-header>

                            <v-pane-content>
                                <span>Sorry you cant access favorite apps yet !</span>
                                <div md-ink-ripple="#333" ng-click="favoriteAppLauncher();" style="position:relative" class="favoriteAppItemContainer" layout="row" layout-align="start start">
                                    <div class="favoriteAppItemContainerIcon" layout="column" layout-align="center center">
                                          <img ng-src="images/nikkang.png" err-src="images/appIcons/untitledapplication.png" width="32" height="32">
                                    </div>
                                    <div class="favoriteAppItemContainerDetails" layout="column" layout-align="center start">
                                        <span>Sample Application</span>
                                        <span><md-icon md-svg-icon="icons/ic_favorite_24px.svg" class="favoriteAppIconIndicator" alt="Favorited"></md-icon>Favorited</span>
                                    </div>
                                </div>
                            </v-pane-content>
                        </v-pane> -->

                            <!-- <v-pane>
                            <v-pane-header>
                                <md-icon md-svg-icon="icons/ic_flash_on_24px.svg" style="color:#FFC107;" class="accoridanIcon" alt="Active Apps"></md-icon><span>Active Applications</span>
                            </v-pane-header>

                            <v-pane-content>
                                <span>There are no active apps !</span>
                                <div md-ink-ripple="#333" ng-click="activeAppLauncher();" style="position:relative" class="activeAppItemContainer" layout="row" layout-align="start start">
                                    <div class="activeAppItemContainerIcon" layout="column" layout-align="center center">
                                          <img ng-src="images/nikkang.png" err-src="images/appIcons/untitledapplication.png" width="32" height="32">
                                    </div>
                                    <div class="activeAppItemContainerDetails" layout="column" layout-align="center start">
                                        <span>Sample Application</span>
                                        <span><md-icon md-svg-icon="icons/ic_flash_on_24px.svg" class="activeAppIconIndicator" alt="Active"></md-icon>Active</span>
                                    </div>
                                </div>
                            </v-pane-content>
                        </v-pane> -->

                            <v-pane>
                                <v-pane-header>
                                    <md-icon md-svg-icon="icons/ic_apps_24px.svg" style="color:{{$root.shellConfig.themeconfiguration.primarypalette}};" class="accoridanIcon" alt="All Apps"></md-icon><span>All Applications</span>
                                </v-pane-header>

                                <v-pane-content>
                                    <perfect-scrollbar class="allAppItemContainer-scroller" wheel-propagation="false" wheel-speed="2">
                                        <div ng-repeat="app in allApps" md-ink-ripple="#333" ng-click="quickLaunchAppAccess(app);" style="position:relative" class="allAppItemContainer" layout="row" layout-align="start start">
                                            <div class="allAppItemContainerIcon" layout="column" layout-align="center center">
                                                <img ng-src="{{app.iconUrl}}" err-src="images/appIcons/untitledapplication.png" width="32" height="32">
                                            </div>
                                            <div class="allAppItemContainerDetails" layout="column" layout-align="center start">
                                                <span>{{app.Name}}</span>
                                            </div>
                                        </div>
                                        <div md-ink-ripple="#333" style="position:relative" class="allAppItemContainer" layout="row" layout-align="start start" ng-show="!allApps.length">
                                            <div class="allAppItemContainerDetails" layout="column" layout-align="center start">
                                                <span>No Applications available</span>
                                            </div>
                                        </div>
                                    </perfect-scrollbar>
                                </v-pane-content>
                            </v-pane>

                            <v-pane>
                                <v-pane-header>
                                    <md-icon md-svg-icon="icons/ic_play_arrow_24px.svg" style="color:{{$root.shellConfig.themeconfiguration.primarypalette}};" class="accoridanIcon" alt="Running Apps"></md-icon><span>Running Applications</span>
                                </v-pane-header>

                                <v-pane-content>
                                    <perfect-scrollbar class="allAppItemContainer-scroller" wheel-propagation="false" wheel-speed="2">
                                        <div ng-repeat="app in $root.runningApps" md-ink-ripple="#333" ng-click="switchApp(app);" style="position:relative" class="allAppItemContainer" layout="row" layout-align="start start">
                                            <div class="allAppItemContainerIcon" layout="column" layout-align="center center">
                                                <img ng-src="{{app.imageUrl}}" err-src="images/appIcons/untitledapplication.png" width="32" height="32">
                                            </div>
                                            <div class="allAppItemContainerDetails" layout="column" layout-align="center start">
                                                <span>{{app.appName}}</span>
                                            </div>
                                        </div>
                                        <div md-ink-ripple="#333" style="position:relative" class="allAppItemContainer" layout="row" layout-align="start start" ng-show="!$root.runningApps.length">
                                            <div class="allAppItemContainerDetails" layout="column" layout-align="center start">
                                                <span>There are no active apps</span>
                                            </div>
                                        </div>
                                    </perfect-scrollbar>
                                </v-pane-content>
                            </v-pane>

                        </v-accordion>
                    </div>
                </md-sidenav>
                <!-- left side nav .end -->
                <!-- right side nav .start -->
                <md-sidenav class="md-sidenav-right md-primary" layout="column" layout-align="start start" md-component-id="right">

                    <div ng-include="'partials/frameworktemplates/duoworld-framework.notifications.html'" style="width:100%;height:100%;"></div>

                </md-sidenav>
                <!-- right side nav .end -->
                <!-- top tool bar .start -->
                <md-toolbar class="md-toolbar-medium" style="z-index:4 !important;">
                    <div class="md-toolbar-tools" layout="row" layout-align="space-between center">
                        <div class="tool-bar-control-set left" layout="row" layout-align="start center">
                            <shell-branding id="shellBranding" ng-src="images/tennantassets/customizedlogo_white.png" ng-click="toggleLeftMenu()"></shell-branding>
                        </div>
                        <!-- <div class="tool-bar-control-set middle" layout="row" layout-align="start center">
                        <div class="dw-global-serach-container" layout="row" layout-align="end center">
                            <div class="dw-global-search-section1" layout="row" layout-align="start center">
                                <div class="dw-global-search-icon">
                                    <md-icon md-svg-icon="icons/ic_search_24px.svg" class="s24" alt="Search"></md-icon>
                                </div>
                                <div class="dw-global-search-input-box">
                                    <input type="text" placeholder="Search">
                                </div>
                            </div>
                            <div class="dw-global-search-section2" layout="column" layout-align="center end">
                                <div class="dw-global-search-tag">{{globalSearch.context}}<md-tooltip>Local Context</md-tooltip></div>
                            </div>
                        </div>
                    </div> -->
                        <div class="tool-bar-control-set right" layout="row" layout-align="end center">
                            <!--                        <tenantswitcher-component currenttennant="currenttenantsessioninfo.Username"></tenantswitcher-component>-->
                            <md-menu md-position-mode="target-right target">
                                <md-button ng-click="$mdOpenMenu()" style="line-height:0px;">
                                    <md-icon md-svg-icon="icons/ic_swap_vert_circle_24px.svg"></md-icon>
                                    {{currenttenantsessioninfo.Username}}
                                </md-button>
                                <md-menu-content layout="column" layout-align="start center" width="6">
                                    <div class="tennantCollectionModalContainerSearch">
                                        <md-input-container md-no-float class="searchInputContainer">
                                            <md-icon md-svg-src="icons/ic_search_24px.svg"></md-icon>
                                            <input ng-model="tennantSwitchSearch" type="text" placeholder="Search Tennant's">
                                        </md-input-container>
                                    </div>
                                    <div class="tennantCollectionModalContainerContent" layout="column" layout-align="start center">
                                        <tennantswitchlist-component ng-repeat="tennant in $root.recivedTennantCollection | filter:tennantSwitchSearch" ng-click="makeSwitchTennant(tennant.TenantID,$event)" tennantid="tennant.TenantID"></tennantswitchlist-component>
                                    </div>
                                    <md-menu-divider></md-menu-divider>
                                    <md-menu-item style="width:100%">
                                        <md-button>
                                            <md-icon md-svg-icon="icons/ic_settings_24px.svg" alt="User Profile"></md-icon>
                                            Manage Tenants
                                        </md-button>
                                    </md-menu-item>

                                </md-menu-content>
                            </md-menu>
                            <!-- <md-button class="md-icon-button" aria-label="Dock Configuration">
                            <md-icon md-svg-icon="icons/ic_view_carousel_24px.svg" class="s24" alt="Dock Configuration"></md-icon>
                            <md-tooltip>Dock Configuration</md-tooltip>
                        </md-button> -->
                            <md-button aria-label="Search" ng-click="revealSearchBar()">
                                <md-icon md-svg-icon="icons/ic_search_24px.svg" alt="Search" ng-hide="searchBarRevealed"></md-icon>
                                <md-icon md-svg-icon="icons/ic_close_24px.svg" alt="Close Search" ng-show="searchBarRevealed"></md-icon>
                            </md-button>
                            <div class="serachBox" ng-show="searchBarRevealed">
                                <md-input-container md-no-float class="md-block">
                                    <input ng-model="globalSearchKeyword" placeholder="Search">
                                </md-input-container>
                            </div>
                            <!--
                          <md-button class="md-accent" ngsf-toggle-fullscreen aria-label="Full Screen">
    <md-icon md-svg-icon="icons/ic_settings_overscan_24px.svg" alt="Full Screen"></md-icon>
    <md-tooltip>Full Screen</md-tooltip>
</md-button>
-->
                            <!--
                            <md-button class="md-accent" ng-click="showRunningApps($event)" aria-label="Application switcher">
                                <md-icon md-svg-icon="icons/ic_vibration_24px.svg" alt="Appliction Switcher"></md-icon>
                                <md-tooltip>Application Switcher</md-tooltip>
                            </md-button>
-->



                            <!--
                        <md-button class="md-accent" aria-label="Notification" ng-click="toggleNotifications();">
                            <md-icon md-svg-icon="icons/ic_notifications_none_24px.svg" alt="Notification"></md-icon>
                            <md-tooltip>Notifications</md-tooltip>
                        </md-button>
-->
                            <md-menu md-position-mode="target-right target">
                                <md-button ng-click="showNotifications($mdOpenMenu);" style="line-height:0px;" aria-label="show notifications">
                                    <md-icon md-svg-icon="icons/ic_notifications_none_24px.svg"></md-icon>
                                    <div ng-if="unseenNotificationCount > 0" class="latestNotificationCount" layout="row" layout-align="center center">{{unseenNotificationCount}}</div>

                                </md-button>
                                <md-menu-content layout="column" layout-align="start center" width="5" class="notification-dropdown-container">

                                    <div class="notification-dropdown-container-box" layout="row" layout-align="start center" ng-repeat="n in shellNotifications | orderBy:'-timestamp'" ng-if="n.viewstatus">
                                        <img ng-src="data:image/png;base64,{{n.user.profile_pic}}" err-src="images/appIcons/contacts.png" class="notification-box-image" />
                                        <div layout="column" layout-align="start start" class="notification-box-content" flex>
                                            <p>{{n.message}}</p>
                                            <span>{{n.timestamp | date:'medium'}}</span>
                                        </div>
                                        <md-icon md-svg-icon="icons/ic_flash_on_24px.svg" alt="previous actions" class="notifiaction-box-icon"></md-icon>
                                    </div>
                                    <md-menu-item style="width:100%" ng-if="isNotificationeEmpty()">
                                        <md-button aria-label="no new notifications">
                                            <md-icon md-svg-icon="icons/ic_error_24px.svg" alt="User Profile"></md-icon>
                                            No new Notifications!
                                        </md-button>
                                    </md-menu-item>
                                    <md-menu-divider></md-menu-divider>
                                    <md-menu-item style="width:100%">
                                        <md-button ng-click="toggleNotifications()" aria-label="see all">
                                            <md-icon md-svg-icon="icons/ic_turned_in_not_24px.svg" alt="User Profile"></md-icon>
                                            See All
                                        </md-button>
                                    </md-menu-item>
                                </md-menu-content>
                            </md-menu>

                            <md-menu md-position-mode="target-right target">
                                <md-button class="md-accent md-icon-button" ng-click="$mdOpenMenu()" style="line-height:0px;" aria-label="profile">
                                    <img ng-src="{{$root.profilePicture}}" err-src="images/appIcons/contacts.png" width="32" height="32" style="border-radius:50%;">
                                </md-button>
                                <md-menu-content style="height:100%;max-height:400px;  padding:0px !important;" width="4" class="md-primary" layout="column" layout-align="start start">
                                    <div class="userInfoSummary" style="width:100%;background:#333; height:200px;">
                                        <div class="userInfoProfileBannerSection" layout="column" layout-align="start start">
                                            <bgblur-component blurimg-src="{{$root.profilePicture}}" blurimg-intensity="50" blurimage-class="bg-blur"></bgblur-component>
                                            <img id="profilePic" ng-src="{{$root.profilePicture}}" err-src="images/appIcons/contacts.png" width="90" height="90">
                                        </div>

                                        <div class="userInfoProfileDetailsSection" layout="column" layout-align="center center">
                                            <span>{{$root.content.Name}}</span>
                                            <span>{{$root.content.Email}}</span>
                                        </div>
                                    </div>

                                    <div class="profileWidgetControls" layout="row" layout-align="space-around center" style="background-color:{{$root.shellConfig.themeconfiguration.primarypalette}}">
                                        <md-button class="md-accent" ng-click="dwFrameworkBuiltinAppNavigation('user profile');" aria-label="profile">
                                            <md-icon md-svg-icon="icons/ic_account_box_24px.svg" alt="User Profile"></md-icon>
                                            <md-tooltip>Profile</md-tooltip>
                                        </md-button>
                                        <md-button class="md-accent" ng-click="dwFrameworkBuiltinAppNavigation('settings');" aria-label="settings">
                                            <md-icon md-svg-icon="icons/ic_settings_applications_24px.svg" alt="Settings"></md-icon>
                                            <md-tooltip>Settings</md-tooltip>
                                        </md-button>
                                        <md-button class="md-accent" ng-click="quitApplication($event);" aria-label="signout">
                                            <md-icon md-svg-icon="icons/ic_exit_to_app_24px.svg" alt="Signout"></md-icon>
                                            <md-tooltip>Signout</md-tooltip>
                                        </md-button>
                                    </div>

                                    <!--
                                <md-menu-divider></md-menu-divider>
<div class="profileWidgetControls" layout="column" layout-align="start start">
    <md-menu-item style="width:100%">
        <md-button ng-click="dwFrameworkBuiltinAppNavigation('user profile');">
            <md-icon md-svg-icon="icons/ic_account_box_24px.svg" alt="User Profile"></md-icon>
            Profile
        </md-button>
    </md-menu-item>
    <md-menu-item style="width:100%">
        <md-button ng-click="dwFrameworkBuiltinAppNavigation('settings');">
            <md-icon md-svg-icon="icons/ic_settings_applications_24px.svg" alt="Settings"></md-icon>
            Settings
        </md-button>
    </md-menu-item>
    <md-menu-item style="width:100%">
        <md-button ng-click="quitApplication($event);">
            <md-icon md-svg-icon="icons/ic_exit_to_app_24px.svg" alt="Signout"></md-icon>
            Signout
        </md-button>
    </md-menu-item>
</div>
-->
                                </md-menu-content>
                            </md-menu>
                        </div>
                    </div>
                </md-toolbar>
                <!-- top tool bar .end -->
                <!-- middle UI View .start -->
                <div ng-show="panelCustomizingTray" ng-include="'partials/panel-templates/panelCustomizingTray.html'" class="panelCustomizingTray" style="background-image: url({{$root.shellConfig.backgroundconfiguration[2].backgroundimageconfig.imageurl}});
    background-size: cover;">
                </div>
                <div id="duoworld-framework-view-container" ui-view></div>
                <!-- middle UI View .end -->
            </div>
            <!-- framework inner container .end -->
            <!--        <img id="backgroundImage" src="{{$root.shellConfig.backgroundconfiguration[2].backgroundimageconfig.imageurl}}" style="width:100%; height:100%;">-->
            <div background-component id="backgroundImage" style="width:100%; height:100%;background-image:url({{$root.shellConfig.backgroundconfiguration[2].backgroundimageconfig.imageurl}});background-size:cover;">
            </div>

            <!-- framework outer container .end -->
            <!-- framework load procedure .start -->
            <script src="/bower_components/jquery/dist/jquery.min.js"></script>
            <script src="shell_specific_components/libs/lava.min.js"></script>
            <script>
                var dwLoadingFrameIndicator = $("#dw-loadingFrame");

                var platformLoadCheck = setInterval(function() {
                    if (/loaded|complete/.test(document.readyState)) {
                        clearInterval(platformLoadCheck);
                        setTimeout(removeLoadingframe, 3000);
                    }
                }, 10);

                var removeLoadingframe = function() {
                    dwLoadingFrameIndicator.fadeOut(1000, function() {
                        dwLoadingFrameIndicator.remove();
                    });
                };

                var checkAlert = function() {
                    alert('this is done !');
                };

                var waves = new SineWaves({
                    el: document.getElementById('waves'),

                    speed: 4,

                    width: function() {
                        return $(window).width();
                    },

                    height: function() {
                        return $(window).height();
                    },

                    ease: 'SineInOut',

                    wavesWidth: '70%',

                    waves: [{
                        timeModifier: 4,
                        lineWidth: 1,
                        amplitude: -25,
                        wavelength: 25
                    }, {
                        timeModifier: 2,
                        lineWidth: 2,
                        amplitude: -50,
                        wavelength: 50
                    }, {
                        timeModifier: 1,
                        lineWidth: 1,
                        amplitude: -100,
                        wavelength: 100
                    }, {
                        timeModifier: 0.5,
                        lineWidth: 1,
                        amplitude: -200,
                        wavelength: 200
                    }, {
                        timeModifier: 0.25,
                        lineWidth: 2,
                        amplitude: -400,
                        wavelength: 400
                    }],

                    // Called on window resize
                    resizeEvent: function() {
                        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
                        gradient.addColorStop(0, "rgba(23, 210, 168, 0.2)");
                        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
                        gradient.addColorStop(1, "rgba(23, 210, 168, 0.2)");

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

            </script>
            <!-- framework load procedure .end -->

            <!-- Framework Core Library Dependencies -->
            <script src="/bower_components/angular/angular.min.js"></script>

            <!-- Framework Helper Modules -->
            <script src="/bower_components/ui-router/release/angular-ui-router.min.js"></script>
            <script src="/bower_components/ui-router-extras/release/ct-ui-router-extras.min.js"></script>
            <script src="/bower_components/angular-messages/angular-messages.min.js"></script>
            <script src="/bower_components/angular-aria/angular-aria.min.js"></script>
            <script src="/bower_components/angular-animate/angular-animate.min.js"></script>
            <!-- UI Framework and Helper Modules -->
            <script src="bower_components/angular-material/angular-material.min.js"></script>
            <script src="/bower_components/angular-touch/angular-touch.min.js"></script>
            <script src="/bower_components/swiper/dist/js/swiper.jquery.min.js"></script>
            <script src="/bower_components/javascript-detect-element-resize/jquery.resize.js"></script>
            <script src="/bower_components/angular-gridster/dist/angular-gridster.min.js"></script>


            <script src="shell_specific_components/libs/newblur.min.js"></script>
            <script src="shell_specific_components/libs/angular-swiper.js"></script>
            <!--        <script src="shell_specific_components/libs/angular-filter.js"></script>-->
            <!--        <script src="shell_specific_components/libs/ngDialog.min.js"></script>-->
            <script src="shell_specific_components/libs/v-accordion.min.js"></script>

            <script src="bower_components/perfect-scrollbar/min/perfect-scrollbar.min.js"></script>
            <script src="bower_components/perfect-scrollbar/min/perfect-scrollbar.with-mousewheel.min.js"></script>
            <script src="bower_components/angular-perfect-scrollbar/src/angular-perfect-scrollbar.js"></script>

            <script src="bower_components/angular-click-outside-master/clickoutside.directive.js"></script>
            <script src="bower_components/angular-scroll/angular-scroll.min.js"></script>
            <script src="shell_specific_components/libs/ng-croppie.min.js"></script>
            <!-- UI Micro Kernal Modules -->
            <script src="/uimicrokernel/socket.io-1.2.0.js"></script>
            <script src="/uimicrokernel/uimicrokernel.js"></script>
            <!-- Shell Specific Global Modules -->

            <script src="shell_specific_components/libs/mambatidirectives.min.js"></script>
            <script src="shell_specific_components/libs/widget.min.js"></script>
            <script src="shell_specific_components/libs/mambatirenderingengine.min.js"></script>
            <script src="shell_specific_components/filters/dw-shell-common-filters.min.js"></script>
            <script src="shell_specific_components/libs/childapp-container-directive.min.js"></script>

            <!-- Shell Specific Local Modules -->
            <script src="shell_specific_components/applicationbootstrap/duoworld-frameworkshell.min.js"></script>
            <script src="shell_specific_components/applicationbootstrap/duoworld-themeconfiguration.min.js"></script>
            <!-- Shell Specific Factories -->
            <script src="shell_specific_components/factories/duoworld-tennantinfo-factory.js"></script>
            <!-- Shell Specific Controllers -->
            <script src="shell_specific_components/controllers/duoworld-frameworkentrycontroller.min.js"></script>
            <script src="shell_specific_components/controllers/duoworld-framework-shell-controller.min.js"></script>
            <script src="shell_specific_components/controllers/duoworld-framework-shell-dock-controller.min.js"></script>
            <!-- child view controllers -->
            <script src="shell_specific_components/controllers/duoworld-framework-shell-launcher-controller.min.js"></script>
            <script src="shell_specific_components/controllers/duoworld-framework-shell-launcher-customapps-controller.min.js"></script>
            <script src="shell_specific_components/controllers/duoworld-framework-shell-launcher-defaultapps-controller.min.js"></script>
            <!-- default app controllers-->
            <script src="scripts/defaultappcontrollers/duoworld-framework-shell-childapp-userprofile-controller.min.js"></script>
            <script src="scripts/defaultappcontrollers/duoworld-framework-shell-childapp-settings-controller.min.js"></script>
            <script src="shell_specific_components/controllers/cloudcharge.min.js"></script>

    </body>

    </html>
