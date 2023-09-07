import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

 
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');

        if(res.user?.emailVerified == true) {
          this.router.navigate(['shopping-card']);
        } 

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }


  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
   
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }


  isLoggedIn(): boolean {
    return localStorage.getItem('token') === 'true';
  }

  getCurrentUserId(): Promise<string | null> {
    return new Promise<string | null>((resolve, reject) => {
      this.fireauth.onAuthStateChanged((user) => { //bu event listener
        if (user) {
          resolve(user.uid);
        } else {
          resolve(null);
        }
      });
    });
  }
  
}