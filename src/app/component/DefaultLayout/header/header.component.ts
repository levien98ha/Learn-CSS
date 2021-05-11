import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('learnTip') learnTip: ElementRef;
  @ViewChild('subMenu') subMenu: ElementRef;

  constructor() { }

  tipOffsetX;
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.tipOffsetX = this.learnTip.nativeElement.offsetLeft;
  }

  openTipMenu() {
    this.subMenu.nativeElement.classList.add('v-display-sub-menu');
    this.subMenu.nativeElement.style.left = this.tipOffsetX - 3 + 'px';
  }

  closeTipMenu() {
    this.subMenu.nativeElement.classList.remove('v-display-sub-menu');
  }

}
