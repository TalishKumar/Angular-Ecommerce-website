// To set up ProductAlertsComponent to receive product data
// first import Input from @angular/core
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

// The @Component() decorator indicates that the following class is a component
// also provides metadata about the component, including its selector, templates, and styles
@Component({
  // The selector, app-product-alerts, identifies the component
  // By convention, Angular component selectors begin with the prefix app-, followed by the component name
  selector: 'app-product-alerts',

  // The template and style filenames reference the component's HTML and CSS
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})

// The @Component() definition also exports the class, ProductAlertsComponent, which handles functionality for the component
export class ProductAlertsComponent {
  // define a property named product with an @Input() decorator
  @Input() product!: Product;

  // The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent

  // define a property named notify with an @Output() decorator and an instance of EventEmitter()
  @Output() notify = new EventEmitter();
}
