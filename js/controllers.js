'use strict';
app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
 	$scope.menu = [
    {
      link : '',
      title: 'Dashboard',
      icon: 'dashboard'
    },
  //   {
  //     link : '',
  //     title: 'Friends',
  //     icon: 'group'
  //   },
  //   {
  //     link : '',
  //     title: 'Messages',
  //     icon: 'message'
  //   }
  // ];
  // $scope.admin = [
  //   {
  //     link : '',
  //     title: 'Trash',
  //     icon: 'delete'
  //   },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    }
  ];
  $scope.activity = [
      {
        what: 'Brunch this weekend?',
        who: 'Ali Conners',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        what: 'Summer BBQ',
        who: 'to Alex, Scott, Jennifer',
        when: '3:08PM',
        notes: "Wish I could come out but I'm out of town this weekend"
      },
      {
        what: 'Oui Oui',
        who: 'Sandra Adams',
        when: '3:08PM',
        notes: "Do you have Paris recommendations? Have you ever been?"
      },
      {
        what: 'Birthday Gift',
        who: 'Trevor Hansen',
        when: '3:08PM',
        notes: "Have any ideas of what we should get Heidi for her birthday?"
      },
      {
        what: 'Recipe to try',
        who: 'Brian Holt',
        when: '3:08PM',
        notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
      },
    ];
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
  
  $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
}]);

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];
  
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};





//grafico

	

	

	






// GRAFICO
app.controller("LineCtrl", ['$scope', '$timeout', 'dateFilter', function ($scope, $timeout, dateFilter){

  // $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  // $scope.series = ['Series A', 'Series B'];
  // $scope.data = [
  //   [65, 59, 80, 81, 56, 55, 40, 25],
  //   [28, 48, 40, 19, 86, 27, 90, 98]
  // ];


//reloj

	$scope.updateTime = function(){
		$timeout(function(){
		    $scope.theclock = (dateFilter(new Date(), 'hh:mm:ss'));
			$scope.updateTime();
		},1000);
	};

	$scope.updateTime();

  //labels
  $scope.datahits = "";
	$scope.charType = "";
	$scope.chartLegend = true;
	$scope.chartLabels = ['','','','','','','','','',''];
	$scope.chartSeries = ['Total Visitas', 'Aviso 2'];
	$scope.chartOptions = {
      animation: false, 
      barStrokeWidth : 5, 
      barValueSpacing : 6, 
      animationEasing: "bar",
      animationSteps: 60, 
      scaleOverride: false, 
      // scaleLineColor: "rgba(0,0,0,.1)",
      scaleOverride: true, 
      scaleStartValue: 0, 
      scaleStepWidth: 1, 
      scaleSteps: 100};

  // $scope.colors = ['#FFB100','#FFB100','#FFB100','#FFB100'];

	$scope.chartData = [
		[0,0,0,0,0,0,0,0,0,0]//, 59, 80, 81, 56, 55, 40],
		//[]//, 48, 40, 19, 86, 27, 90]
	];

// GLOBALES+
           // var msg         ="";
           var stringMsg     = "";
           var newHIts       = "";
           var newVehHits    = "";
           var newRemHits    = "";
           var newPrdHits    = "";
           var newProHits    = "";
           var newSerHits    = "";
           var newEmpHits    = "";
           var newDesJits    = "";
           var newSocJits    = "";
           var newMobJits    = "";
           var newDesJits    = "";
           var newSoMJits    = "";
           var newSeNJits    = "";
           var newSeMJits    = "";

$scope.updateGraph = function(){
	// console.log('estamos aca');
	
                  console.log(stringMsg);

                  var oldStringMsg = stringMsg;

      // $.ajax({url:"http://rstats.emol.com/economicosResponse", type: 'GET', data:{'referrer': document.referrer}, xhrFields: { withCredentials: true }})
      $.ajax({url:"http://rtclient.ecn.cl/economicosResponse", type: 'GET', data:{'referrer': document.referrer}, xhrFields: { withCredentials: true }})
        .done(function( msg ) {
           // alert( "Data Saved: " + msg.split(',')[0] );
         
       //  "ECONOMICOS:HITS", 
       //  "ECONOMICOS:VEHICULOS:HITS", 
       //  "ECONOMICOS:REMATES:HITS", 
       //  "ECONOMICOS:PROPIEDADES:HITS",
       //  "ECONOMICOS:PRODUCTOS:HITS",
       //  "ECONOMICOS:SERVICIOS:HITS",
       //  "ECONOMICOS:EMPLEO:HITS",
       //  "ECONOMICOS:DESKTOP:HITS",
       //  "ECONOMICOS:SOCIAL:HITS",
       //  "ECONOMICOS:MOBILE:HITS",
       //  "ECONOMICOS:SOCIAL_MOBILE:HITS",
       //  "ECONOMICOS:SEARCH_ENGINE:HITS",
       //  "ECONOMICOS:SEACH_MOBILE:HITS"


            stringMsg     = msg.split(',');
            newHIts       = stringMsg[0] - oldStringMsg[0];
            newVehHits    = stringMsg[1];
            newRemHits    = stringMsg[2];
            newPrdHits    = stringMsg[3];
            newProHits    = stringMsg[4];
            newSerHits    = stringMsg[5];
            newEmpHits    = stringMsg[6];
            newDesJits    = stringMsg[7];
            newSocJits    = stringMsg[8];
            newMobJits    = stringMsg[9];
            newDesJits    = stringMsg[10];
            newSoMJits    = stringMsg[11];
            newSeNJits    = stringMsg[12];
            newSeMJits    = stringMsg[13];

          $(".FlexItemTot .ItemText").text(newHIts);
          $("#ProdItem .ItemText").text(newProHits);
          $("#VehItem .ItemText").text(newVehHits);
          $("#propItem .ItemText").text(newPrdHits);
          $("#servItem .ItemText").text(newSerHits);
          $("#empItem .ItemText").text(newEmpHits);
          $("#remItem .ItemText").text(newRemHits);
          $scope.datahits = newHIts;
        });




  $timeout(function(){
      var aux = Math.floor((Math.random()*60)+1);
      var aux2 = Math.floor((Math.random()*100)+1);
      var aux3 = Math.floor((Math.random()*40)+1);
      var aux4 = Math.floor((Math.random()*20)+1);
      var aux5 = Math.floor((Math.random()*90)+1);
      var aux6 = Math.floor((Math.random()*70)+1);
      $scope.chartData[0].push($scope.datahits);
      // $scope.chartData[1].push(aux2);
      // $scope.chartData[2].push(aux3);
      // $scope.chartData[3].push(aux4);
      // $scope.chartData[4].push(aux5);
      // $scope.chartData[5].push(aux6);
      // $scope.colors = ['#FD1F5E','#1EF9A1','#7FFD1F','#68F000'];
      $scope.chartLabels.push($scope.theclock);
      if($scope.chartLabels.length > 10){
        $scope.chartLabels.shift();
        $scope.chartData[0].shift();
        // $scope.chartData[1].shift();
        // $scope.chartData[2].shift();
        // $scope.chartData[3].shift();
        // $scope.chartData[4].shift();
        // $scope.chartData[5].shift();

      }
      $scope.updateGraph();

		}, 3000);
	};
	$scope.updateGraph();


  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

console.log($scope);

 
 // Simulate async data update
 

}]);

// Cuadros




// ICONS

 app.controller('DemoCtrl', function($scope) {})
  .config(function($mdIconProvider) {
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
   });







