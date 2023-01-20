import {Component, OnInit} from '@angular/core';
import {Feature} from '../../models/feature.interface';
import {Router, ActivatedRoute} from '@angular/router';
import {FeatureService} from '../../services/feature.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  feature: Observable<Feature>;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router,
              private featureService: FeatureService) {
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.feature = this.featureService.getFeature(id);
    });
  }

  getProperties(feature: Feature): any[] {
    const properties: any[] = [];

    Object.keys(feature.properties).forEach((key) => {
      properties.push({key, value: feature.properties[key]});
    });

    console.log('properties', properties);
    return properties;
  }
}
