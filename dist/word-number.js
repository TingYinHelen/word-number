!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],r):"object"==typeof exports?exports.WordNumber=r(require("lodash")):e.WordNumber=r(e.lodash)}("undefined"!=typeof self?self:this,(function(e){return(()=>{"use strict";var r={440:(e,r,o)=>{o.r(r),o.d(r,{numToWord:()=>d,wordToNum:()=>f});var t=o(804),n=o.n(t);const u=JSON.parse('[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"}]');function d(e){return n().reduce(u,((r,o)=>o.num===e?o.word:r),-1)}function f(e){return n().reduce(u,((r,o)=>o.word===e?o.num:r),"")}},804:r=>{r.exports=e}},o={};function t(e){var n=o[e];if(void 0!==n)return n.exports;var u=o[e]={exports:{}};return r[e](u,u.exports,t),u.exports}return t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(440)})()}));