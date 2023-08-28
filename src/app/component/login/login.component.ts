import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}  // burdaki constructorı authservice ve router servislerini enjekte etmek için kullanıyoruz, yönetmemizi sağlıyor. çünkü authservicede oluşturduğumuz fonksiypnları burda kullanacağız. 

  ngOnInit(): void {} // ngOnınıt methodu bileşen oluşturulduğunda kullanılır.

  login() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';

    this.router.navigate(['shopping-card']); 
  }
}
