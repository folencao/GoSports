import { AuthGuardService } from './../../core/services/auth-guard.service';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { HeaderFooterComponent } from 'src/app/core/layout/components/header-footer/header-footer.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HeaderFooterComponent,
    children: [{ path: '', component: HomeComponent }],
    canActivate: [AuthGuardService],
  },
];
