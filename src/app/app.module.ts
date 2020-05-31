import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
