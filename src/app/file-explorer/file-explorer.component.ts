import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core'
import { FileElement } from './model/file-element'
import { FileService } from '../service/file.service'
import { NewFolderDialogComponent } from './modals/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './modals/rename-dialog/rename-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { NewFileDialogComponent } from './modals/new-file-dialog/new-file-dialog.component'

@Component({
  selector: 'app-file-explorer',
  template: `
    <div (contextmenu)="onRightClick($event)">
      Right clicked
      {{nRightClicks}}
      time(s).
    </div>
    `,
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})

export class FileExplorerComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  folderName : String

  selectedElement: FileElement

  @Input() fileElements: FileElement[]
  @Input() canNavigateUp: string
  @Input() path: string

  @Output() initialized = new EventEmitter<FileElement>()
  @Output() folderAdded = new EventEmitter<{ name: string }>()
  @Output() fileAdded = new EventEmitter<{ name : string }>()
  //@Output() folderName : String
  @Output() elementRemoved = new EventEmitter<FileElement>()
  @Output() elementRenamed = new EventEmitter<FileElement>()
  @Output() elementMoved = new EventEmitter<{
    element: FileElement
    moveTo: FileElement
  }>()
  @Output() navigatedDown = new EventEmitter<FileElement>()
  @Output() navigatedUp = new EventEmitter()

  deleteElement(element: FileElement) {
    this.elementRemoved.emit(element);
  }

  navigate(element: FileElement) {
    if (element.isFolder) {
      this.navigatedDown.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }

  moveElement(element: FileElement, moveTo: FileElement) {
    this.elementMoved.emit({ element: element, moveTo: moveTo });
  }

  openNewFolderDialog() {
    let dialogRef = this.dialog.open(NewFolderDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.folderAdded.emit({ name: res });
      }
    });
  }

  openNewFileDialog() {
    let dialogRef = this.dialog.open(NewFileDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.fileAdded.emit({ name: res });
      }
    });
  }

  openRenameDialog(element: FileElement) {
    let dialogRef = this.dialog.open(RenameDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        element.name = res;
        this.elementRenamed.emit(element);
      }
    });
  }

  selectElement(element: FileElement) {
    this.selectedElement = element;
  }

  download() {
    return JSON.parse(localStorage.getItem(''));
  }

  menuTopLeftPosition =  {x: '0', y: '0'}

  // reference to the MatMenuTrigger in the DOM
  @ViewChild(MatMenuTrigger, {static: true}) matMenuTrigger: MatMenuTrigger;

}



