import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StoreModule.forRoot({userState:loginReducer}), ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
