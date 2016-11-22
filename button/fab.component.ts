/**
 * @license
 * Cocker Lee 版权所有. 并保留所有权利.
 * 
 * 此源码受 Apache-2.0 授权方式管辖
 *
 * @description
 * material design lite 圆形图标按钮（Fab style）
 */

import { Component, Input } from '@angular/core';

import { MdlButtonBase } from './button.abstract';

/**
 * Fab 风格图标按钮(采用非 material design icon)
 */
@Component({
    selector: 'mdl-button-fab',
    template: `<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" 
                   (click)="btnClick($event)" mdl-reg [disabled]="isEnable">
               <i [ngClass]="icon"></i>
               </button>`
})
export class MdlButtonFab extends MdlButtonBase {

    @Input() icon: string;       // 按钮图标

    constructor() { super(); }

}