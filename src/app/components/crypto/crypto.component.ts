import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.css'
})
export class CryptoComponent implements OnInit{
  data: any[] = []; // Variable to store products data

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.getAllCryptoData();
  }

  getAllCryptoData() {
    this.cryptoService.fetchCryptoData().subscribe(
      (data) => {
        console.log(data)
        this.data = data;
        
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }


}
