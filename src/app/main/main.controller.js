var varHost = "";
export class MainController {
  constructor ($http,$location) {
    'ngInject';

    this.$http = $http;
    varHost = $location.host();
    //this.getMessages();

}
 postMessage(){
  var url = 'http://'+varHost+':5000/api/message'
   this.$http.post(url, {msg: this.message })
 }

 getMessages(){
   var vm = this;
  var url = 'http://'+varHost+':5000/api/message'
  this.$http.get(url).then(function(result){
    vm.messages = result.data;
  })
 }
}
