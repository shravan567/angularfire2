import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class CompanyService {
  companyRef: AngularFireObject<any>;
  company: Observable<any[]>;
  
    constructor(private db:AngularFireDatabase) {
      this.companyRef = db.object('company');
        this.company = this.companyRef.valueChanges();
     }
  
    ngOnInit() {
    }
  
    saveCompany(company){
      this.companyRef.set(company)
      .then(_ => console.log('success'))
      .catch(error => console.log(error));
      // Observable.from(this.companyRef.set(company)).
      // .catch(error => Observable.throw(error));
    }
    editCompany(company){
      this.companyRef.update(company)
      .then(_ => console.log('success'))
      .catch(error => console.log(error));  
    }
    removeCompany(company){
      this.companyRef.remove()
      .then(_ => console.log('success'))
      .catch(error => console.log(error)); 
    }
}
