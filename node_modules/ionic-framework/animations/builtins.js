var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var animation_1 = require('./animation');
var SlideIn = (function (_super) {
    __extends(SlideIn, _super);
    function SlideIn(element) {
        _super.call(this, element);
        this
            .easing('cubic-bezier(0.1,0.7,0.1,1)')
            .duration(400)
            .fromTo('translateY', '100%', '0%');
    }
    return SlideIn;
})(animation_1.Animation);
animation_1.Animation.register('slide-in', SlideIn);
var SlideOut = (function (_super) {
    __extends(SlideOut, _super);
    function SlideOut(element) {
        _super.call(this, element);
        this
            .easing('ease-out')
            .duration(250)
            .fromTo('translateY', '0%', '100%');
    }
    return SlideOut;
})(animation_1.Animation);
animation_1.Animation.register('slide-out', SlideOut);
var FadeIn = (function (_super) {
    __extends(FadeIn, _super);
    function FadeIn(element) {
        _super.call(this, element);
        this
            .easing('ease-in')
            .duration(400)
            .fadeIn();
    }
    return FadeIn;
})(animation_1.Animation);
animation_1.Animation.register('fade-in', FadeIn);
var FadeOut = (function (_super) {
    __extends(FadeOut, _super);
    function FadeOut(element) {
        _super.call(this, element);
        this
            .easing('ease-out')
            .duration(250)
            .fadeOut();
    }
    return FadeOut;
})(animation_1.Animation);
animation_1.Animation.register('fade-out', FadeOut);