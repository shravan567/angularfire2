import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { CompanyService } from '../company.service';





@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  company: Observable<any[]>;
  
    constructor(private service: CompanyService) {
      this.company = service.company;
  }

  ngOnInit() {
  }

  saveCompany(company){
    this.service.saveCompany(company);    
  }


  editCompany(company){
    this.service.editCompany(company);    
  }
  removeCompany(company){
    this.service.removeCompany(company);    
  }

}
