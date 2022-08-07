(self.webpackChunkbackend_libreria=self.webpackChunkbackend_libreria||[]).push([[2282],{44981:(F,k,v)=>{"use strict";F.exports=v(5582)},5582:function(F,k,v){(function(m,M){F.exports=M(v(53547),v(78384),v(74764))})(this,function(m,M,d){return function(u){var i={};function t(n){if(i[n])return i[n].exports;var l=i[n]={i:n,l:!1,exports:{}};return u[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}return t.m=u,t.c=i,t.d=function(n,l,c){t.o(n,l)||Object.defineProperty(n,l,{enumerable:!0,get:c})},t.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,l){if(1&l&&(n=t(n)),8&l||4&l&&typeof n=="object"&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&l&&typeof n!="string")for(var a in n)t.d(c,a,function(s){return n[s]}.bind(null,a));return c},t.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(l,"a",l),l},t.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},t.p="",t(t.s=111)}({0:function(u,i,t){u.exports=t(17)()},1:function(u,i){u.exports=m},10:function(u,i,t){var n=t(23),l=t(24),c=t(20),a=t(25);u.exports=function(s,p){return n(s)||l(s,p)||c(s,p)||a()},u.exports.default=u.exports,u.exports.__esModule=!0},111:function(u,i,t){"use strict";t.r(i),t.d(i,"Crumb",function(){return j}),t.d(i,"Breadcrumbs",function(){return Z});var n,l=t(5),c=t.n(l),a=t(3),s=t.n(a),p=t(1),h=t.n(p),x=t(0),O=t.n(x),r=t(2),e=t.n(r),o=t(51),f=t.n(o),P=t(8),z=t(4),D=t(9),N=t(21),q=["children","label"],_=e()(D.Flex)(n||(n=s()([`
  svg {
    height: 10px;
    width: 10px;
  }
  svg path {
    fill: `,`;
  }
  :last-of-type `,` {
    display: none;
  }
`])),function(U){return U.theme.colors.neutral300},z.Box),j=function(U){var V=U.children;return h.a.createElement(_,{inline:!0,as:"li"},h.a.createElement(P.Typography,{fontWeight:"bold",color:"neutral800"},V),h.a.createElement(z.Box,{paddingLeft:3,paddingRight:3},h.a.createElement(f.a,null)))};j.displayName="Crumb",j.propTypes={children:O.a.string.isRequired};var A=O.a.shape({type:O.a.oneOf([j])}),Z=function(U){var V=U.children,J=U.label,ee=c()(U,q);return h.a.createElement(D.Flex,ee,h.a.createElement(N.VisuallyHidden,null,J),h.a.createElement("ol",{"aria-hidden":!0},V))};Z.displayName="Breadcrumbs",Z.propTypes={children:O.a.oneOfType([O.a.arrayOf(A),A]).isRequired,label:O.a.string.isRequired}},13:function(u,i){function t(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(u.exports=t=function(l){return typeof l},u.exports.default=u.exports,u.exports.__esModule=!0):(u.exports=t=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},u.exports.default=u.exports,u.exports.__esModule=!0),t(n)}u.exports=t,u.exports.default=u.exports,u.exports.__esModule=!0},17:function(u,i,t){"use strict";var n=t(18);function l(){}function c(){}c.resetWarningCache=l,u.exports=function(){function a(h,x,O,r,e,o){if(o!==n){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function s(){return a}a.isRequired=a;var p={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:s,element:a,elementType:a,instanceOf:s,node:a,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:c,resetWarningCache:l};return p.PropTypes=p,p}},18:function(u,i,t){"use strict";u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(u,i){u.exports=function(t,n){(n==null||n>t.length)&&(n=t.length);for(var l=0,c=new Array(n);l<n;l++)c[l]=t[l];return c},u.exports.default=u.exports,u.exports.__esModule=!0},2:function(u,i){u.exports=M},20:function(u,i,t){var n=t(19);u.exports=function(l,c){if(l){if(typeof l=="string")return n(l,c);var a=Object.prototype.toString.call(l).slice(8,-1);return a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set"?Array.from(l):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(l,c):void 0}},u.exports.default=u.exports,u.exports.__esModule=!0},21:function(u,i,t){"use strict";t.r(i),t.d(i,"VisuallyHidden",function(){return s});var n,l=t(3),c=t.n(l),a=t(2),s=t.n(a).a.div(n||(n=c()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},22:function(u,i){u.exports=function(t,n){if(t==null)return{};var l,c,a={},s=Object.keys(t);for(c=0;c<s.length;c++)l=s[c],n.indexOf(l)>=0||(a[l]=t[l]);return a},u.exports.default=u.exports,u.exports.__esModule=!0},23:function(u,i){u.exports=function(t){if(Array.isArray(t))return t},u.exports.default=u.exports,u.exports.__esModule=!0},24:function(u,i){u.exports=function(t,n){var l=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(l!=null){var c,a,s=[],p=!0,h=!1;try{for(l=l.call(t);!(p=(c=l.next()).done)&&(s.push(c.value),!n||s.length!==n);p=!0);}catch(x){h=!0,a=x}finally{try{p||l.return==null||l.return()}finally{if(h)throw a}}return s}},u.exports.default=u.exports,u.exports.__esModule=!0},25:function(u,i){u.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},u.exports.default=u.exports,u.exports.__esModule=!0},3:function(u,i){u.exports=function(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))},u.exports.default=u.exports,u.exports.__esModule=!0},4:function(u,i,t){"use strict";t.r(i),t.d(i,"Box",function(){return r});var n,l=t(3),c=t.n(l),a=t(0),s=t.n(a),p=t(2),h=t.n(p),x=t(7),O={color:!0},r=h.a.div.withConfig({shouldForwardProp:function(e,o){return!O[e]&&o(e)}})(n||(n=c()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,f=e.background;return o.colors[f]},function(e){var o=e.theme,f=e.color;return o.colors[f]},function(e){var o=e.theme,f=e.padding;return Object(x.a)("padding",f,o)},function(e){var o=e.theme,f=e.paddingTop;return Object(x.a)("padding-top",f,o)},function(e){var o=e.theme,f=e.paddingRight;return Object(x.a)("padding-right",f,o)},function(e){var o=e.theme,f=e.paddingBottom;return Object(x.a)("padding-bottom",f,o)},function(e){var o=e.theme,f=e.paddingLeft;return Object(x.a)("padding-left",f,o)},function(e){var o=e.theme,f=e.marginLeft;return Object(x.a)("margin-left",f,o)},function(e){var o=e.theme,f=e.marginRight;return Object(x.a)("margin-right",f,o)},function(e){var o=e.theme,f=e.marginTop;return Object(x.a)("margin-top",f,o)},function(e){var o=e.theme,f=e.marginBottom;return Object(x.a)("margin-bottom",f,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,f=e.hasRadius,P=e.borderRadius;return f?o.borderRadius:P},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,f=e.borderColor,P=e.borderStyle,z=e.borderWidth;if(f&&!P&&!z)return"1px solid ".concat(o.colors[f])},function(e){var o=e.theme,f=e.shadow;return o.shadows[f]},function(e){return e.pointerEvents},function(e){var o=e._hover,f=e.theme;return o?o(f):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});r.displayName="Box",r.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},r.propTypes={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])}},5:function(u,i,t){var n=t(22);u.exports=function(l,c){if(l==null)return{};var a,s,p=n(l,c);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(s=0;s<h.length;s++)a=h[s],c.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(l,a)&&(p[a]=l[a])}return p},u.exports.default=u.exports,u.exports.__esModule=!0},51:function(u,i){u.exports=d},7:function(u,i,t){"use strict";var n=t(10),l=t.n(n),c=t(13),a=t.n(c);i.a=function(s,p,h){var x=p;if(Array.isArray(p)||a()(p)!=="object"||(x=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),x!==void 0){if(Array.isArray(x)){var O=x,r=l()(O,3),e=r[0],o=r[1],f=r[2],P="".concat(s,": ").concat(h.spaces[e],";");return o!==void 0&&(P+="".concat(h.mediaQueries.tablet,`{
          `).concat(s,": ").concat(h.spaces[o],`;
        }`)),f!==void 0&&(P+="".concat(h.mediaQueries.mobile,`{
          `).concat(s,": ").concat(h.spaces[f],`;
        }`)),P}var z=h.spaces[x]||x;return"".concat(s,": ").concat(z,";")}}},8:function(u,i,t){"use strict";t.r(i),t.d(i,"Typography",function(){return O});var n,l=t(3),c=t.n(l),a=t(0),s=t.n(a),p=t(2),h=["alpha","beta","delta","epsilon","omega","pi","sigma"],x={fontSize:!0,fontWeight:!0},O=t.n(p).a.span.withConfig({shouldForwardProp:function(r,e){return!x[r]&&e(r)}})(n||(n=c()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(r){var e=r.theme,o=r.fontWeight;return e.fontWeights[o]},function(r){var e=r.theme,o=r.fontSize;return e.fontSizes[o]},function(r){var e=r.theme,o=r.lineHeight;return e.lineHeights[o]},function(r){var e=r.theme,o=r.textColor;return e.colors[o||"neutral800"]},function(r){return r.textTransform},function(r){return r.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(r){var e=r.variant,o=r.theme;switch(e){case"alpha":return`
        font-weight: `.concat(o.fontWeights.bold,`;
        font-size: `).concat(o.fontSizes[5],`;
        line-height: `).concat(o.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(o.fontWeights.bold,`;
        font-size: `).concat(o.fontSizes[4],`;
        line-height: `).concat(o.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(o.fontWeights.semiBold,`;
        font-size: `).concat(o.fontSizes[3],`;
        line-height: `).concat(o.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(o.fontSizes[3],`;
        line-height: `).concat(o.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(o.fontSizes[2],`;
        line-height: `).concat(o.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(o.fontSizes[1],`;
        line-height: `).concat(o.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(o.fontWeights.bold,`;
        font-size: `).concat(o.fontSizes[0],`;
        line-height: `).concat(o.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(o.fontSizes[2],`;
      `)}});O.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},O.propTypes={fontSize:s.a.oneOfType([s.a.number,s.a.string]),fontWeight:s.a.string,lineHeight:s.a.oneOfType([s.a.number,s.a.string]),textColor:s.a.string,textTransform:s.a.string,variant:s.a.oneOf(h)}},9:function(u,i,t){"use strict";t.r(i),t.d(i,"Flex",function(){return r});var n,l=t(3),c=t.n(l),a=t(0),s=t.n(a),p=t(2),h=t.n(p),x=t(4),O={direction:!0},r=h()(x.Box).withConfig({shouldForwardProp:function(e,o){return!O[e]&&o(e)}})(n||(n=c()([`
  display: `,`;
  flex-direction: `,`;
  justify-content: `,`;
  align-items: `,`;
  flex-wrap: `,`;
`])),function(e){return e.inline?"inline-flex":"flex"},function(e){return e.direction},function(e){return e.justifyContent},function(e){return e.alignItems},function(e){return e.wrap});r.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},r.propTypes={alignItems:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.number]),direction:s.a.string,inline:s.a.bool,justifyContent:s.a.string,reverse:s.a.bool,wrap:s.a.string}}})})},80117:(F,k,v)=>{"use strict";F.exports=v(41706)},41706:function(F,k,v){(function(m,M){F.exports=M(v(53547),v(78384))})(this,function(m,M){return function(d){var u={};function i(t){if(u[t])return u[t].exports;var n=u[t]={i:t,l:!1,exports:{}};return d[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=d,i.c=u,i.d=function(t,n,l){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:l})},i.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n||4&n&&typeof t=="object"&&t&&t.__esModule)return t;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&n&&typeof t!="string")for(var c in t)i.d(l,c,function(a){return t[a]}.bind(null,c));return l},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=109)}({0:function(d,u,i){d.exports=i(17)()},1:function(d,u){d.exports=m},10:function(d,u,i){var t=i(23),n=i(24),l=i(20),c=i(25);d.exports=function(a,s){return t(a)||n(a,s)||l(a,s)||c()},d.exports.default=d.exports,d.exports.__esModule=!0},109:function(d,u,i){"use strict";i.r(u),i.d(u,"Main",function(){return z}),i.d(u,"SkipToContent",function(){return _});var t,n=i(6),l=i.n(n),c=i(5),a=i.n(c),s=i(3),p=i.n(s),h=i(1),x=i.n(h),O=i(0),r=i.n(O),e=i(2),o=i.n(e),f=["labelledBy"],P=o.a.main(t||(t=p()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),z=function(j){var A=j.labelledBy,Z=a()(j,f),U=A||"main-content-title";return x.a.createElement(P,l()({"aria-labelledby":U,id:"main-content",tabIndex:-1},Z))};z.defaultProps={labelledBy:void 0},z.propTypes={labelledBy:r.a.string};var D,N=i(4),q=o()(N.Box)(D||(D=p()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(j){return j.theme.spaces[3]},function(j){return j.theme.spaces[3]}),_=function(j){var A=j.children;return x.a.createElement(q,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},A)};_.propTypes={children:r.a.node.isRequired}},13:function(d,u){function i(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(d.exports=i=function(n){return typeof n},d.exports.default=d.exports,d.exports.__esModule=!0):(d.exports=i=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d.exports.default=d.exports,d.exports.__esModule=!0),i(t)}d.exports=i,d.exports.default=d.exports,d.exports.__esModule=!0},17:function(d,u,i){"use strict";var t=i(18);function n(){}function l(){}l.resetWarningCache=n,d.exports=function(){function c(p,h,x,O,r,e){if(e!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return c}c.isRequired=c;var s={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:a,element:c,elementType:c,instanceOf:a,node:c,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:l,resetWarningCache:n};return s.PropTypes=s,s}},18:function(d,u,i){"use strict";d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(d,u){d.exports=function(i,t){(t==null||t>i.length)&&(t=i.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=i[n];return l},d.exports.default=d.exports,d.exports.__esModule=!0},2:function(d,u){d.exports=M},20:function(d,u,i){var t=i(19);d.exports=function(n,l){if(n){if(typeof n=="string")return t(n,l);var c=Object.prototype.toString.call(n).slice(8,-1);return c==="Object"&&n.constructor&&(c=n.constructor.name),c==="Map"||c==="Set"?Array.from(n):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?t(n,l):void 0}},d.exports.default=d.exports,d.exports.__esModule=!0},22:function(d,u){d.exports=function(i,t){if(i==null)return{};var n,l,c={},a=Object.keys(i);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(c[n]=i[n]);return c},d.exports.default=d.exports,d.exports.__esModule=!0},23:function(d,u){d.exports=function(i){if(Array.isArray(i))return i},d.exports.default=d.exports,d.exports.__esModule=!0},24:function(d,u){d.exports=function(i,t){var n=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(n!=null){var l,c,a=[],s=!0,p=!1;try{for(n=n.call(i);!(s=(l=n.next()).done)&&(a.push(l.value),!t||a.length!==t);s=!0);}catch(h){p=!0,c=h}finally{try{s||n.return==null||n.return()}finally{if(p)throw c}}return a}},d.exports.default=d.exports,d.exports.__esModule=!0},25:function(d,u){d.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},d.exports.default=d.exports,d.exports.__esModule=!0},3:function(d,u){d.exports=function(i,t){return t||(t=i.slice(0)),Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(t)}}))},d.exports.default=d.exports,d.exports.__esModule=!0},4:function(d,u,i){"use strict";i.r(u),i.d(u,"Box",function(){return O});var t,n=i(3),l=i.n(n),c=i(0),a=i.n(c),s=i(2),p=i.n(s),h=i(7),x={color:!0},O=p.a.div.withConfig({shouldForwardProp:function(r,e){return!x[r]&&e(r)}})(t||(t=l()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(r){var e=r.fontSize;return r.theme.fontSizes[e]||e},function(r){var e=r.theme,o=r.background;return e.colors[o]},function(r){var e=r.theme,o=r.color;return e.colors[o]},function(r){var e=r.theme,o=r.padding;return Object(h.a)("padding",o,e)},function(r){var e=r.theme,o=r.paddingTop;return Object(h.a)("padding-top",o,e)},function(r){var e=r.theme,o=r.paddingRight;return Object(h.a)("padding-right",o,e)},function(r){var e=r.theme,o=r.paddingBottom;return Object(h.a)("padding-bottom",o,e)},function(r){var e=r.theme,o=r.paddingLeft;return Object(h.a)("padding-left",o,e)},function(r){var e=r.theme,o=r.marginLeft;return Object(h.a)("margin-left",o,e)},function(r){var e=r.theme,o=r.marginRight;return Object(h.a)("margin-right",o,e)},function(r){var e=r.theme,o=r.marginTop;return Object(h.a)("margin-top",o,e)},function(r){var e=r.theme,o=r.marginBottom;return Object(h.a)("margin-bottom",o,e)},function(r){var e=r.theme;return r.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(r){var e=r.theme;return r.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(r){var e=r.theme,o=r.hasRadius,f=r.borderRadius;return o?e.borderRadius:f},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var e=r.borderColor;return r.theme.colors[e]},function(r){var e=r.theme,o=r.borderColor,f=r.borderStyle,P=r.borderWidth;if(o&&!f&&!P)return"1px solid ".concat(e.colors[o])},function(r){var e=r.theme,o=r.shadow;return e.shadows[o]},function(r){return r.pointerEvents},function(r){var e=r._hover,o=r.theme;return e?e(o):void 0},function(r){return r.display},function(r){return r.position},function(r){var e=r.left;return r.theme.spaces[e]||e},function(r){var e=r.right;return r.theme.spaces[e]||e},function(r){var e=r.top;return r.theme.spaces[e]||e},function(r){var e=r.bottom;return r.theme.spaces[e]||e},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var e=r.width;return r.theme.spaces[e]||e},function(r){var e=r.maxWidth;return r.theme.spaces[e]||e},function(r){var e=r.minWidth;return r.theme.spaces[e]||e},function(r){var e=r.height;return r.theme.spaces[e]||e},function(r){var e=r.maxHeight;return r.theme.spaces[e]||e},function(r){var e=r.minHeight;return r.theme.spaces[e]||e},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});O.displayName="Box",O.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},O.propTypes={_hover:a.a.func,background:a.a.string,basis:a.a.oneOfType([a.a.string,a.a.string]),borderColor:a.a.string,children:a.a.oneOfType([a.a.node,a.a.string]),color:a.a.string,flex:a.a.oneOfType([a.a.string,a.a.string]),grow:a.a.oneOfType([a.a.string,a.a.string]),hasRadius:a.a.bool,hiddenS:a.a.bool,hiddenXS:a.a.bool,padding:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingBottom:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingLeft:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingRight:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingTop:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),shadow:a.a.string,shrink:a.a.oneOfType([a.a.string,a.a.string])}},5:function(d,u,i){var t=i(22);d.exports=function(n,l){if(n==null)return{};var c,a,s=t(n,l);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(a=0;a<p.length;a++)c=p[a],l.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(n,c)&&(s[c]=n[c])}return s},d.exports.default=d.exports,d.exports.__esModule=!0},6:function(d,u){function i(){return d.exports=i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c])}return t},d.exports.default=d.exports,d.exports.__esModule=!0,i.apply(this,arguments)}d.exports=i,d.exports.default=d.exports,d.exports.__esModule=!0},7:function(d,u,i){"use strict";var t=i(10),n=i.n(t),l=i(13),c=i.n(l);u.a=function(a,s,p){var h=s;if(Array.isArray(s)||c()(s)!=="object"||(h=[s==null?void 0:s.desktop,s==null?void 0:s.tablet,s==null?void 0:s.mobile]),h!==void 0){if(Array.isArray(h)){var x=h,O=n()(x,3),r=O[0],e=O[1],o=O[2],f="".concat(a,": ").concat(p.spaces[r],";");return e!==void 0&&(f+="".concat(p.mediaQueries.tablet,`{
          `).concat(a,": ").concat(p.spaces[e],`;
        }`)),o!==void 0&&(f+="".concat(p.mediaQueries.mobile,`{
          `).concat(a,": ").concat(p.spaces[o],`;
        }`)),f}var P=p.spaces[h]||h;return"".concat(a,": ").concat(P,";")}}}})})},8884:(F,k,v)=>{"use strict";v.r(k),v.d(k,{ProvidersPage:()=>xe,default:()=>$e});var m=v(53547),M=v(97132),d=v(68547),u=v(18721),i=v.n(u),t=v(11700),n=v.n(t),l=v(67814),c=v(35395),a=v(80117),s=v(67422),p=v(43546),h=v(33483),x=v(19631),O=v(49549),r=v(56204),e=v.n(r),o=v(23724),f=v(53209),P=v(42722);const z={id:(0,P.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},D={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},N={id:(0,P.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},q={id:(0,P.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},_={id:(0,P.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},j={id:(0,P.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},A={id:(0,P.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},Z={id:(0,P.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},V={email:{form:[[{intlLabel:q,name:"enabled",type:"bool",description:N,size:6}]],schema:f.Ry().shape({enabled:f.Xg().required(d.translatedErrors.required)})},providers:{form:[[{intlLabel:q,name:"enabled",type:"bool",description:N,size:6,validations:{required:!0}}],[{intlLabel:_,name:"key",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:Z,name:"secret",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:z,placeholder:D,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:j,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:f.Ry().shape({enabled:f.Xg().required(d.translatedErrors.required),key:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),secret:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),callback:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:q,name:"enabled",type:"bool",description:N,size:6,validations:{required:!0}}],[{intlLabel:_,name:"key",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:Z,name:"secret",type:"text",placeholder:A,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,P.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,P.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:z,placeholder:D,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:j,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:f.Ry().shape({enabled:f.Xg().required(d.translatedErrors.required),key:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),secret:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),subdomain:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()}),callback:f.Z_().when("enabled",{is:!0,then:f.Z_().required(d.translatedErrors.required),otherwise:f.Z_()})})}};var J=(g,b,y)=>new Promise((B,w)=>{var I=S=>{try{L(y.next(S))}catch(E){w(E)}},R=S=>{try{L(y.throw(S))}catch(E){w(E)}},L=S=>S.done?B(S.value):Promise.resolve(S.value).then(I,R);L((y=y.apply(g,b)).next())});const ee=g=>J(void 0,null,function*(){try{const{data:b}=yield P.be.get((0,P.Gc)("providers"));return b}catch(b){throw g({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),Te=g=>P.be.put((0,P.Gc)("providers"),g);var Ee=v(96486);const Se=g=>(0,Ee.sortBy)(Object.keys(g).reduce((b,y)=>{const{icon:B,enabled:w,subdomain:I}=g[y],R=B==="envelope"?["fas","envelope"]:["fab",B];return I!==void 0?b.push({name:y,icon:R,enabled:w,subdomain:I}):b.push({name:y,icon:R,enabled:w}),b},[]),"name");var ue=v(51725),de=v(64459),we=v(9524),ce=v(44981),fe=v(39272),G=v(68991),Me=v(45697),T=v.n(Me),je=v(80831),Re=v(53575),Ce=v(99136),Be=Object.defineProperty,pe=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,me=(g,b,y)=>b in g?Be(g,b,{enumerable:!0,configurable:!0,writable:!0,value:y}):g[b]=y,te=(g,b)=>{for(var y in b||(b={}))Le.call(b,y)&&me(g,y,b[y]);if(pe)for(var y of pe(b))ze.call(b,y)&&me(g,y,b[y]);return g};const re=({description:g,disabled:b,intlLabel:y,error:B,name:w,onChange:I,placeholder:R,providerToEditName:L,type:S,value:E})=>{const{formatMessage:W}=(0,M.useIntl)(),X=w==="noName"?`${strapi.backendURL}/api/connect/${L}/callback`:E,Q=W({id:y.id,defaultMessage:y.defaultMessage},te({provider:L},y.values)),H=g?W({id:g.id,defaultMessage:g.defaultMessage},te({provider:L},g.values)):"";if(S==="bool")return m.createElement(Re.ToggleInput,{"aria-label":w,checked:E,disabled:b,hint:H,label:Q,name:w,offLabel:W({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:W({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:$=>{I({target:{name:w,value:$.target.checked}})}});const ae=R?W({id:R.id,defaultMessage:R.defaultMessage},te({},R.values)):"",ie=B?W({id:B,defaultMessage:B}):"";return m.createElement(Ce.TextInput,{"aria-label":w,disabled:b,error:ie,label:Q,name:w,onChange:I,placeholder:ae,type:S,value:X})};re.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},re.propTypes={description:T().shape({id:T().string.isRequired,defaultMessage:T().string.isRequired,values:T().object}),disabled:T().bool,error:T().string,intlLabel:T().shape({id:T().string.isRequired,defaultMessage:T().string.isRequired,values:T().object}).isRequired,name:T().string.isRequired,onChange:T().func.isRequired,placeholder:T().shape({id:T().string.isRequired,defaultMessage:T().string.isRequired,values:T().object}),providerToEditName:T().string.isRequired,type:T().string.isRequired,value:T().oneOfType([T().bool,T().string])};const Ie=re;var Ae=Object.defineProperty,Fe=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ve=(g,b,y)=>b in g?Ae(g,b,{enumerable:!0,configurable:!0,writable:!0,value:y}):g[b]=y,He=(g,b)=>{for(var y in b||(b={}))Ue.call(b,y)&&ve(g,y,b[y]);if(he)for(var y of he(b))We.call(b,y)&&ve(g,y,b[y]);return g},De=(g,b)=>Fe(g,ke(b));const ne=({headerBreadcrumbs:g,initialData:b,isSubmiting:y,layout:B,isOpen:w,onSubmit:I,onToggle:R,providerToEditName:L})=>{const{formatMessage:S}=(0,M.useIntl)();return w?m.createElement(G.ModalLayout,{onClose:R,labelledBy:"title"},m.createElement(G.ModalHeader,null,m.createElement(ce.Breadcrumbs,{label:g.join(", ")},g.map(E=>m.createElement(ce.Crumb,{key:E},E)))),m.createElement(je.Formik,{onSubmit:E=>I(E),initialValues:b,validationSchema:B.schema,validateOnChange:!1},({errors:E,handleChange:W,values:X})=>m.createElement(d.Form,null,m.createElement(G.ModalBody,null,m.createElement(we.Stack,{spacing:1},m.createElement(fe.Grid,{gap:5},B.form.map(Q=>Q.map(H=>m.createElement(fe.GridItem,{key:H.name,col:H.size,xs:12},m.createElement(Ie,De(He({},H),{error:E[H.name],onChange:W,value:X[H.name],providerToEditName:L})))))))),m.createElement(G.ModalFooter,{startActions:m.createElement(de.Button,{variant:"tertiary",onClick:R,type:"button"},S({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:m.createElement(m.Fragment,null,m.createElement(de.Button,{type:"submit",loading:y},S({id:"global.save",defaultMessage:"Save"})))})))):null};ne.defaultProps={initialData:null,providerToEditName:null},ne.propTypes={headerBreadcrumbs:T().arrayOf(T().string).isRequired,initialData:T().object,layout:T().shape({form:T().arrayOf(T().array),schema:T().object}).isRequired,isOpen:T().bool.isRequired,isSubmiting:T().bool.isRequired,onSubmit:T().func.isRequired,onToggle:T().func.isRequired,providerToEditName:T().string};const Ze=ne;var Ne=Object.defineProperty,qe=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,be=(g,b,y)=>b in g?Ne(g,b,{enumerable:!0,configurable:!0,writable:!0,value:y}):g[b]=y,oe=(g,b)=>{for(var y in b||(b={}))Ve.call(b,y)&&be(g,y,b[y]);if(ge)for(var y of ge(b))Xe.call(b,y)&&be(g,y,b[y]);return g},Qe=(g,b)=>qe(g,_e(b)),ye=(g,b,y)=>new Promise((B,w)=>{var I=S=>{try{L(y.next(S))}catch(E){w(E)}},R=S=>{try{L(y.throw(S))}catch(E){w(E)}},L=S=>S.done?B(S.value):Promise.resolve(S.value).then(I,R);L((y=y.apply(g,b)).next())});const xe=()=>{const{formatMessage:g}=(0,M.useIntl)();(0,d.useFocusWhenNavigate)();const{notifyStatus:b}=(0,s.useNotifyAT)(),y=(0,o.useQueryClient)(),{trackUsage:B}=(0,d.useTracking)(),w=(0,m.useRef)(B),[I,R]=(0,m.useState)(!1),[L,S]=(0,m.useState)(!1),[E,W]=(0,m.useState)(null),X=(0,d.useNotification)(),{lockApp:Q,unlockApp:H}=(0,d.useOverlayBlocker)(),ae=(0,m.useMemo)(()=>({update:ue.Z.updateProviders}),[]),{isLoading:ie,allowedActions:{canUpdate:$}}=(0,d.useRBAC)(ae),{isLoading:Ge,data:K,isFetching:Ke}=(0,o.useQuery)("get-providers",()=>ee(X),{onSuccess:()=>{b(g({id:(0,P.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Ye=Ge||Ke,Je=(0,o.useMutation)(Te,{onSuccess:()=>ye(void 0,null,function*(){yield y.invalidateQueries("get-providers"),X({type:"info",message:{id:(0,P.OB)("notification.success.submit")}}),w.current("didEditAuthenticationProvider"),S(!1),se(),H()}),onError:()=>{X({type:"warning",message:{id:"notification.error"}}),H(),S(!1)},refetchActive:!1}),Y=(0,m.useMemo)(()=>Se(K),[K]),et=Y.length,Oe=(0,m.useMemo)(()=>{if(!E)return!1;const C=Y.find(le=>le.name===E);return i()(C,"subdomain")},[Y,E]),tt=g({id:(0,P.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),rt=(0,m.useMemo)(()=>E==="email"?V.email:Oe?V.providersWithSubdomain:V.providers,[E,Oe]),se=()=>{R(C=>!C)},Pe=C=>{$&&(W(C.name),se())},nt=C=>ye(void 0,null,function*(){S(!0),Q(),w.current("willEditAuthenticationProvider");const le=Qe(oe({},K),{[E]:C});Je.mutate({providers:le})});return m.createElement(c.Layout,null,m.createElement(d.SettingsPageTitle,{name:tt}),m.createElement(a.Main,null,m.createElement(c.HeaderLayout,{title:g({id:(0,P.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ye||ie?m.createElement(d.LoadingIndicatorPage,null):m.createElement(c.ContentLayout,null,m.createElement(p.Table,{colCount:4,rowCount:et+1},m.createElement(p.Thead,null,m.createElement(p.Tr,null,m.createElement(p.Th,null,m.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},m.createElement(x.VisuallyHidden,null,g({id:(0,P.OB)("Providers.image"),defaultMessage:"Image"})))),m.createElement(p.Th,null,m.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},g({id:"global.name",defaultMessage:"Name"}))),m.createElement(p.Th,null,m.createElement(h.Typography,{variant:"sigma",textColor:"neutral600"},g({id:(0,P.OB)("Providers.status"),defaultMessage:"Status"}))),m.createElement(p.Th,null,m.createElement(h.Typography,{variant:"sigma"},m.createElement(x.VisuallyHidden,null,g({id:"global.settings",defaultMessage:"Settings"})))))),m.createElement(p.Tbody,null,Y.map(C=>m.createElement(p.Tr,oe({key:C.name},(0,d.onRowClick)({fn:()=>Pe(C),condition:$})),m.createElement(p.Td,{width:""},m.createElement(l.G,{icon:C.icon})),m.createElement(p.Td,{width:"45%"},m.createElement(h.Typography,{fontWeight:"semiBold",textColor:"neutral800"},C.name)),m.createElement(p.Td,{width:"65%"},m.createElement(h.Typography,{textColor:C.enabled?"success600":"danger600","data-testid":`enable-${C.name}`},C.enabled?g({id:"global.enabled",defaultMessage:"Enabled"}):g({id:"global.disabled",defaultMessage:"Disabled"}))),m.createElement(p.Td,oe({},d.stopPropagation),$&&m.createElement(O.IconButton,{onClick:()=>Pe(C),noBorder:!0,icon:m.createElement(e(),null),label:"Edit"})))))))),m.createElement(Ze,{initialData:K[E],isOpen:I,isSubmiting:L,layout:rt,headerBreadcrumbs:[g({id:(0,P.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),n()(E)],onToggle:se,onSubmit:nt,providerToEditName:E}))},$e=()=>m.createElement(d.CheckPagePermissions,{permissions:ue.Z.readProviders},m.createElement(xe,null))},65772:(F,k,v)=>{"use strict";v.d(k,{Z:()=>n});var m=v(9669),M=v.n(m),d=v(68547),u=v.n(d),i=(l,c,a)=>new Promise((s,p)=>{var h=r=>{try{O(a.next(r))}catch(e){p(e)}},x=r=>{try{O(a.throw(r))}catch(e){p(e)}},O=r=>r.done?s(r.value):Promise.resolve(r.value).then(h,x);O((a=a.apply(l,c)).next())});const t=M().create({baseURL:""});t.interceptors.request.use(l=>i(void 0,null,function*(){return l.headers={Authorization:`Bearer ${d.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},l}),l=>{Promise.reject(l)}),t.interceptors.response.use(l=>l,l=>{var c;throw((c=l.response)==null?void 0:c.status)===401&&(d.auth.clearAppStorage(),window.location.reload()),l});const n=t},42722:(F,k,v)=>{"use strict";v.d(k,{be:()=>m.Z,YX:()=>u,Gc:()=>n,OB:()=>l.Z});var m=v(65772),M=v(96486);const u=c=>Object.keys(c).reduce((a,s)=>{const p=c[s].controllers,h=Object.keys(p).reduce((x,O)=>((0,M.isEmpty)(p[O])||(x[O]=p[O]),x),{});return(0,M.isEmpty)(h)||(a[s]={controllers:h}),a},{});var i=v(83086);const n=c=>`/${i.Z}/${c}`;var l=v(97961)}}]);
