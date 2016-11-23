/**
 * @license
 * Cocker Lee 版权所有. 并保留所有权利.
 * 
 * 此源码受 Apache-2.0 授权方式管辖
 *
 * @description
 * material design lite 碎屑式组件
 */

import { Component, Input } from '@angular/core';
/** 
 * mdl 碎屑式组件
 */
@Component({
    selector: 'mdl-chip',
    template: `<span class="mdl-chip" [class.mdl-chip--deletable]="deletable">
                  <span class="mdl-chip__text">{{text}}</span>
                  <button type="button" class="mdl-chip__action" *ngIf="deletable"><i class="fa fa-times-circle"></i></button>
              </span>`
})
export class MdlChip {
    
    @Input() text: string;

    @Input() deletable: boolean;

    constructor() { }
}