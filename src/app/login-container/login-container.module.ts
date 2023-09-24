import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './login-container.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [CommonModule,IonicModule],
  declarations: [LoginContainerComponent],
  exports: [LoginContainerComponent],
})
export class LoginContainerModule {}
