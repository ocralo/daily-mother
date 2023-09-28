import { Routes, RouterModule } from '@angular/router';
import { SingupContainerComponent } from './singup-container.component';

const routes: Routes = [
  {
    path: '/singup',
    component: SingupContainerComponent,
  }
];
export const SingupRoutes = RouterModule.forChild(routes);
