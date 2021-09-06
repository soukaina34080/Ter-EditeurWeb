import { Component, NgModule } from '@angular/core';
import { StorageServiceModule} from 'ngx-webstorage-service'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes,NavigationEnd } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NewFolderDialogComponent } from './file-explorer/modals/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent } from './file-explorer/modals/rename-dialog/rename-dialog.component';
import { FileExplorerComponent} from './file-explorer/file-explorer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { RepertoryComponent } from './repertory/repertory.component';
import { NewFileDialogComponent } from './file-explorer/modals/new-file-dialog/new-file-dialog.component';
import { ToolBarComponent} from './tool-bar/tool-bar.component';
import { EditeurComponent } from './editeur/editeur.component';
import { AceEditorModule } from 'ngx-ace-editor-wrapper';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.gard';
import { RegisterComponent } from './register/register.component';
import { ProjectComponent } from './project/project.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfilComponent } from './profil/profil.component';
// Créer les chemin vers les différentes composantes


const appRoutes: Routes = [
  {path: '',component:MainComponent},
  {path: 'editeur#', component: EditeurComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path : 'login', component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path : 'repertory', component: RepertoryComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', component: SettingsComponent},
  {path : '**', redirectTo: '/not-found'} //Toujours gardé à la fin car il regarde d'abord tous les chemins
  ];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FourOhFourComponent,
    LoginComponent,
    RegisterComponent,
    NewFolderDialogComponent,
    RenameDialogComponent,
    FileExplorerComponent,
    RepertoryComponent,
    NewFileDialogComponent,
    ToolBarComponent,
    EditeurComponent,
    SideBarComponent,
    ProjectComponent,
    SearchComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    StorageServiceModule,
    AceEditorModule,
    ToastrModule.forRoot(),
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  providers: [MainComponent,LoginComponent,RegisterComponent],
  bootstrap: [AppComponent,MainComponent]
})
export class AppModule { }
