import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleDirective } from './directive/style.directive';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { PowPipe } from './custom-pipes/pow.pipe';
import { AddMarkerPipe } from './custom-pipes/add-marker.pipe';
import { FilterPipe } from './custom-pipes/filter.pipe';
import { MySevicesComponent } from './my-sevices/my-sevices.component';
import { StrimRxJsTestComponent } from './strim-rx-js-test/strim-rx-js-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AngularFormTestComponent } from './angular-form-test/angular-form-test.component';
import {MatInputModule} from '@angular/material/input';
import { HttpTestComponent } from './http-test/http-test.component';
import {HttpClientModule} from "@angular/common/http";
import { AnimationTestComponent } from './animation-test/animation-test.component';
import { AnimateBoxOneComponent } from './animate-box-one/animate-box-one.component';
import { AnimateBoxTwoComponent } from './animate-box-two/animate-box-two.component';
import { ExapleAnimationComponent } from './exaple-animation/exaple-animation.component';


@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    PipesTestComponent,
    PowPipe,
    AddMarkerPipe,
    FilterPipe,
    MySevicesComponent,
    StrimRxJsTestComponent,
    AngularFormTestComponent,
    HttpTestComponent,
    AnimationTestComponent,
    AnimateBoxOneComponent,
    AnimateBoxTwoComponent,
    ExapleAnimationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
