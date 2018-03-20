import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { ShopingListModule } from './shoping-list/shoping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { reducers } from './store/app.reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-universal-app' }),
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    ShopingListModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Recipe Book DevTools'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
