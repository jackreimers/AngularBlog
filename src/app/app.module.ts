import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        IconButtonComponent,
        BannerComponent,
        FooterComponent,
        NavigationMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
