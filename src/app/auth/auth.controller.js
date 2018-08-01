export class AuthController {
 constructor($auth,$state){
     'ngInject';

     this.$auth = $auth;
     this.$state = $state;
    
 }

    register(){
        var vm = this;
       this.$auth.signup(this.user).then(function (token){
        vm.$auth.setToken(token) 
       }).then(vm.$state.go("rfi"));
   }

   login(){
    var vm = this;
   this.$auth.login(this.login.user).then(function (token){
    vm.$auth.setToken(token)
   }).then(vm.$state.go("rfi"));
}
   
  }