import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoriesRoutingModule } from './memories-routing.module';
import { MemoriesComponent } from './memories.component';


@NgModule({
  declarations: [
    MemoriesComponent
  ],
  imports: [
    CommonModule,
    MemoriesRoutingModule
  ]
})
export class MemoriesModule { }
