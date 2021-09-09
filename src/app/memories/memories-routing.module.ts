import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoriesComponent } from './memories.component';

const routes: Routes = [{ path: '', component: MemoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoriesRoutingModule { }
