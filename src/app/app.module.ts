import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogonComponent } from './logon/logon.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DiscordComponent } from './discord/discord.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollingImageComponent } from './scrolling-image/scrolling-image.component';

@NgModule({
  declarations: [
    AppComponent,
    LogonComponent,
    SignupComponent,
    MembersComponent,
    AboutUsComponent,
    DiscordComponent,
    HeaderComponent,
    FooterComponent,
    ScrollingImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
