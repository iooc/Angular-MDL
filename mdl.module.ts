/**
 * @license
 * Cocker Lee 版权所有. 并保留所有权利.
 * 
 * 此源码受 Apache-2.0 授权方式管辖
 *
 * @description
 * material design lite 组件导出模块
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdlRegInit } from './mdlreg.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [MdlRegInit],  // 声明模块内部和外部会使用的模块
    exports: []                  // 需要共享到外部的模块
})
export class MdlModule { }