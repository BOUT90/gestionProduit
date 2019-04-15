import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMocService } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProduitService } from './produit/produit.service';
import { HttpClientModule } from '@angular/common/http';
import { ProduitResolver } from './produit/produit.resolver';


const appRoutes: Routes = [
  { path: 'produit',
    component: ProduitComponent,
    resolve: {
      produits : ProduitResolver
    }
  },
  { path: 'dashboard',
   component: DashboardComponent
},

  // { path: 'users',
  //   component: UserListComponent
  // },
  // { path: 'new-user',
  //   component: NewUserComponent
  // },
  { path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  // { path: 'notFound',
  //   component: FourOhFourComponent
  // },
  { path: '**',
    redirectTo: 'dashboard'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProduitMocService, ProduitService, ProduitResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
