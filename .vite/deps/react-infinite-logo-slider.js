import {
  __toESM,
  require_react
} from "./chunk-JRE55LYH.js";

// node_modules/react-infinite-logo-slider/build/index.js
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var Slider = function(_a) {
  var children = _a.children, _b = _a.width, width = _b === void 0 ? "200px" : _b, _c = _a.duration, duration = _c === void 0 ? 40 : _c, _d = _a.toRight, toRight = _d === void 0 ? false : _d, _e = _a.pauseOnHover, pauseOnHover = _e === void 0 ? false : _e, _f = _a.blurBorders, blurBorders = _f === void 0 ? false : _f, _g = _a.blurBorderColor, blurBorderColor = _g === void 0 ? "#fff" : _g;
  var _h = (0, import_react.useState)(""), idNanoid = _h[0], setIdNanoid = _h[1];
  var generarCadenaAleatoria = function() {
    var cadena = "";
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++) {
      cadena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return cadena;
  };
  (0, import_react.useEffect)(function() {
    setIdNanoid(generarCadenaAleatoria());
  }, []);
  (0, import_react.useEffect)(function() {
    if (!children.length)
      return;
    var totalTranslateX = "calc(".concat(toRight ? "" : "-").concat(width, " * ").concat(children.length, ")");
    var style = document.createElement("style");
    style.type = "text/css";
    var keyFrames = "\n      @keyframes slider_logo_slider_".concat(idNanoid, " {\n        0% {\n          transform: translateX(0);\n        }\n        100% {\n          transform: translateX(").concat(totalTranslateX, ");\n        }\n      }");
    style.innerHTML = keyFrames;
    document.getElementsByTagName("head")[0].appendChild(style);
    return function() {
      document.getElementsByTagName("head")[0].removeChild(style);
    };
  }, [toRight, width, children, idNanoid]);
  var handleMouseEnter = function() {
    var sliderElement = document.getElementById("slider_".concat(idNanoid));
    if (sliderElement)
      sliderElement.style.animationPlayState = "paused";
  };
  var handleMouseLeave = function() {
    var sliderElement = document.getElementById("slider_".concat(idNanoid));
    if (sliderElement)
      sliderElement.style.animationPlayState = "running";
  };
  return import_react.default.createElement(
    "div",
    { style: { position: "relative" } },
    import_react.default.createElement(
      "div",
      { style: {
        width: "100%",
        height: "auto",
        margin: "auto",
        overflow: "hidden",
        position: "relative"
      }, onMouseEnter: function() {
        return pauseOnHover && handleMouseEnter();
      }, onMouseLeave: function() {
        return pauseOnHover && handleMouseLeave();
      }, id: "slider_wrapper_".concat(idNanoid) },
      import_react.default.createElement(
        "div",
        { style: {
          display: "flex",
          animation: "slider_logo_slider_".concat(idNanoid, " ").concat(duration, "s linear infinite"),
          width: "calc(".concat(width, " * ").concat(children.length * 3, ")")
        }, id: "slider_".concat(idNanoid) },
        children.map(function(child, i) {
          return import_react.default.createElement(import_react.default.Fragment, { key: i }, import_react.default.cloneElement(child, { width }));
        }),
        children.map(function(child, i) {
          return import_react.default.createElement(import_react.default.Fragment, { key: i }, import_react.default.cloneElement(child, { width }));
        }),
        children.map(function(child, i) {
          return import_react.default.createElement(import_react.default.Fragment, { key: i }, import_react.default.cloneElement(child, { width }));
        })
      )
    ),
    blurBorders && import_react.default.createElement(
      import_react.default.Fragment,
      null,
      import_react.default.createElement("div", { style: {
        position: "absolute",
        right: 0,
        top: 0,
        width: "180px",
        transform: "rotate(180deg)",
        zIndex: 10,
        height: "105%",
        background: "linear-gradient(90deg, ".concat(blurBorderColor, " 10%, rgba(255, 255, 255, 0) 80%)")
      } }),
      import_react.default.createElement("div", { style: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "180px",
        zIndex: 10,
        height: "120%",
        background: "linear-gradient(90deg, ".concat(blurBorderColor, " 10%, rgba(255, 255, 255, 0) 80%)")
      } })
    )
  );
};
var Slide = function(_a) {
  var children = _a.children, _b = _a.width, width = _b === void 0 ? "200px" : _b, props = __rest(_a, ["children", "width"]);
  return import_react.default.createElement("div", __assign({ style: {
    width,
    alignItems: "center",
    display: "flex"
  } }, props), children);
};
Slider.Slide = Slide;
var build_default = Slider;
export {
  build_default as default
};
//# sourceMappingURL=react-infinite-logo-slider.js.map
