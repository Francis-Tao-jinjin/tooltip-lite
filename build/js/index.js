"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
require("./style.scss");
var ToolTipDirection;
(function (ToolTipDirection) {
    ToolTipDirection["top"] = "top";
    ToolTipDirection["right"] = "right";
    ToolTipDirection["left"] = "left";
    ToolTipDirection["bottom"] = "bottom";
})(ToolTipDirection = exports.ToolTipDirection || (exports.ToolTipDirection = {}));
exports.ToolTipLite = (function (props, ref) {
    var _a = tslib_1.__read(react_1.useState(false), 2), showTips = _a[0], toogleToolTip = _a[1];
    return (react_1.default.createElement("div", { className: 'Tooltip-Wrapper', onMouseEnter: function () { toogleToolTip(true); }, onMouseLeave: function () { toogleToolTip(false); } },
        props.children,
        react_1.default.createElement("div", { className: ['Tooltip-Tip', props.direction || 'top', showTips ? 'active' : ''].join(' ') }, props.content)));
});
