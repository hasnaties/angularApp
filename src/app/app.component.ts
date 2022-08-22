import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable({providedIn: 'root'})
export class AppComponent {

  allocateResponse:string;
  deallocateResponse:boolean;

  constructor(private http: HttpClient){
    this.allocateResponse = '';
    this.deallocateResponse = false;
  }

  allocate(form: NgForm){

    this.http.get<{response:string}>('http://localhost:3000/api/allocate', {params: {region: form.value.region}})
    .subscribe((res) => {
      this.allocateResponse = res.response;
    })
  }

  deallocate(form: NgForm){

    this.http.post<{response:boolean}>('http://localhost:3000/api/deallocate', {server: form.value.server})
    .subscribe((res) => {
      this.deallocateResponse = res.response;
    })
  }
}