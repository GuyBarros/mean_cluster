var varHost = "";
export function config ($logProvider, toastrConfig, $authProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
  // set localhost for auth provider
  varHost = window.location.hostname; //$location.host();
  var url = 'http://'+varHost+':5000';
  console.log("config",varHost)
  $authProvider.signupUrl = url+'/auth/register';
  $authProvider.loginUrl = url+'/auth/login';
}
