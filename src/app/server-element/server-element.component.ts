import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy  {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log('changes: ', changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('fired ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('fired afterContentInit');
  }

  ngAfterContentChecked() {
    console.log('fired afterContentChecked');
  }

  ngAfterViewInit() {
    console.log('fired afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('fired afterViewChecked');
  }

  ngOnDestroy() {
    console.log('called onDestroy');
  }

}
