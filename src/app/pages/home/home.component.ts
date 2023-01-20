import {Component, OnInit} from '@angular/core';
import {Feature} from '../../models/feature.interface';
import {HttpClient} from '@angular/common/http';
import {FeatureService} from '../../services/feature.service';
import {Properties} from "../../models/properties.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  features: Feature[];
  searchText: any;

  constructor(private http: HttpClient, private featureService: FeatureService) {
    this.features = [];
    this.getFeatures();
  }

  getFeatures() {
    this.featureService.getFeatures().subscribe((data: any) => {
      const {features} = data;
      this.features = features as Feature[];

      console.log('features', this.features);
    });
  }
  search($event: any) {
    console.log('this.searchText');
    console.log(this.searchText);
  }
}
