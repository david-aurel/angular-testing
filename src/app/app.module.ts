import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { SummaryPipe } from './truncate/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomTitleCasePipe } from './title/custom-title-case.pipe';
import { TitleComponent } from './title/title.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { NgIfComponent } from './ngif/ngif.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContainerComponent } from './container/container.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { TruncateComponent } from './truncate/truncate.component';
import { EventComponent } from './event/event.component';
import { SwitchComponent } from './switch/switch.component';
import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubComponent } from './github/github.component';
import { GithubService } from './services/github.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './forms/forms.component';
import { MiscComponent } from './misc/misc.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    CustomTitleCasePipe,
    TitleComponent,
    PanelComponent,
    LikeComponent,
    NgIfComponent,
    ZippyComponent,
    ContainerComponent,
    NgmodelComponent,
    TruncateComponent,
    EventComponent,
    SwitchComponent,
    ChangedetectionComponent,
    ContactFormComponent,
    SignupFormComponent,
    TopicFormComponent,
    ResetPasswordComponent,
    PostsComponent,
    GithubComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NavbarComponent,
    FormsComponent,
    MiscComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'followers/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'misc', component: MiscComponent },
      { path: 'posts', component: PostsComponent },
      { path: '', component: HomeComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    AuthorsService,
    PostService,
    GithubService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
