import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent
  implements
    OnInit,
    OnChanges,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  public contentInit: any;
  @Input() title: string = '';
  @ContentChild('modalTitle') modalTitle!: ElementRef;

  constructor() {
    console.log('constructor Called : Main->Parent');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called : Main->Parent ', changes);
  }
  ngOnInit() {
    console.log('ngOnInit Called : Main->Parent ');
  }
  ngAfterViewInit(): void {
    console.log(
      'ngAfterViewInit Called : Main->Parent ',
      this.modalTitle.nativeElement
    );
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called : Main->Parent ');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called : Main->Parent ', this.modalTitle.nativeElement);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called : Main->Parent ');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called : Main->Parent ');
  }
}
