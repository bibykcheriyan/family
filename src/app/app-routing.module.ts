import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [
  { path: 'dashbord', loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule) ,canActivate : [AuthGaurdService]},
  { path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule) },
  { path: 'health', loadChildren: () => import('./health/health.module').then(m => m.HealthModule) },
  { path: 'memories', loadChildren: () => import('./memories/memories.module').then(m => m.MemoriesModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'logout', loadChildren: () => import('./logout/logout.module').then(m => m.LogoutModule) },
  { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
