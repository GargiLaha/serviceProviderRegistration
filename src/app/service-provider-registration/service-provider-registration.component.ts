import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import subdomain from 'src/assets/jsonfiles/data2.json';
import skills from 'src/assets/jsonfiles/data4.json';
import roles from 'src/assets/jsonfiles/data3.json';
import { RegistrationServiceService } from '../registration-service.service';
import { Router } from '@angular/router';
import { ModalSuccessComponent } from '../modal-success/modal-success.component';
import { HttpClient } from '@angular/common/http';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-service-provider-registration',
  templateUrl: './service-provider-registration.component.html',
  styleUrls: ['./service-provider-registration.component.css']
})
export class ServiceProviderRegistrationComponent implements OnInit {
  Domain = new FormControl();
  domainList: string[] = ['IT', 'TOURISM'];

  subdomain = new FormControl();
  visible = true;
  visibleRole = true;
  visibleSkill = true;


  selectable = true;
  selectableRole = true;
  selectableSkill = true;

  removable = true;
  removableRole = true;
  removableSkill = true;

  addOnBlurRole = true;
  addOnBlur = true;
  addOnBlurSkill = true;


  separatorKeysCodes: number[] = [ENTER, COMMA];
  subDomainCtrl = new FormControl();
  roleCtrl = new FormControl();
  skillCtrl = new FormControl();

  filteredSubDomains: Observable<string[]>;
  filteredRoles: Observable<string[]>;
  filteredSkills: Observable<string[]>;

  subDomains: any[] = [];
  roles: string[] = [];
  skills: string[] = [];

  allSubDomains: any[] = [];
  allRoles: string[] = [];
  allSkills: string[] = [];

  RolesList: any = roles;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isOptional = true;
  subDomainList: any = [];
  // skillSet: any = [];
  // i: any;

  form: any = {};
  errorMessage = '';
  pass: string = '';
  conf: string;
  LoginService: any;
  @ViewChild('roleInput', { static: false }) roleInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoRole', { static: false }) matAutoCompleteRole: MatAutocomplete;
  @ViewChild('subDomainInput', { static: false }) subDomainInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  @ViewChild('autoSkill', { static: false }) matAutoCompleteSkill: MatAutocomplete;
  @ViewChild('skillInput', { static: false }) skillInput: ElementRef<HTMLInputElement>;


  constructor(private _formBuilder: FormBuilder, private registrationService: RegistrationServiceService, private dialog: MatDialog, private router: Router, private http: HttpClient) {
    this.filteredSubDomains = this.subDomainCtrl.valueChanges.pipe(
      startWith(null),
      map((subDomain: string | null) => subDomain ? this._filter(subDomain) : this.allSubDomains.slice()));

    // taking json data for subDomains
    this.http.get('./assets/jsonfiles/data2.json').subscribe(
      (data: any) => {
        // this.allDomains = data ;	 // FILL THE ARRAY WITH DATA.
        // console.log(data)
        data.forEach(e => {
          this.allSubDomains.push(e)

        });
        this.filteredSubDomains = this.subDomainCtrl.valueChanges.pipe(
          startWith(null),
          map((subDomain: string | null) => subDomain ? this._filter(subDomain) : this.allSubDomains.slice()));
      }
    );

    // taking json data for roles
    this.http.get('./assets/jsonfiles/data3.json').subscribe(
      (data: any) => {
        data.forEach(e => {
          this.allRoles.push(e)
        })

        this.filteredRoles = this.roleCtrl.valueChanges.pipe(
          startWith(null),
          map((role: string | null) => role ? this._filterRole(role) : this.allRoles.slice()));
      }
    );

    // taking json data for skills

    this.http.get('./assets/jsonfiles/data4.json').subscribe(
      (data: any) => {

        data.forEach(e => {
          this.allSkills.push(e)
        })

        this.filteredSkills = this.skillCtrl.valueChanges.pipe(
          startWith(null),
          map((skill: string | null) => skill ? this._filterSkill(skill) : this.allSkills.slice()))
      }
    )

  }

  // sub-domain code goes here

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

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
  // role add
  addRole(event: MatChipInputEvent): void {
    if (!this.matAutoCompleteRole.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.roles.push(value.trim());
      }
      if (input) {
        input.value = '';
      }

      this.roleCtrl.setValue(null);

    }
  }
  //skill add

  addSkill(event: MatChipInputEvent): void {
    if (!this.matAutoCompleteSkill.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.skills.push(value.trim());
      }
      if (input) {
        input.value = '';
      }
      this.skillCtrl.setValue(null);
    }
  }


  remove(subDomain: string): void {
    const index = this.subDomains.indexOf(subDomain);
    if (index >= 0) {
      this.subDomains.splice(index, 1);
    }
  }

  removeRole(role: string): void {
    const index = this.roles.indexOf(role);
    if (index >= 0) {
      this.roles.splice(index, 1);
    }
  }
  removeSkill(skill: string): void {
    const index = this.skills.indexOf(skill);
    if (index >= 0) {
      this.skills.splice(index, 1)
    }
  }


  selected(event: MatAutocompleteSelectedEvent): void {
    this.subDomains.push(event.option.viewValue);
    this.subDomainInput.nativeElement.value = '';
    this.subDomainCtrl.setValue(null);

  }

  selectedRole(event: MatAutocompleteSelectedEvent): void {
    this.roles.push(event.option.viewValue);
    this.roleInput.nativeElement.value = '';
    this.roleCtrl.setValue(null);

  }

  selectedSkill(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);

  }


  private _filterRole(value: string) {
    const filterValue = value.toLowerCase();
    return this.allRoles.filter(role => role.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allSubDomains.filter(subDomain => subDomain.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterSkill(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allSkills.filter(skill => skill.toLowerCase().indexOf(filterValue) === 0);
  }


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.minLength(8)],
      domainCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      subdomain: [''],
      skill: [''],
      RoleCtrl: ['', Validators.required],
      chargePerHour: ['', Validators.required]
    });
  }
  onSubmit() {
    this.pass = this.secondFormGroup.controls.password.value;
    this.conf = this.secondFormGroup.controls.confirm.value;
  }

  register(): void {
    console.log(this.form);
    let providerData = {
      name: this.firstFormGroup.controls.FirstName.value,
      emailId: this.secondFormGroup.controls.email.value,
      password: this.secondFormGroup.controls.password.value,
      domain: this.secondFormGroup.controls.domainCtrl.value,
      subDomain: this.thirdFormGroup.controls.subdomain.value,
      // skills: this.thirdFormGroup.controls.skill.value,
      role: this.thirdFormGroup.controls.RoleCtrl.value,
      chargePerHour: this.thirdFormGroup.controls.chargePerHour.value
    }
    this.registrationService.addServiceProvider(providerData);
    this.dialog.open(ModalSuccessComponent);
    this.router.navigateByUrl('/home');
  }
}