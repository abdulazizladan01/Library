import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { VrComponent } from './dashboard/vr/vr.component';
import { CbtComponent } from './dashboard/cbt/cbt.component';
import { QuestionComponent } from './dashboard/cbt/question/question.component';
import { LibraryComponent } from './dashboard/library/library.component';
import { LoginComponent } from './login/login.component';
import { SelectionComponent } from './dashboard/cbt/selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    VrComponent,
    CbtComponent,
    QuestionComponent,
    LibraryComponent,
    LoginComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
