var varHost = "";
export class RfiController {
  constructor ($http,$location) {
    'ngInject';
    
    this.$http = $http;
    varHost = $location.host();
    this.getRfi();

}
 postRfi(){
   var url = 'http://'+varHost+':5000/api/rfi'
   this.$http.post(url, {rfi: this.rfi })

 }

 getRfi(){
   var vm = this;
   var url = 'http://'+varHost+':5000/api/rfi'
  this.$http.get(url).then(function(result){
    vm.rfis = result.data;
  })
 }
}

