/*
 * Extern for Sencha Touch Mobile JavaScript Framework
 * http://www.sencha.com/products/touch/
 */

/**
 * @namespace
 */
var Ext = {};

/**
 * @class
 * @constructor
 * @param {...} var_args
 */
Ext.ExtConstructor = function(var_args) {
};
/**
 * @type Ext.lib.Component
 */
Ext.ExtConstructor.prototype.superclass = null;


/**
 * @param {Object} opt
 */
Ext.setup = function(opt) {
};
/**
 * @param {...} var_arg
 * @return {Ext.Element}
 */
Ext.get = function(var_arg) {
};
/**
 * @param {...} var_arg
 * @return {Ext.Element}
 */
Ext.getBody= function(var_arg) {
};
/**
 * @param {...} var_arg
 * @return {Object}
 */
Ext.is = function(var_arg) {
};
/**
 * @param {...} var_arg
 */
Ext.regModel = function(var_arg) {
};
/**
 * @param {function()} base
 * @param {Object} child
 * @return {function(...)}
 */
Ext.extend = function (base, child) {
};


/**
 * @class
 * @constructor
 * @param {Object} opt
 */
Ext.Application = function(opt) {
};

Ext.lib = {};

/**
 * @class
 * @constructor
 * @param {...} var_args
 */
Ext.lib.Component = function(var_args) {
};
Ext.lib.Component.prototype.initComponent = function() {
};
/**
 * @return {boolean}
 */
Ext.lib.Component.prototype.isHidden = function() {
};
/**
 * @return {number}
 */
Ext.lib.Component.prototype.getWidth = function() {
};
/**
 * @return {number}
 */
Ext.lib.Component.prototype.getHeight = function() {
};
/**
 * @param {...} var_arg
 * @return {Ext.Component}
 */
Ext.lib.Component.prototype.setWidth = function(var_arg) {
};
/**
 * @param {...} var_arg
 * @return {Ext.Component}
 */
Ext.lib.Component.prototype.setHeight = function(var_arg) {
};

/**
 * @param {...} var_arg
 * @return {Ext.Component}
 */
Ext.lib.Component.prototype.setSize = function(var_arg) {
};
/**
 * @return {Object}
 */
Ext.lib.Component.prototype.getEl = function() {
};

Ext.lib.Component.prototype.disable = function() {
};
 /**
 * @param {...} var_arg
 */
Ext.lib.Component.prototype.on = function(var_arg) {
};
/**
 * @param {...} var_arg
 * @return Ext.Container
 */
Ext.lib.Component.prototype.up = function(var_arg) {
};
/**
 * @return Ext.Container
 */
Ext.lib.Component.prototype.doComponentLayout = function() {
};

/**
 * @class
 * @constructor
 * @param {Object} opt
 */
Ext.Element = function(opt) {
};
/**
 * @param {...} var_arg
 * @return {Ext.CompositeElement|Ext.Element}
 */
Ext.Element.prototype.select = function (var_arg) {
};
/**
 * @param {...} var_arg
 * @return {Object}
 */
Ext.Element.prototype.getBox = function (var_arg) {
};
/**
 * @param {...} var_arg
 * @return {Object}
 */
Ext.Element.prototype.child = function (var_arg) {
};

/**
 * @type Element
 */
Ext.Element.prototype.dom;

/**
 * @class
 * @constructor
 * @param {Object} opt
 */
Ext.CompositeElement = function (opt) {
};

/**
 * @class
 * @constructor
 * @extends Ext.lib.Component
 * @param {Object} opt
 */
Ext.Component = function(opt) {
};
/**
 * @param {...} var_arg
 */
Ext.Component.prototype.showBy = function(var_arg) {
};
/**
 * @param {...} var_arg
 */
Ext.Component.prototype.show = function(var_arg) {
};
/**
 * @param {...} var_arg
 */
Ext.Component.prototype.hide = function(var_arg) {
};

/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.Component
 */
Ext.Container = function(opt) {
};
/**
 * @param {...} var_arg
 */
Ext.Container.prototype.add = function(var_arg) {
};
/**
 * @param {...} var_arg
 */
Ext.Container.prototype.doLayout = function(var_arg) {
};
/**
 * @param {string} selector
 * @return {Ext.Component}
 */
Ext.Container.prototype.down = function(selector) {
};
/**
 * @type Ext.util.MixedCollection
 */
Ext.Container.prototype.items = null;
/**
 * @param {?boolean} autoDestroy
 */
Ext.Container.prototype.removeAll = function(autoDestroy) {
};
/**
 */
Ext.Container.prototype.destroy = function() {
};
/**
 * @class
 * @constructor
 */
Ext.Scroller = function(){};
Ext.Scroller.prototype.onStart = function(){};
Ext.Scroller.prototype.onDrag = function(){};
Ext.Scroller.prototype.onDragEnd = function(){};
/**
 * @param {string} event
 * @param {function()} handler
 */
Ext.Scroller.prototype.on = function(event, handler){};
/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.Container
 */
Ext.Panel = function(opt) {
};
/**
 * @type Ext.Scroller
 */
Ext.Panel.prototype.scroller;
/**
 * @param {...} var_arg
 */
Ext.Panel.prototype.addDocked = function(var_arg) {
};
/**
 * @param {...} var_arg
 */
Ext.Panel.prototype.setActiveItem = function(var_arg) {
};
/**
 * @return {Ext.Element}
 */
Ext.Panel.prototype.getEl = function() {};
/**
 * @return {Ext.layout.ContainerLayout}
 */
Ext.Panel.prototype.getLayout = function() {};
/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.Panel
 */
Ext.TabBar = function(opt) {
};

/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.Panel
 */
Ext.TabPanel = function(opt) {
};
/**
 * @return {Ext.TabBar}
 */
Ext.Panel.prototype.getTabBar = function() {
};

/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.Panel
 */
Ext.form.FormPanel = function(opt) {
};
/**
 * @type Ext.Panel
 */
Ext.form.FormPanel.superclass = null;
/**
 * @return {Object}
 */
Ext.Panel.prototype.getValues = function() {
};


/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.Container
 */
Ext.Toolbar = function(opt) {
};

/**
 * @class
 * @constructor
 * @extends Ext.Component
 * @param {Object} opt
 */
Ext.Button = function(opt) {
};
/**
 * @class
 * @constructor
 * @param {Object} el
 * @param {Object} opt
 */
Ext.LoadMask = function (el,opt){
};
/**
 * @return {boolean}
 */
Ext.LoadMask.prototype.isHidden = function (){
};
Ext.LoadMask.prototype.hide = function (){
};
Ext.LoadMask.prototype.show = function (){
};
/**
 * @class
 * @constructor
 * @param {Object} opt
 */
Ext.Anim = function(opt) {
};
/**
 * @param {...} var_arg
 */
Ext.Anim.prototype.run = function(var_arg) {
};
/**
 * @param {...} var_arg
 */
Ext.Anim.run = function(var_arg) {
};

/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.Component
 */
Ext.DataView = function(opt) {
};

/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.DataView
 */
Ext.List = function(opt) {
};
Ext.List.prototype.refresh = function () {
};
/**
 * @param {Ext.data.Store} store
 */
Ext.List.prototype.bindStore = function (store) {
};


Ext.util = {};
/**
 * @class
 * @constructor
 * @param {Object} opt
 */
Ext.util.MixedCollection = function(opt) {
};
Ext.util.MixedCollection.prototype.clear = function (){
};
/**
 * @param {...} var_args
 */
Ext.util.MixedCollection.prototype.addAll = function (var_args){
};

/**
 * @class
 * @constructor
 * @param {Object} opt
 */
Ext.data.AbstractStore = function(opt) {
};
/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.data.AbstractStore
 */
Ext.data.Store = function(opt) {
};
/**
 * @type Ext.util.MixedCollection
 */
Ext.data.Store.prototype.data = null;
/**
 * @type Ext.util.MixedCollection
 */
Ext.data.Store.data = null;
/**
 * @class
 * @param {Object} opt
 * @constructor
 */
Ext.data.Proxy = function(opt) {
};
/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.data.Proxy
 */
Ext.data.ClientProxy = function(opt) {
};
/**
 * @class
 * @constructor
 * @param {Object} opt
 * @extends Ext.data.ClientProxy
 */
Ext.data.MemoryProxy = function(opt) {
};

Ext.layout = {};
/**
 * @class
 * @constructor
 */
Ext.layout.ContainerLayout = function() {};

/**
 * @return {Ext.Element}
 */
Ext.layout.ContainerLayout.prototype.getTarget = function(){};
