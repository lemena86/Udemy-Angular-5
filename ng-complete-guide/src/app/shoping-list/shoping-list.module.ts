import { NgModule } from '@angular/core';
import { ShopingListComponent } from './shoping-list.component';
import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ShopingListRoutingModule } from './shoping-list.routing.module';

@NgModule({
  declarations: [
    ShopingListComponent,
    ShopingEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ShopingListRoutingModule
  ]
})
export class ShopingListModule {

}
