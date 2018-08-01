import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {CustomDataBinding} from './CustomDataBinding/customDataBinding.component';
import {CustomPipe} from './CustomPipe/customPipe.component';
import {AddPipe} from './CustomPipe/add.pipe';
import {DataBinding} from './DataBinding/dataBinding.component';
import { FormsModule }   from '@angular/forms';
import {PipeComponent} from './Pipe/pipe.component';
import {CustomDirectiveComponent} from './CustomDirective/CustomDirective.component';
import {FontcolorDirective,FontcolorDirective1} from './CustomDirective/fontcolor.directive';



const appRoutes: Routes = [
  { path: 'DataBinding', component: DataBinding },
  { path: 'CustomDataBinding',component: CustomDataBinding },
  { path: 'CustomPipe',component: CustomPipe },
  { path: 'PipeComponent',component: PipeComponent },
  { path: 'CustomDirectiveComponent',component: CustomDirectiveComponent }
   //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule
  ],
  declarations: [
    AppComponent,DataBinding,CustomDataBinding,CustomPipe,AddPipe,
    PipeComponent,CustomDirectiveComponent,FontcolorDirective,FontcolorDirective1],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
