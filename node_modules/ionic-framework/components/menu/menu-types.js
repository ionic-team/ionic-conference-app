var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var menu_1 = require('./menu');
var animation_1 = require('../../animations/animation');
/**
 * Menu Type
 * Base class which is extended by the various types. Each
 * type will provide their own animations for open and close
 * and registers itself with Menu.
 * @private
 */
var MenuType = (function () {
    function MenuType() {
        this.open = new animation_1.Animation();
        this.close = new animation_1.Animation();
    }
    MenuType.prototype.setOpen = function (shouldOpen) {
        var _this = this;
        return new Promise(function (resolve) {
            if (shouldOpen) {
                _this.open.playbackRate(1).onFinish(resolve, true).play();
            }
            else {
                _this.close.playbackRate(1).onFinish(resolve, true).play();
            }
        });
    };
    MenuType.prototype.setProgressStart = function (isOpen) {
        this.isOpening = !isOpen;
        this.seek && this.seek.dispose();
        // clone the correct animation depending on open/close
        if (this.isOpening) {
            this.seek = this.open.clone();
        }
        else {
            this.seek = this.close.clone();
        }
        // the cloned animation should not use an easing curve during seek
        this.seek.easing('linear').progressStart();
    };
    MenuType.prototype.setProgess = function (value) {
        // adjust progress value depending if it opening or closing
        if (!this.isOpening) {
            value = 1 - value;
        }
        this.seek.progress(value);
    };
    MenuType.prototype.setProgressEnd = function (shouldComplete) {
        var _this = this;
        var resolve;
        var promise = new Promise(function (res) { resolve = res; });
        var isOpen = (this.isOpening && shouldComplete);
        if (!this.isOpening && !shouldComplete) {
            isOpen = true;
        }
        this.seek.progressEnd(shouldComplete).then(function () {
            _this.isOpening = false;
            resolve(isOpen);
        });
        return promise;
    };
    MenuType.prototype.ngOnDestroy = function () {
        this.open && this.open.dispose();
        this.close && this.close.dispose();
        this.seek && this.seek.dispose();
    };
    return MenuType;
})();
exports.MenuType = MenuType;
/**
 * Menu Reveal Type
 * The content slides over to reveal the menu underneath.
 * The menu itself, which is under the content, does not move.
 */
var MenuRevealType = (function (_super) {
    __extends(MenuRevealType, _super);
    function MenuRevealType(menu) {
        _super.call(this);
        var easing = 'ease';
        var duration = 250;
        var openedX = (menu.width() * (menu.side == 'right' ? -1 : 1)) + 'px';
        var closedX = '0px';
        this.open.easing(easing).duration(duration);
        this.close.easing(easing).duration(duration);
        var contentOpen = new animation_1.Animation(menu.getContentElement());
        contentOpen.fromTo(TRANSLATE_X, closedX, openedX);
        this.open.add(contentOpen);
        var contentClose = new animation_1.Animation(menu.getContentElement());
        contentClose.fromTo(TRANSLATE_X, openedX, closedX);
        this.close.add(contentClose);
    }
    return MenuRevealType;
})(MenuType);
menu_1.Menu.register('reveal', MenuRevealType);
/**
 * Menu Push Type
 * The content slides over to reveal the menu underneath.
 * The menu itself also slides over to reveal its bad self.
 */
var MenuPushType = (function (_super) {
    __extends(MenuPushType, _super);
    function MenuPushType(menu) {
        _super.call(this);
        var easing = 'ease';
        var duration = 250;
        var contentOpenedX, menuClosedX, menuOpenedX;
        if (menu.side == 'right') {
            contentOpenedX = -menu.width() + 'px';
            menuOpenedX = (menu.platform.width() - menu.width()) + 'px';
            menuClosedX = menu.platform.width() + 'px';
        }
        else {
            contentOpenedX = menu.width() + 'px';
            menuOpenedX = '0px';
            menuClosedX = -menu.width() + 'px';
        }
        // left side
        this.open.easing(easing).duration(duration);
        this.close.easing(easing).duration(duration);
        var menuOpen = new animation_1.Animation(menu.getMenuElement());
        menuOpen.fromTo(TRANSLATE_X, menuClosedX, menuOpenedX);
        this.open.add(menuOpen);
        var contentOpen = new animation_1.Animation(menu.getContentElement());
        contentOpen.fromTo(TRANSLATE_X, '0px', contentOpenedX);
        this.open.add(contentOpen);
        var menuClose = new animation_1.Animation(menu.getMenuElement());
        menuClose.fromTo(TRANSLATE_X, menuOpenedX, menuClosedX);
        this.close.add(menuClose);
        var contentClose = new animation_1.Animation(menu.getContentElement());
        contentClose.fromTo(TRANSLATE_X, contentOpenedX, '0px');
        this.close.add(contentClose);
    }
    return MenuPushType;
})(MenuType);
menu_1.Menu.register('push', MenuPushType);
/**
 * Menu Overlay Type
 * The menu slides over the content. The content
 * itself, which is under the menu, does not move.
 */
var MenuOverlayType = (function (_super) {
    __extends(MenuOverlayType, _super);
    function MenuOverlayType(menu) {
        _super.call(this);
        var easing = 'ease';
        var duration = 250;
        var backdropOpacity = 0.35;
        var closedX, openedX;
        if (menu.side == 'right') {
            // right side
            closedX = menu.platform.width() + 'px';
            openedX = (menu.platform.width() - menu.width() - 8) + 'px';
        }
        else {
            // left side
            closedX = -menu.width() + 'px';
            openedX = '8px';
        }
        this.open.easing(easing).duration(duration);
        this.close.easing(easing).duration(duration);
        var menuOpen = new animation_1.Animation(menu.getMenuElement());
        menuOpen.fromTo(TRANSLATE_X, closedX, openedX);
        this.open.add(menuOpen);
        var backdropOpen = new animation_1.Animation(menu.getBackdropElement());
        backdropOpen.fromTo(OPACITY, 0.01, backdropOpacity);
        this.open.add(backdropOpen);
        var menuClose = new animation_1.Animation(menu.getMenuElement());
        menuClose.fromTo(TRANSLATE_X, openedX, closedX);
        this.close.add(menuClose);
        var backdropClose = new animation_1.Animation(menu.getBackdropElement());
        backdropClose.fromTo(OPACITY, backdropOpacity, 0.01);
        this.close.add(backdropClose);
    }
    return MenuOverlayType;
})(MenuType);
menu_1.Menu.register('overlay', MenuOverlayType);
var OPACITY = 'opacity';
var TRANSLATE_X = 'translateX';