import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook-lib',
  templateUrl: './life-cycle-hook-lib.component.html',
  styleUrls: ['./life-cycle-hook-lib.component.scss'],
})
export class LifeCycleHookLibComponent
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
  public title: string = "Passed From Main to Parent";
  constructor(private cdr: ChangeDetectorRef) {
    console.log('constructor Called : Main');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called : Main ', changes);
  }
  ngOnInit() {
    console.log('ngOnInit Called : Main');
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.title = 'Parent Page Set';
      // Manually trigger change detection
      this.cdr.detectChanges();
    }, 1000);
    console.log('ngAfterViewInit Called : Main ');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called : Main');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called : Main');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called : Main');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called : Main');
  }
}
