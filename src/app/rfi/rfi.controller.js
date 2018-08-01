var varHost = "";
export class RfiController {
  constructor ($http,$location,$state) {
    'ngInject';
   
    this.$http = $http; 
    this.$state = $state;
    varHost = $location.host();
    this.getRfi();

}
 postRfi(){
   var url = 'http://'+varHost+':5000/api/rfi'
   this.$http.post(url, {rfi: this.rfi });
   this.getRfi();

 }

 getRfi(){
   var vm = this;
   var url = 'http://'+varHost+':5000/api/rfi'
  this.$http.get(url).then(function(result){
    vm.rfis = result.data;
  })

 }
}
