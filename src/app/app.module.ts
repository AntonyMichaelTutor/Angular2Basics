import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {CustomDataBinding} from './CustomDataBinding/customDataBinding.component';
import {CustomPipe} from './CustomPipe/customPipe.component';
import {AddPipe} from './CustomPipe/add.pipe';
import {DataBinding} from './DataBinding/dataBinding.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {PipeComponent} from './Pipe/pipe.component';
import {CustomDirectiveComponent} from './CustomDirective/CustomDirective.component';
import {FontcolorDirective,FontcolorDirective1} from './CustomDirective/fontcolor.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { ObservablesComponent } from './observables/observables.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { MulPipe } from './CustomPipe/mul.pipe'


const appRoutes: Routes = [
  { path: 'DataBinding', component: DataBinding },
  { path: 'CustomDataBinding',component: CustomDataBinding },
  { path: 'CustomPipe',component: CustomPipe },
  { path: 'PipeComponent',component: PipeComponent },
  { path: 'CustomDirectiveComponent',component: CustomDirectiveComponent },
  { path: 'ReactiveForm',component: ReactiveFormComponent },
  { path: 'TemplateDriveForm',component: TemplateDriveFormComponent },
  { path: 'Observables',component: ObservablesComponent },
  { path: 'DependencyInjection',component: DependencyInjectionComponent }
   //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,ReactiveFormsModule
  ],
  declarations: [
    AppComponent,DataBinding,CustomDataBinding,CustomPipe,AddPipe,
    PipeComponent,CustomDirectiveComponent,FontcolorDirective,FontcolorDirective1, ReactiveFormComponent,TemplateDriveFormComponent, ObservablesComponent, DependencyInjectionComponent, MulPipe],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
