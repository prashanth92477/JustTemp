import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';


import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsService } from './services/logs.service';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    UsersComponent,
    PostsComponent,
    PostFormComponent,
    LogsComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule

  ],
  providers: [DataService,PostService,LogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
