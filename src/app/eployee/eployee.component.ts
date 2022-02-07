import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { EmployeeModel } from './employee.model';

@Component({
  selector: 'app-eployee',
  templateUrl: './eployee.component.html',
  styleUrls: ['./eployee.component.css']
})
export class EployeeComponent implements OnInit {
  formValue !:FormGroup;
  empObj:EmployeeModel=new EmployeeModel();
  employeeData !:any;
  constructor(private fb:FormBuilder,private api:ApiService) { } 

  ngOnInit(): void {
    this.formValue=this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      contact:[''],
      salary:['']
    })

    this.getEmployee();
  }

  postEmployee(){
    this.empObj.firstName=this.formValue.value.firstName;
    this.empObj.lastName=this.formValue.value.lastName;
    this.empObj.email=this.formValue.value.email;
    this.empObj.contact=this.formValue.value.contact;
    this.empObj.salary=this.formValue.value.salary;

    this.api.postData(this.empObj).subscribe({
      next:(res)=>{
        alert("data is saved")
        this.formValue.reset();
        let ref=document.getElementById("closeModel");
        ref?.click();
        this.getEmployee();
      },
      error:(err)=>{
        alert("data is not saved")
      }
    })
  }

  getEmployee(){
    this.api.getData().subscribe({
      next:(res)=>{
        this.employeeData=res;
      }
    })
  }

  deleteEmp(row:any){
    this.api.delData(row.id).subscribe({
      next:(res)=>{
        alert("deleted sucessfully")
        console.log(res)
      },
      error:(err)=>{
        alert("not a deleted")
      }
    })
  }
  onEdit(row:any){
    this.empObj.id=row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['contact'].setValue(row.contact);
    this.formValue.controls['salary'].setValue(row.salary);
  }


  
  updateData(){
    this.empObj.firstName=this.formValue.value.firstName;
    this.empObj.lastName=this.formValue.value.lastName;
    this.empObj.email=this.formValue.value.email;
    this.empObj.contact=this.formValue.value.contact;
    this.empObj.salary=this.formValue.value.salary;
    this.api.putData(this.empObj,this.empObj.id).subscribe((res)=>{
      alert("updated success fully");
      this.formValue.reset();
      let ref=document.getElementById("closeModel");
        ref?.click();
        this.getEmployee();
    })
  }
}
