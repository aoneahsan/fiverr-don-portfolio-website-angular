import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text = 'view work';
  @Input() hoverText = 'view work';
  @Input() btnStyle: 'white' | 'yellow' = 'white';
  @Input() btnHoverStyle: 'pink' | 'yellow' = 'yellow';

  constructor() {}

  ngOnInit(): void {}
}
