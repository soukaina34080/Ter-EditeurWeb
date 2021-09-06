import {Component, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//import ace from "ace-builds"
import 'src/assets/js/custom.js';
import 'brace';
import 'brace/ext/language_tools';

declare var myExtObject: any;
declare var windowObjectReference: any;
declare var ainas : any;



declare var myExtObject: any;
declare var windowObjectReference: any;
declare var ainas : any;



@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})

export class ToolBarComponent implements OnInit {
  text = '';

  @ViewChild('editor') editor;
  options: any = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,};

  fileUrl;
  constructor(private sanitizer: DomSanitizer){

  }
  public ngOnInit():void{
    this.editor.getEditor().$blockScrolling = Infinity;
  }

  openRequestedPopup() {
    windowObjectReference = window.open("resizable,scrollbars,status");
  }

  save() {
    console.log('save');
    var text = '';
    const data = document.getElementsByClassName('ace_line');
    for (var i = 0; i < data.length; i++) {
      text += data[i].innerHTML;
      text += "\n";
    }
    const blob = new Blob([text], { type: 'application/octet-stream' });
    window.open(window.URL.createObjectURL(blob));
  }

  change(){
    ainas.getFileInfo();
  }


}
