import { Component } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 constructor(private dataService: DataserviceService,
  private router: Router
 ){

 }
 public logout(){
    this.dataService.logout().subscribe({
      next:(data)=>  this.router.navigate(['/login']),
      error:(err)=>{
        console.log(err);
        this.router.navigate(['/login'])
      }
    });
 }
}
