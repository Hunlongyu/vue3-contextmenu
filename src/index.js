"use strict";
exports.__esModule = true;
exports.ContextmenuSubmenu = exports.ContextmenuItem = exports.Contextmenu = exports.directive = void 0;
var directive_1 = require("./components/directive");
exports.directive = directive_1["default"];
var ContextMenu_vue_1 = require("./components/ContextMenu.vue");
exports.Contextmenu = ContextMenu_vue_1["default"];
var ContextMenuItem_vue_1 = require("./components/ContextMenuItem.vue");
exports.ContextmenuItem = ContextMenuItem_vue_1["default"];
var ContextMenuSubmenu_vue_1 = require("./components/ContextMenuSubmenu.vue");
exports.ContextmenuSubmenu = ContextMenuSubmenu_vue_1["default"];
var install = function (app) {
    app.directive('contextmenu', directive_1["default"]);
    app.component(ContextMenu_vue_1["default"].name, ContextMenu_vue_1["default"]);
    app.component(ContextMenuItem_vue_1["default"].name, ContextMenuItem_vue_1["default"]);
    app.component(ContextMenuSubmenu_vue_1["default"].name, ContextMenuSubmenu_vue_1["default"]);
};
exports["default"] = {
    install: install
};
