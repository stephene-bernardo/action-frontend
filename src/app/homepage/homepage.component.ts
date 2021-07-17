import { Component, OnInit } from '@angular/core';
import {Product} from '../product'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: Array<Product> = []

  constructor() { 
    this.products.push(new Product(1, "Life DeFender", "Life Defender Premium Disposable Face Masks 3 Ply (50 pcs) - FDA Approved", 149, "assets/eb24efa3c3854258b442760da164d455.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(2, "Colostomy Bag 70mm", "by Surgitech 1pc (Disposable)", 159, "assets/b4ce6e9239802fc0cd1baaf009e15700.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(3, "Relief Hot Compress", "", 199.75, "assets/06ac3eb0c96a21af9e6007b31a5c5c85.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(4, "Faceshield Anti Fog Goggle", "Sunglasses Unisex Visor Full Face", 50, "assets/c619b94a4e4105b472a38f413678763e.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(5, "Relief Hot Compress Polka", "", 199.75, "assets/72e1489d49c7f5e934e67e4b096ac141.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(6, "Fashion Retainers", "up only with 1 freebies", 70, "assets/Haaacc65775f146ec85ad7307951723c6z.jpg"))
    this.products.push(new Product(7, "Snore Reducer", "Health&Beyond Adjustable Chin Strap", 72, "assets/795de3844cd8a7b85b0ae1c4c6cc73d2.png_400x400q90.jpg_.webp"))
    this.products.push(new Product(8, "Partners Biotape", "Surgical Tape 1X10(12 rolls)", 179, "assets/a1f8d61c74e928b3b0c800521c89c416.png_400x400q90.jpg_.webp"))
    this.products.push(new Product(9, "CleanWell Navy KF94", "Respiratory Nano Mask", 47, "assets/f6e6982ca422e0b656cdae51aacad02b.png_400x400q90.jpg_.webp"))
    this.products.push(new Product(10, "Black llwoul KF94", "Nano Respirator", 38, "assets/5d4b9227ad8727391b62bc9b0e66699e.png_400x400q90.jpg_.webp"))
    this.products.push(new Product(11, "Tumeric Curcumin Capsule", "100's - Food Supplement", 392, "assets/5b9b6ccc6af560018e5043b962e65b4a.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(12, "Top Seller 100% Pure Honey Bee 375ml", "(Unheated, Unpasteurized, Uncultured)Best for Immunity Booster, Food Supplement, Antioxidants, Brain Booster, Relieving Cold and Cough Symptoms, Anti-Bacterial and Rich in Vitamins, Minerals and Enzymes", 189, "assets/293d2f8ce1bac52c0f251839859340cb.jpg_400x400q90.jpg_ (1).webp"))
    this.products.push(new Product(13, "ULTIMA-C 30 Capsules", "100% ORIGINAL 3blister (30capsules) (sodium ascorbate) (company price) (food supplement) (pampataba,pampalakas kumain at pampagana kumain) (weight gain) (Organic product) sodium ascorbate, ascorbic acid, energy booster, FDA approved", 183, "assets/60ff6caccefad72845c702bc4a63c36d.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(14, "SWANSON TART CHERRY 60 Capsule", "", 650, "assets/3cc8b1c29072f3ede4b4355de3b1a5b4.png_400x400q90.jpg_.webp"))
    this.products.push(new Product(15, "HYSSOP Vitamin C Immune System Booster 100 Capsules", "Calcium Ascorbate, Red Acerola, Cherries, ROSEHIP, Guava and Ashitaba, NON ACIDIC Plant-Based VITAMIN C, FDA APPROVED, 600MG/CAPSULE, ORIGINAL", 629, "assets/56fc7b2fe351eb83784a4848c4e3b4c8.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(16, "3 BOXES IAM Amazing Pure Organic Barley powdered drink mix from Australia", "100% LEGIT / AUTHENTIC / ORIGINAL / IAM Worldwide Amazing Products / barley grass powder / green barley / organic barley / pure barley / barley / NEW STOCKS / (30 Sachets)", 2228.00, "assets/056156635969b410a6091581a2cb16c3.png_400x400q90.jpg_.webp"))
    this.products.push(new Product(17, "Indoplas Hot Water Bag 1000ml(red)", "", 89, "assets/a779cb7b7792dab681e12924178117ef.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(18, "Indoplas Electronic Blood Pressure Monitor 105", "", 649, "assets/a54db53aa9bbb2c3d73ba4b1c4e477b5.jpg_400x400q90.jpg_.webp"))
    this.products.push(new Product(19, "LED Light Ear Spoon Ear Picking Tool", "Ear Wax Remover Cleaner Ear Pick EY-01 CTR", 6.54, "assets/0533dc5ded489b031222eee5f4a74b16.png_400x400q90.jpg_.webp"))
    this.products.push(new Product(20, "PHARMALINE Colors BP Set Purple","", 447.95, "assets/568df315bbaae971207c621de112e39e.jpg_400x400q90.jpg_.webp"))
  }

  ngOnInit(): void {
  }

}
