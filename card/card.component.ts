/**
 * @license
 * Cocker Lee 版权所有. 并保留所有权利.
 * 
 * 此源码受 Apache-2.0 授权方式管辖
 *
 * @description
 * material design lite 卡片根组件
 */

import { Component, Input } from '@angular/core';

/**
 * mdl card 卡片式多容器组件
 */
@Component({
    selector: 'mdl-card',
    template: `<div class="mdl-card mdl-shadow--2dp">
                   <div class="mdl-card__title">
                   </div>
                   <div class="mdl-card__media">
                       
                   </div>
                   <div class="mdl-card__supporting-text">
                   </div>
                   <div class="mdl-card__actions">
                   </div>
               </div>`
})
export class MdlCard {

    constructor() { }
    
}