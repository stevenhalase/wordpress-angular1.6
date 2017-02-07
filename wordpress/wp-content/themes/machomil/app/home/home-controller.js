app.controller('homeCtrl', homeController);

homeController.$inject = [];

function homeController() {
  var hCtrl = this;

  hCtrl.title = 'Home controller';

}