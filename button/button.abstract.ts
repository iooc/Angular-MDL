/**
 * @license
 * Cocker Lee 版权所有. 并保留所有权利.
 * 
 * 此源码受 Apache-2.0 授权方式管辖
 *
 * @description
 * material design lite 按钮通用基类
 */
import { Input, Output, EventEmitter } from '@angular/core';

export abstract class MdlButtonBase {

    @Input('disabled') isEnable: boolean;

    @Output('mdl-click') click = new EventEmitter<JQueryEventObject>();

    constructor() { }

    /**
     * 向外部触发按钮事件
     */
    btnClick(event: JQueryEventObject) {
        this.click.emit(event);
    }
}