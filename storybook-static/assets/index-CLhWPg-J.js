import{r as o}from"./index-DH5ua8nC.js";import{_ as d}from"./extends-CCbyfPlC.js";var p={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=o,_=Symbol.for("react.element"),E=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,h=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,t){var n,l={},c=null,i=null;t!==void 0&&(c=""+t),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(i=r.ref);for(n in r)x.call(r,n)&&!v.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)l[n]===void 0&&(l[n]=r[n]);return{$$typeof:_,type:e,key:c,ref:i,props:l,_owner:h.current}}f.Fragment=E;f.jsx=m;f.jsxs=m;p.exports=f;var P=p.exports;function b(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function $(...e){return r=>e.forEach(t=>b(t,r))}function k(...e){return o.useCallback($(...e),e)}const C=o.forwardRef((e,r)=>{const{children:t,...n}=e,l=o.Children.toArray(t),c=l.find(S);if(c){const i=c.props.children,s=l.map(u=>u===c?o.Children.count(i)>1?o.Children.only(null):o.isValidElement(i)?i.props.children:null:u);return o.createElement(a,d({},n,{ref:r}),o.isValidElement(i)?o.cloneElement(i,void 0,s):null)}return o.createElement(a,d({},n,{ref:r}),t)});C.displayName="Slot";const a=o.forwardRef((e,r)=>{const{children:t,...n}=e;return o.isValidElement(t)?o.cloneElement(t,{...O(n,t.props),ref:r?$(r,t.ref):t.ref}):o.Children.count(t)>1?o.Children.only(null):null});a.displayName="SlotClone";const R=({children:e})=>o.createElement(o.Fragment,null,e);function S(e){return o.isValidElement(e)&&e.type===R}function O(e,r){const t={...r};for(const n in r){const l=e[n],c=r[n];/^on[A-Z]/.test(n)?l&&c?t[n]=(...s)=>{c(...s),l(...s)}:l&&(t[n]=l):n==="style"?t[n]={...l,...c}:n==="className"&&(t[n]=[l,c].filter(Boolean).join(" "))}return{...e,...t}}export{C as $,k as a,P as j};