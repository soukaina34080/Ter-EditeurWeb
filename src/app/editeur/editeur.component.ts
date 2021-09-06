import {Component, OnInit, ViewChild} from '@angular/core';
//import ace from "ace-builds"
import 'ace-builds/webpack-resolver';
import { Router, NavigationEnd } from '@angular/router';
import 'brace';
import 'brace/ext/language_tools';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.scss']
})



export class EditeurComponent implements OnInit {
  text = '';

  langages = 'php html css js mysql'.split(' ');
  langagechoisi = 'text';
  onChangeLang(newValue){
    console.log(newValue);
    this.langagechoisi = newValue;
  }


  @ViewChild('editor') editor;

  options: any = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    wrap: true,
    autoScrollEditorIntoView: true,
    indentedSoftWrap: false,
    fontSize: "12pt",
    showLineNumbers: true,
    showGutter: true,

  };


  constructor(private router: Router) { }

  ngOnInit(): void {
    document.getElementById("explorer").hidden = true;
    document.getElementById("grille").hidden = true;
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    })

    //this.editor.getEditor().$blockScrolling = Infinity;
  }

  swithToProject($event: any) {
    document.getElementById("explorer").hidden = true;
    document.getElementById("grille").hidden = true;
   // document.getElementById("editeur").hidden = true;
    document.getElementById($event).hidden = false;
  }

}
