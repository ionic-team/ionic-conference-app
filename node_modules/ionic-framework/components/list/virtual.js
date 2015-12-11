var ListVirtualScroll = (function () {
    function ListVirtualScroll(list) {
        var _this = this;
        this.list = list;
        this.content = this.list.content;
        this.viewportHeight = this.content.height();
        this.viewContainer = this.list.itemTemplate.viewContainer;
        this.itemHeight = 60;
        this.shownItems = {};
        this.enteringItems = [];
        this.leavingItems = [];
        // Compute the initial sizes
        setTimeout(function () {
            _this.resize();
            // Simulate the first event to start layout
            _this._handleVirtualScroll({
                target: _this.content.scrollElement
            });
        });
        this.content.addScrollEventListener(function (event) {
            _this._handleVirtualScroll(event);
        });
    }
    ListVirtualScroll.prototype.resize = function () {
        this.viewportHeight = this.content.height();
        this.viewportScrollHeight = this.content.scrollElement.scrollHeight;
        this.virtualHeight = this.list.items.length * this.itemHeight;
        this.itemsPerScreen = this.viewportHeight / this.itemHeight;
        console.log('VIRTUAL: resize(viewportHeight:', this.viewportHeight, 'viewportScrollHeight:', this.viewportScrollHeight, 'virtualHeight:', this.virtualHeight, ', itemsPerScreen:', this.itemsPerScreen, ')');
    };
    ListVirtualScroll.prototype._handleVirtualScroll = function (event) {
        var item;
        var shownItemRef;
        var st = event.target.scrollTop;
        var sh = event.target.scrollHeight;
        var topIndex = Math.floor(st / this.itemHeight);
        var bottomIndex = Math.floor((st / this.itemHeight) + this.itemsPerScreen);
        var items = this.list.items;
        // Key iterate the shown items map
        // and compare the index to our index range,
        // pushing the items to remove to our leaving
        // list if they're ouside this range.
        for (var i in this.shownItems) {
            if (i < topIndex || i > bottomIndex) {
                this.leavingItems.push(this.shownItems[i]);
                delete this.shownItems[i];
            }
        }
        var realIndex = 0;
        // Iterate the set of items that will be rendered, using the
        // index from the actual items list as the map for the
        // virtual items we draw
        for (var i = topIndex, realIndex_1 = 0; i < bottomIndex && i < items.length; i++, realIndex_1++) {
            item = items[i];
            console.log('Drawing item', i, item.title);
            shownItemRef = this.shownItems[i];
            // Is this a new item?
            if (!shownItemRef) {
                var itemView = this.viewContainer.create(this.list.itemTemplate.protoViewRef, realIndex_1);
                itemView.setLocal('\$implicit', item);
                itemView.setLocal('\$item', item);
                shownItemRef = new VirtualItemRef(item, i, realIndex_1, itemView);
                this.shownItems[i] = shownItemRef;
                this.enteringItems.push(shownItemRef);
            }
        }
        while (this.leavingItems.length) {
            var itemRef = this.leavingItems.pop();
            console.log('Removing item', itemRef.item, itemRef.realIndex);
            this.viewContainer.remove(itemRef.realIndex);
        }
        console.log('VIRTUAL SCROLL: scroll(scrollTop:', st, 'topIndex:', topIndex, 'bottomIndex:', bottomIndex, ')');
        console.log('Container has', this.list.getNativeElement().children.length, 'children');
    };
    ListVirtualScroll.prototype.cellAtIndex = function (index) {
    };
    return ListVirtualScroll;
})();
exports.ListVirtualScroll = ListVirtualScroll;
var VirtualItemRef = (function () {
    function VirtualItemRef(item, index, realIndex, view) {
        this.item = item;
        this.index = index;
        this.realIndex = realIndex;
        this.view = view;
    }
    return VirtualItemRef;
})();