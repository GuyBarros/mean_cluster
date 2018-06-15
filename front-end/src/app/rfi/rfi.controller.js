export class RfiController {
  constructor ($http) {
    'ngInject';
    
    this.$http = $http;
    this.getRfi();

}
 postRfi(){
   this.$http.post('http://localhost:5000/api/rfi', {rfi: this.rfi })
 }

 getRfi(){
   var vm = this;
  this.$http.get('http://localhost:5000/api/rfi').then(function(result){
    vm.rfis = result.data;
  })
 }
}
