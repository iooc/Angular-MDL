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

import { MdlChip } from './chip.component';

/**
 * 联系人卡片风格碎屑
 */
@Component({
    selector: 'mdl-chip-contact',
    template: `<span class="mdl-chip mdl-chip--contact" [class.mdl-chip--deletable]="deletable">
                  <span class="mdl-chip__contact mdl-color--teal mdl-color-text--white">A</span>
                  <span class="mdl-chip__text">{{text}}</span>
                  <button type="button" class="mdl-chip__action" *ngIf="deletable"><i class="fa fa-times-circle"></i></button>
              </span>`
})
export class MdlChipContact {
    constructor() { }
}