import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'gigdetails',
    loadChildren: () => import('./pages/gigdetails/gigdetails.module').then( m => m.GigdetailsPageModule)
  },
  {
    path: 'gigprogress',
    loadChildren: () => import('./pages/gigprogress/gigprogress.module').then( m => m.GigprogressPageModule)
  },
  {
    path: 'pendinggigs',
    loadChildren: () => import('./pages/pendinggigs/pendinggigs.module').then( m => m.PendinggigsPageModule)
  },
  {
    path: 'gigreviews',
    loadChildren: () => import('./pages/gigreviews/gigreviews.module').then( m => m.GigreviewsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'confirmpayout',
    loadChildren: () => import('./pages/confirmpayout/confirmpayout.module').then( m => m.ConfirmpayoutPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./pages/myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'mywallet',
    loadChildren: () => import('./pages/mywallet/mywallet.module').then( m => m.MywalletPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
