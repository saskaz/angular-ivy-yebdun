import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { filter, map, Observable, of, pipe } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-saskaz',
  templateUrl: './saskaz.component.html',
  styleUrls: ['./saskaz.component.css'],
})
export class SaskazComponent implements OnInit {
  posts$!: Observable<any[]>;
  @Output() buttonClickedEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.posts$ = this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(shareReplay());

    const obs$ = fromtTimestamp();
    obs$.subscribe({
      next: (value) => console.log(value),
    });
    setTimeout(() => {
      obs$.subscribe({
        next: (value) => console.log(value),
      });
    }, 2000);

    const squareOdd = of(1, 2, 3, 4, 5, 6, 7, 7, 9).pipe(
      filter((n) => n % 2 !== 0),
      map((n) => n * n)
    );

    // Subscribe to get values
    squareOdd.subscribe((x) => console.log(x));
  }

  buttonClicked(): void {
    this.buttonClickedEvent.emit(false);
  }

  clearClicked(): void {
    this.buttonClickedEvent.emit(true);
  }
}

const fromtTimestamp = (): Observable<number> => {
  return new Observable((subscriber) => {
    const timestamp = Date.now();
    subscriber.next(timestamp);
  });
};
