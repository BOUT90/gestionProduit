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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProduitService } from './produit/produit.service';
import { HttpClientModule } from '@angular/common/http';
import { ProduitResolver } from './produit/produit.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';


const appRoutes: Routes = [
  { path: 'login',
   component: LoginComponent
  },
  { path: 'home',
   component: HomeComponent,
   children: [
            { path: 'produit',
            component: ProduitComponent,

                resolve: {
                  produits : ProduitResolver
                },

            outlet: 'contentOutlet'
            },

            { path: 'dashboard',
            component: DashboardComponent,
            outlet: 'contentOutlet'
            },
   ]
  },

  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProduitMocService, ProduitService, ProduitResolver, AppService, NgModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
