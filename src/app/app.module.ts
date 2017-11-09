import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule ,MatCardModule,MatInputModule,MatButtonModule,MatIconModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/company.service';
import { FormsModule } from '@angular/forms';
import { CompanyListComponent } from './company/company-list/company-list.component';

import { AppRountingModule} from './app-rounting/app-rounting.module';



import { RouterTestingModule } from '@angular/router/testing';
export const firbaseConfig = {
  apiKey: 'AIzaSyDJJqaBZnZPMm38bNYmBpU_6uFD1iIA0w4',
  authDomain: 'buildingappswith.firebaseapp.com',
  databaseURL: 'https://buildingappswith.firebaseio.com',
  projectId: 'buildingappswith',
  storageBucket: 'buildingappswith.appspot.com',
  messagingSenderId: '326904524551'
};
@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    RouterTestingModule ,
    FormsModule,
    AngularFireModule.initializeApp(firbaseConfig),   
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
   
    MatIconModule
    
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
