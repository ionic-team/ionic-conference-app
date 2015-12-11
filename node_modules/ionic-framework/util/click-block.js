var CSS_CLICK_BLOCK = 'click-block-active';
var DEFAULT_EXPIRE = 330;
var cbEle, fallbackTimerId;
var isShowing = false;
/**
 * @private
 */
var ClickBlock = (function () {
    function ClickBlock() {
    }
    ClickBlock.prototype.enable = function () {
        cbEle = document.createElement('click-block');
        document.body.appendChild(cbEle);
        cbEle.addEventListener('touchmove', function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        });
        this._enabled = true;
    };
    ClickBlock.prototype.show = function (shouldShow, expire) {
        if (this._enabled) {
            if (shouldShow) {
                show(expire);
            }
            else {
                hide();
            }
        }
    };
    return ClickBlock;
})();
exports.ClickBlock = ClickBlock;
function show(expire) {
    clearTimeout(fallbackTimerId);
    fallbackTimerId = setTimeout(hide, expire || DEFAULT_EXPIRE);
    if (!isShowing) {
        cbEle.classList.add(CSS_CLICK_BLOCK);
        isShowing = true;
    }
}
function hide() {
    clearTimeout(fallbackTimerId);
    if (isShowing) {
        cbEle.classList.remove(CSS_CLICK_BLOCK);
        isShowing = false;
    }
}