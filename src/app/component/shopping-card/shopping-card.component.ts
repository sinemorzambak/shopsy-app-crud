import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToCampaignPage() {
    this.router.navigate(['/set-campaign-info']); 
  }
}

