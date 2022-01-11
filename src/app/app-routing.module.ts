import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UnicornComponent } from './pages/unicorn/unicorn.component';
import { UnicornsListComponent } from './pages/unicorns-list/unicorns-list.component';

const routes: Routes = [
  { path: 'unicorns', component: UnicornsListComponent },
  { path: 'unicorn/:id', component: UnicornComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
