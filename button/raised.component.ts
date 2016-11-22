/**
 * @license
 * Cocker Lee 版权所有. 并保留所有权利.
 * 
 * 此源码受 Apache-2.0 授权方式管辖
 *
 * @description
 * material design lite 浮雕效果按钮
 */

import { Component, Input } from '@angular/core';

import { MdlButtonBase } from './button.abstract';

@Component({
    selector: 'mdl-button-raised',
    template: `<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored"
               (click)="btnClick($event)" mdl-reg [disabled]="isEnable">
               <span *ngIf="icon"><i [ngClass]="icon"></i>&nbsp;&nbsp;</span>{{label}}
               </button>`
})
export class MdlButtonRaised extends MdlButtonBase {

    @Input() icon: string;       // 按钮图标
    @Input() label: string;      // 按钮文字

    constructor() { super(); }
}