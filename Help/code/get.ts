import { OnInit } from "@angular/core";
import { CategoryModel } from "src/app/models/1.model";
import { NModel } from "src/app/models/n.model";
import { ApiService } from "src/app/services/api.service";

class Component implements OnInit {

  category: CategoryModel[] = [];

  selectedCategory = '';

  runners: NModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadRunners();
    this.apiService.getAllCategory().subscribe({
      next: result => this.category = result,
      error: err => console.log(err)
    })
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.loadRunners();
  }

  loadRunners(): void {
    this.apiService.getAllByNumber(this.selectedCategory).subscribe({
      next: result => this.runners = result,
      error: err => console.log(err)
    })
  }

}