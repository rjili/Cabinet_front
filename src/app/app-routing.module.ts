import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { JwtModule } from '@auth0/angular-jwt';
import { TokenInterceptor } from './@core/authentication/token.interceptor';
import { AppSettings } from './app.settings';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  Shell.childRoutes([
    {
      path: 'home',
      loadChildren: () => import('./content/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'starter',
      loadChildren: () => import('./content/start/start.module').then(m => m.StartModule)
    },
    {
      path: 'Calendar',
      loadChildren: () => import('./content/Calendar/Calendar.module').then(m => m.CalendarModule)
    }
  ]),

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export function tokenGetter() {
  var token: TokenInterceptor;
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      useHash: true,
      enableTracing: false
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    ToastrModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [
    AppSettings,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    TokenInterceptor,
    {
      provide: JwtModule,
      useFactory: tokenGetter,
      deps: [TokenInterceptor, Router]
    }
  ]
})
export class AppRoutingModule { }
