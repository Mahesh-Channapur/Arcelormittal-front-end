import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { CitGlobalConstantService } from './services/api-collection';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from './materials/materials.module';
import { HeaderComponent } from './common-use/header/header.component';
import { FooterComponent } from './common-use/footer/footer.component';
import { SidebarComponent } from './common-use/sidebar/sidebar.component';
const APP_CONTAINERS = [
  SidebarComponent
];
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
  ],
  providers: [ApiService, CitGlobalConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
