(self.webpackChunkbackend_libreria=self.webpackChunkbackend_libreria||[]).push([[8418],{44981:(B,A,m)=>{"use strict";B.exports=m(5582)},5582:function(B,A,m){(function(p,E){B.exports=E(m(53547),m(78384),m(74764))})(this,function(p,E,d){return function(a){var r={};function t(o){if(r[o])return r[o].exports;var l=r[o]={i:o,l:!1,exports:{}};return a[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}return t.m=a,t.c=r,t.d=function(o,l,c){t.o(o,l)||Object.defineProperty(o,l,{enumerable:!0,get:c})},t.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,l){if(1&l&&(o=t(o)),8&l||4&l&&typeof o=="object"&&o&&o.__esModule)return o;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),2&l&&typeof o!="string")for(var s in o)t.d(c,s,function(u){return o[u]}.bind(null,s));return c},t.n=function(o){var l=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(l,"a",l),l},t.o=function(o,l){return Object.prototype.hasOwnProperty.call(o,l)},t.p="",t(t.s=111)}({0:function(a,r,t){a.exports=t(17)()},1:function(a,r){a.exports=p},10:function(a,r,t){var o=t(23),l=t(24),c=t(20),s=t(25);a.exports=function(u,f){return o(u)||l(u,f)||c(u,f)||s()},a.exports.default=a.exports,a.exports.__esModule=!0},111:function(a,r,t){"use strict";t.r(r),t.d(r,"Crumb",function(){return w}),t.d(r,"Breadcrumbs",function(){return _});var o,l=t(5),c=t.n(l),s=t(3),u=t.n(s),f=t(1),h=t.n(f),g=t(0),v=t.n(g),n=t(2),e=t.n(n),i=t(51),y=t.n(i),P=t(8),j=t(4),W=t(9),V=t(21),Q=["children","label"],k=e()(W.Flex)(o||(o=u()([`
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
`])),function(z){return z.theme.colors.neutral300},j.Box),w=function(z){var D=z.children;return h.a.createElement(k,{inline:!0,as:"li"},h.a.createElement(P.Typography,{fontWeight:"bold",color:"neutral800"},D),h.a.createElement(j.Box,{paddingLeft:3,paddingRight:3},h.a.createElement(y.a,null)))};w.displayName="Crumb",w.propTypes={children:v.a.string.isRequired};var H=v.a.shape({type:v.a.oneOf([w])}),_=function(z){var D=z.children,N=z.label,$=c()(z,Q);return h.a.createElement(W.Flex,$,h.a.createElement(V.VisuallyHidden,null,N),h.a.createElement("ol",{"aria-hidden":!0},D))};_.displayName="Breadcrumbs",_.propTypes={children:v.a.oneOfType([v.a.arrayOf(H),H]).isRequired,label:v.a.string.isRequired}},13:function(a,r){function t(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(a.exports=t=function(l){return typeof l},a.exports.default=a.exports,a.exports.__esModule=!0):(a.exports=t=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},a.exports.default=a.exports,a.exports.__esModule=!0),t(o)}a.exports=t,a.exports.default=a.exports,a.exports.__esModule=!0},17:function(a,r,t){"use strict";var o=t(18);function l(){}function c(){}c.resetWarningCache=l,a.exports=function(){function s(h,g,v,n,e,i){if(i!==o){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}function u(){return s}s.isRequired=s;var f={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:u,element:s,elementType:s,instanceOf:u,node:s,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:c,resetWarningCache:l};return f.PropTypes=f,f}},18:function(a,r,t){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(a,r){a.exports=function(t,o){(o==null||o>t.length)&&(o=t.length);for(var l=0,c=new Array(o);l<o;l++)c[l]=t[l];return c},a.exports.default=a.exports,a.exports.__esModule=!0},2:function(a,r){a.exports=E},20:function(a,r,t){var o=t(19);a.exports=function(l,c){if(l){if(typeof l=="string")return o(l,c);var s=Object.prototype.toString.call(l).slice(8,-1);return s==="Object"&&l.constructor&&(s=l.constructor.name),s==="Map"||s==="Set"?Array.from(l):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?o(l,c):void 0}},a.exports.default=a.exports,a.exports.__esModule=!0},21:function(a,r,t){"use strict";t.r(r),t.d(r,"VisuallyHidden",function(){return u});var o,l=t(3),c=t.n(l),s=t(2),u=t.n(s).a.div(o||(o=c()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},22:function(a,r){a.exports=function(t,o){if(t==null)return{};var l,c,s={},u=Object.keys(t);for(c=0;c<u.length;c++)l=u[c],o.indexOf(l)>=0||(s[l]=t[l]);return s},a.exports.default=a.exports,a.exports.__esModule=!0},23:function(a,r){a.exports=function(t){if(Array.isArray(t))return t},a.exports.default=a.exports,a.exports.__esModule=!0},24:function(a,r){a.exports=function(t,o){var l=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(l!=null){var c,s,u=[],f=!0,h=!1;try{for(l=l.call(t);!(f=(c=l.next()).done)&&(u.push(c.value),!o||u.length!==o);f=!0);}catch(g){h=!0,s=g}finally{try{f||l.return==null||l.return()}finally{if(h)throw s}}return u}},a.exports.default=a.exports,a.exports.__esModule=!0},25:function(a,r){a.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},a.exports.default=a.exports,a.exports.__esModule=!0},3:function(a,r){a.exports=function(t,o){return o||(o=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(o)}}))},a.exports.default=a.exports,a.exports.__esModule=!0},4:function(a,r,t){"use strict";t.r(r),t.d(r,"Box",function(){return n});var o,l=t(3),c=t.n(l),s=t(0),u=t.n(s),f=t(2),h=t.n(f),g=t(7),v={color:!0},n=h.a.div.withConfig({shouldForwardProp:function(e,i){return!v[e]&&i(e)}})(o||(o=c()([`
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
`])),function(e){var i=e.fontSize;return e.theme.fontSizes[i]||i},function(e){var i=e.theme,y=e.background;return i.colors[y]},function(e){var i=e.theme,y=e.color;return i.colors[y]},function(e){var i=e.theme,y=e.padding;return Object(g.a)("padding",y,i)},function(e){var i=e.theme,y=e.paddingTop;return Object(g.a)("padding-top",y,i)},function(e){var i=e.theme,y=e.paddingRight;return Object(g.a)("padding-right",y,i)},function(e){var i=e.theme,y=e.paddingBottom;return Object(g.a)("padding-bottom",y,i)},function(e){var i=e.theme,y=e.paddingLeft;return Object(g.a)("padding-left",y,i)},function(e){var i=e.theme,y=e.marginLeft;return Object(g.a)("margin-left",y,i)},function(e){var i=e.theme,y=e.marginRight;return Object(g.a)("margin-right",y,i)},function(e){var i=e.theme,y=e.marginTop;return Object(g.a)("margin-top",y,i)},function(e){var i=e.theme,y=e.marginBottom;return Object(g.a)("margin-bottom",y,i)},function(e){var i=e.theme;return e.hiddenS?"".concat(i.mediaQueries.tablet," { display: none; }"):void 0},function(e){var i=e.theme;return e.hiddenXS?"".concat(i.mediaQueries.mobile," { display: none; }"):void 0},function(e){var i=e.theme,y=e.hasRadius,P=e.borderRadius;return y?i.borderRadius:P},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var i=e.borderColor;return e.theme.colors[i]},function(e){var i=e.theme,y=e.borderColor,P=e.borderStyle,j=e.borderWidth;if(y&&!P&&!j)return"1px solid ".concat(i.colors[y])},function(e){var i=e.theme,y=e.shadow;return i.shadows[y]},function(e){return e.pointerEvents},function(e){var i=e._hover,y=e.theme;return i?i(y):void 0},function(e){return e.display},function(e){return e.position},function(e){var i=e.left;return e.theme.spaces[i]||i},function(e){var i=e.right;return e.theme.spaces[i]||i},function(e){var i=e.top;return e.theme.spaces[i]||i},function(e){var i=e.bottom;return e.theme.spaces[i]||i},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var i=e.width;return e.theme.spaces[i]||i},function(e){var i=e.maxWidth;return e.theme.spaces[i]||i},function(e){var i=e.minWidth;return e.theme.spaces[i]||i},function(e){var i=e.height;return e.theme.spaces[i]||i},function(e){var i=e.maxHeight;return e.theme.spaces[i]||i},function(e){var i=e.minHeight;return e.theme.spaces[i]||i},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});n.displayName="Box",n.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},n.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(a,r,t){var o=t(22);a.exports=function(l,c){if(l==null)return{};var s,u,f=o(l,c);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(l);for(u=0;u<h.length;u++)s=h[u],c.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(l,s)&&(f[s]=l[s])}return f},a.exports.default=a.exports,a.exports.__esModule=!0},51:function(a,r){a.exports=d},7:function(a,r,t){"use strict";var o=t(10),l=t.n(o),c=t(13),s=t.n(c);r.a=function(u,f,h){var g=f;if(Array.isArray(f)||s()(f)!=="object"||(g=[f==null?void 0:f.desktop,f==null?void 0:f.tablet,f==null?void 0:f.mobile]),g!==void 0){if(Array.isArray(g)){var v=g,n=l()(v,3),e=n[0],i=n[1],y=n[2],P="".concat(u,": ").concat(h.spaces[e],";");return i!==void 0&&(P+="".concat(h.mediaQueries.tablet,`{
          `).concat(u,": ").concat(h.spaces[i],`;
        }`)),y!==void 0&&(P+="".concat(h.mediaQueries.mobile,`{
          `).concat(u,": ").concat(h.spaces[y],`;
        }`)),P}var j=h.spaces[g]||g;return"".concat(u,": ").concat(j,";")}}},8:function(a,r,t){"use strict";t.r(r),t.d(r,"Typography",function(){return v});var o,l=t(3),c=t.n(l),s=t(0),u=t.n(s),f=t(2),h=["alpha","beta","delta","epsilon","omega","pi","sigma"],g={fontSize:!0,fontWeight:!0},v=t.n(f).a.span.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(o||(o=c()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(n){var e=n.theme,i=n.fontWeight;return e.fontWeights[i]},function(n){var e=n.theme,i=n.fontSize;return e.fontSizes[i]},function(n){var e=n.theme,i=n.lineHeight;return e.lineHeights[i]},function(n){var e=n.theme,i=n.textColor;return e.colors[i||"neutral800"]},function(n){return n.textTransform},function(n){return n.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(n){var e=n.variant,i=n.theme;switch(e){case"alpha":return`
        font-weight: `.concat(i.fontWeights.bold,`;
        font-size: `).concat(i.fontSizes[5],`;
        line-height: `).concat(i.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(i.fontWeights.bold,`;
        font-size: `).concat(i.fontSizes[4],`;
        line-height: `).concat(i.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(i.fontWeights.semiBold,`;
        font-size: `).concat(i.fontSizes[3],`;
        line-height: `).concat(i.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(i.fontSizes[3],`;
        line-height: `).concat(i.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(i.fontSizes[2],`;
        line-height: `).concat(i.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(i.fontSizes[1],`;
        line-height: `).concat(i.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(i.fontWeights.bold,`;
        font-size: `).concat(i.fontSizes[0],`;
        line-height: `).concat(i.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(i.fontSizes[2],`;
      `)}});v.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},v.propTypes={fontSize:u.a.oneOfType([u.a.number,u.a.string]),fontWeight:u.a.string,lineHeight:u.a.oneOfType([u.a.number,u.a.string]),textColor:u.a.string,textTransform:u.a.string,variant:u.a.oneOf(h)}},9:function(a,r,t){"use strict";t.r(r),t.d(r,"Flex",function(){return n});var o,l=t(3),c=t.n(l),s=t(0),u=t.n(s),f=t(2),h=t.n(f),g=t(4),v={direction:!0},n=h()(g.Box).withConfig({shouldForwardProp:function(e,i){return!v[e]&&i(e)}})(o||(o=c()([`
  display: `,`;
  flex-direction: `,`;
  justify-content: `,`;
  align-items: `,`;
  flex-wrap: `,`;
`])),function(e){return e.inline?"inline-flex":"flex"},function(e){return e.direction},function(e){return e.justifyContent},function(e){return e.alignItems},function(e){return e.wrap});n.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},n.propTypes={alignItems:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.number]),direction:u.a.string,inline:u.a.bool,justifyContent:u.a.string,reverse:u.a.bool,wrap:u.a.string}}})})},80117:(B,A,m)=>{"use strict";B.exports=m(41706)},41706:function(B,A,m){(function(p,E){B.exports=E(m(53547),m(78384))})(this,function(p,E){return function(d){var a={};function r(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return d[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=d,r.c=a,r.d=function(t,o,l){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:l})},r.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o||4&o&&typeof t=="object"&&t&&t.__esModule)return t;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&o&&typeof t!="string")for(var c in t)r.d(l,c,function(s){return t[s]}.bind(null,c));return l},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r(r.s=109)}({0:function(d,a,r){d.exports=r(17)()},1:function(d,a){d.exports=p},10:function(d,a,r){var t=r(23),o=r(24),l=r(20),c=r(25);d.exports=function(s,u){return t(s)||o(s,u)||l(s,u)||c()},d.exports.default=d.exports,d.exports.__esModule=!0},109:function(d,a,r){"use strict";r.r(a),r.d(a,"Main",function(){return j}),r.d(a,"SkipToContent",function(){return k});var t,o=r(6),l=r.n(o),c=r(5),s=r.n(c),u=r(3),f=r.n(u),h=r(1),g=r.n(h),v=r(0),n=r.n(v),e=r(2),i=r.n(e),y=["labelledBy"],P=i.a.main(t||(t=f()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),j=function(w){var H=w.labelledBy,_=s()(w,y),z=H||"main-content-title";return g.a.createElement(P,l()({"aria-labelledby":z,id:"main-content",tabIndex:-1},_))};j.defaultProps={labelledBy:void 0},j.propTypes={labelledBy:n.a.string};var W,V=r(4),Q=i()(V.Box)(W||(W=f()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(w){return w.theme.spaces[3]},function(w){return w.theme.spaces[3]}),k=function(w){var H=w.children;return g.a.createElement(Q,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},H)};k.propTypes={children:n.a.node.isRequired}},13:function(d,a){function r(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(d.exports=r=function(o){return typeof o},d.exports.default=d.exports,d.exports.__esModule=!0):(d.exports=r=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d.exports.default=d.exports,d.exports.__esModule=!0),r(t)}d.exports=r,d.exports.default=d.exports,d.exports.__esModule=!0},17:function(d,a,r){"use strict";var t=r(18);function o(){}function l(){}l.resetWarningCache=o,d.exports=function(){function c(f,h,g,v,n,e){if(e!==t){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function s(){return c}c.isRequired=c;var u={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:s,element:c,elementType:c,instanceOf:s,node:c,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:l,resetWarningCache:o};return u.PropTypes=u,u}},18:function(d,a,r){"use strict";d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(d,a){d.exports=function(r,t){(t==null||t>r.length)&&(t=r.length);for(var o=0,l=new Array(t);o<t;o++)l[o]=r[o];return l},d.exports.default=d.exports,d.exports.__esModule=!0},2:function(d,a){d.exports=E},20:function(d,a,r){var t=r(19);d.exports=function(o,l){if(o){if(typeof o=="string")return t(o,l);var c=Object.prototype.toString.call(o).slice(8,-1);return c==="Object"&&o.constructor&&(c=o.constructor.name),c==="Map"||c==="Set"?Array.from(o):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?t(o,l):void 0}},d.exports.default=d.exports,d.exports.__esModule=!0},22:function(d,a){d.exports=function(r,t){if(r==null)return{};var o,l,c={},s=Object.keys(r);for(l=0;l<s.length;l++)o=s[l],t.indexOf(o)>=0||(c[o]=r[o]);return c},d.exports.default=d.exports,d.exports.__esModule=!0},23:function(d,a){d.exports=function(r){if(Array.isArray(r))return r},d.exports.default=d.exports,d.exports.__esModule=!0},24:function(d,a){d.exports=function(r,t){var o=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var l,c,s=[],u=!0,f=!1;try{for(o=o.call(r);!(u=(l=o.next()).done)&&(s.push(l.value),!t||s.length!==t);u=!0);}catch(h){f=!0,c=h}finally{try{u||o.return==null||o.return()}finally{if(f)throw c}}return s}},d.exports.default=d.exports,d.exports.__esModule=!0},25:function(d,a){d.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},d.exports.default=d.exports,d.exports.__esModule=!0},3:function(d,a){d.exports=function(r,t){return t||(t=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(t)}}))},d.exports.default=d.exports,d.exports.__esModule=!0},4:function(d,a,r){"use strict";r.r(a),r.d(a,"Box",function(){return v});var t,o=r(3),l=r.n(o),c=r(0),s=r.n(c),u=r(2),f=r.n(u),h=r(7),g={color:!0},v=f.a.div.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(t||(t=l()([`
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
`])),function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e},function(n){var e=n.theme,i=n.background;return e.colors[i]},function(n){var e=n.theme,i=n.color;return e.colors[i]},function(n){var e=n.theme,i=n.padding;return Object(h.a)("padding",i,e)},function(n){var e=n.theme,i=n.paddingTop;return Object(h.a)("padding-top",i,e)},function(n){var e=n.theme,i=n.paddingRight;return Object(h.a)("padding-right",i,e)},function(n){var e=n.theme,i=n.paddingBottom;return Object(h.a)("padding-bottom",i,e)},function(n){var e=n.theme,i=n.paddingLeft;return Object(h.a)("padding-left",i,e)},function(n){var e=n.theme,i=n.marginLeft;return Object(h.a)("margin-left",i,e)},function(n){var e=n.theme,i=n.marginRight;return Object(h.a)("margin-right",i,e)},function(n){var e=n.theme,i=n.marginTop;return Object(h.a)("margin-top",i,e)},function(n){var e=n.theme,i=n.marginBottom;return Object(h.a)("margin-bottom",i,e)},function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(n){var e=n.theme,i=n.hasRadius,y=n.borderRadius;return i?e.borderRadius:y},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var e=n.borderColor;return n.theme.colors[e]},function(n){var e=n.theme,i=n.borderColor,y=n.borderStyle,P=n.borderWidth;if(i&&!y&&!P)return"1px solid ".concat(e.colors[i])},function(n){var e=n.theme,i=n.shadow;return e.shadows[i]},function(n){return n.pointerEvents},function(n){var e=n._hover,i=n.theme;return e?e(i):void 0},function(n){return n.display},function(n){return n.position},function(n){var e=n.left;return n.theme.spaces[e]||e},function(n){var e=n.right;return n.theme.spaces[e]||e},function(n){var e=n.top;return n.theme.spaces[e]||e},function(n){var e=n.bottom;return n.theme.spaces[e]||e},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var e=n.width;return n.theme.spaces[e]||e},function(n){var e=n.maxWidth;return n.theme.spaces[e]||e},function(n){var e=n.minWidth;return n.theme.spaces[e]||e},function(n){var e=n.height;return n.theme.spaces[e]||e},function(n){var e=n.maxHeight;return n.theme.spaces[e]||e},function(n){var e=n.minHeight;return n.theme.spaces[e]||e},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});v.displayName="Box",v.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},v.propTypes={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])}},5:function(d,a,r){var t=r(22);d.exports=function(o,l){if(o==null)return{};var c,s,u=t(o,l);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(o);for(s=0;s<f.length;s++)c=f[s],l.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(o,c)&&(u[c]=o[c])}return u},d.exports.default=d.exports,d.exports.__esModule=!0},6:function(d,a){function r(){return d.exports=r=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c])}return t},d.exports.default=d.exports,d.exports.__esModule=!0,r.apply(this,arguments)}d.exports=r,d.exports.default=d.exports,d.exports.__esModule=!0},7:function(d,a,r){"use strict";var t=r(10),o=r.n(t),l=r(13),c=r.n(l);a.a=function(s,u,f){var h=u;if(Array.isArray(u)||c()(u)!=="object"||(h=[u==null?void 0:u.desktop,u==null?void 0:u.tablet,u==null?void 0:u.mobile]),h!==void 0){if(Array.isArray(h)){var g=h,v=o()(g,3),n=v[0],e=v[1],i=v[2],y="".concat(s,": ").concat(f.spaces[n],";");return e!==void 0&&(y+="".concat(f.mediaQueries.tablet,`{
          `).concat(s,": ").concat(f.spaces[e],`;
        }`)),i!==void 0&&(y+="".concat(f.mediaQueries.mobile,`{
          `).concat(s,": ").concat(f.spaces[i],`;
        }`)),y}var P=f.spaces[h]||h;return"".concat(s,": ").concat(P,";")}}}})})},79274:function(B,A,m){(function(p,E){B.exports=E(m(53547))})(this,function(p){return function(E){var d={};function a(r){if(d[r])return d[r].exports;var t=d[r]={i:r,l:!1,exports:{}};return E[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}return a.m=E,a.c=d,a.d=function(r,t,o){a.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:o})},a.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},a.t=function(r,t){if(1&t&&(r=a(r)),8&t||4&t&&typeof r=="object"&&r&&r.__esModule)return r;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&t&&typeof r!="string")for(var l in r)a.d(o,l,function(c){return r[c]}.bind(null,l));return o},a.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(t,"a",t),t},a.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},a.p="",a(a.s=154)}({0:function(E,d){E.exports=p},154:function(E,d,a){"use strict";a.r(d);var r=a(0);function t(){return(t=Object.assign||function(o){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(o[s]=c[s])}return o}).apply(this,arguments)}d.default=function(o){return r.createElement("svg",t({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})})},84210:(B,A,m)=>{"use strict";m.r(A),m.d(A,{default:()=>Te});var p=m(53547),E=m(23724),d=m(97132),a=m(68547),r=m(67422),t=m(80117),o=m(35395),l=m(51725),c=m(42722),s=(x,O,b)=>new Promise((M,T)=>{var R=S=>{try{L(b.next(S))}catch(I){T(I)}},C=S=>{try{L(b.throw(S))}catch(I){T(I)}},L=S=>S.done?M(S.value):Promise.resolve(S.value).then(R,C);L((b=b.apply(x,O)).next())});const u=()=>s(void 0,null,function*(){const{data:x}=yield c.be.get((0,c.Gc)("email-templates"));return x}),f=x=>c.be.put((0,c.Gc)("email-templates"),x);var h=m(45697),g=m.n(h),v=m(43546),n=m(19631),e=m(33483),i=m(49549),y=m(33699),P=m(56204),j=m.n(P),W=m(79274),V=m.n(W),Q=m(22754),k=m.n(Q),w=Object.defineProperty,H=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,D=(x,O,b)=>O in x?w(x,O,{enumerable:!0,configurable:!0,writable:!0,value:b}):x[O]=b,N=(x,O)=>{for(var b in O||(O={}))_.call(O,b)&&D(x,b,O[b]);if(H)for(var b of H(O))z.call(O,b)&&D(x,b,O[b]);return x};const $=({canUpdate:x,onEditClick:O})=>{const{formatMessage:b}=(0,d.useIntl)();return p.createElement(v.Table,{colCount:3,rowCount:3},p.createElement(v.Thead,null,p.createElement(v.Tr,null,p.createElement(v.Th,{width:"1%"},p.createElement(n.VisuallyHidden,null,b({id:(0,c.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),p.createElement(v.Th,null,p.createElement(e.Typography,{variant:"sigma",textColor:"neutral600"},b({id:(0,c.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),p.createElement(v.Th,{width:"1%"},p.createElement(n.VisuallyHidden,null,b({id:(0,c.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),p.createElement(v.Tbody,null,p.createElement(v.Tr,N({},(0,a.onRowClick)({fn:()=>O("reset_password")})),p.createElement(v.Td,null,p.createElement(y.Icon,null,p.createElement(V(),{"aria-label":b({id:"global.reset-password",defaultMessage:"Reset password"})}))),p.createElement(v.Td,null,p.createElement(e.Typography,null,b({id:"global.reset-password",defaultMessage:"Reset password"}))),p.createElement(v.Td,N({},a.stopPropagation),p.createElement(i.IconButton,{onClick:()=>O("reset_password"),label:b({id:(0,c.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:x&&p.createElement(j(),null)}))),p.createElement(v.Tr,N({},(0,a.onRowClick)({fn:()=>O("email_confirmation")})),p.createElement(v.Td,null,p.createElement(y.Icon,null,p.createElement(k(),{"aria-label":b({id:(0,c.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),p.createElement(v.Td,null,p.createElement(e.Typography,null,b({id:(0,c.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),p.createElement(v.Td,N({},a.stopPropagation),p.createElement(i.IconButton,{onClick:()=>O("email_confirmation"),label:b({id:(0,c.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:x&&p.createElement(j(),null)})))))};$.propTypes={canUpdate:g().bool.isRequired,onEditClick:g().func.isRequired};const le=$;var ue=m(80831),X=m(68991),G=m(39272),ne=m(64459),ee=m(44981),ce=m(78607),F=m(53209);const de=F.Ry().shape({options:F.Ry().shape({from:F.Ry().shape({name:F.Z_().required(a.translatedErrors.required),email:F.Z_().email(a.translatedErrors.email).required(a.translatedErrors.required)}).required(),response_email:F.Z_().email(a.translatedErrors.email),object:F.Z_().required(a.translatedErrors.required),message:F.Z_().required(a.translatedErrors.required)}).required(a.translatedErrors.required)}),re=({template:x,onToggle:O,onSubmit:b})=>{const{formatMessage:M}=(0,d.useIntl)();return p.createElement(X.ModalLayout,{onClose:O,labelledBy:`${M({id:(0,c.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,c.OB)(x.display),defaultMessage:x.display})}`},p.createElement(X.ModalHeader,null,p.createElement(ee.Breadcrumbs,{label:`${M({id:(0,c.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,c.OB)(x.display),defaultMessage:x.display})}`},p.createElement(ee.Crumb,null,M({id:(0,c.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),p.createElement(ee.Crumb,null,M({id:(0,c.OB)(x.display),defaultMessage:x.display})))),p.createElement(ue.Formik,{onSubmit:b,initialValues:x,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:T,values:R,handleChange:C,isSubmitting:L})=>{var S,I,Z,K,Y,J,q;return p.createElement(a.Form,null,p.createElement(X.ModalBody,null,p.createElement(G.Grid,{gap:5},p.createElement(G.GridItem,{col:6,s:12},p.createElement(a.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:C,value:R.options.from.name,error:(I=(S=T==null?void 0:T.options)==null?void 0:S.from)==null?void 0:I.name,type:"text"})),p.createElement(G.GridItem,{col:6,s:12},p.createElement(a.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:C,value:R.options.from.email,error:(K=(Z=T==null?void 0:T.options)==null?void 0:Z.from)==null?void 0:K.email,type:"text"})),p.createElement(G.GridItem,{col:6,s:12},p.createElement(a.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:C,value:R.options.response_email,error:(Y=T==null?void 0:T.options)==null?void 0:Y.response_email,type:"text"})),p.createElement(G.GridItem,{col:6,s:12},p.createElement(a.GenericInput,{intlLabel:{id:(0,c.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:C,value:R.options.object,error:(J=T==null?void 0:T.options)==null?void 0:J.object,type:"text"})),p.createElement(G.GridItem,{col:12,s:12},p.createElement(ce.Textarea,{label:M({id:(0,c.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:C,value:R.options.message,error:((q=T==null?void 0:T.options)==null?void 0:q.message)&&M({id:T.options.message,defaultMessage:T.options.message})})))),p.createElement(X.ModalFooter,{startActions:p.createElement(ne.Button,{onClick:O,variant:"tertiary"},"Cancel"),endActions:p.createElement(ne.Button,{loading:L,type:"submit"},"Finish")}))}))};re.propTypes={template:g().shape({display:g().string,icon:g().string,options:g().shape({from:g().shape({name:g().string,email:g().string}),message:g().string,object:g().string,response_email:g().string})}).isRequired,onSubmit:g().func.isRequired,onToggle:g().func.isRequired};const pe=re;var fe=Object.defineProperty,me=Object.defineProperties,he=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(x,O,b)=>O in x?fe(x,O,{enumerable:!0,configurable:!0,writable:!0,value:b}):x[O]=b,ye=(x,O)=>{for(var b in O||(O={}))ge.call(O,b)&&ae(x,b,O[b]);if(oe)for(var b of oe(O))ve.call(O,b)&&ae(x,b,O[b]);return x},be=(x,O)=>me(x,he(O)),xe=(x,O,b)=>new Promise((M,T)=>{var R=S=>{try{L(b.next(S))}catch(I){T(I)}},C=S=>{try{L(b.throw(S))}catch(I){T(I)}},L=S=>S.done?M(S.value):Promise.resolve(S.value).then(R,C);L((b=b.apply(x,O)).next())});const Oe=()=>p.createElement(a.CheckPagePermissions,{permissions:l.Z.readEmailTemplates},p.createElement(Ee,null)),Ee=()=>{const{formatMessage:x}=(0,d.useIntl)(),{trackUsage:O}=(0,a.useTracking)(),{notifyStatus:b}=(0,r.useNotifyAT)(),M=(0,a.useNotification)(),{lockApp:T,unlockApp:R}=(0,a.useOverlayBlocker)(),C=(0,p.useRef)(O),L=(0,E.useQueryClient)();(0,a.useFocusWhenNavigate)();const[S,I]=(0,p.useState)(!1),[Z,K]=(0,p.useState)(null),Y=(0,p.useMemo)(()=>({update:l.Z.updateEmailTemplates}),[]),{isLoading:J,allowedActions:{canUpdate:q}}=(0,a.useRBAC)(Y),{status:Se,data:ie}=(0,E.useQuery)("email-templates",()=>u(),{onSuccess:()=>{b(x({id:(0,c.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError:()=>{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Pe=J||Se!=="success",te=()=>{I(U=>!U)},Me=U=>{K(U),te()},se=(0,E.useMutation)(U=>f({"email-templates":U}),{onSuccess:()=>xe(void 0,null,function*(){yield L.invalidateQueries("email-templates"),M({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),C.current("didEditEmailTemplates"),R(),te()}),onError:()=>{M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),R()},refetchActive:!0}),{isLoading:we}=se,je=U=>{T(),C.current("willEditEmailTemplates");const Be=be(ye({},ie),{[Z]:U});se.mutate(Be)};return Pe?p.createElement(t.Main,{"aria-busy":"true"},p.createElement(a.SettingsPageTitle,{name:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(o.HeaderLayout,{title:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(o.ContentLayout,null,p.createElement(a.LoadingIndicatorPage,null))):p.createElement(t.Main,{"aria-busy":we},p.createElement(a.SettingsPageTitle,{name:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(o.HeaderLayout,{title:x({id:(0,c.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),p.createElement(o.ContentLayout,null,p.createElement(le,{onEditClick:Me,canUpdate:q}),S&&p.createElement(pe,{template:ie[Z],onToggle:te,onSubmit:je})))},Te=Oe},65772:(B,A,m)=>{"use strict";m.d(A,{Z:()=>o});var p=m(9669),E=m.n(p),d=m(68547),a=m.n(d),r=(l,c,s)=>new Promise((u,f)=>{var h=n=>{try{v(s.next(n))}catch(e){f(e)}},g=n=>{try{v(s.throw(n))}catch(e){f(e)}},v=n=>n.done?u(n.value):Promise.resolve(n.value).then(h,g);v((s=s.apply(l,c)).next())});const t=E().create({baseURL:""});t.interceptors.request.use(l=>r(void 0,null,function*(){return l.headers={Authorization:`Bearer ${d.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},l}),l=>{Promise.reject(l)}),t.interceptors.response.use(l=>l,l=>{var c;throw((c=l.response)==null?void 0:c.status)===401&&(d.auth.clearAppStorage(),window.location.reload()),l});const o=t},42722:(B,A,m)=>{"use strict";m.d(A,{be:()=>p.Z,YX:()=>a,Gc:()=>o,OB:()=>l.Z});var p=m(65772),E=m(96486);const a=c=>Object.keys(c).reduce((s,u)=>{const f=c[u].controllers,h=Object.keys(f).reduce((g,v)=>((0,E.isEmpty)(f[v])||(g[v]=f[v]),g),{});return(0,E.isEmpty)(h)||(s[u]={controllers:h}),s},{});var r=m(83086);const o=c=>`/${r.Z}/${c}`;var l=m(97961)}}]);
