import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'container-field',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  @Input() titulo:string;
  ngOnInit() {
  }

}
