/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { AuthController } from './auth/auth.controller';
import { RfiController } from './rfi/rfi.controller';
import { NavbarController } from '../app/components/navbar/navbar.controller';
import { compareToDirective } from './directives/compareTo.directive';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('meanCluster', ['ui.router', 'ui.bootstrap', 'toastr','satellizer'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .controller('MainController', MainController)
  .controller('AuthController', AuthController)
  .controller('RfiController', RfiController)
  .controller('NavbarController', NavbarController)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('webDevTec', WebDevTecService)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('compareTo', compareToDirective);

