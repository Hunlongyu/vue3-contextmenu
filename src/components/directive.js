"use strict";
exports.__esModule = true;
var bus_1 = require("./bus");
var onMounted = function (el) {
    document.addEventListener('contextmenu', function () {
        bus_1["default"].emit('hide-contextmenu');
        el.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            bus_1["default"].emit('add-contextmenu', e);
        }, true);
    }, true);
    document.addEventListener('click', function () {
        bus_1["default"].emit('hide-contextmenu');
    });
};
var unmounted = function () {
    bus_1["default"].emit('hide-contextmenu');
};
exports["default"] = {
    mounted: onMounted,
    unmounted: unmounted
};
