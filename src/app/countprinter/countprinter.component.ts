import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countprinter',
  templateUrl: './countprinter.component.html',
  styleUrls: ['./countprinter.component.css'],
})
export class CountprinterComponent implements OnInit {
  @Input() countToPrint: number = 0;

  constructor() {}

  ngOnInit() {}
}
