import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload';

import { AwesomePipe }         from './awesome.pipe';
import { HighlightDirective }  from './highlight.directive';


@NgModule({
  imports:      [ CommonModule, FileUploadModule ],
  declarations: [ AwesomePipe, HighlightDirective ],
  exports: [ 
    AwesomePipe,
    CommonModule, 
    FileSelectDirective, 
    FileDropDirective, 
    FormsModule,
    FileUploadModule,
    HighlightDirective]
})
export class SharedModule { }
