import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountserviceService } from './accountservice.service';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tabs',
    children: [
      { path: 'login', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },

    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cerbungdetail/:index',
    loadChildren: () => import('./cerbungdetail/cerbungdetail.module').then(m => m.CerbungdetailPageModule)
  },
  {
    path: 'createcerbung',
    loadChildren: () => import('./createcerbung/createcerbung.module').then(m => m.CreatecerbungPageModule),
  },
  {
    path: 'createcerbung/section1',
    loadChildren: () => import('./createcerbung/createcerbung.module').then(m => m.CreatecerbungPageModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersPageModule)
  },
  {
    path: 'preference',
    loadChildren: () => import('./preference/preference.module').then(m => m.PreferencePageModule)
  },
  {
    path: 'following',
    loadChildren: () => import('./following/following.module').then(m => m.FollowingPageModule)
  },
  {
    path: 'newaccount',
    loadChildren: () => import('./newaccount/newaccount.module').then(m => m.NewaccountPageModule)
  },
  {
    path: 'userdetail',
    loadChildren: () => import('./userdetail/userdetail.module').then( m => m.UserdetailPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'respond',
    loadChildren: () => import('./respond/respond.module').then( m => m.RespondPageModule)
  },
  {
    path: 'notifdetail/:index',
    loadChildren: () => import('./notifdetail/notifdetail.module').then( m => m.NotifdetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private accountService: AccountserviceService) {

  }

}
