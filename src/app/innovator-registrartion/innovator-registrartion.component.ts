import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material';
import subdomain from 'src/assets/jsonfiles/data2.json';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';
import { ModalSuccessComponent } from '../modal-success/modal-success.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-innovator-registrartion',
  templateUrl: './innovator-registrartion.component.html',
  styleUrls: ['./innovator-registrartion.component.css']
})
export class InnovatorRegistrartionComponent implements OnInit {
  domain = new FormControl();
  domainList: string[] = ['IT', 'TOURISM'];
 
  skills = new FormControl();
  skillsList: string[] = ['c','java','python'];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isOptional = true;

 skillList: string[] = [ 'c', 'java',];

 form: any = {};

errorMessage = '';
pass:string='';
conf:string;
  LoginService: any;
i:any;
subDomainList:any=[];

// mat-chips code
visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  subDomainCtrl = new FormControl();
  filteredSubDomains: Observable<string[]>;
  subDomains: string[] = [];
  // allSubDomains: string[] = ['Automation Testing', 'Front End Development', 'Back End Development', 'Animation', 'Selenium Testing'];
  allSubDomains: string[] = [];
  @ViewChild('subDomainInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;


  constructor(private _formBuilder: FormBuilder,private dialog:MatDialog,private registrationService:RegistrationServiceService, private router: Router, private  http:HttpClient) 
  {
    this.filteredSubDomains = this.subDomainCtrl.valueChanges.pipe(
      startWith(null),
      map((subDomain: string | null) => subDomain ? this._filter(subDomain) : this.allSubDomains.slice()));
 
      
       // taking json data for rsubDomains
    this.http.get('./assets/jsonfiles/data2.json').subscribe(
      (data:any) => {
        // this.allDomains = data ;	 // FILL THE ARRAY WITH DATA.
          console.log(data)
          data.forEach(e => {
            this.allSubDomains.push(e)
            
          });
          this.filteredSubDomains = this.subDomainCtrl.valueChanges.pipe(
              startWith(null),
              map((domain: string | null) => domain ? this._filter(domain) : this.allSubDomains.slice()));
            // console.log(this.filteredDomains)
            this.filteredSubDomains.subscribe(console.log)
      }
    );


    }

   add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.subDomains.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.subDomainCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.subDomains.indexOf(fruit);

    if (index >= 0) {
      this.subDomains.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.subDomains.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.subDomainCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSubDomains.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }


  getErrorFnameMessage(){
    // return this.firstFormGroup.controls.FirstName.hasError('required') ? 'You must enter a value':'';
  }
 
  getpassErrorMessage(){
    //return this.password.hasError('required') ? 'You must enter a value': '';
  }
 
  getconfirmErrorMessage(){
  //  if(this.password.value!=this.confirm.value) {
  //  return "Password Not Matching";
   // }
  }
  ngOnInit() {
    // for (this.i in subdomain) {
    //   console.log(subdomain[this.i]);
    //   this.subDomainList[this.i]= subdomain[this.i];
    //   // console.log(this.subDomainList);
    // }
    
      this.firstFormGroup = this._formBuilder.group({
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required]
    
    
      });
  


  
    
  
  this.secondFormGroup = this._formBuilder.group({
    email:['',Validators.email],
    password:['',Validators.minLength(8)],

    domainCtrl: ['', Validators.required]
   
     
    
     

  });
  this.thirdFormGroup = this._formBuilder.group({
    subdomain:[''],
    skill:['']
  });
}

  onSubmit()
  {

    this.pass= this.secondFormGroup.controls.password.value;
    this.conf= this.secondFormGroup.controls.confirm.value;
  }
 
 register():void {
   console.log(this.form);
   let innovatorData={
   
      emailId:this.secondFormGroup.controls.email.value,
      password:this.secondFormGroup.controls.password.value,
      name:this.firstFormGroup.controls.FirstName.value,
      domain:this.secondFormGroup.controls.domainCtrl.value,
      subDomain:this.thirdFormGroup.controls.subdomain.value,
   }

   console.log(innovatorData);
   this.registrationService.addInnovatorProfile(innovatorData);
   this.dialog.open(ModalSuccessComponent);
   this.router.navigateByUrl('/home');


  }
}