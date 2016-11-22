/**
 * @license
 * Cocker Lee 版权所有. 并保留所有权利.
 * 
 * 此源码受 Apache-2.0 授权方式管辖
 *
 * @description
 * material design lite 动态组件注册指令
 */
import { Directive, ElementRef } from '@angular/core';

/** 声明已有的 Material design lite 组件操作句柄 */
interface IComponentHandler {
    upgradeDom(optJsClass, optCssClass): void;
    /** 注册动态加载的 Material design lite 组件
     * @param element 需要注册的 DOM 元素节点
     * @param optJsClass mdl js 类
     */
    upgradeElement(element: Element, optJsClass?): void;

    upgradeElements(elements): void;

    upgradeAllRegistered(); void;
    /** 允许用户在执行一个给定的组件类型之后获得通知
     * @param jsClass mdl 组件类型
     * @param callback 回掉函数
     */
    registerUpgradedCallback(jsClass, callback: Function): void;

    register(config): void;

    downgradeElements(): void;
}
/** 声明已有的 Material design lite 组件操作句柄 */
declare var componentHandler: IComponentHandler;

/**
 * 动态注册 mdl 组件的属性指令(注册在OnInit中)
 */
@Directive({
    selector: '[mdl-reg]'
})
export class MdlRegInit {
    constructor(private el: ElementRef) { }

    ngOnInit() {
        componentHandler.upgradeElement(this.el.nativeElement);
    }
}