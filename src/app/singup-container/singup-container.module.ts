import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupContainerComponent } from './singup-container.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule,IonicModule],
  declarations: [SingupContainerComponent],
  exports: [SingupContainerComponent]
})
export class SingupContainerModule {}
