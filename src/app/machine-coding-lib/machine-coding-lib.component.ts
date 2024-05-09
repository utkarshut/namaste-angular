import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-machine-coding-lib',
  templateUrl: './machine-coding-lib.component.html',
  styleUrls: ['./machine-coding-lib.component.scss'],
})
export class MachineCodingLibComponent implements OnInit {
  constructor(private router: Router) {
    const state: RouterState = router.routerState;
    const root: ActivatedRoute = state.root;
    const child: ActivatedRoute | null = root.firstChild;
    console.log(state, root, child);
  }
  ngOnInit(): void {
    //this.router.navigate([{ outlets: { secondary: ['googleSearch']}}]);
  }
}