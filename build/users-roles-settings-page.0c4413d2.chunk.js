(self.webpackChunkbackend_libreria=self.webpackChunkbackend_libreria||[]).push([[8853],{19417:(W,N,o)=>{"use strict";o.r(N),o.d(N,{default:()=>Ts});var s=o(53547),O=o(49656),p=o(68547),E=o(83086),T=o(51725),_=o(64459),D=o(35395),v=o(80117),f=o(43546),U=o(19631),P=o(33483),x=o(67422),F=o(89326),G=o.n(F),h=o(97132),A=o(23724),V=o(63852),B=o(42722),re=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const Je=(r,e)=>re(void 0,null,function*(){try{const{data:t}=yield B.be.get((0,B.Gc)("roles"));return e("The roles have loaded successfully"),t}catch(t){throw r({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),qe=(r,e)=>re(void 0,null,function*(){try{yield B.be.delete(`${(0,B.Gc)("roles")}/${r}`)}catch(t){e({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}});var et=o(45697),R=o.n(et),se=o(49549),X=o(40264),tt=o(56204),rt=o.n(tt),st=o(62982),nt=o.n(st),ot=Object.defineProperty,ne=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,oe=(r,e,t)=>e in r?ot(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ae=(r,e)=>{for(var t in e||(e={}))at.call(e,t)&&oe(r,t,e[t]);if(ne)for(var t of ne(e))it.call(e,t)&&oe(r,t,e[t]);return r};const Y=({sortedRoles:r,canDelete:e,permissions:t,setRoleToDelete:i,onDelete:u})=>{const{formatMessage:l}=(0,h.useIntl)(),{push:d}=(0,O.useHistory)(),[a,n]=u,c=m=>e&&!["public","authenticated"].includes(m.type),g=m=>{i(m),n(!a)},y=m=>{d(`/settings/${E.Z}/roles/${m}`)};return s.createElement(f.Tbody,null,r==null?void 0:r.map(m=>s.createElement(f.Tr,ae({key:m.name},(0,p.onRowClick)({fn:()=>y(m.id)})),s.createElement(f.Td,{width:"20%"},s.createElement(P.Typography,null,m.name)),s.createElement(f.Td,{width:"50%"},s.createElement(P.Typography,null,m.description)),s.createElement(f.Td,{width:"30%"},s.createElement(P.Typography,null,`${m.nb_users} ${l({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),s.createElement(f.Td,null,s.createElement(X.Flex,ae({justifyContent:"end"},p.stopPropagation),s.createElement(p.CheckPermissions,{permissions:t.updateRole},s.createElement(se.IconButton,{onClick:()=>y(m.id),noBorder:!0,icon:s.createElement(rt(),null),label:l({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${m.name}`})})),c(m)&&s.createElement(p.CheckPermissions,{permissions:t.deleteRole},s.createElement(se.IconButton,{onClick:()=>g(m.id),noBorder:!0,icon:s.createElement(nt(),null),label:l({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${m.name}`})})))))))},lt=Y;Y.defaultProps={canDelete:!1},Y.propTypes={onDelete:R().array.isRequired,permissions:R().object.isRequired,setRoleToDelete:R().func.isRequired,sortedRoles:R().array.isRequired,canDelete:R().bool};var ie=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const ct=()=>{const{trackUsage:r}=(0,p.useTracking)(),{formatMessage:e}=(0,h.useIntl)(),{push:t}=(0,O.useHistory)(),i=(0,p.useNotification)(),{notifyStatus:u}=(0,x.useNotifyAT)(),[{query:l}]=(0,p.useQueryParams)(),d=(l==null?void 0:l._q)||"",[a,n]=(0,s.useState)(!1),[c,g]=(0,s.useState)(!1),[y,m]=(0,s.useState)();(0,p.useFocusWhenNavigate)();const b=(0,A.useQueryClient)(),C=(0,s.useMemo)(()=>({create:T.Z.createRole,read:T.Z.readRoles,update:T.Z.updateRole,delete:T.Z.deleteRole}),[]),{isLoading:w,allowedActions:{canRead:M,canDelete:$}}=(0,p.useRBAC)(C),{isLoading:Ds,data:{roles:te},isFetching:As}=(0,A.useQuery)("get-roles",()=>Je(i,u),{initialData:{},enabled:M}),Ye=Ds||As,Ls=()=>{r("willCreateRole"),t(`/settings/${E.Z}/roles/new`)},Ss=()=>{n(!a)},ws={roles:{id:(0,B.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,B.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Ms=e({id:"global.roles",defaultMessage:"Roles"}),Us=(0,A.useMutation)(Bs=>qe(Bs,i),{onSuccess:()=>ie(void 0,null,function*(){yield b.invalidateQueries("get-roles")})}),Is=()=>ie(void 0,null,function*(){g(!0),yield Us.mutateAsync(y),n(!a),g(!1)}),H=(0,V.ZP)(te||[],d,{keys:["name","description"]}),js=d&&!H.length?"search":"roles",_s=4,xs=((te==null?void 0:te.length)||0)+1;return s.createElement(D.Layout,null,s.createElement(p.SettingsPageTitle,{name:Ms}),s.createElement(v.Main,{"aria-busy":Ye},s.createElement(D.HeaderLayout,{title:e({id:"global.roles",defaultMessage:"Roles"}),subtitle:e({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:s.createElement(p.CheckPermissions,{permissions:T.Z.createRole},s.createElement(_.Button,{onClick:Ls,startIcon:s.createElement(G(),null),size:"L"},e({id:(0,B.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),s.createElement(D.ActionLayout,{startActions:s.createElement(p.SearchURLQuery,{label:e({id:"app.component.search.label",defaultMessage:"Search"})})}),s.createElement(D.ContentLayout,null,!M&&s.createElement(p.NoPermissions,null),(Ye||w)&&s.createElement(p.LoadingIndicatorPage,null),M&&H&&(H==null?void 0:H.length)?s.createElement(f.Table,{colCount:_s,rowCount:xs},s.createElement(f.Thead,null,s.createElement(f.Tr,null,s.createElement(f.Th,null,s.createElement(P.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"global.name",defaultMessage:"Name"}))),s.createElement(f.Th,null,s.createElement(P.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"global.description",defaultMessage:"Description"}))),s.createElement(f.Th,null,s.createElement(P.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"global.users",defaultMessage:"Users"}))),s.createElement(f.Th,null,s.createElement(U.VisuallyHidden,null,e({id:"global.actions",defaultMessage:"Actions"}))))),s.createElement(lt,{sortedRoles:H,canDelete:$,permissions:T.Z,setRoleToDelete:m,onDelete:[a,n]})):s.createElement(p.EmptyStateLayout,{content:ws[js]})),s.createElement(p.ConfirmDialog,{isConfirmButtonLoading:c,onConfirm:Is,onToggleDialog:Ss,isOpen:a})))},ut=()=>s.createElement(p.CheckPagePermissions,{permissions:T.Z.accessRoles},s.createElement(ct,null));var L=o(9524),I=o(94117),le=o(99136),ce=o(78607),dt=o(87760),pt=o.n(dt),mt=o(22754),ue=o.n(mt),gt=o(56156),S=o(39272),de=o(80831),Z=o(97961),j=o(96486);const pe=(0,s.createContext)({}),me=({children:r,value:e})=>s.createElement(pe.Provider,{value:e},r),J=()=>(0,s.useContext)(pe);me.propTypes={children:R().node.isRequired,value:R().object.isRequired};var z=o(78384),ft=o(35161),Pt=o.n(ft),yt=o(13217),Et=o.n(yt);const vt=r=>{switch(r){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},ht=(0,z.default)(I.Box)`
  margin: -1px;
  border-radius: ${({theme:r})=>r.spaces[1]} 0 0 ${({theme:r})=>r.spaces[1]};
`;function q({route:r}){const{formatMessage:e}=(0,h.useIntl)(),{method:t,handler:i,path:u}=r,l=u?Et()(u.split("/")):[],[d="",a=""]=i?i.split("."):[],n=vt(r.method);return s.createElement(L.Stack,{spacing:2},s.createElement(P.Typography,{variant:"delta",as:"h3"},e({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",s.createElement("span",null,d),s.createElement(P.Typography,{variant:"delta",textColor:"primary600"},".",a)),s.createElement(L.Stack,{horizontal:!0,hasRadius:!0,background:"neutral0",borderColor:"neutral200",spacing:0},s.createElement(ht,{background:n.background,borderColor:n.border,padding:2},s.createElement(P.Typography,{fontWeight:"bold",textColor:n.text},t)),s.createElement(I.Box,{paddingLeft:2,paddingRight:2},Pt()(l,c=>s.createElement(P.Typography,{key:c,textColor:c.includes(":")?"neutral600":"neutral900"},"/",c)))))}q.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},q.propTypes={route:R().shape({handler:R().string,method:R().string,path:R().string})};const Ot=q,Rt=()=>{const{formatMessage:r}=(0,h.useIntl)(),{selectedAction:e,routes:t}=J(),i=(0,j.without)(e.split("."),"controllers"),u=(0,j.get)(t,i[0]),l=i.slice(1).join("."),d=(0,j.isEmpty)(u)?[]:u.filter(a=>a.handler.endsWith(l));return s.createElement(S.GridItem,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},e?s.createElement(L.Stack,{spacing:2},d.map((a,n)=>s.createElement(Ot,{key:n,route:a}))):s.createElement(L.Stack,{spacing:2},s.createElement(P.Typography,{variant:"delta",as:"h3"},r({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),s.createElement(P.Typography,{as:"p",textColor:"neutral600"},r({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var ee=o(47949),Ct=o(11700),bt=o.n(Ct);function Tt(r){switch(r){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return bt()(r.replace("api::","").replace("plugin::",""))}}const Dt=Tt;var At=o(89734),ge=o.n(At),fe=o(43499),Lt=o(17581),St=o.n(Lt);const Pe=z.css`
  background: ${r=>r.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,wt=(0,z.default)(I.Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${r=>r.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${r=>r.isActive&&Pe}
  &:hover {
    ${Pe}
  }
`,Mt=z.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:r})=>r.colors.neutral150};
`,ye=({subCategory:r})=>{const{formatMessage:e}=(0,h.useIntl)(),{onChange:t,onChangeSelectAll:i,onSelectedAction:u,selectedAction:l,modifiedData:d}=J(),a=(0,s.useMemo)(()=>(0,j.get)(d,r.name,{}),[d,r]),n=(0,s.useMemo)(()=>Object.values(a).every(m=>m.enabled===!0),[a]),c=(0,s.useMemo)(()=>Object.values(a).some(m=>m.enabled===!0)&&!n,[a,n]),g=(0,s.useCallback)(({target:{name:m}})=>{i({target:{name:m,value:!n}})},[n,i]),y=(0,s.useCallback)(m=>l===m,[l]);return s.createElement(I.Box,null,s.createElement(X.Flex,{justifyContent:"space-between",alignItems:"center"},s.createElement(I.Box,{paddingRight:4},s.createElement(P.Typography,{variant:"sigma",textColor:"neutral600"},r.label)),s.createElement(Mt,null),s.createElement(I.Box,{paddingLeft:4},s.createElement(fe.Checkbox,{name:r.name,value:n,onValueChange:m=>g({target:{name:r.name,value:m}}),indeterminate:c},e({id:"app.utils.select-all",defaultMessage:"Select all"})))),s.createElement(X.Flex,{paddingTop:6,paddingBottom:6},s.createElement(S.Grid,{gap:2,style:{flex:1}},r.actions.map(m=>{const b=`${m.name}.enabled`;return s.createElement(S.GridItem,{col:6,key:m.name},s.createElement(wt,{isActive:y(m.name),padding:2,hasRadius:!0},s.createElement(fe.Checkbox,{value:(0,j.get)(d,b,!1),name:b,onValueChange:C=>t({target:{name:b,value:C}})},m.label),s.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>u(m.name),style:{display:"inline-flex",alignItems:"center"}},s.createElement(St(),null))))}))))};ye.propTypes={subCategory:R().object.isRequired};const Ut=ye;var It=Object.defineProperty,jt=Object.defineProperties,_t=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,xt=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable,ve=(r,e,t)=>e in r?It(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Nt=(r,e)=>{for(var t in e||(e={}))xt.call(e,t)&&ve(r,t,e[t]);if(Ee)for(var t of Ee(e))Bt.call(e,t)&&ve(r,t,e[t]);return r},Gt=(r,e)=>jt(r,_t(e));const he=({name:r,permissions:e})=>{const t=(0,s.useMemo)(()=>ge()(Object.values(e.controllers).reduce((i,u,l)=>{const d=`${r}.controllers.${Object.keys(e.controllers)[l]}`,a=ge()(Object.keys(u).reduce((n,c)=>[...n,Gt(Nt({},u[c]),{label:c,name:`${d}.${c}`})],[]),"label");return[...i,{actions:a,label:Object.keys(e.controllers)[l],name:d}]},[]),"label"),[r,e]);return s.createElement(I.Box,{padding:6},t.map(i=>s.createElement(Ut,{key:i.name,subCategory:i})))};he.propTypes={name:R().string.isRequired,permissions:R().object.isRequired};const Ft=he;var Zt=Object.defineProperty,kt=Object.defineProperties,$t=Object.getOwnPropertyDescriptors,Oe=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,Re=(r,e,t)=>e in r?Zt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Wt=(r,e)=>{for(var t in e||(e={}))Vt.call(e,t)&&Re(r,t,e[t]);if(Oe)for(var t of Oe(e))Ht.call(e,t)&&Re(r,t,e[t]);return r},zt=(r,e)=>kt(r,$t(e));const Kt=(r,e)=>{const t=Object.keys(e).sort().map(i=>({name:i,isOpen:!1}));return zt(Wt({},r),{collapses:t})};var K=o(8041),Qt=Object.defineProperty,Xt=Object.defineProperties,Yt=Object.getOwnPropertyDescriptors,Ce=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,be=(r,e,t)=>e in r?Qt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Te=(r,e)=>{for(var t in e||(e={}))Jt.call(e,t)&&be(r,t,e[t]);if(Ce)for(var t of Ce(e))qt.call(e,t)&&be(r,t,e[t]);return r},De=(r,e)=>Xt(r,Yt(e));const er={collapses:[]},tr=(r,e)=>(0,K.default)(r,t=>{switch(e.type){case"TOGGLE_COLLAPSE":{t.collapses=r.collapses.map((i,u)=>u===e.index?De(Te({},i),{isOpen:!i.isOpen}):De(Te({},i),{isOpen:!1}));break}default:return t}}),rr=()=>{const{modifiedData:r}=J(),{formatMessage:e}=(0,h.useIntl)(),[{collapses:t},i]=(0,s.useReducer)(tr,er,l=>Kt(l,r)),u=l=>i({type:"TOGGLE_COLLAPSE",index:l});return s.createElement(L.Stack,{spacing:1},t.map((l,d)=>s.createElement(ee.Accordion,{expanded:l.isOpen,onToggle:()=>u(d),key:l.name,variant:d%2===0?"secondary":void 0},s.createElement(ee.AccordionToggle,{title:Dt(l.name),description:e({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:l.name}),variant:d%2?"primary":"secondary"}),s.createElement(ee.AccordionContent,null,s.createElement(I.Box,null,s.createElement(Ft,{permissions:r[l.name],name:l.name}))))))};var sr=Object.defineProperty,nr=Object.defineProperties,or=Object.getOwnPropertyDescriptors,Ae=Object.getOwnPropertySymbols,ar=Object.prototype.hasOwnProperty,ir=Object.prototype.propertyIsEnumerable,Le=(r,e,t)=>e in r?sr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,lr=(r,e)=>{for(var t in e||(e={}))ar.call(e,t)&&Le(r,t,e[t]);if(Ae)for(var t of Ae(e))ir.call(e,t)&&Le(r,t,e[t]);return r},cr=(r,e)=>nr(r,or(e));const ur={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},dr=(r,e)=>(0,K.default)(r,t=>{switch(e.type){case"ON_CHANGE":{const i=e.keys.length,u=e.keys[i-1]==="enabled";if(e.value&&u){const l=(0,j.take)(e.keys,i-1).join(".");t.selectedAction=l}(0,j.set)(t,["modifiedData",...e.keys],e.value);break}case"ON_CHANGE_SELECT_ALL":{const i=["modifiedData",...e.keys],u=(0,j.get)(r,i,{}),l=Object.keys(u).reduce((d,a)=>(d[a]=cr(lr({},u[a]),{enabled:e.value}),d),{});(0,j.set)(t,i,l);break}case"ON_RESET":{t.modifiedData=r.initialData;break}case"ON_SUBMIT_SUCCEEDED":{t.initialData=r.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:i}=e;t.selectedAction=i===r.selectedAction?"":i;break}default:return t}});var pr=Object.defineProperty,mr=Object.defineProperties,gr=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,fr=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable,we=(r,e,t)=>e in r?pr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,yr=(r,e)=>{for(var t in e||(e={}))fr.call(e,t)&&we(r,t,e[t]);if(Se)for(var t of Se(e))Pr.call(e,t)&&we(r,t,e[t]);return r},Er=(r,e)=>mr(r,gr(e));const vr=(r,e,t)=>Er(yr({},r),{initialData:e,modifiedData:e,routes:t});var hr=Object.defineProperty,Or=Object.defineProperties,Rr=Object.getOwnPropertyDescriptors,Me=Object.getOwnPropertySymbols,Cr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,Ue=(r,e,t)=>e in r?hr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Tr=(r,e)=>{for(var t in e||(e={}))Cr.call(e,t)&&Ue(r,t,e[t]);if(Me)for(var t of Me(e))br.call(e,t)&&Ue(r,t,e[t]);return r},Dr=(r,e)=>Or(r,Rr(e));const Ie=(0,s.forwardRef)(({permissions:r,routes:e},t)=>{const{formatMessage:i}=(0,h.useIntl)(),[u,l]=(0,s.useReducer)(dr,ur,g=>vr(g,r,e));(0,s.useImperativeHandle)(t,()=>({getPermissions:()=>({permissions:u.modifiedData}),resetForm:()=>{l({type:"ON_RESET"})},setFormAfterSubmit:()=>{l({type:"ON_SUBMIT_SUCCEEDED"})}}));const d=({target:{name:g,value:y}})=>l({type:"ON_CHANGE",keys:g.split("."),value:y==="empty__string_value"?"":y}),a=({target:{name:g,value:y}})=>l({type:"ON_CHANGE_SELECT_ALL",keys:g.split("."),value:y}),n=g=>l({type:"SELECT_ACTION",actionToSelect:g}),c=Dr(Tr({},u),{onChange:d,onChangeSelectAll:a,onSelectedAction:n});return s.createElement(me,{value:c},s.createElement(S.Grid,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},s.createElement(S.GridItem,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.createElement(L.Stack,{spacing:6},s.createElement(L.Stack,{spacing:2},s.createElement(P.Typography,{variant:"delta",as:"h2"},i({id:(0,Z.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),s.createElement(P.Typography,{as:"p",textColor:"neutral600"},i({id:(0,Z.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),s.createElement(rr,null))),s.createElement(Rt,null)))});Ie.propTypes={permissions:R().object.isRequired,routes:R().object.isRequired};const je=(0,s.memo)(Ie),zs={isLoading:!0,modifiedData:{}},Ks=(r,e)=>produce(r,t=>{switch(e.type){case"GET_DATA":{t.isLoading=!0,t.modifiedData={};break}case"GET_DATA_SUCCEEDED":{t.isLoading=!1,t.modifiedData=e.data;break}case"GET_DATA_ERROR":{t.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{t.modifiedData=e.data;break}default:return t}}),Qs=null;var Ar=o(25108),Lr=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const Xs=(r,e)=>{const{isLoading:t,allowedActions:i}=useRBAC(e),[{isLoading:u,modifiedData:l},d]=useReducer(reducer,initialState),a=useNotification(),n=useRef(!0),c=new AbortController,{signal:g}=c;useEffect(()=>(t||(()=>Lr(void 0,null,function*(){try{d({type:"GET_DATA"});const b=yield request(getRequestURL(r),{method:"GET",signal:g});d({type:"GET_DATA_SUCCEEDED",data:b})}catch(b){n.current&&(d({type:"GET_DATA_ERROR"}),Ar.error(b),a({type:"warning",message:{id:"notification.error"}}))}}))(),()=>{c.abort(),n.current=!1}),[t,r]);const y=useCallback(m=>{d({type:"ON_SUBMIT_SUCCEEDED",data:m})},[]);return{allowedActions:i,dispatchSubmitSucceeded:y,isLoading:u,isLoadingForPermissions:t,modifiedData:l}},Ys=null;var Sr=Object.defineProperty,wr=Object.defineProperties,Mr=Object.getOwnPropertyDescriptors,_e=Object.getOwnPropertySymbols,Ur=Object.prototype.hasOwnProperty,Ir=Object.prototype.propertyIsEnumerable,xe=(r,e,t)=>e in r?Sr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,jr=(r,e)=>{for(var t in e||(e={}))Ur.call(e,t)&&xe(r,t,e[t]);if(_e)for(var t of _e(e))Ir.call(e,t)&&xe(r,t,e[t]);return r},_r=(r,e)=>wr(r,Mr(e));const Js=(r,e)=>_r(jr({},r),{isLoading:e}),qs=null,en={roles:[],isLoading:!0},tn=(r,e)=>produce(r,t=>{switch(e.type){case"GET_DATA":{t.isLoading=!0,t.roles=[];break}case"GET_DATA_SUCCEEDED":{t.roles=e.data,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1;break}default:return t}}),rn=null;var xr=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const sn=(r=!0)=>{const[{roles:e,isLoading:t},i]=useReducer(reducer,initialState,()=>init(initialState,r)),u=useNotification(),l=useRef(!0),d=new AbortController,{signal:a}=d;useEffect(()=>(r&&n(),()=>{d.abort(),l.current=!1}),[r]);const n=()=>xr(void 0,null,function*(){try{i({type:"GET_DATA"});const{roles:c}=yield request(`/${pluginId}/roles`,{method:"GET",signal:a});i({type:"GET_DATA_SUCCEEDED",data:c})}catch(c){const g=get(c,["response","payload","message"],"An error occured");l.current&&(i({type:"GET_DATA_ERROR"}),g!=="Forbidden"&&u({type:"warning",message:g}))}});return{roles:e,isLoading:t,getData:n}},nn=null;var Br=Object.defineProperty,Nr=Object.defineProperties,Gr=Object.getOwnPropertyDescriptors,Be=Object.getOwnPropertySymbols,Fr=Object.prototype.hasOwnProperty,Zr=Object.prototype.propertyIsEnumerable,Ne=(r,e,t)=>e in r?Br(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,kr=(r,e)=>{for(var t in e||(e={}))Fr.call(e,t)&&Ne(r,t,e[t]);if(Be)for(var t of Be(e))Zr.call(e,t)&&Ne(r,t,e[t]);return r},$r=(r,e)=>Nr(r,Gr(e));const Vr=(r,e)=>$r(kr({},r),{isLoading:e});var Q=o(65772);const Ge={permissions:{},routes:{},isLoading:!0},Hr=(r,e)=>(0,K.default)(r,t=>{switch(e.type){case"GET_DATA":{t.isLoading=!0,t.permissions={},t.routes={};break}case"GET_DATA_SUCCEEDED":{t.permissions=e.permissions,t.routes=e.routes,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1;break}default:return t}});var Fe=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const Ze=(r=!0)=>{const e=(0,p.useNotification)(),[{permissions:t,routes:i,isLoading:u},l]=(0,s.useReducer)(Hr,Ge,()=>Vr(Ge,r)),d=(0,s.useCallback)(()=>Fe(void 0,null,function*(){try{l({type:"GET_DATA"});const[{permissions:a},{routes:n}]=yield Promise.all([`/${E.Z}/permissions`,`/${E.Z}/routes`].map(c=>Fe(this,null,function*(){return(yield Q.Z.get(c)).data})));l({type:"GET_DATA_SUCCEEDED",permissions:(0,B.YX)(a),routes:n})}catch(a){const n=(0,j.get)(a,["response","payload","message"],"An error occured");l({type:"GET_DATA_ERROR"}),n!=="Forbidden"&&e({type:"warning",message:n})}}),[e]);return(0,s.useEffect)(()=>{r&&d()},[d,r]),{permissions:t,routes:i,getData:d,isLoading:u}},Wr={role:{},isLoading:!0},zr=(r,e)=>(0,K.default)(r,t=>{switch(e.type){case"GET_DATA_SUCCEEDED":{t.role=e.role,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{t.role.name=e.name,t.role.description=e.description;break}default:return t}});var Kr=o(25108),Qr=Object.defineProperty,Xr=Object.defineProperties,Yr=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,Jr=Object.prototype.hasOwnProperty,qr=Object.prototype.propertyIsEnumerable,$e=(r,e,t)=>e in r?Qr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ve=(r,e)=>{for(var t in e||(e={}))Jr.call(e,t)&&$e(r,t,e[t]);if(ke)for(var t of ke(e))qr.call(e,t)&&$e(r,t,e[t]);return r},es=(r,e)=>Xr(r,Yr(e)),ts=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const rs=r=>{const[e,t]=(0,s.useReducer)(zr,Wr),i=(0,p.useNotification)(),u=(0,s.useRef)(null);(0,s.useEffect)(()=>(u.current=!0,r?l(r):t({type:"GET_DATA_SUCCEEDED",role:{}}),()=>u.current=!1),[r]);const l=a=>ts(void 0,null,function*(){try{const{data:{role:n}}=yield Q.Z.get(`/${E.Z}/roles/${a}`);u.current&&t({type:"GET_DATA_SUCCEEDED",role:n})}catch(n){Kr.error(n),t({type:"GET_DATA_ERROR"}),i({type:"warning",message:{id:"notification.error"}})}}),d=(0,s.useCallback)(a=>{t(Ve({type:"ON_SUBMIT_SUCCEEDED"},a))},[]);return es(Ve({},e),{onSubmitSucceeded:d})};var k=o(53209);const ss=k.Ry().shape({name:k.Z_().required(p.translatedErrors.required),description:k.Z_().required(p.translatedErrors.required)});var ns=o(25108),os=Object.defineProperty,as=Object.defineProperties,is=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,ls=Object.prototype.hasOwnProperty,cs=Object.prototype.propertyIsEnumerable,We=(r,e,t)=>e in r?os(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ze=(r,e)=>{for(var t in e||(e={}))ls.call(e,t)&&We(r,t,e[t]);if(He)for(var t of He(e))cs.call(e,t)&&We(r,t,e[t]);return r},us=(r,e)=>as(r,is(e)),ds=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const ps=()=>{const{formatMessage:r}=(0,h.useIntl)(),[e,t]=(0,s.useState)(!1),i=(0,p.useNotification)(),{lockApp:u,unlockApp:l}=(0,p.useOverlayBlocker)(),{params:{id:d}}=(0,O.useRouteMatch)(`/settings/${E.Z}/roles/:id`),{isLoading:a,routes:n}=Ze(),{role:c,onSubmitSucceeded:g,isLoading:y}=rs(d),m=(0,s.useRef)(),b=C=>ds(void 0,null,function*(){u(),t(!0);try{const w=m.current.getPermissions();yield Q.Z.put(`/${E.Z}/roles/${d}`,us(ze(ze({},C),w),{users:[]})),g({name:C.name,description:C.description}),i({type:"success",message:{id:(0,Z.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(w){ns.error(w),i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}t(!1),l()});return y?s.createElement(p.LoadingIndicatorPage,null):s.createElement(v.Main,null,s.createElement(p.SettingsPageTitle,{name:"Roles"}),s.createElement(de.Formik,{enableReinitialize:!0,initialValues:{name:c.name,description:c.description},onSubmit:b,validationSchema:ss},({handleSubmit:C,values:w,handleChange:M,errors:$})=>s.createElement(p.Form,{noValidate:!0,onSubmit:C},s.createElement(D.HeaderLayout,{primaryAction:!a&&s.createElement(_.Button,{disabled:c.code==="strapi-super-admin",type:"submit",loading:e,startIcon:s.createElement(ue(),null)},r({id:"global.save",defaultMessage:"Save"})),title:c.name,subtitle:c.description,navigationAction:s.createElement(gt.Link,{startIcon:s.createElement(pt(),null),to:"/settings/users-permissions/roles"},r({id:"global.back",defaultMessage:"Back"}))}),s.createElement(D.ContentLayout,null,s.createElement(L.Stack,{spacing:7},s.createElement(I.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.createElement(L.Stack,{spacing:4},s.createElement(P.Typography,{variant:"delta",as:"h2"},r({id:(0,Z.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),s.createElement(S.Grid,{gap:4},s.createElement(S.GridItem,{col:6},s.createElement(le.TextInput,{name:"name",value:w.name||"",onChange:M,label:r({id:"global.name",defaultMessage:"Name"}),error:$.name?r({id:$.name,defaultMessage:"Invalid value"}):null})),s.createElement(S.GridItem,{col:6},s.createElement(ce.Textarea,{name:"description",value:w.description||"",onChange:M,label:r({id:"global.description",defaultMessage:"Description"}),error:$.description?r({id:$.description,defaultMessage:"Invalid value"}):null}))))),!a&&s.createElement(je,{ref:m,permissions:c.permissions,routes:n}))))))},ms=()=>s.createElement(p.CheckPagePermissions,{permissions:T.Z.updateRole},s.createElement(ps,null)),gs=k.Ry().shape({name:k.Z_().required(p.translatedErrors.required),description:k.Z_().required(p.translatedErrors.required)});var fs=o(25108),Ps=Object.defineProperty,ys=Object.defineProperties,Es=Object.getOwnPropertyDescriptors,Ke=Object.getOwnPropertySymbols,vs=Object.prototype.hasOwnProperty,hs=Object.prototype.propertyIsEnumerable,Qe=(r,e,t)=>e in r?Ps(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Xe=(r,e)=>{for(var t in e||(e={}))vs.call(e,t)&&Qe(r,t,e[t]);if(Ke)for(var t of Ke(e))hs.call(e,t)&&Qe(r,t,e[t]);return r},Os=(r,e)=>ys(r,Es(e)),Rs=(r,e,t)=>new Promise((i,u)=>{var l=n=>{try{a(t.next(n))}catch(c){u(c)}},d=n=>{try{a(t.throw(n))}catch(c){u(c)}},a=n=>n.done?i(n.value):Promise.resolve(n.value).then(l,d);a((t=t.apply(r,e)).next())});const Cs=()=>{const{formatMessage:r}=(0,h.useIntl)(),[e,t]=(0,s.useState)(!1),i=(0,p.useNotification)(),{goBack:u}=(0,O.useHistory)(),{lockApp:l,unlockApp:d}=(0,p.useOverlayBlocker)(),{isLoading:a,permissions:n,routes:c}=Ze(),{trackUsage:g}=(0,p.useTracking)(),y=(0,s.useRef)(),m=b=>Rs(void 0,null,function*(){l(),t(!0);try{const C=y.current.getPermissions();yield Q.Z.post(`/${E.Z}/roles`,Os(Xe(Xe({},b),C),{users:[]})),g("didCreateRole"),i({type:"success",message:{id:(0,Z.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),u()}catch(C){fs.error(C),i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}t(!1),d()});return s.createElement(v.Main,null,s.createElement(p.SettingsPageTitle,{name:"Roles"}),s.createElement(de.Formik,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:m,validationSchema:gs},({handleSubmit:b,values:C,handleChange:w,errors:M})=>s.createElement(p.Form,{noValidate:!0,onSubmit:b},s.createElement(D.HeaderLayout,{primaryAction:!a&&s.createElement(_.Button,{type:"submit",loading:e,startIcon:s.createElement(ue(),null)},r({id:"global.save",defaultMessage:"Save"})),title:r({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:r({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),s.createElement(D.ContentLayout,null,s.createElement(L.Stack,{spacing:7},s.createElement(I.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.createElement(L.Stack,{spacing:4},s.createElement(P.Typography,{variant:"delta",as:"h2"},r({id:(0,Z.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),s.createElement(S.Grid,{gap:4},s.createElement(S.GridItem,{col:6},s.createElement(le.TextInput,{name:"name",value:C.name||"",onChange:w,label:r({id:"global.name",defaultMessage:"Name"}),error:M.name?r({id:M.name,defaultMessage:"Invalid value"}):null})),s.createElement(S.GridItem,{col:6},s.createElement(ce.Textarea,{name:"description",value:C.description||"",onChange:w,label:r({id:"global.description",defaultMessage:"Description"}),error:M.description?r({id:M.description,defaultMessage:"Invalid value"}):null}))))),!a&&s.createElement(je,{ref:y,permissions:n,routes:c}))))))},bs=()=>s.createElement(p.CheckPagePermissions,{permissions:T.Z.createRole},s.createElement(Cs,null)),Ts=()=>s.createElement(p.CheckPagePermissions,{permissions:T.Z.accessRoles},s.createElement(O.Switch,null,s.createElement(O.Route,{path:`/settings/${E.Z}/roles/new`,component:bs,exact:!0}),s.createElement(O.Route,{path:`/settings/${E.Z}/roles/:id`,component:ms,exact:!0}),s.createElement(O.Route,{path:`/settings/${E.Z}/roles`,component:ut,exact:!0}),s.createElement(O.Route,{path:"",component:p.NotFound})))},65772:(W,N,o)=>{"use strict";o.d(N,{Z:()=>D});var s=o(9669),O=o.n(s),p=o(68547),E=o.n(p),T=(v,f,U)=>new Promise((P,x)=>{var F=A=>{try{h(U.next(A))}catch(V){x(V)}},G=A=>{try{h(U.throw(A))}catch(V){x(V)}},h=A=>A.done?P(A.value):Promise.resolve(A.value).then(F,G);h((U=U.apply(v,f)).next())});const _=O().create({baseURL:""});_.interceptors.request.use(v=>T(void 0,null,function*(){return v.headers={Authorization:`Bearer ${p.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},v}),v=>{Promise.reject(v)}),_.interceptors.response.use(v=>v,v=>{var f;throw((f=v.response)==null?void 0:f.status)===401&&(p.auth.clearAppStorage(),window.location.reload()),v});const D=_},42722:(W,N,o)=>{"use strict";o.d(N,{be:()=>s.Z,YX:()=>E,Gc:()=>D,OB:()=>v.Z});var s=o(65772),O=o(96486);const E=f=>Object.keys(f).reduce((U,P)=>{const x=f[P].controllers,F=Object.keys(x).reduce((G,h)=>((0,O.isEmpty)(x[h])||(G[h]=x[h]),G),{});return(0,O.isEmpty)(F)||(U[P]={controllers:F}),U},{});var T=o(83086);const D=f=>`/${T.Z}/${f}`;var v=o(97961)},13217:(W,N,o)=>{var s=o(14259);function O(p){var E=p==null?0:p.length;return E?s(p,1,E):[]}W.exports=O}}]);
