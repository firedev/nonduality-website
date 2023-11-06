(()=>{var Is=Object.create;var Mo=Object.defineProperty;var Ls=Object.getOwnPropertyDescriptor;var vs=Object.getOwnPropertyNames;var fs=Object.getPrototypeOf,ws=Object.prototype.hasOwnProperty;var xs=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Ns=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of vs(e))!ws.call(t,s)&&s!==o&&Mo(t,s,{get:()=>e[s],enumerable:!(i=Ls(e,s))||i.enumerable});return t};var Ws=(t,e,o)=>(o=t!=null?Is(fs(t)):{},Ns(e||!t||!t.__esModule?Mo(o,"default",{value:t,enumerable:!0}):o,t));var Cs=xs(()=>{function wl(t){let e=document.querySelector("body > nav sl-bar");e.setAttribute("expanded",!0);for(let o of e.querySelectorAll("sl-bar-item[expandable]"))o.classList.add("fade-in-always");return t.querySelector("sl-icon").name="system/close"}function Us(t){let e=document.querySelector("body > nav sl-bar");e.setAttribute("expanded",!1);for(let o of e.querySelectorAll("sl-bar-item[expandable]"))o.classList.remove("fade-in-always");return t.querySelector("sl-icon").name="system/menu"}function Ue(t,e){let o=t.querySelector(`a[href="${e}"]`);return new URL(o.href).pathname===location.pathname?o.setAttribute("aria-current","page"):o.setAttribute("aria-current","true")}document.addEventListener("turbo:load",()=>{let t=document.querySelector("bridgetown-search-results");t.showResults=!1,t.results=[];let e=document.querySelector("body > nav");Us(e.querySelector("sl-button[menutoggle]"));for(let o of e.querySelectorAll("a"))o.removeAttribute("aria-current");if(location.pathname==="/")return Ue(e,"/");if(location.pathname.startsWith("/docs"))return Ue(e,"/docs");if(location.pathname.startsWith("/plugins"))return Ue(e,"/plugins");if(location.pathname.startsWith("/community"))return Ue(e,"/community");if(location.pathname.startsWith("/blog")||document.body.classList.contains("post"))return Ue(e,"/blog")});window.menuHide=Us;window.menuShow=wl});var Ce=window,ye=Ce.ShadowRoot&&(Ce.ShadyCSS===void 0||Ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,to=Symbol(),Go=new WeakMap,te=class{constructor(e,o,i){if(this._$cssResult$=!0,i!==to)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o,o=this.t;if(ye&&e===void 0){let i=o!==void 0&&o.length===1;i&&(e=Go.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Go.set(o,e))}return e}toString(){return this.cssText}},zo=t=>new te(typeof t=="string"?t:t+"",void 0,to),C=(t,...e)=>{let o=t.length===1?t[0]:e.reduce((i,s,l)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[l+1],t[0]);return new te(o,t,to)},eo=(t,e)=>{ye?t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):e.forEach(o=>{let i=document.createElement("style"),s=Ce.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=o.cssText,t.appendChild(i)})},Ie=ye?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(let i of e.cssRules)o+=i.cssText;return zo(o)})(t):t;var oo,Le=window,Xo=Le.trustedTypes,Os=Xo?Xo.emptyScript:"",ko=Le.reactiveElementPolyfillSupport,Zt={toAttribute(t,e){switch(e){case Boolean:t=t?Os:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},Zo=(t,e)=>e!==t&&(e==e||t==t),io={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:Zo},so="finalized",Qt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var o;this.finalize(),((o=this.h)!==null&&o!==void 0?o:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((o,i)=>{let s=this._$Ep(i,o);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,o=io){if(o.state&&(o.attribute=!1),this.finalize(),this.elementProperties.set(e,o),!o.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,o);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,o,i){return{get(){return this[o]},set(s){let l=this[e];this[o]=s,this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||io}static finalize(){if(this.hasOwnProperty(so))return!1;this[so]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let o=this.properties,i=[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)];for(let s of i)this.createProperty(s,o[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let o=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)o.unshift(Ie(s))}else e!==void 0&&o.push(Ie(e));return o}static _$Ep(e,o){let i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(o=>o(this))}addController(e){var o,i;((o=this._$ES)!==null&&o!==void 0?o:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var o;(o=this._$ES)===null||o===void 0||o.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,o)=>{this.hasOwnProperty(o)&&(this._$Ei.set(o,this[o]),delete this[o])})}createRenderRoot(){var e;let o=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return eo(o,this.constructor.elementStyles),o}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostConnected)===null||i===void 0?void 0:i.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostDisconnected)===null||i===void 0?void 0:i.call(o)})}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$EO(e,o,i=io){var s;let l=this.constructor._$Ep(e,i);if(l!==void 0&&i.reflect===!0){let r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Zt).toAttribute(o,i.type);this._$El=e,r==null?this.removeAttribute(l):this.setAttribute(l,r),this._$El=null}}_$AK(e,o){var i;let s=this.constructor,l=s._$Ev.get(e);if(l!==void 0&&this._$El!==l){let r=s.getPropertyOptions(l),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Zt;this._$El=l,this[l]=d.fromAttribute(o,r.type),this._$El=null}}requestUpdate(e,o,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Zo)(this[e],o)?(this._$AL.has(e)||this._$AL.set(e,o),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(o){Promise.reject(o)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,l)=>this[l]=s),this._$Ei=void 0);let o=!1,i=this._$AL;try{o=this.shouldUpdate(i),o?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var l;return(l=s.hostUpdate)===null||l===void 0?void 0:l.call(s)}),this.update(i)):this._$Ek()}catch(s){throw o=!1,this._$Ek(),s}o&&this._$AE(i)}willUpdate(e){}_$AE(e){var o;(o=this._$ES)===null||o===void 0||o.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((o,i)=>this._$EO(i,this[i],o)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Qt[so]=!0,Qt.elementProperties=new Map,Qt.elementStyles=[],Qt.shadowRootOptions={mode:"open"},ko?.({ReactiveElement:Qt}),((oo=Le.reactiveElementVersions)!==null&&oo!==void 0?oo:Le.reactiveElementVersions=[]).push("1.6.3");var lo,ve=window,St=ve.trustedTypes,So=St?St.createPolicy("lit-html",{createHTML:t=>t}):void 0,fe="$lit$",ht=`lit$${(Math.random()+"").slice(9)}$`,ao="?"+ht,As=`<${ao}>`,wt=document,oe=()=>wt.createComment(""),ie=t=>t===null||typeof t!="object"&&typeof t!="function",Jo=Array.isArray,Ho=t=>Jo(t)||typeof t?.[Symbol.iterator]=="function",ro=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jo=/-->/g,To=/>/g,vt=RegExp(`>|${ro}(?:([^\\s"'>=/]+)(${ro}*=${ro}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ro=/'/g,Eo=/"/g,_o=/^(?:script|style|textarea|title)$/i,Ko=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),m=Ko(1),$o=Ko(2),R=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Yo=new WeakMap,ft=wt.createTreeWalker(wt,129,null,!1);function qo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return So!==void 0?So.createHTML(e):e}var Po=(t,e)=>{let o=t.length-1,i=[],s,l=e===2?"<svg>":"",r=ee;for(let d=0;d<o;d++){let c=t[d],b,Q,u=-1,h=0;for(;h<c.length&&(r.lastIndex=h,Q=r.exec(c),Q!==null);)h=r.lastIndex,r===ee?Q[1]==="!--"?r=jo:Q[1]!==void 0?r=To:Q[2]!==void 0?(_o.test(Q[2])&&(s=RegExp("</"+Q[2],"g")),r=vt):Q[3]!==void 0&&(r=vt):r===vt?Q[0]===">"?(r=s??ee,u=-1):Q[1]===void 0?u=-2:(u=r.lastIndex-Q[2].length,b=Q[1],r=Q[3]===void 0?vt:Q[3]==='"'?Eo:Ro):r===Eo||r===Ro?r=vt:r===jo||r===To?r=ee:(r=vt,s=void 0);let g=r===vt&&t[d+1].startsWith("/>")?" ":"";l+=r===ee?c+As:u>=0?(i.push(b),c.slice(0,u)+fe+c.slice(u)+ht+g):c+ht+(u===-2?(i.push(void 0),d):g)}return[qo(t,l+(t[o]||"<?>")+(e===2?"</svg>":"")),i]},se=class t{constructor({strings:e,_$litType$:o},i){let s;this.parts=[];let l=0,r=0,d=e.length-1,c=this.parts,[b,Q]=Po(e,o);if(this.el=t.createElement(b,i),ft.currentNode=this.el.content,o===2){let u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(s=ft.nextNode())!==null&&c.length<d;){if(s.nodeType===1){if(s.hasAttributes()){let u=[];for(let h of s.getAttributeNames())if(h.endsWith(fe)||h.startsWith(ht)){let g=Q[r++];if(u.push(h),g!==void 0){let p=s.getAttribute(g.toLowerCase()+fe).split(ht),B=/([.?@])?(.*)/.exec(g);c.push({type:1,index:l,name:B[2],strings:p,ctor:B[1]==="."?xe:B[1]==="?"?Ne:B[1]==="@"?We:Nt})}else c.push({type:6,index:l})}for(let h of u)s.removeAttribute(h)}if(_o.test(s.tagName)){let u=s.textContent.split(ht),h=u.length-1;if(h>0){s.textContent=St?St.emptyScript:"";for(let g=0;g<h;g++)s.append(u[g],oe()),ft.nextNode(),c.push({type:2,index:++l});s.append(u[h],oe())}}}else if(s.nodeType===8)if(s.data===ao)c.push({type:2,index:l});else{let u=-1;for(;(u=s.data.indexOf(ht,u+1))!==-1;)c.push({type:7,index:l}),u+=ht.length-1}l++}}static createElement(e,o){let i=wt.createElement("template");return i.innerHTML=e,i}};function xt(t,e,o=t,i){var s,l,r,d;if(e===R)return e;let c=i!==void 0?(s=o._$Co)===null||s===void 0?void 0:s[i]:o._$Cl,b=ie(e)?void 0:e._$litDirective$;return c?.constructor!==b&&((l=c?._$AO)===null||l===void 0||l.call(c,!1),b===void 0?c=void 0:(c=new b(t),c._$AT(t,o,i)),i!==void 0?((r=(d=o)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=c:o._$Cl=c),c!==void 0&&(e=xt(t,c._$AS(t,e.values),c,i)),e}var we=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var o;let{el:{content:i},parts:s}=this._$AD,l=((o=e?.creationScope)!==null&&o!==void 0?o:wt).importNode(i,!0);ft.currentNode=l;let r=ft.nextNode(),d=0,c=0,b=s[0];for(;b!==void 0;){if(d===b.index){let Q;b.type===2?Q=new jt(r,r.nextSibling,this,e):b.type===1?Q=new b.ctor(r,b.name,b.strings,this,e):b.type===6&&(Q=new Oe(r,this,e)),this._$AV.push(Q),b=s[++c]}d!==b?.index&&(r=ft.nextNode(),d++)}return ft.currentNode=wt,l}v(e){let o=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}},jt=class t{constructor(e,o,i,s){var l;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=s,this._$Cp=(l=s?.isConnected)===null||l===void 0||l}get _$AU(){var e,o;return(o=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&o!==void 0?o:this._$Cp}get parentNode(){let e=this._$AA.parentNode,o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=xt(this,e,o),ie(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ho(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==A&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.$(wt.createTextNode(e)),this._$AH=e}g(e){var o;let{values:i,_$litType$:s}=e,l=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=se.createElement(qo(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)===null||o===void 0?void 0:o._$AD)===l)this._$AH.v(i);else{let r=new we(l,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(e){let o=Yo.get(e.strings);return o===void 0&&Yo.set(e.strings,o=new se(e)),o}T(e){Jo(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,i,s=0;for(let l of e)s===o.length?o.push(i=new t(this.k(oe()),this.k(oe()),this,this.options)):i=o[s],i._$AI(l),s++;s<o.length&&(this._$AR(i&&i._$AB.nextSibling,s),o.length=s)}_$AR(e=this._$AA.nextSibling,o){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,o);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var o;this._$AM===void 0&&(this._$Cp=e,(o=this._$AP)===null||o===void 0||o.call(this,e))}},Nt=class{constructor(e,o,i,s,l){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=o,this._$AM=s,this.options=l,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,o=this,i,s){let l=this.strings,r=!1;if(l===void 0)e=xt(this,e,o,0),r=!ie(e)||e!==this._$AH&&e!==R,r&&(this._$AH=e);else{let d=e,c,b;for(e=l[0],c=0;c<l.length-1;c++)b=xt(this,d[i+c],o,c),b===R&&(b=this._$AH[c]),r||(r=!ie(b)||b!==this._$AH[c]),b===A?e=A:e!==A&&(e+=(b??"")+l[c+1]),this._$AH[c]=b}r&&!s&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xe=class extends Nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},Ds=St?St.emptyScript:"",Ne=class extends Nt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,Ds):this.element.removeAttribute(this.name)}},We=class extends Nt{constructor(e,o,i,s,l){super(e,o,i,s,l),this.type=5}_$AI(e,o=this){var i;if((e=(i=xt(this,e,o,0))!==null&&i!==void 0?i:A)===R)return;let s=this._$AH,l=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==A&&(s===A||l);l&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o,i;typeof this._$AH=="function"?this._$AH.call((i=(o=this.options)===null||o===void 0?void 0:o.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Oe=class{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){xt(this,e)}},ti={O:fe,P:ht,A:ao,C:1,M:Po,L:we,R:Ho,D:xt,I:jt,V:Nt,H:Ne,N:We,U:xe,F:Oe},Vo=ve.litHtmlPolyfillSupport;Vo?.(se,jt),((lo=ve.litHtmlVersions)!==null&&lo!==void 0?lo:ve.litHtmlVersions=[]).push("2.8.0");var ei=(t,e,o)=>{var i,s;let l=(i=o?.renderBefore)!==null&&i!==void 0?i:e,r=l._$litPart$;if(r===void 0){let d=(s=o?.renderBefore)!==null&&s!==void 0?s:null;l._$litPart$=r=new jt(e.insertBefore(oe(),d),d,void 0,o??{})}return r._$AI(t),r};var no,co;var yt=class extends Qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,o;let i=super.createRenderRoot();return(e=(o=this.renderOptions).renderBefore)!==null&&e!==void 0||(o.renderBefore=i.firstChild),i}update(e){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ei(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return R}};yt.finalized=!0,yt._$litElement$=!0,(no=globalThis.litElementHydrateSupport)===null||no===void 0||no.call(globalThis,{LitElement:yt});var oi=globalThis.litElementPolyfillSupport;oi?.({LitElement:yt});((co=globalThis.litElementVersions)!==null&&co!==void 0?co:globalThis.litElementVersions=[]).push("3.3.3");var L=C`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var ii=C`
  ${L}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;var bo=new Set,Ms=new MutationObserver(ri),Tt=new Map,si=document.documentElement.dir||"ltr",li=document.documentElement.lang||navigator.language,Wt;Ms.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function uo(...t){t.map(e=>{let o=e.$code.toLowerCase();Tt.has(o)?Tt.set(o,Object.assign(Object.assign({},Tt.get(o)),e)):Tt.set(o,e),Wt||(Wt=e)}),ri()}function ri(){si=document.documentElement.dir||"ltr",li=document.documentElement.lang||navigator.language,[...bo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Ae=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){bo.add(this.host)}hostDisconnected(){bo.delete(this.host)}dir(){return`${this.host.dir||si}`.toLowerCase()}lang(){return`${this.host.lang||li}`.toLowerCase()}getTranslationData(e){var o,i;let s=new Intl.Locale(e),l=s?.language.toLowerCase(),r=(i=(o=s?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",d=Tt.get(`${l}-${r}`),c=Tt.get(l);return{locale:s,language:l,region:r,primary:d,secondary:c}}exists(e,o){var i;let{primary:s,secondary:l}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[e]||l&&l[e]||o.includeFallback&&Wt&&Wt[e])}term(e,...o){let{primary:i,secondary:s}=this.getTranslationData(this.lang()),l;if(i&&i[e])l=i[e];else if(s&&s[e])l=s[e];else if(Wt&&Wt[e])l=Wt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof l=="function"?l(...o):l}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var k=class extends Ae{};var ci=Object.defineProperty,Gs=Object.defineProperties,zs=Object.getOwnPropertyDescriptor,Xs=Object.getOwnPropertyDescriptors,ai=Object.getOwnPropertySymbols,ks=Object.prototype.hasOwnProperty,Zs=Object.prototype.propertyIsEnumerable,ni=(t,e,o)=>e in t?ci(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,H=(t,e)=>{for(var o in e||(e={}))ks.call(e,o)&&ni(t,o,e[o]);if(ai)for(var o of ai(e))Zs.call(e,o)&&ni(t,o,e[o]);return t},It=(t,e)=>Gs(t,Xs(e)),a=(t,e,o,i)=>{for(var s=i>1?void 0:i?zs(e,o):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(s=(i?r(e,o,s):r(s))||s);return i&&s&&ci(e,o,s),s};var Ss=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}},js=(t,e,o)=>{e.constructor.createProperty(o,t)};function n(t){return(e,o)=>o!==void 0?js(t,e,o):Ss(t,e)}function et(t){return n({...t,state:!0})}var Ot=({finisher:t,descriptor:e})=>(o,i)=>{var s;if(i===void 0){let l=(s=o.originalKey)!==null&&s!==void 0?s:o.key,r=e!=null?{kind:"method",placement:"prototype",key:l,descriptor:e(o.key)}:{...o,key:l};return t!=null&&(r.finisher=function(d){t(d,l)}),r}{let l=o.constructor;e!==void 0&&Object.defineProperty(o,i,e(i)),t?.(l,i)}};function N(t,e){return Ot({descriptor:o=>{let i={get(){var s,l;return(l=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&l!==void 0?l:null},enumerable:!0,configurable:!0};if(e){let s=typeof o=="symbol"?Symbol():"__"+o;i.get=function(){var l,r;return this[s]===void 0&&(this[s]=(r=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(t))!==null&&r!==void 0?r:null),this[s]}}return i}})}var go,Ur=((go=window.HTMLSlotElement)===null||go===void 0?void 0:go.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(o=>o.nodeType===Node.ELEMENT_NODE);var y=class extends yt{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let o=new CustomEvent(t,H({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){let i=customElements.get(t);if(!i){customElements.define(t,class extends e{},o);return}let s=" (unknown version)",l=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(l=" v"+i.version),!(s&&l&&s===l)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${l} has already been registered.`)}};y.version="2.9.0";y.dependencies={};a([n()],y.prototype,"dir",2);a([n()],y.prototype,"lang",2);var le=class extends y{constructor(){super(...arguments),this.localize=new k(this)}render(){return m`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};le.styles=ii;var re=new WeakMap,ae=new WeakMap,Qo=new WeakSet,De=new WeakMap,Me=class{constructor(t,e){this.handleFormData=o=>{let i=this.options.disabled(this.host),s=this.options.name(this.host),l=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";!i&&!r&&typeof s=="string"&&s.length>0&&typeof l<"u"&&(Array.isArray(l)?l.forEach(d=>{o.formData.append(s,d.toString())}):o.formData.append(s,l.toString()))},this.handleFormSubmit=o=>{var i;let s=this.options.disabled(this.host),l=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=re.get(this.form))==null||i.forEach(r=>{this.setUserInteracted(r,!0)})),this.form&&!this.form.noValidate&&!s&&!l(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),De.set(this.host,[])},this.handleInteraction=o=>{let i=De.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let o=this.form.querySelectorAll("*");for(let i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=H({form:o=>{if(o.hasAttribute("form")&&o.getAttribute("form")!==""){let i=o.getRootNode(),s=o.getAttribute("form");if(s)return i.getElementById(s)}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),De.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),De.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,re.has(this.form)?re.get(this.form).add(this.host):re.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ae.has(this.form)||(ae.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=re.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ae.has(this.form)&&(this.form.reportValidity=ae.get(this.form),ae.delete(this.form))),this.form=void 0}setUserInteracted(t,e){e?Qo.add(t):Qo.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,o=!!Qo.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Ge=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),_r=Object.freeze(It(H({},Ge),{valid:!1,valueMissing:!0})),Kr=Object.freeze(It(H({},Ge),{valid:!1,customError:!0}));var di=C`
  ${L}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;var E=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{let i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function bi(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var ho="";function ne(t){ho=t}function po(t=""){if(!ho){let e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)ne(o.getAttribute("data-shoelace"));else{let i=e.find(l=>/shoelace(\.min)?\.js($|\?)/.test(l.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(l.src)),s="";i&&(s=i.getAttribute("src")),ne(s.split("/").slice(0,-1).join("/"))}}return ho.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ts={name:"default",resolver:t=>po(`assets/icons/${t}.svg`)},ui=Ts;var gi={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Rs={name:"system",resolver:t=>t in gi?`data:image/svg+xml,${encodeURIComponent(gi[t])}`:""},Qi=Rs;var ze=[ui,Qi],Xe=[];function hi(t){Xe.push(t)}function pi(t){Xe=Xe.filter(e=>e!==t)}function mo(t){return ze.find(e=>e.name===t)}function ke(t,e){mi(t),ze.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Xe.forEach(o=>{o.library===t&&o.setIcon()})}function mi(t){ze=ze.filter(e=>e.name!==t)}var Bi=C`
  ${L}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function D(t,e){let o=H({waitUntilFirstUpdate:!1},e);return(i,s)=>{let{update:l}=i,r=Array.isArray(t)?t:[t];i.update=function(d){r.forEach(c=>{let b=c;if(d.has(b)){let Q=d.get(b),u=this[b];Q!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](Q,u)}}),l.call(this,d)}}}var{I:ma}=ti;var Fi=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var Ze=t=>t.strings===void 0;var Es={},Ui=(t,e=Es)=>t._$AH=e;var ce=Symbol(),Se=Symbol(),Bo,Fo=new Map,G=class extends y{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e?.spriteSheet)return m`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?ce:Se}catch{return Se}try{let s=document.createElement("div");s.innerHTML=await i.text();let l=s.firstElementChild;if(((o=l?.tagName)==null?void 0:o.toLowerCase())!=="svg")return ce;Bo||(Bo=new DOMParser);let d=Bo.parseFromString(l.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):ce}catch{return ce}}connectedCallback(){super.connectedCallback(),hi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),pi(this)}getIconSource(){let t=mo(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:o}=this.getIconSource(),i=o?mo(this.library):void 0;if(!e){this.svg=null;return}let s=Fo.get(e);if(s||(s=this.resolveIcon(e,i),Fo.set(e,s)),!this.initialRender)return;let l=await s;if(l===Se&&Fo.delete(e),e===this.getIconSource().url){if(Fi(l)){this.svg=l;return}switch(l){case Se:case ce:this.svg=null,this.emit("sl-error");break;default:this.svg=l.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};G.styles=Bi;a([et()],G.prototype,"svg",2);a([n({reflect:!0})],G.prototype,"name",2);a([n()],G.prototype,"src",2);a([n()],G.prototype,"label",2);a([n({reflect:!0})],G.prototype,"library",2);a([D("label")],G.prototype,"handleLabelChange",1);a([D(["name","src","library"])],G.prototype,"setIcon",1);var $={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},At=t=>(...e)=>({_$litDirective$:t,values:e}),pt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};var W=At(class extends pt{constructor(t){var e;if(super(t),t.type!==$.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,i;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(l=>l!=="")));for(let l in e)e[l]&&!(!((o=this.nt)===null||o===void 0)&&o.has(l))&&this.it.add(l);return this.render(e)}let s=t.element.classList;this.it.forEach(l=>{l in e||(s.remove(l),this.it.delete(l))});for(let l in e){let r=!!e[l];r===this.it.has(l)||!((i=this.nt)===null||i===void 0)&&i.has(l)||(r?(s.add(l),this.it.add(l)):(s.remove(l),this.it.delete(l)))}return R}});var yi=Symbol.for(""),Ys=t=>{if(t?.r===yi)return t?._$litStatic$};var Rt=(t,...e)=>({_$litStatic$:e.reduce((o,i,s)=>o+(l=>{if(l._$litStatic$!==void 0)return l._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${l}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:yi}),Ci=new Map,Ii=t=>(e,...o)=>{let i=o.length,s,l,r=[],d=[],c,b=0,Q=!1;for(;b<i;){for(c=e[b];b<i&&(l=o[b],(s=Ys(l))!==void 0);)c+=s+e[++b],Q=!0;b!==i&&d.push(l),r.push(c),b++}if(b===i&&r.push(e[i]),Q){let u=r.join("$$lit$$");(e=Ci.get(u))===void 0&&(r.raw=r,Ci.set(u,e=r)),o=d}return t(e,...o)},Et=Ii(m),Za=Ii($o);var F=t=>t??A;var v=class extends y{constructor(){super(...arguments),this.formControlController=new Me(this,{form:t=>{if(t.hasAttribute("form")){let e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new E(this,"[default]","prefix","suffix"),this.localize=new k(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ge}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?Rt`a`:Rt`button`;return Et`
      <${e}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${F(t?void 0:this.disabled)}
        type=${F(t?void 0:this.type)}
        title=${this.title}
        name=${F(t?void 0:this.name)}
        value=${F(t?void 0:this.value)}
        href=${F(t?this.href:void 0)}
        target=${F(t?this.target:void 0)}
        download=${F(t?this.download:void 0)}
        rel=${F(t?this.rel:void 0)}
        role=${F(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Et` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Et`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};v.styles=di;v.dependencies={"sl-icon":G,"sl-spinner":le};a([N(".button")],v.prototype,"button",2);a([et()],v.prototype,"hasFocus",2);a([et()],v.prototype,"invalid",2);a([n()],v.prototype,"title",2);a([n({reflect:!0})],v.prototype,"variant",2);a([n({reflect:!0})],v.prototype,"size",2);a([n({type:Boolean,reflect:!0})],v.prototype,"caret",2);a([n({type:Boolean,reflect:!0})],v.prototype,"disabled",2);a([n({type:Boolean,reflect:!0})],v.prototype,"loading",2);a([n({type:Boolean,reflect:!0})],v.prototype,"outline",2);a([n({type:Boolean,reflect:!0})],v.prototype,"pill",2);a([n({type:Boolean,reflect:!0})],v.prototype,"circle",2);a([n()],v.prototype,"type",2);a([n()],v.prototype,"name",2);a([n()],v.prototype,"value",2);a([n()],v.prototype,"href",2);a([n()],v.prototype,"target",2);a([n()],v.prototype,"rel",2);a([n()],v.prototype,"download",2);a([n()],v.prototype,"form",2);a([n({attribute:"formaction"})],v.prototype,"formAction",2);a([n({attribute:"formenctype"})],v.prototype,"formEnctype",2);a([n({attribute:"formmethod"})],v.prototype,"formMethod",2);a([n({attribute:"formnovalidate",type:Boolean})],v.prototype,"formNoValidate",2);a([n({attribute:"formtarget"})],v.prototype,"formTarget",2);a([D("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);v.define("sl-button");var Vs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};uo(Vs);G.define("sl-icon");le.define("sl-spinner");var Li=["\u042F \u0432 \u0442\u043E\u043C \u0433\u043E\u0434\u0443 \u043D\u0430\u0447\u0438\u0442\u0430\u043B\u0441\u044F \u043D\u0430\u0432\u0435\u0440\u043D\u043E \u0432\u0441\u0435 \u0447\u0442\u043E \u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u0447\u0438\u0442\u0430\u0435\u0448\u044C. \u042F \u0442\u0430\u043A \u0438 \u043D\u0435 \u0440\u0435\u0448\u0438\u043B\u0441\u044F \u043E\u0434\u0438\u043D.","\u0411\u043B\u0438\u043D, \u041A\u043E\u043B\u044C, \u0442\u044B \u0443\u0436\u0435 \u043F\u0440\u043E\u0437\u0440\u0435\u043B:) \u043D\u043E \u0434\u043E\u0441\u0442\u0443\u0447\u0430\u0442\u044C\u0441\u044F \u0441\u043B\u043E\u0436\u043D\u043E, \u043D\u0430\u0434\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u043F\u0443\u0442\u0435\u043C \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u043F\u044B\u0442. \u0418 \u043E\u0441\u043E\u0437\u043D\u0430\u0442\u044C. \u0410 \u043F\u0443\u0442\u044C \u0432\u0441\u0435 \u0442\u0430\u043A\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u0435\u043D. \u041C\u0435\u043D\u044F \u043F\u043E\u0434\u0432\u044B\u0442\u0430\u0449\u0438\u043B \u0442\u043E\u0447\u043D\u043E","\u0423\u0442\u0440\u043E \u0434\u043E\u0431\u0440\u043E\u0435! \u041A\u043E\u043B\u044C, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E \u0443\u0442\u0440\u043E\u043C \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0438 \u0431\u0435\u0433\u0443 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0447\u0442\u043E \u0442\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043B. \u0421\u043F\u0430\u0441\u0438\u0431\u043E","\u0420\u0435\u0431\u0435\u043D\u043E\u043A \u0441\u0442\u0430\u043B \u0431\u043E\u043B\u0435\u0435 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439. \u041E\u043D \u0432\u0440\u043E\u0434\u0435 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u043E\u0432\u043D\u0435\u0435. \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u{1F44D}","\u0427\u0442\u043E \u0442\u043E \u044F \u0447\u0430\u0441\u0442\u043E \u0441\u0442\u0430\u043B \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F","\u041C\u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u0441\u0442\u0430\u043B\u043E \u0434\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043E \u0447\u0435\u043C \u043A\u043D\u0438\u0436\u043A\u0438","\u042F \u043D\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B \u0431\u044B \u0441\u0430\u043C \u0435\u0441\u043B\u0438 \u0431\u044B \u043D\u0435 \u0442\u044B, \u043D\u043E \u044F \u043D\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043B\u0441\u044F \u0438 \u043D\u0435 \u0447\u0438\u0442\u0430\u043B \u043D\u0438\u0447\u0435\u0433\u043E \u0434\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430.","\u0415\u0441\u043B\u0438 \u0431\u044B \u043C\u043D\u0435 \u0442\u0432\u043E\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043F\u043E\u043F\u0430\u043B\u0430\u0441\u044C \u043B\u0435\u0442 7-8 \u043D\u0430\u0437\u0430\u0434, \u044F \u0431\u044B \u043D\u0430\u0432\u0435\u0440\u043D\u043E \u043F\u0440\u044B\u0433\u043D\u0443\u043B \u0432 \u0441\u0430\u043C\u043E\u043B\u0435\u0442 \u0438 \u043F\u0440\u0438\u043B\u0435\u0442\u0435\u043B.","\u042F \u043A\u0430\u043A \u044D\u0442\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u0434\u0430\u0432\u043D\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u044E \u0441\u0435\u0431\u044F \u0432 \u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u0438.","\u0412\u0441\u0435 \u043A\u0430\u043A \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0447\u0442\u043E \u043B\u0438?","\u0427\u0442\u043E-\u0442\u043E \u0443 \u043C\u0435\u043D\u044F \u043E\u0442 \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430 \u0443\u0436\u0435, \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0431\u043E\u043E\u043E\u043B\u044C\u0448\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442","\u041F\u0440\u0438\u0432\u0435\u0442, \u041A\u043E\u043B\u044F! \u041E\u0448\u0435\u043B\u043E\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u043F\u044B\u0442","\u042D\u0442\u043E \u043B\u0443\u0447\u0448\u0435\u0435 \u0447\u0442\u043E \u0431\u044B\u043B\u043E \u0432 \u043C\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438) \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u2665\uFE0F","\u041D\u0430\u0434\u0435\u044E\u0441\u044C \u043D\u0430 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435, \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C.","\u041E\u0447\u0435\u043D\u044C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C - \u0434\u0430\u0436\u0435 \u043D\u0435 \u0442\u0435 \u0441\u043B\u043E\u0432\u0430. \u041D\u0435 \u0441 \u0447\u0435\u043C \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C - \u0431\u044B\u043B\u043E \u0431\u044B \u0442\u043E\u0447\u043D\u0435\u0435.","\u041E\u0447\u0435\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u044C \u043C\u044B\u0441\u043B\u0438, \u043A\u0430\u043A \u043C\u044B\u0441\u043B\u044C \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 \u043F\u043E\u043B\u0435 \u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0441\u0435\u0431\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u0432\u0441\u0442\u0440\u0435\u0447\u0430 \u0441 \u0411\u043E\u0433\u043E\u043C.","\u041B\u044E\u0431\u043E\u0432\u044C - \u043D\u0430 \u0432\u0441\u0451 \u043E\u0442\u0432\u0435\u0442 \u0432 \u0438\u0442\u043E\u0433\u0435. \u0422\u0430 \u0441\u0430\u043C\u0430\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0442\u0432\u043E\u0440\u0438\u0442 \u043C\u0438\u0440\u044B \u0432\u043D\u0443\u0442\u0440\u0438 \u0438 \u0441\u043D\u0430\u0440\u0443\u0436\u0438.","\u041E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u044D\u0442\u043E\u0442 \u043D\u0435\u0437\u0430\u0431\u044B\u0432\u0430\u0435\u043C\u044B\u0439 \u0438 \u0437\u043D\u0430\u0447\u0438\u043C\u044B\u0439 \u043E\u043F\u044B\u0442! \u042D\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u0446\u0435\u043D\u043D\u043E!","\u041F\u043E\u043B\u044C\u0437\u0430 \u0434\u043B\u044F \u0436\u0438\u0437\u043D\u0438: \u043F\u043E\u044F\u0432\u0438\u043B\u043E\u0441\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043C\u0438\u0440\u0430. \u0418\u043D\u043E\u0433\u0434\u0430 \u043E\u043D\u043E \u0437\u0430\u0431\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043D\u043E \u043E\u043D\u043E \u0435\u0441\u0442\u044C \u0432\u043E \u043C\u043D\u0435.","\u0412\u0441\u0451 \u044D\u0442\u043E \u0432\u043C\u0435\u0441\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u043B\u043E \u043C\u0435\u043D\u044F \u0432 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u043D\u043E\u0432\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0438\u043C\u0435\u0435\u0442 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0435\u0449\u0451 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0435\u0431\u044F, \u043F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0441\u0435\u0431\u044F.","\u041A\u043E\u043B\u044F, \u043F\u0440\u0438\u0432\u0435\u0442, \u0443 \u043C\u0435\u043D\u044F \u0442\u0443\u0442 \u0432\u0441\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u0432\u043E\u0438 \u043C\u0435\u0441\u0442\u0430 \u0432 \u0433\u043E\u043B\u043E\u0432\u0435 \u0438 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0435\u0442\u0441\u044F, \u043A\u0430\u043A \u043D\u0430\u0434\u043E! \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0438\u0434\u0435\u0442! \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0432\u0430\u043C \u043E\u0431\u043E\u0438\u043C, \u0432\u044B \u0434\u0430\u0436\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435, \u0447\u0442\u043E \u0432\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u{1F600}","\u0422\u0435\u043F\u0435\u0440\u044C \u0431\u0443\u0434\u0443 \u0432\u044B\u0431\u0438\u0432\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u043E\u0432\u043A\u0443 \u0441\u044E\u0434\u0430 \u{1F600}","\u0422\u0430\u043A\u0430\u044F \u043F\u0440\u0438\u044F\u0442\u043D\u0430\u044F \u0433\u0440\u0443\u0441\u0442\u044C, \u044F \u0440\u0430\u0434\u0430, \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A \u043A\u043B\u0430\u0441\u0441\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C !","\u0420\u0430\u043D\u044C\u0448\u0435 \u0441\u043B\u044B\u0448\u0430\u043B\u0430 \u043C\u043D\u0435 \u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C \u0447\u0442\u043E \u044D\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0434\u0443\u0448\u043D\u044B\u0439 \u0431\u0440\u0435\u0434","\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u043B\u043E \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u043D\u0435\u043B\u044C\u0437\u044F \u0443\u0436\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u2026 \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A, \u043A\u0430\u043A \u0435\u0441\u0442\u044C, \u0438 \u0432\u044B\u0445\u043E\u0434\u0430 \u043D\u0435\u0442","\u042F \u0432\u0438\u0436\u0443 \u0447\u0442\u043E \u0435\u0449\u0435 \u0435\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u044C \u0432\u043F\u0435\u0440\u0435\u0434\u0438 \u0438 \u043A\u0430\u043A\u043E\u0439 \u043E\u043D\u0430 \u0431\u0443\u0434\u0435\u0442, \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0442 \u043C\u0435\u043D\u044F","\u041C\u043D\u0435 \u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u043E\u0432\u043E\u0433\u043E \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0433\u043E \u0443\u0436\u0435 \u043E\u0441\u043E\u0431\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442","\u0421\u0435\u0439\u0447\u0430\u0441 \u0442\u0430\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0441\u0442\u0438. \u041D\u0435 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u043F\u043B\u0435\u0441\u043A\u0430\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u043E\u0431\u044B\u0447\u043D\u0430\u044F \u0436\u0438\u0437\u043D\u044C \u0432\u043D\u0435 \u041F\u0445\u0443\u043A\u0435\u0442\u0430 \u{1F642}","\u042F \u0434\u0430\u0436\u0435 \u043D\u0435 \u043F\u0441\u0438\u0445\u0443\u044E \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0438 \u043E\u0442 \u0447\u0435\u0433\u043E, \u0445\u043E\u0442\u044F \u0435\u0449\u0435 \u043D\u0435\u0434\u0435\u043B\u044E \u043D\u0430\u0437\u0430\u0434 \u043F\u0441\u0438\u0445\u043E\u0432\u0430\u043B\u0430 \u0431\u044B","\u0421\u043C\u044B\u0441\u043B \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u044F \u043D\u0435 \u043D\u0435 \u043D\u0430 \u0442\u043E \u0442\u0440\u0430\u0442\u0438\u043B\u0430 \u0441\u0432\u043E\u044E \u0441\u0438\u043B\u0443 \u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u044E","\u0423 \u043C\u0435\u043D\u044F \u0432 \u0433\u043E\u043B\u043E\u0432\u0435 \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F \u0441\u043C\u044B\u0441\u043B \u{1F642}","\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0432\u0430\u043C \u043E\u0431\u043E\u0438\u043C! \u042D\u0442\u043E \u0431\u044B\u043B\u043E \u043D\u0438 \u0441 \u0447\u0435\u043C \u043D\u0435\u0441\u0440\u0430\u0432\u043D\u0438\u043C\u043E !!!","\u0412\u0441\u0435 \u043F\u0435\u0440\u0435\u0441\u0435\u043A\u0430\u0435\u0442\u0441\u044F \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E, \u043F\u043E\u0434 \u043D\u0430\u0448\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 \u0434\u0430?","\u0412\u043E\u043E\u0431\u0449\u0435\u043C \u0443 \u043C\u0435\u043D\u044F \u0442\u0430\u043A\u043E\u0435: \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u043B\u043E\u0434\u043E, \u043D\u0435 \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u044F \u0441\u0435\u0431\u044F, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C \u0432 \u043E\u043F\u0440\u0430\u0432\u0434\u0430\u043D\u0438\u0438 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F.","\u0412\u0435\u0440\u043D\u0443\u043B\u043E\u0441\u044C \u044F - \u044D\u0442\u043E \u044F, \u0430 \u043D\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B, \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0434\u043E\u043C\u0443, \u043E\u0442\u0434\u0430\u043D\u0438\u044F \u0434\u043E\u043B\u0433\u0430 \u043F\u0440\u0435\u0434\u043A\u0430\u043C.","\u041F\u0440\u043E\u0441\u0442\u043E \u043E\u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C \u0447\u0442\u043E \u044F \u0442\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440 \u0438 \u0434\u0438\u0440\u0438\u0436\u0435\u0440, \u0438 \u043C\u0443\u0437\u044B\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u044F. \u041F\u0440\u043E\u0441\u0442\u043E \u0436\u0438\u0432\u0443.","\u0410 \u0441\u0435\u0439\u0447\u0430\u0441 \u043E\u0442\u043F\u0443\u0441\u0442\u0438\u043B\u043E. \u0412\u0441\u0435 \u0436\u0435 \u0445\u043E\u0440\u043E\u0448\u043E. \u042F \u0442\u0430\u043A \u0436\u0435 \u0438\u0445 \u043B\u044E\u0431\u043B\u044E \u0438 \u0437\u0430\u0431\u043E\u0447\u0443\u0441\u044C, \u043D\u043E \u0431\u0435\u0437 \u0440\u0430\u0437\u0440\u044B\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0431\u044F \u043D\u0430 \u043A\u0443\u0441\u043A\u0438","\u041F\u0440\u0430\u0432 \u0442\u044B \u0431\u044B\u043B, \u043A\u043E\u0433\u0434\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u043B \u0447\u0442\u043E \u044D\u0442\u043E \u0442\u043E \u043A \u0447\u0435\u043C\u0443 \u043B\u044E\u0434\u0438 \u0433\u043E\u0434\u0430\u043C\u0438 \u0438\u0434\u0443\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0438\u044E \u0438 \u043F\u0440.","\u0422\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u043B \u043C\u043E\u0438 true colors \u0432 \u043C\u043E\u0435\u043C \u0441\u0438\u044F\u044E\u0449\u0435\u043C \u043D\u0435\u0431\u0435","\u0411\u044B\u043B \u043C\u043E\u043C\u0435\u043D\u0442 \u043A\u043E\u0433\u0434\u0430 \u044F \u0438\u0441\u043F\u0443\u0433\u0430\u043B\u0430\u0441\u044C \u0447\u0442\u043E \u044F \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u0432 \xAB\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0436\u0438\u0437\u043D\u044C \u0441 \u043F\u044F\u0442\u0435\u0440\u043E\u0447\u043A\u043E\u0439\xBB","\u042F \u0432\u0441\u0435 \u043F\u043E\u043C\u043D\u044E!","\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0430 \u043D\u0430 \u0442\u0435\u0431\u044F \u043F\u043E\u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E!","\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u043F\u043E\u0434\u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435.","\u0418 \u0437\u043D\u0430\u0435\u0448\u044C, \u0432\u043E\u0442 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u0432\u0441\u0435 \u0445\u043E\u0440\u043E\u0448\u043E","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0443 \u043C\u0435\u043D\u044F \u0432 \u0446\u0435\u043B\u043E\u043C \u043C\u043E\u0437\u0433 \u0441\u0442\u0430\u043B \u0436\u0438\u0432\u044B\u043C \u0432 \u043F\u043B\u0430\u043D\u0435 \u0443\u043B\u0435\u0442\u043E\u0432 \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0438","\u0412\u0441\u0435 \u0445\u0435\u0440\u043D\u044F, \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0431\u044B\u043B \u043F\u0440\u0430\u0432, \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0441\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0435\u0433\u043E \u0437\u0430\u0432\u0435\u0442\u0430\u043C","\u0415\u0449\u0435 \u0440\u0430\u0437, \u0432\u0441\u0435 \u0447\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \u041D\u0438\u043A\u043E\u043B\u0430\u0439 - \u0438\u0441\u0442\u0438\u043D\u0430","\u042F \u043D\u0435 \u0432\u0435\u0440\u0438\u043B \u0432 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u041D\u0438\u043A\u043E\u043B\u0430\u044F \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0433\u043E\u0434\u0430-\u0434\u0432\u0443\u0445","\u0412\u043E\u0431\u0449\u0435\u043C \u0432\u0441\u0435 \u0447\u0442\u043E \u043C\u043D\u0435 \u0432\u0435\u0449\u0430\u043B \u041D\u0438\u043A\u043E\u043B\u0430\u0439 - \u043F\u0440\u0430\u0432\u0434\u0430. \u0425\u043E\u0447\u0435\u0448\u044C \u0431\u044B\u0442\u044C \u043F\u0441\u0438-\u043C\u0443\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0441\u043E\u0431\u0430\u043A\u043E\u0439, \u0434\u0435\u043B\u0430\u0439 \u043A\u0430\u043A \u043E\u043D","\u042F \u043F\u043E \u0442\u0432\u043E\u0438\u043C \u0437\u0430\u0432\u0435\u0442\u0430\u043C \u0441\u0442\u0430\u043B \u0436\u0438\u0442\u044C","\u041B\u0443\u0447\u0448\u0435\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432 \u0436\u0438\u0437\u043D\u0438","\u041D\u0435\u0442, \u043D\u0435 \u0441\u0430\u043C\u043E\u0432\u043D\u0443\u0448\u0435\u043D\u0438\u0435. \u042F \u0442\u043E\u0436\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043B \u0432\u043E\u0441\u0442\u043E\u0440\u0433 \u043E\u0442 \u0442\u043E\u0433\u043E \u043A\u0430\u043A\u043E\u0439 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043C\u0438\u0440 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043A\u043B\u0430\u0441\u0441\u043D\u044B\u043C.","\u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u0430 \u043C\u0438\u0440\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u043B\u0430\u0441\u044C \u043D\u0430 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442 \u0435\u0435.","\u0414\u043E \u044D\u0442\u043E\u0433\u043E \u044D\u0442\u043E \u0431\u044B\u043B\u0430 \u043C\u043E\u043D\u043E\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0440\u0430\u044F \u043F\u043B\u043E\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u0430 \u043C\u0438\u0440\u0430.","C\u0442\u0430\u0440\u0430\u044E\u0441\u044C \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0442\u044C \u0438 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0438\u0437 \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0438 \u0432\u043D\u043E\u0441\u0438\u0442 \u0432 \u0436\u0435\u043B\u0430\u0435\u043C\u0443\u044E \u043C\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u0443 \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043A\u0440\u0430\u0441\u043A\u0438.","\u0418 \u044F \u0431\u044B \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u043D\u044F\u043B \u0438 \u043D\u0435 \u043E\u0441\u043E\u0437\u043D\u0430\u043B \u0441\u0435\u0439\u0447\u0430\u0441 \u0435\u0441\u043B\u0438 \u0431\u044B \u0442\u044B \u043D\u0435 \u043F\u043E\u0434\u0435\u043B\u0438\u043B\u0441\u044F \u044D\u0442\u0438\u043C","\u0417\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043A\u0440\u0430\u0441\u043E\u043A, \u043C\u0435\u043B\u043A\u0438\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u043C\u043E\u0435\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u041C\u0438\u0440\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u2014 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0441\u0432\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438)","Bro if you have the secret powers to sort people out, do it as much as possible I say \u{1F601}","I wish I\u2019d started sooner as well \u{1F62C} This is amazing man!","Doing amazing. Quit smoking a month ago.","Am managing to keep the alcohol at bay without much trouble.","My back spasm released itself...5 kms later I was like - whoa, this was impossible just yesterday.","hahahah I will see you in January for my second trip!","I remember the rocks and trees as bodhisatvas from that trip and now I see them everywhere, gently smiling and looking out for me.","I keep remembering you standing in the door, glowing because the trip had kicked in and saying to me - enjoy your life.","I\u2019m just focused on the homework and getting healthy.","Please write it man. There are so many books and they all find the readers they need to.","Don't remember much else about BKK than the crazy Russian \u{1F60B}","Fuck yes. Do it. Seems this is your calling."].sort(()=>Math.random()-.5),vi=document.getElementById("testimonials");function Js(t){let e=document.createElement("div");e.classList.add("testimonial-box","bg-sky-100"),e.style.left=`${Math.round(Math.random()*(window.innerWidth-316))}px`,e.textContent=t,vi.appendChild(e),setTimeout(()=>{e.remove()},5900)}var je=0;function Hs(){if(je<Li.length){let t=Li[je];Js(t),je++}else je=0}vi&&setTimeout(()=>{setInterval(Hs,6e3)},6e3);var fi=["IN CONTROL","IN LINE","IN ORDER","IN YOUR HANDS","IN ALIGNMENT","IN BALANCE","IN BLOOM","IN CONTROL","IN FOCUS","IN GEAR","IN HARMONY","IN MOTION","IN ORDER","IN PERSPECTIVE","IN RHYTHM","IN SHAPE","IN SYNC","IN THE GROOVE","IN THE MIX","IN THE RING","IN THE SADDLE","IN TOUCH","IN TUNE"],wi,xi=function(){(wi=document.getElementById("lifeline"))&&(wi.innerText=fi[Math.floor(Math.random()*fi.length)],setTimeout(xi,3e3))};setTimeout(xi,3e3);var Ni=C`
  ${L}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var Z=class extends y{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?Rt`a`:Rt`button`;return Et`
      <${e}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${F(t?void 0:this.disabled)}
        type=${F(t?void 0:"button")}
        href=${F(t?this.href:void 0)}
        target=${F(t?this.target:void 0)}
        download=${F(t?this.download:void 0)}
        rel=${F(t&&this.target?"noreferrer noopener":void 0)}
        role=${F(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${F(this.name)}
          library=${F(this.library)}
          src=${F(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Z.styles=Ni;Z.dependencies={"sl-icon":G};a([N(".icon-button")],Z.prototype,"button",2);a([et()],Z.prototype,"hasFocus",2);a([n()],Z.prototype,"name",2);a([n()],Z.prototype,"library",2);a([n()],Z.prototype,"src",2);a([n()],Z.prototype,"href",2);a([n()],Z.prototype,"target",2);a([n()],Z.prototype,"download",2);a([n()],Z.prototype,"label",2);a([n({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);var Oi=new Map,_s=new WeakMap;function Ks(t){return t??{keyframes:[],options:{duration:0}}}function Wi(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function q(t,e){Oi.set(t,Ks(e))}function P(t,e,o){let i=_s.get(t);if(i?.[e])return Wi(i[e],o.dir);let s=Oi.get(e);return s?Wi(s,o.dir):{keyframes:[],options:{duration:0}}}function mt(t,e){return new Promise(o=>{function i(s){s.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function tt(t,e,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");let s=t.animate(e,It(H({},o),{duration:$s()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function $s(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ot(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{let i=requestAnimationFrame(o);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}var Ai=C`
  ${L}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`;var Yt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),it=class extends y{constructor(){super(...arguments),this.hasSlotController=new E(this,"icon","suffix"),this.localize=new k(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ot(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=P(this,"alert.show",{dir:this.localize.dir()});await tt(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ot(this.base);let{keyframes:t,options:e}=P(this,"alert.hide",{dir:this.localize.dir()});await tt(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}async toast(){return new Promise(t=>{Yt.parentElement===null&&document.body.append(Yt),Yt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Yt.removeChild(this),t(),Yt.querySelector("sl-alert")===null&&Yt.remove()},{once:!0})})}render(){return m`
      <div
        part="base"
        class=${W({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?m`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};it.styles=Ai;it.dependencies={"sl-icon-button":Z};a([N('[part~="base"]')],it.prototype,"base",2);a([n({type:Boolean,reflect:!0})],it.prototype,"open",2);a([n({type:Boolean,reflect:!0})],it.prototype,"closable",2);a([n({reflect:!0})],it.prototype,"variant",2);a([n({type:Number})],it.prototype,"duration",2);a([D("open",{waitUntilFirstUpdate:!0})],it.prototype,"handleOpenChange",1);a([D("duration")],it.prototype,"handleDurationChange",1);q("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});q("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});it.define("sl-alert");var Di=C`
  ${L}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;var st=class extends y{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){let t=m`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `,e=m``;return this.initials?e=m`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=m`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,m`
      <div
        part="base"
        class=${W({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};st.styles=Di;st.dependencies={"sl-icon":G};a([et()],st.prototype,"hasError",2);a([n()],st.prototype,"image",2);a([n()],st.prototype,"label",2);a([n()],st.prototype,"initials",2);a([n()],st.prototype,"loading",2);a([n({reflect:!0})],st.prototype,"shape",2);a([D("image")],st.prototype,"handleImageChange",1);st.define("sl-avatar");var Mi=C`
  ${L}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var Dt=class extends y{constructor(){super(...arguments),this.localize=new k(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,o)=>{let i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),m`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Dt.styles=Mi;Dt.dependencies={"sl-icon":G};a([N("slot")],Dt.prototype,"defaultSlot",2);a([N('slot[name="separator"]')],Dt.prototype,"separatorSlot",2);a([n()],Dt.prototype,"label",2);Dt.define("sl-breadcrumb");var Gi=C`
  ${L}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`;var Vt=class extends y{constructor(){super(...arguments),this.hasSlotController=new E(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){let t=!!this.href;return m`
      <div
        part="base"
        class=${W({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${t?m`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${F(this.target?this.target:void 0)}"
                rel=${F(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:m`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Vt.styles=Gi;a([n()],Vt.prototype,"href",2);a([n()],Vt.prototype,"target",2);a([n()],Vt.prototype,"rel",2);Vt.define("sl-breadcrumb-item");var zi=C`
  ${L}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;var Uo=class extends y{constructor(){super(...arguments),this.hasSlotController=new E(this,"footer","header","image")}render(){return m`
      <div
        part="base"
        class=${W({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Uo.styles=zi;Uo.define("sl-card");function Te(t){return qs(t)}function Co(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function qs(t){for(let e=t;e;e=Co(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Co(t);e;e=Co(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function Ps(t){let e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null&&Te(t)===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function Xi(t){var e,o;let i=de(t),s=(e=i[0])!=null?e:null,l=(o=i[i.length-1])!=null?o:null;return{start:s,end:l}}function de(t){let e=[];function o(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!e.includes(i)&&Ps(i)&&e.push(i);let s=l=>{var r;return((r=l.getRootNode({composed:!0}))==null?void 0:r.host)!==t};i instanceof HTMLSlotElement&&s(i)&&i.assignedElements({flatten:!0}).forEach(l=>{o(l)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&o(i.shadowRoot)}[...i.children].forEach(s=>o(s))}return o(t),e}function*ki(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*ki(t.shadowRoot.activeElement)))}var be=[],Zi=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated)return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward",e.preventDefault();let i=de(this.element),s=i[0],l=this.startElementAlreadyFocused(s)?0:this.currentFocusIndex;if(l===-1){this.currentFocus=s,this.currentFocus.focus({preventScroll:!0});return}let r=this.tabDirection==="forward"?1:-1;l+r>=i.length?l=0:this.currentFocusIndex+r<0?l=i.length-1:l+=r,this.currentFocus=i[l],(o=this.currentFocus)==null||o.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){be.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){be=be.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return be[be.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=de(this.element);if(!this.element.matches(":focus-within")){let e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}get currentFocusIndex(){return de(this.element).findIndex(t=>t===this.currentFocus)}startElementAlreadyFocused(t){for(let e of ki())if(t===e)return!0;return!1}};var yo=new Set;function tl(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Io(t){if(yo.add(t),!document.body.classList.contains("sl-scroll-lock")){let e=tl();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Lo(t){yo.delete(t),yo.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}var Si=C`
  ${L}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var lt=class extends y{constructor(){super(...arguments),this.hasSlotController=new E(this,"footer"),this.localize=new k(this),this.modal=new Zi(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Io(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Lo(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let o=P(this,"dialog.denyClose",{dir:this.localize.dir()});tt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Io(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ot(this.dialog),ot(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=P(this,"dialog.show",{dir:this.localize.dir()}),o=P(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([tt(this.panel,e.keyframes,e.options),tt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ot(this.dialog),ot(this.overlay)]);let t=P(this,"dialog.hide",{dir:this.localize.dir()}),e=P(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([tt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),tt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Lo(this);let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}render(){return m`
      <div
        part="base"
        class=${W({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${F(this.noHeader?this.label:void 0)}
          aria-labelledby=${F(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":m`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};lt.styles=Si;lt.dependencies={"sl-icon-button":Z};a([N(".dialog")],lt.prototype,"dialog",2);a([N(".dialog__panel")],lt.prototype,"panel",2);a([N(".dialog__overlay")],lt.prototype,"overlay",2);a([n({type:Boolean,reflect:!0})],lt.prototype,"open",2);a([n({reflect:!0})],lt.prototype,"label",2);a([n({attribute:"no-header",type:Boolean,reflect:!0})],lt.prototype,"noHeader",2);a([D("open",{waitUntilFirstUpdate:!0})],lt.prototype,"handleOpenChange",1);q("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});q("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});q("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});q("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});q("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});lt.define("sl-dialog");var ji=C`
  ${L}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var ue=class extends y{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};ue.styles=ji;a([n({type:Boolean,reflect:!0})],ue.prototype,"vertical",2);a([D("vertical")],ue.prototype,"handleVerticalChange",1);ue.define("sl-divider");var Ti=C`
  ${L}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var Ri=C`
  ${L}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;var dt=Math.min,j=Math.max,Qe=Math.round,he=Math.floor,Bt=t=>({x:t,y:t}),el={left:"right",right:"left",bottom:"top",top:"bottom"},ol={start:"end",end:"start"};function Ee(t,e,o){return j(t,dt(e,o))}function Mt(t,e){return typeof t=="function"?t(e):t}function Ft(t){return t.split("-")[0]}function Gt(t){return t.split("-")[1]}function vo(t){return t==="x"?"y":"x"}function Ye(t){return t==="y"?"height":"width"}function Jt(t){return["top","bottom"].includes(Ft(t))?"y":"x"}function Ve(t){return vo(Jt(t))}function Ei(t,e,o){o===void 0&&(o=!1);let i=Gt(t),s=Ve(t),l=Ye(s),r=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(r=ge(r)),[r,ge(r)]}function Yi(t){let e=ge(t);return[Re(t),e,Re(e)]}function Re(t){return t.replace(/start|end/g,e=>ol[e])}function il(t,e,o){let i=["left","right"],s=["right","left"],l=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:i:e?i:s;case"left":case"right":return e?l:r;default:return[]}}function Vi(t,e,o,i){let s=Gt(t),l=il(Ft(t),o==="start",i);return s&&(l=l.map(r=>r+"-"+s),e&&(l=l.concat(l.map(Re)))),l}function ge(t){return t.replace(/left|right|bottom|top/g,e=>el[e])}function sl(t){return{top:0,right:0,bottom:0,left:0,...t}}function fo(t){return typeof t!="number"?sl(t):{top:t,right:t,bottom:t,left:t}}function zt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Ji(t,e,o){let{reference:i,floating:s}=t,l=Jt(e),r=Ve(e),d=Ye(r),c=Ft(e),b=l==="y",Q=i.x+i.width/2-s.width/2,u=i.y+i.height/2-s.height/2,h=i[d]/2-s[d]/2,g;switch(c){case"top":g={x:Q,y:i.y-s.height};break;case"bottom":g={x:Q,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:u};break;case"left":g={x:i.x-s.width,y:u};break;default:g={x:i.x,y:i.y}}switch(Gt(e)){case"start":g[r]-=h*(o&&b?-1:1);break;case"end":g[r]+=h*(o&&b?-1:1);break}return g}var Hi=async(t,e,o)=>{let{placement:i="bottom",strategy:s="absolute",middleware:l=[],platform:r}=o,d=l.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e)),b=await r.getElementRects({reference:t,floating:e,strategy:s}),{x:Q,y:u}=Ji(b,i,c),h=i,g={},p=0;for(let B=0;B<d.length;B++){let{name:f,fn:I}=d[B],{x,y:O,data:X,reset:M}=await I({x:Q,y:u,initialPlacement:i,placement:h,strategy:s,middlewareData:g,rects:b,platform:r,elements:{reference:t,floating:e}});if(Q=x??Q,u=O??u,g={...g,[f]:{...g[f],...X}},M&&p<=50){p++,typeof M=="object"&&(M.placement&&(h=M.placement),M.rects&&(b=M.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:s}):M.rects),{x:Q,y:u}=Ji(b,h,c)),B=-1;continue}}return{x:Q,y:u,placement:h,strategy:s,middlewareData:g}};async function Je(t,e){var o;e===void 0&&(e={});let{x:i,y:s,platform:l,rects:r,elements:d,strategy:c}=t,{boundary:b="clippingAncestors",rootBoundary:Q="viewport",elementContext:u="floating",altBoundary:h=!1,padding:g=0}=Mt(e,t),p=fo(g),f=d[h?u==="floating"?"reference":"floating":u],I=zt(await l.getClippingRect({element:(o=await(l.isElement==null?void 0:l.isElement(f)))==null||o?f:f.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(d.floating)),boundary:b,rootBoundary:Q,strategy:c})),x=u==="floating"?{...r.floating,x:i,y:s}:r.reference,O=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d.floating)),X=await(l.isElement==null?void 0:l.isElement(O))?await(l.getScale==null?void 0:l.getScale(O))||{x:1,y:1}:{x:1,y:1},M=zt(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:O,strategy:c}):x);return{top:(I.top-M.top+p.top)/X.y,bottom:(M.bottom-I.bottom+p.bottom)/X.y,left:(I.left-M.left+p.left)/X.x,right:(M.right-I.right+p.right)/X.x}}var wo=t=>({name:"arrow",options:t,async fn(e){let{x:o,y:i,placement:s,rects:l,platform:r,elements:d,middlewareData:c}=e,{element:b,padding:Q=0}=Mt(t,e)||{};if(b==null)return{};let u=fo(Q),h={x:o,y:i},g=Ve(s),p=Ye(g),B=await r.getDimensions(b),f=g==="y",I=f?"top":"left",x=f?"bottom":"right",O=f?"clientHeight":"clientWidth",X=l.reference[p]+l.reference[g]-h[g]-l.floating[p],M=h[g]-l.reference[g],z=await(r.getOffsetParent==null?void 0:r.getOffsetParent(b)),V=z?z[O]:0;(!V||!await(r.isElement==null?void 0:r.isElement(z)))&&(V=d.floating[O]||l.floating[p]);let at=X/2-M/2,Ct=V/2-B[p]/2-1,$t=dt(u[I],Ct),qt=dt(u[x],Ct),K=$t,Pt=V-B[p]-qt,J=V/2-B[p]/2+at,nt=Ee(K,J,Pt),ct=!c.arrow&&Gt(s)!=null&&J!=nt&&l.reference[p]/2-(J<K?$t:qt)-B[p]/2<0,gt=ct?J<K?J-K:J-Pt:0;return{[g]:h[g]+gt,data:{[g]:nt,centerOffset:J-nt-gt,...ct&&{alignmentOffset:gt}},reset:ct}}});var xo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;let{placement:s,middlewareData:l,rects:r,initialPlacement:d,platform:c,elements:b}=e,{mainAxis:Q=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:B=!0,...f}=Mt(t,e);if((o=l.arrow)!=null&&o.alignmentOffset)return{};let I=Ft(s),x=Ft(d)===d,O=await(c.isRTL==null?void 0:c.isRTL(b.floating)),X=h||(x||!B?[ge(d)]:Yi(d));!h&&p!=="none"&&X.push(...Vi(d,B,p,O));let M=[d,...X],z=await Je(e,f),V=[],at=((i=l.flip)==null?void 0:i.overflows)||[];if(Q&&V.push(z[I]),u){let K=Ei(s,r,O);V.push(z[K[0]],z[K[1]])}if(at=[...at,{placement:s,overflows:V}],!V.every(K=>K<=0)){var Ct,$t;let K=(((Ct=l.flip)==null?void 0:Ct.index)||0)+1,Pt=M[K];if(Pt)return{data:{index:K,overflows:at},reset:{placement:Pt}};let J=($t=at.filter(nt=>nt.overflows[0]<=0).sort((nt,ct)=>nt.overflows[1]-ct.overflows[1])[0])==null?void 0:$t.placement;if(!J)switch(g){case"bestFit":{var qt;let nt=(qt=at.map(ct=>[ct.placement,ct.overflows.filter(gt=>gt>0).reduce((gt,ys)=>gt+ys,0)]).sort((ct,gt)=>ct[1]-gt[1])[0])==null?void 0:qt[0];nt&&(J=nt);break}case"initialPlacement":J=d;break}if(s!==J)return{reset:{placement:J}}}return{}}}};async function ll(t,e){let{placement:o,platform:i,elements:s}=t,l=await(i.isRTL==null?void 0:i.isRTL(s.floating)),r=Ft(o),d=Gt(o),c=Jt(o)==="y",b=["left","top"].includes(r)?-1:1,Q=l&&c?-1:1,u=Mt(e,t),{mainAxis:h,crossAxis:g,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return d&&typeof p=="number"&&(g=d==="end"?p*-1:p),c?{x:g*Q,y:h*b}:{x:h*b,y:g*Q}}var No=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:i}=e,s=await ll(e,t);return{x:o+s.x,y:i+s.y,data:s}}}},Wo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:i,placement:s}=e,{mainAxis:l=!0,crossAxis:r=!1,limiter:d={fn:f=>{let{x:I,y:x}=f;return{x:I,y:x}}},...c}=Mt(t,e),b={x:o,y:i},Q=await Je(e,c),u=Jt(Ft(s)),h=vo(u),g=b[h],p=b[u];if(l){let f=h==="y"?"top":"left",I=h==="y"?"bottom":"right",x=g+Q[f],O=g-Q[I];g=Ee(x,g,O)}if(r){let f=u==="y"?"top":"left",I=u==="y"?"bottom":"right",x=p+Q[f],O=p-Q[I];p=Ee(x,p,O)}let B=d.fn({...e,[h]:g,[u]:p});return{...B,data:{x:B.x-o,y:B.y-i}}}}};var He=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){let{placement:o,rects:i,platform:s,elements:l}=e,{apply:r=()=>{},...d}=Mt(t,e),c=await Je(e,d),b=Ft(o),Q=Gt(o),u=Jt(o)==="y",{width:h,height:g}=i.floating,p,B;b==="top"||b==="bottom"?(p=b,B=Q===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(B=b,p=Q==="end"?"top":"bottom");let f=g-c[p],I=h-c[B],x=!e.middlewareData.shift,O=f,X=I;if(u){let z=h-c.left-c.right;X=Q||x?dt(I,z):z}else{let z=g-c.top-c.bottom;O=Q||x?dt(f,z):z}if(x&&!Q){let z=j(c.left,0),V=j(c.right,0),at=j(c.top,0),Ct=j(c.bottom,0);u?X=h-2*(z!==0||V!==0?z+V:j(c.left,c.right)):O=g-2*(at!==0||Ct!==0?at+Ct:j(c.top,c.bottom))}await r({...e,availableWidth:X,availableHeight:O});let M=await s.getDimensions(l.floating);return h!==M.width||g!==M.height?{reset:{rects:!0}}:{}}}};function Ut(t){return Ki(t)?(t.nodeName||"").toLowerCase():"#document"}function Y(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function bt(t){var e;return(e=(Ki(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ki(t){return t instanceof Node||t instanceof Y(t).Node}function ut(t){return t instanceof Element||t instanceof Y(t).Element}function rt(t){return t instanceof HTMLElement||t instanceof Y(t).HTMLElement}function _i(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Y(t).ShadowRoot}function _t(t){let{overflow:e,overflowX:o,overflowY:i,display:s}=_(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(s)}function $i(t){return["table","td","th"].includes(Ut(t))}function _e(t){let e=Ke(),o=_(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function qi(t){let e=Xt(t);for(;rt(e)&&!pe(e);){if(_e(e))return e;e=Xt(e)}return null}function Ke(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function pe(t){return["html","body","#document"].includes(Ut(t))}function _(t){return Y(t).getComputedStyle(t)}function me(t){return ut(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Xt(t){if(Ut(t)==="html")return t;let e=t.assignedSlot||t.parentNode||_i(t)&&t.host||bt(t);return _i(e)?e.host:e}function Pi(t){let e=Xt(t);return pe(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&_t(e)?e:Pi(e)}function Ht(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);let s=Pi(t),l=s===((i=t.ownerDocument)==null?void 0:i.body),r=Y(s);return l?e.concat(r,r.visualViewport||[],_t(s)?s:[],r.frameElement&&o?Ht(r.frameElement):[]):e.concat(s,Ht(s,[],o))}function os(t){let e=_(t),o=parseFloat(e.width)||0,i=parseFloat(e.height)||0,s=rt(t),l=s?t.offsetWidth:o,r=s?t.offsetHeight:i,d=Qe(o)!==l||Qe(i)!==r;return d&&(o=l,i=r),{width:o,height:i,$:d}}function Oo(t){return ut(t)?t:t.contextElement}function Kt(t){let e=Oo(t);if(!rt(e))return Bt(1);let o=e.getBoundingClientRect(),{width:i,height:s,$:l}=os(e),r=(l?Qe(o.width):o.width)/i,d=(l?Qe(o.height):o.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!d||!Number.isFinite(d))&&(d=1),{x:r,y:d}}var rl=Bt(0);function is(t){let e=Y(t);return!Ke()||!e.visualViewport?rl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function al(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==Y(t)?!1:e}function kt(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);let s=t.getBoundingClientRect(),l=Oo(t),r=Bt(1);e&&(i?ut(i)&&(r=Kt(i)):r=Kt(t));let d=al(l,o,i)?is(l):Bt(0),c=(s.left+d.x)/r.x,b=(s.top+d.y)/r.y,Q=s.width/r.x,u=s.height/r.y;if(l){let h=Y(l),g=i&&ut(i)?Y(i):i,p=h.frameElement;for(;p&&i&&g!==h;){let B=Kt(p),f=p.getBoundingClientRect(),I=_(p),x=f.left+(p.clientLeft+parseFloat(I.paddingLeft))*B.x,O=f.top+(p.clientTop+parseFloat(I.paddingTop))*B.y;c*=B.x,b*=B.y,Q*=B.x,u*=B.y,c+=x,b+=O,p=Y(p).frameElement}}return zt({width:Q,height:u,x:c,y:b})}function nl(t){let{rect:e,offsetParent:o,strategy:i}=t,s=rt(o),l=bt(o);if(o===l)return e;let r={scrollLeft:0,scrollTop:0},d=Bt(1),c=Bt(0);if((s||!s&&i!=="fixed")&&((Ut(o)!=="body"||_t(l))&&(r=me(o)),rt(o))){let b=kt(o);d=Kt(o),c.x=b.x+o.clientLeft,c.y=b.y+o.clientTop}return{width:e.width*d.x,height:e.height*d.y,x:e.x*d.x-r.scrollLeft*d.x+c.x,y:e.y*d.y-r.scrollTop*d.y+c.y}}function cl(t){return Array.from(t.getClientRects())}function ss(t){return kt(bt(t)).left+me(t).scrollLeft}function dl(t){let e=bt(t),o=me(t),i=t.ownerDocument.body,s=j(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),l=j(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),r=-o.scrollLeft+ss(t),d=-o.scrollTop;return _(i).direction==="rtl"&&(r+=j(e.clientWidth,i.clientWidth)-s),{width:s,height:l,x:r,y:d}}function bl(t,e){let o=Y(t),i=bt(t),s=o.visualViewport,l=i.clientWidth,r=i.clientHeight,d=0,c=0;if(s){l=s.width,r=s.height;let b=Ke();(!b||b&&e==="fixed")&&(d=s.offsetLeft,c=s.offsetTop)}return{width:l,height:r,x:d,y:c}}function ul(t,e){let o=kt(t,!0,e==="fixed"),i=o.top+t.clientTop,s=o.left+t.clientLeft,l=rt(t)?Kt(t):Bt(1),r=t.clientWidth*l.x,d=t.clientHeight*l.y,c=s*l.x,b=i*l.y;return{width:r,height:d,x:c,y:b}}function ts(t,e,o){let i;if(e==="viewport")i=bl(t,o);else if(e==="document")i=dl(bt(t));else if(ut(e))i=ul(e,o);else{let s=is(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return zt(i)}function ls(t,e){let o=Xt(t);return o===e||!ut(o)||pe(o)?!1:_(o).position==="fixed"||ls(o,e)}function gl(t,e){let o=e.get(t);if(o)return o;let i=Ht(t,[],!1).filter(d=>ut(d)&&Ut(d)!=="body"),s=null,l=_(t).position==="fixed",r=l?Xt(t):t;for(;ut(r)&&!pe(r);){let d=_(r),c=_e(r);!c&&d.position==="fixed"&&(s=null),(l?!c&&!s:!c&&d.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||_t(r)&&!c&&ls(t,r))?i=i.filter(Q=>Q!==r):s=d,r=Xt(r)}return e.set(t,i),i}function Ql(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t,r=[...o==="clippingAncestors"?gl(e,this._c):[].concat(o),i],d=r[0],c=r.reduce((b,Q)=>{let u=ts(e,Q,s);return b.top=j(u.top,b.top),b.right=dt(u.right,b.right),b.bottom=dt(u.bottom,b.bottom),b.left=j(u.left,b.left),b},ts(e,d,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function hl(t){return os(t)}function pl(t,e,o){let i=rt(e),s=bt(e),l=o==="fixed",r=kt(t,!0,l,e),d={scrollLeft:0,scrollTop:0},c=Bt(0);if(i||!i&&!l)if((Ut(e)!=="body"||_t(s))&&(d=me(e)),i){let b=kt(e,!0,l,e);c.x=b.x+e.clientLeft,c.y=b.y+e.clientTop}else s&&(c.x=ss(s));return{x:r.left+d.scrollLeft-c.x,y:r.top+d.scrollTop-c.y,width:r.width,height:r.height}}function es(t,e){return!rt(t)||_(t).position==="fixed"?null:e?e(t):t.offsetParent}function rs(t,e){let o=Y(t);if(!rt(t))return o;let i=es(t,e);for(;i&&$i(i)&&_(i).position==="static";)i=es(i,e);return i&&(Ut(i)==="html"||Ut(i)==="body"&&_(i).position==="static"&&!_e(i))?o:i||qi(t)||o}var ml=async function(t){let{reference:e,floating:o,strategy:i}=t,s=this.getOffsetParent||rs,l=this.getDimensions;return{reference:pl(e,await s(o),i),floating:{x:0,y:0,...await l(o)}}};function Bl(t){return _(t).direction==="rtl"}var Be={convertOffsetParentRelativeRectToViewportRelativeRect:nl,getDocumentElement:bt,getClippingRect:Ql,getOffsetParent:rs,getElementRects:ml,getClientRects:cl,getDimensions:hl,getScale:Kt,isElement:ut,isRTL:Bl};function Fl(t,e){let o=null,i,s=bt(t);function l(){clearTimeout(i),o&&o.disconnect(),o=null}function r(d,c){d===void 0&&(d=!1),c===void 0&&(c=1),l();let{left:b,top:Q,width:u,height:h}=t.getBoundingClientRect();if(d||e(),!u||!h)return;let g=he(Q),p=he(s.clientWidth-(b+u)),B=he(s.clientHeight-(Q+h)),f=he(b),x={rootMargin:-g+"px "+-p+"px "+-B+"px "+-f+"px",threshold:j(0,dt(1,c))||1},O=!0;function X(M){let z=M[0].intersectionRatio;if(z!==c){if(!O)return r();z?r(!1,z):i=setTimeout(()=>{r(!1,1e-7)},100)}O=!1}try{o=new IntersectionObserver(X,{...x,root:s.ownerDocument})}catch{o=new IntersectionObserver(X,x)}o.observe(t)}return r(!0),l}function as(t,e,o,i){i===void 0&&(i={});let{ancestorScroll:s=!0,ancestorResize:l=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,b=Oo(t),Q=s||l?[...b?Ht(b):[],...Ht(e)]:[];Q.forEach(I=>{s&&I.addEventListener("scroll",o,{passive:!0}),l&&I.addEventListener("resize",o)});let u=b&&d?Fl(b,o):null,h=-1,g=null;r&&(g=new ResizeObserver(I=>{let[x]=I;x&&x.target===b&&g&&(g.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{g&&g.observe(e)})),o()}),b&&!c&&g.observe(b),g.observe(e));let p,B=c?kt(t):null;c&&f();function f(){let I=kt(t);B&&(I.x!==B.x||I.y!==B.y||I.width!==B.width||I.height!==B.height)&&o(),B=I,p=requestAnimationFrame(f)}return o(),()=>{Q.forEach(I=>{s&&I.removeEventListener("scroll",o),l&&I.removeEventListener("resize",o)}),u&&u(),g&&g.disconnect(),g=null,c&&cancelAnimationFrame(p)}}var ns=(t,e,o)=>{let i=new Map,s={platform:Be,...o},l={...s.platform,_c:i};return Hi(t,e,{...s,platform:l})};function Ul(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}var w=class extends y{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Ul(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=as(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[No({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(He({apply:({rects:o})=>{let i=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=s?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(xo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Wo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(He({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(wo({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?o=>Be.getOffsetParent(o,Te):Be.getOffsetParent;ns(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:It(H({},Be),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:s,placement:l})=>{let r=getComputedStyle(this).direction==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[l.split("-")[0]];if(this.setAttribute("data-current-placement",l),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){let c=s.arrow.x,b=s.arrow.y,Q="",u="",h="",g="";if(this.arrowPlacement==="start"){let p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";Q=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=r?p:"",g=r?"":p}else if(this.arrowPlacement==="end"){let p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=r?"":p,g=r?p:"",h=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",Q=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof c=="number"?`${c}px`:"",Q=typeof b=="number"?`${b}px`:"");Object.assign(this.arrowEl.style,{top:Q,right:u,bottom:h,left:g,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return m`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${W({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?m`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};w.styles=Ri;a([N(".popup")],w.prototype,"popup",2);a([N(".popup__arrow")],w.prototype,"arrowEl",2);a([n()],w.prototype,"anchor",2);a([n({type:Boolean,reflect:!0})],w.prototype,"active",2);a([n({reflect:!0})],w.prototype,"placement",2);a([n({reflect:!0})],w.prototype,"strategy",2);a([n({type:Number})],w.prototype,"distance",2);a([n({type:Number})],w.prototype,"skidding",2);a([n({type:Boolean})],w.prototype,"arrow",2);a([n({attribute:"arrow-placement"})],w.prototype,"arrowPlacement",2);a([n({attribute:"arrow-padding",type:Number})],w.prototype,"arrowPadding",2);a([n({type:Boolean})],w.prototype,"flip",2);a([n({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],w.prototype,"flipFallbackPlacements",2);a([n({attribute:"flip-fallback-strategy"})],w.prototype,"flipFallbackStrategy",2);a([n({type:Object})],w.prototype,"flipBoundary",2);a([n({attribute:"flip-padding",type:Number})],w.prototype,"flipPadding",2);a([n({type:Boolean})],w.prototype,"shift",2);a([n({type:Object})],w.prototype,"shiftBoundary",2);a([n({attribute:"shift-padding",type:Number})],w.prototype,"shiftPadding",2);a([n({attribute:"auto-size"})],w.prototype,"autoSize",2);a([n()],w.prototype,"sync",2);a([n({type:Object})],w.prototype,"autoSizeBoundary",2);a([n({attribute:"auto-size-padding",type:Number})],w.prototype,"autoSizePadding",2);var S=class extends y{constructor(){super(...arguments),this.localize=new k(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,s;let l=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(s=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:s.activeElement:document.activeElement;(!this.containingElement||l?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let o=e.getAllItems(),i=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(i=>Xi(i).start),o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ot(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=P(this,"dropdown.show",{dir:this.localize.dir()});await tt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ot(this);let{keyframes:t,options:e}=P(this,"dropdown.hide",{dir:this.localize.dir()});await tt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return m`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${W({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};S.styles=Ti;S.dependencies={"sl-popup":w};a([N(".dropdown")],S.prototype,"popup",2);a([N(".dropdown__trigger")],S.prototype,"trigger",2);a([N(".dropdown__panel")],S.prototype,"panel",2);a([n({type:Boolean,reflect:!0})],S.prototype,"open",2);a([n({reflect:!0})],S.prototype,"placement",2);a([n({type:Boolean,reflect:!0})],S.prototype,"disabled",2);a([n({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],S.prototype,"stayOpenOnSelect",2);a([n({attribute:!1})],S.prototype,"containingElement",2);a([n({type:Number})],S.prototype,"distance",2);a([n({type:Number})],S.prototype,"skidding",2);a([n({type:Boolean})],S.prototype,"hoist",2);a([D("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);q("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});q("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});S.define("sl-dropdown");var cs=C`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var ds=C`
  ${L}
  ${cs}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;var bs=(t="value")=>(e,o)=>{let i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(l,r,d){var c;let b=i.getPropertyOptions(t),Q=typeof b.attribute=="string"?b.attribute:t;if(l===Q){let u=b.converter||Zt,g=(typeof u=="function"?u:(c=u?.fromAttribute)!=null?c:Zt.fromAttribute)(d,b.type);this[t]!==g&&(this[o]=g)}s.call(this,l,r,d)}};var us=At(class extends pt{constructor(t){if(super(t),t.type!==$.PROPERTY&&t.type!==$.ATTRIBUTE&&t.type!==$.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ze(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===R||e===A)return e;let o=t.element,i=t.name;if(t.type===$.PROPERTY){if(e===o[i])return R}else if(t.type===$.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return R}else if(t.type===$.ATTRIBUTE&&o.getAttribute(i)===e+"")return R;return Ui(t),e}});var U=class extends y{constructor(){super(...arguments),this.formControlController=new Me(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new E(this,"help-text","label"),this.localize=new k(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i){this.input.setRangeText(t,e,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly,l=s&&(typeof this.value=="number"||this.value.length>0);return m`
      <div
        part="form-control"
        class=${W({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${W({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${F(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${F(this.placeholder)}
              minlength=${F(this.minlength)}
              maxlength=${F(this.maxlength)}
              min=${F(this.min)}
              max=${F(this.max)}
              step=${F(this.step)}
              .value=${us(this.value)}
              autocapitalize=${F(this.autocapitalize)}
              autocomplete=${F(this.autocomplete)}
              autocorrect=${F(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${F(this.pattern)}
              enterkeyhint=${F(this.enterkeyhint)}
              inputmode=${F(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?m`
                  <button
                    part="clear-button"
                    class=${W({input__clear:!0,"input__clear--visible":l})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?m`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?m`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:m`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};U.styles=ds;U.dependencies={"sl-icon":G};a([N(".input__control")],U.prototype,"input",2);a([et()],U.prototype,"hasFocus",2);a([n()],U.prototype,"title",2);a([n({reflect:!0})],U.prototype,"type",2);a([n()],U.prototype,"name",2);a([n()],U.prototype,"value",2);a([bs()],U.prototype,"defaultValue",2);a([n({reflect:!0})],U.prototype,"size",2);a([n({type:Boolean,reflect:!0})],U.prototype,"filled",2);a([n({type:Boolean,reflect:!0})],U.prototype,"pill",2);a([n()],U.prototype,"label",2);a([n({attribute:"help-text"})],U.prototype,"helpText",2);a([n({type:Boolean})],U.prototype,"clearable",2);a([n({type:Boolean,reflect:!0})],U.prototype,"disabled",2);a([n()],U.prototype,"placeholder",2);a([n({type:Boolean,reflect:!0})],U.prototype,"readonly",2);a([n({attribute:"password-toggle",type:Boolean})],U.prototype,"passwordToggle",2);a([n({attribute:"password-visible",type:Boolean})],U.prototype,"passwordVisible",2);a([n({attribute:"no-spin-buttons",type:Boolean})],U.prototype,"noSpinButtons",2);a([n({reflect:!0})],U.prototype,"form",2);a([n({type:Boolean,reflect:!0})],U.prototype,"required",2);a([n()],U.prototype,"pattern",2);a([n({type:Number})],U.prototype,"minlength",2);a([n({type:Number})],U.prototype,"maxlength",2);a([n()],U.prototype,"min",2);a([n()],U.prototype,"max",2);a([n()],U.prototype,"step",2);a([n()],U.prototype,"autocapitalize",2);a([n()],U.prototype,"autocorrect",2);a([n()],U.prototype,"autocomplete",2);a([n({type:Boolean})],U.prototype,"autofocus",2);a([n()],U.prototype,"enterkeyhint",2);a([n({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],U.prototype,"spellcheck",2);a([n()],U.prototype,"inputmode",2);a([D("disabled",{waitUntilFirstUpdate:!0})],U.prototype,"handleDisabledChange",1);a([D("step",{waitUntilFirstUpdate:!0})],U.prototype,"handleStepChange",1);a([D("value",{waitUntilFirstUpdate:!0})],U.prototype,"handleValueChange",1);U.define("sl-input");var gs=C`
  ${L}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;var Fe=(t,e)=>{var o,i;let s=t._$AN;if(s===void 0)return!1;for(let l of s)(i=(o=l)._$AO)===null||i===void 0||i.call(o,e,!1),Fe(l,e);return!0},$e=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},Qs=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Il(e)}};function Cl(t){this._$AN!==void 0?($e(this),this._$AM=t,Qs(this)):this._$AM=t}function yl(t,e=!1,o=0){let i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let l=o;l<i.length;l++)Fe(i[l],!1),$e(i[l]);else i!=null&&(Fe(i,!1),$e(i));else Fe(this,t)}var Il=t=>{var e,o,i,s;t.type==$.CHILD&&((e=(i=t)._$AP)!==null&&e!==void 0||(i._$AP=yl),(o=(s=t)._$AQ)!==null&&o!==void 0||(s._$AQ=Cl))},qe=class extends pt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,i){super._$AT(e,o,i),Qs(this),this.isConnected=e._$AU}_$AO(e,o=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),o&&(Fe(this,e),$e(this))}setValue(e){if(Ze(this._$Ct))this._$Ct._$AI(e,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}};var hs=()=>new Do,Do=class{},Ao=new WeakMap,ps=At(class extends qe{render(t){return A}update(t,[e]){var o;let i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.dt=(o=t.options)===null||o===void 0?void 0:o.host,this.ot(this.lt=t.element)),A}ot(t){var e;if(typeof this.G=="function"){let o=(e=this.dt)!==null&&e!==void 0?e:globalThis,i=Ao.get(o);i===void 0&&(i=new WeakMap,Ao.set(o,i)),i.get(this.G)!==void 0&&this.G.call(this.dt,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,o;return typeof this.G=="function"?(e=Ao.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(o=this.G)===null||o===void 0?void 0:o.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var ms=class{constructor(t,e,o){this.popupRef=hs(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break;default:break}},this.handleClick=i=>{var s;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(s=i.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},(this.host=t).addController(this),this.hasSlotController=e,this.localize=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(let i of e.assignedElements())if(o=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let i=1;i!==o.length;++i)o[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((s,l)=>{var r;let d=(r=e.get(l))!=null?r:new CSSUnitValue(0,"px"),b=(d instanceof CSSUnitValue?d:new CSSUnitValue(0,"px")).to("px");return s-b.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=this.localize.dir()==="ltr";return this.isConnected?m`
      <sl-popup
        ${ps(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:m` <slot name="submenu" hidden></slot> `}};var Bs=C`
  ${L}

  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var T=class extends y{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new k(this),this.hasSlotController=new E(this,"submenu"),this.submenuController=new ms(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return bi(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return m`
      <div
        id="anchor"
        part="base"
        class=${W({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};T.styles=Bs;T.dependencies={"sl-icon":G,"sl-popup":w};a([N("slot:not([name])")],T.prototype,"defaultSlot",2);a([N(".menu-item")],T.prototype,"menuItem",2);a([n()],T.prototype,"type",2);a([n({type:Boolean,reflect:!0})],T.prototype,"checked",2);a([n()],T.prototype,"value",2);a([n({type:Boolean,reflect:!0})],T.prototype,"disabled",2);a([D("checked")],T.prototype,"handleCheckedChange",1);a([D("disabled")],T.prototype,"handleDisabledChange",1);a([D("type")],T.prototype,"handleTypeChange",1);var Pe=class extends y{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){if(!(t.target instanceof T))return;let e=t.target;e.type==="checkbox"&&(e.checked=!e.checked),this.emit("sl-select",{detail:{item:e}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),o=this.getCurrentItem(),i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return m`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Pe.styles=gs;a([N("slot")],Pe.prototype,"defaultSlot",2);Pe.define("sl-menu");T.define("sl-menu-item");var Fs=C`
  ${L}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;var Lt=class extends y{constructor(){super(...arguments),this.localize=new k(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return m`
      <span
        part="base"
        class=${W({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?m`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Lt.styles=Fs;Lt.dependencies={"sl-icon-button":Z};a([n({reflect:!0})],Lt.prototype,"variant",2);a([n({reflect:!0})],Lt.prototype,"size",2);a([n({type:Boolean,reflect:!0})],Lt.prototype,"pill",2);a([n({type:Boolean})],Lt.prototype,"removable",2);Lt.define("sl-tag");var xm=Ws(Cs());ke("remixicon",{resolver(t){let e=t.match(/^(.*?)\/(.*?)(-(fill)?)?$/m);return e[1]=e[1].charAt(0).toUpperCase()+e[1].slice(1),`https://cdn.jsdelivr.net/npm/remixicon@3.3.0/icons/${e[1]}/${e[2]}${e[3]=="-"?"":e[3]||"-line"}.svg`},mutator(t){return t.setAttribute("fill","currentColor")}});ke("heroicons",{resolver:t=>`https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/solid/${t}.svg`});ne("/images");console.info("Bridgetown is loaded!");})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/_bridgetown/static/index.5AF47CKO.js.map
