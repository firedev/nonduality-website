(()=>{var ms=Object.create;var No=Object.defineProperty;var Bs=Object.getOwnPropertyDescriptor;var Fs=Object.getOwnPropertyNames;var Us=Object.getPrototypeOf,Cs=Object.prototype.hasOwnProperty;var ys=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Is=(t,e,o,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Fs(e))!Cs.call(t,s)&&s!==o&&No(t,s,{get:()=>e[s],enumerable:!(i=Bs(e,s))||i.enumerable});return t};var Ls=(t,e,o)=>(o=t!=null?ms(Us(t)):{},Is(e||!t||!t.__esModule?No(o,"default",{value:t,enumerable:!0}):o,t));var Qs=ys(()=>{function Or(t){let e=document.querySelector("body > nav sl-bar");e.setAttribute("expanded",!0);for(let o of e.querySelectorAll("sl-bar-item[expandable]"))o.classList.add("fade-in-always");return t.querySelector("sl-icon").name="system/close"}function hs(t){let e=document.querySelector("body > nav sl-bar");e.setAttribute("expanded",!1);for(let o of e.querySelectorAll("sl-bar-item[expandable]"))o.classList.remove("fade-in-always");return t.querySelector("sl-icon").name="system/menu"}function Ce(t,e){let o=t.querySelector(`a[href="${e}"]`);return new URL(o.href).pathname===location.pathname?o.setAttribute("aria-current","page"):o.setAttribute("aria-current","true")}document.addEventListener("turbo:load",()=>{let t=document.querySelector("bridgetown-search-results");t.showResults=!1,t.results=[];let e=document.querySelector("body > nav");hs(e.querySelector("sl-button[menutoggle]"));for(let o of e.querySelectorAll("a"))o.removeAttribute("aria-current");if(location.pathname==="/")return Ce(e,"/");if(location.pathname.startsWith("/docs"))return Ce(e,"/docs");if(location.pathname.startsWith("/plugins"))return Ce(e,"/plugins");if(location.pathname.startsWith("/community"))return Ce(e,"/community");if(location.pathname.startsWith("/blog")||document.body.classList.contains("post"))return Ce(e,"/blog")});window.menuHide=hs;window.menuShow=Or});var ye=globalThis,Ie=ye.ShadowRoot&&(ye.ShadyCSS===void 0||ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,to=Symbol(),Wo=new WeakMap,te=class{constructor(e,o,i){if(this._$cssResult$=!0,i!==to)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o,o=this.t;if(Ie&&e===void 0){let i=o!==void 0&&o.length===1;i&&(e=Wo.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Wo.set(o,e))}return e}toString(){return this.cssText}},Ao=t=>new te(typeof t=="string"?t:t+"",void 0,to),U=(t,...e)=>{let o=t.length===1?t[0]:e.reduce((i,s,r)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new te(o,t,to)},eo=(t,e)=>{if(Ie)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of e){let i=document.createElement("style"),s=ye.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=o.cssText,t.appendChild(i)}},Le=Ie?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(let i of e.cssRules)o+=i.cssText;return Ao(o)})(t):t;var{is:fs,defineProperty:vs,getOwnPropertyDescriptor:ws,getOwnPropertyNames:xs,getOwnPropertySymbols:Ns,getPrototypeOf:Ws}=Object,yt=globalThis,Oo=yt.trustedTypes,As=Oo?Oo.emptyScript:"",Os=yt.reactiveElementPolyfillSupport,ee=(t,e)=>t,It={toAttribute(t,e){switch(e){case Boolean:t=t?As:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},fe=(t,e)=>!fs(t,e),Do={attribute:!0,type:String,converter:It,reflect:!1,hasChanged:fe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),yt.litPropertyMetadata??(yt.litPropertyMetadata=new WeakMap);var ht=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=Do){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(e,o),!o.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,o);s!==void 0&&vs(this.prototype,e,s)}}static getPropertyDescriptor(e,o,i){let{get:s,set:r}=ws(this.prototype,e)??{get(){return this[o]},set(l){this[o]=l}};return{get(){return s?.call(this)},set(l){let d=s?.call(this);r.call(this,l),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Do}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;let e=Ws(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){let o=this.properties,i=[...xs(o),...Ns(o)];for(let s of i)this.createProperty(s,o[s])}let e=this[Symbol.metadata];if(e!==null){let o=litPropertyMetadata.get(e);if(o!==void 0)for(let[i,s]of o)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[o,i]of this.elementProperties){let s=this._$Eu(o,i);s!==void 0&&this._$Eh.set(s,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let o=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)o.unshift(Le(s))}else e!==void 0&&o.push(Le(e));return o}static _$Eu(e,o){let i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){let e=new Map,o=this.constructor.elementProperties;for(let i of o.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return eo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$EO(e,o){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:It).toAttribute(o,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,o){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let r=i.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:It;this._$Em=s,this[s]=l.fromAttribute(o,r.type),this._$Em=null}}requestUpdate(e,o,i,s=!1,r){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??fe)(s?r:this[e],o))return;this.C(e,o,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,o,i){this._$AL.has(e)||this._$AL.set(e,o),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(o){Promise.reject(o)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],r)}let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$E_?.forEach(i=>i.hostUpdate?.()),this.update(o)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$E_?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EO(o,this[o]))),this._$ET()}updated(e){}firstUpdated(e){}};ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ht[ee("elementProperties")]=new Map,ht[ee("finalized")]=new Map,Os?.({ReactiveElement:ht}),(yt.reactiveElementVersions??(yt.reactiveElementVersions=[])).push("2.0.2");var ie=globalThis,ve=ie.trustedTypes,Mo=ve?ve.createPolicy("lit-html",{createHTML:t=>t}):void 0,io="$lit$",Qt=`lit$${(Math.random()+"").slice(9)}$`,so="?"+Qt,Ds=`<${so}>`,Nt=document,se=()=>Nt.createComment(""),re=t=>t===null||typeof t!="object"&&typeof t!="function",So=Array.isArray,jo=t=>So(t)||typeof t?.[Symbol.iterator]=="function",oo=`[ 	
\f\r]`,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Go=/-->/g,zo=/>/g,wt=RegExp(`>|${oo}(?:([^\\s"'>=/]+)(${oo}*=${oo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xo=/'/g,ko=/"/g,To=/^(?:script|style|textarea|title)$/i,Ro=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),m=Ro(1),Eo=Ro(2),T=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Zo=new WeakMap,xt=Nt.createTreeWalker(Nt,129);function Yo(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mo!==void 0?Mo.createHTML(e):e}var Vo=(t,e)=>{let o=t.length-1,i=[],s,r=e===2?"<svg>":"",l=oe;for(let d=0;d<o;d++){let n=t[d],b,h,u=-1,p=0;for(;p<n.length&&(l.lastIndex=p,h=l.exec(n),h!==null);)p=l.lastIndex,l===oe?h[1]==="!--"?l=Go:h[1]!==void 0?l=zo:h[2]!==void 0?(To.test(h[2])&&(s=RegExp("</"+h[2],"g")),l=wt):h[3]!==void 0&&(l=wt):l===wt?h[0]===">"?(l=s??oe,u=-1):h[1]===void 0?u=-2:(u=l.lastIndex-h[2].length,b=h[1],l=h[3]===void 0?wt:h[3]==='"'?ko:Xo):l===ko||l===Xo?l=wt:l===Go||l===zo?l=oe:(l=wt,s=void 0);let g=l===wt&&t[d+1].startsWith("/>")?" ":"";r+=l===oe?n+Ds:u>=0?(i.push(b),n.slice(0,u)+io+n.slice(u)+Qt+g):n+Qt+(u===-2?d:g)}return[Yo(t,r+(t[o]||"<?>")+(e===2?"</svg>":"")),i]},le=class t{constructor({strings:e,_$litType$:o},i){let s;this.parts=[];let r=0,l=0,d=e.length-1,n=this.parts,[b,h]=Vo(e,o);if(this.el=t.createElement(b,i),xt.currentNode=this.el.content,o===2){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=xt.nextNode())!==null&&n.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith(io)){let p=h[l++],g=s.getAttribute(u).split(Qt),Q=/([.?@])?(.*)/.exec(p);n.push({type:1,index:r,name:Q[2],strings:g,ctor:Q[1]==="."?xe:Q[1]==="?"?Ne:Q[1]==="@"?We:At}),s.removeAttribute(u)}else u.startsWith(Qt)&&(n.push({type:6,index:r}),s.removeAttribute(u));if(To.test(s.tagName)){let u=s.textContent.split(Qt),p=u.length-1;if(p>0){s.textContent=ve?ve.emptyScript:"";for(let g=0;g<p;g++)s.append(u[g],se()),xt.nextNode(),n.push({type:2,index:++r});s.append(u[p],se())}}}else if(s.nodeType===8)if(s.data===so)n.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(Qt,u+1))!==-1;)n.push({type:7,index:r}),u+=Qt.length-1}r++}}static createElement(e,o){let i=Nt.createElement("template");return i.innerHTML=e,i}};function Wt(t,e,o=t,i){if(e===T)return e;let s=i!==void 0?o._$Co?.[i]:o._$Cl,r=re(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(t),s._$AT(t,o,i)),i!==void 0?(o._$Co??(o._$Co=[]))[i]=s:o._$Cl=s),s!==void 0&&(e=Wt(t,s._$AS(t,e.values),s,i)),e}var we=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:o},parts:i}=this._$AD,s=(e?.creationScope??Nt).importNode(o,!0);xt.currentNode=s;let r=xt.nextNode(),l=0,d=0,n=i[0];for(;n!==void 0;){if(l===n.index){let b;n.type===2?b=new jt(r,r.nextSibling,this,e):n.type===1?b=new n.ctor(r,n.name,n.strings,this,e):n.type===6&&(b=new Ae(r,this,e)),this._$AV.push(b),n=i[++d]}l!==n?.index&&(r=xt.nextNode(),l++)}return xt.currentNode=Nt,s}p(e){let o=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}},jt=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,i,s){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Wt(this,e,o),re(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==T&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):jo(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==O&&re(this._$AH)?this._$AA.nextSibling.data=e:this.$(Nt.createTextNode(e)),this._$AH=e}g(e){let{values:o,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=le.createElement(Yo(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(o);else{let r=new we(s,this),l=r.u(this.options);r.p(o),this.$(l),this._$AH=r}}_$AC(e){let o=Zo.get(e.strings);return o===void 0&&Zo.set(e.strings,o=new le(e)),o}T(e){So(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,i,s=0;for(let r of e)s===o.length?o.push(i=new t(this.k(se()),this.k(se()),this,this.options)):i=o[s],i._$AI(r),s++;s<o.length&&(this._$AR(i&&i._$AB.nextSibling,s),o.length=s)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},At=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,i,s,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=o,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}_$AI(e,o=this,i,s){let r=this.strings,l=!1;if(r===void 0)e=Wt(this,e,o,0),l=!re(e)||e!==this._$AH&&e!==T,l&&(this._$AH=e);else{let d=e,n,b;for(e=r[0],n=0;n<r.length-1;n++)b=Wt(this,d[i+n],o,n),b===T&&(b=this._$AH[n]),l||(l=!re(b)||b!==this._$AH[n]),b===O?e=O:e!==O&&(e+=(b??"")+r[n+1]),this._$AH[n]=b}l&&!s&&this.O(e)}O(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xe=class extends At{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===O?void 0:e}},Ne=class extends At{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}},We=class extends At{constructor(e,o,i,s,r){super(e,o,i,s,r),this.type=5}_$AI(e,o=this){if((e=Wt(this,e,o,0)??O)===T)return;let i=this._$AH,s=e===O&&i!==O||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==O&&(i===O||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ae=class{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Wt(this,e)}},Jo={j:io,P:Qt,A:so,C:1,M:Vo,L:we,R:jo,V:Wt,D:jt,I:At,H:Ne,N:We,U:xe,B:Ae},Ms=ie.litHtmlPolyfillSupport;Ms?.(le,jt),(ie.litHtmlVersions??(ie.litHtmlVersions=[])).push("3.1.0");var Ho=(t,e,o)=>{let i=o?.renderBefore??e,s=i._$litPart$;if(s===void 0){let r=o?.renderBefore??null;i._$litPart$=s=new jt(e.insertBefore(se(),r),r,void 0,o??{})}return s._$AI(t),s};var Lt=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;let e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ho(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};Lt._$litElement$=!0,Lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Lt});var Gs=globalThis.litElementPolyfillSupport;Gs?.({LitElement:Lt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");var L=U`
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
`;var _o=U`
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
`;var ro=new Set,zs=new MutationObserver(qo),Tt=new Map,Ko=document.documentElement.dir||"ltr",$o=document.documentElement.lang||navigator.language,Ot;zs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function lo(...t){t.map(e=>{let o=e.$code.toLowerCase();Tt.has(o)?Tt.set(o,Object.assign(Object.assign({},Tt.get(o)),e)):Tt.set(o,e),Ot||(Ot=e)}),qo()}function qo(){Ko=document.documentElement.dir||"ltr",$o=document.documentElement.lang||navigator.language,[...ro.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Oe=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ro.add(this.host)}hostDisconnected(){ro.delete(this.host)}dir(){return`${this.host.dir||Ko}`.toLowerCase()}lang(){return`${this.host.lang||$o}`.toLowerCase()}getTranslationData(e){var o,i;let s=new Intl.Locale(e.replace(/_/g,"-")),r=s?.language.toLowerCase(),l=(i=(o=s?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",d=Tt.get(`${r}-${l}`),n=Tt.get(r);return{locale:s,language:r,region:l,primary:d,secondary:n}}exists(e,o){var i;let{primary:s,secondary:r}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[e]||r&&r[e]||o.includeFallback&&Ot&&Ot[e])}term(e,...o){let{primary:i,secondary:s}=this.getTranslationData(this.lang()),r;if(i&&i[e])r=i[e];else if(s&&s[e])r=s[e];else if(Ot&&Ot[e])r=Ot[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...o):r}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var k=class extends Oe{};var ei=Object.defineProperty,Xs=Object.defineProperties,ks=Object.getOwnPropertyDescriptor,Zs=Object.getOwnPropertyDescriptors,Po=Object.getOwnPropertySymbols,Ss=Object.prototype.hasOwnProperty,js=Object.prototype.propertyIsEnumerable,ao=(t,e)=>{if(e=Symbol[t])return e;throw Error("Symbol."+t+" is not defined")},ti=(t,e,o)=>e in t?ei(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,J=(t,e)=>{for(var o in e||(e={}))Ss.call(e,o)&&ti(t,o,e[o]);if(Po)for(var o of Po(e))js.call(e,o)&&ti(t,o,e[o]);return t},ft=(t,e)=>Xs(t,Zs(e)),a=(t,e,o,i)=>{for(var s=i>1?void 0:i?ks(e,o):e,r=t.length-1,l;r>=0;r--)(l=t[r])&&(s=(i?l(e,o,s):l(s))||s);return i&&s&&ei(e,o,s),s},Ts=function(t,e){this[0]=t,this[1]=e},oi=t=>{var e=t[ao("asyncIterator")],o=!1,i,s={};return e==null?(e=t[ao("iterator")](),i=r=>s[r]=l=>e[r](l)):(e=e.call(t),i=r=>s[r]=l=>{if(o){if(o=!1,r==="throw")throw l;return l}return o=!0,{done:!1,value:new Ts(new Promise(d=>{var n=e[r](l);if(!(n instanceof Object))throw TypeError("Object expected");d(n)}),1)}}),s[ao("iterator")]=()=>s,i("next"),"throw"in e?i("throw"):s.throw=r=>{throw r},"return"in e&&i("return"),s};var Rs={attribute:!0,type:String,converter:It,reflect:!1,hasChanged:fe},Es=(t=Rs,e,o)=>{let{kind:i,metadata:s}=o,r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,t),i==="accessor"){let{name:l}=o;return{set(d){let n=e.get.call(this);e.set.call(this,d),this.requestUpdate(l,n,t)},init(d){return d!==void 0&&this.C(l,void 0,t),d}}}if(i==="setter"){let{name:l}=o;return function(d){let n=this[l];e.call(this,d),this.requestUpdate(l,n,t)}}throw Error("Unsupported decorator location: "+i)};function c(t){return(e,o)=>typeof o=="object"?Es(t,e,o):((i,s,r)=>{let l=s.hasOwnProperty(r);return s.constructor.createProperty(r,l?{...i,wrapped:!0}:i),l?Object.getOwnPropertyDescriptor(s,r):void 0})(t,e,o)}function et(t){return c({...t,state:!0,attribute:!1})}var Dt=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);function N(t,e){return(o,i,s)=>{let r=l=>l.renderRoot?.querySelector(t)??null;if(e){let{get:l,set:d}=typeof i=="object"?o:s??(()=>{let n=Symbol();return{get(){return this[n]},set(b){this[n]=b}}})();return Dt(o,i,{get(){let n=l.call(this);return n===void 0&&(n=r(this),(n!==null||this.hasUpdated)&&d.call(this,n)),n}})}return Dt(o,i,{get(){return r(this)}})}}var C=class extends Lt{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let o=new CustomEvent(t,J({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){let i=customElements.get(t);if(!i){customElements.define(t,class extends e{},o);return}let s=" (unknown version)",r=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),!(s&&r&&s===r)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`)}};C.version="2.11.2";C.dependencies={};a([c()],C.prototype,"dir",2);a([c()],C.prototype,"lang",2);var ae=class extends C{constructor(){super(...arguments),this.localize=new k(this)}render(){return m`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ae.styles=_o;var ne=new WeakMap,ce=new WeakMap,no=new WeakSet,De=new WeakMap,Me=class{constructor(t,e){this.handleFormData=o=>{let i=this.options.disabled(this.host),s=this.options.name(this.host),r=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";!i&&!l&&typeof s=="string"&&s.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(d=>{o.formData.append(s,d.toString())}):o.formData.append(s,r.toString()))},this.handleFormSubmit=o=>{var i;let s=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=ne.get(this.form))==null||i.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),De.set(this.host,[])},this.handleInteraction=o=>{let i=De.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let o=this.form.querySelectorAll("*");for(let i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=J({form:o=>{if(o.hasAttribute("form")&&o.getAttribute("form")!==""){let i=o.getRootNode(),s=o.getAttribute("form");if(s)return i.getElementById(s)}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),De.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),De.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,ne.has(this.form)?ne.get(this.form).add(this.host):ne.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ce.has(this.form)||(ce.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=ne.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ce.has(this.form)&&(this.form.reportValidity=ce.get(this.form),ce.delete(this.form))),this.form=void 0}setUserInteracted(t,e){e?no.add(t):no.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,o=!!no.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},Ge=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),$l=Object.freeze(ft(J({},Ge),{valid:!1,valueMissing:!0})),ql=Object.freeze(ft(J({},Ge),{valid:!1,customError:!0}));var ii=U`
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
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
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
`;var R=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{let i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function si(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var ri=U`
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
`;var co="";function de(t){co=t}function bo(t=""){if(!co){let e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)de(o.getAttribute("data-shoelace"));else{let i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src)),s="";i&&(s=i.getAttribute("src")),de(s.split("/").slice(0,-1).join("/"))}}return co.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Ys={name:"default",resolver:t=>bo(`assets/icons/${t}.svg`)},li=Ys;var ai={caret:`
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
  `},Vs={name:"system",resolver:t=>t in ai?`data:image/svg+xml,${encodeURIComponent(ai[t])}`:""},ni=Vs;var ze=[li,ni],Xe=[];function ci(t){Xe.push(t)}function di(t){Xe=Xe.filter(e=>e!==t)}function uo(t){return ze.find(e=>e.name===t)}function ke(t,e){bi(t),ze.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Xe.forEach(o=>{o.library===t&&o.setIcon()})}function bi(t){ze=ze.filter(e=>e.name!==t)}function D(t,e){let o=J({waitUntilFirstUpdate:!1},e);return(i,s)=>{let{update:r}=i,l=Array.isArray(t)?t:[t];i.update=function(d){l.forEach(n=>{let b=n;if(d.has(b)){let h=d.get(b),u=this[b];h!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](h,u)}}),r.call(this,d)}}}var{D:Fa}=Jo;var ui=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var Ze=t=>t.strings===void 0;var Js={},gi=(t,e=Js)=>t._$AH=e;var be=Symbol(),Se=Symbol(),go,ho=new Map,G=class extends C{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e?.spriteSheet)return m`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?be:Se}catch{return Se}try{let s=document.createElement("div");s.innerHTML=await i.text();let r=s.firstElementChild;if(((o=r?.tagName)==null?void 0:o.toLowerCase())!=="svg")return be;go||(go=new DOMParser);let d=go.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return d?(d.part.add("svg"),document.adoptNode(d)):be}catch{return be}}connectedCallback(){super.connectedCallback(),ci(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),di(this)}getIconSource(){let t=uo(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:o}=this.getIconSource(),i=o?uo(this.library):void 0;if(!e){this.svg=null;return}let s=ho.get(e);if(s||(s=this.resolveIcon(e,i),ho.set(e,s)),!this.initialRender)return;let r=await s;if(r===Se&&ho.delete(e),e===this.getIconSource().url){if(ui(r)){this.svg=r;return}switch(r){case Se:case be:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=i?.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};G.styles=ri;a([et()],G.prototype,"svg",2);a([c({reflect:!0})],G.prototype,"name",2);a([c()],G.prototype,"src",2);a([c()],G.prototype,"label",2);a([c({reflect:!0})],G.prototype,"library",2);a([D("label")],G.prototype,"handleLabelChange",1);a([D(["name","src","library"])],G.prototype,"setIcon",1);var $={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mt=t=>(...e)=>({_$litDirective$:t,values:e}),pt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};var W=Mt(class extends pt{constructor(t){if(super(t),t.type!==$.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in e)e[i]&&!this.st?.has(i)&&this.it.add(i);return this.render(e)}let o=t.element.classList;for(let i of this.it)i in e||(o.remove(i),this.it.delete(i));for(let i in e){let s=!!e[i];s===this.it.has(i)||this.st?.has(i)||(s?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return T}});var Qi=Symbol.for(""),Hs=t=>{if(t?.r===Qi)return t?._$litStatic$};var Rt=(t,...e)=>({_$litStatic$:e.reduce((o,i,s)=>o+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:Qi}),hi=new Map,pi=t=>(e,...o)=>{let i=o.length,s,r,l=[],d=[],n,b=0,h=!1;for(;b<i;){for(n=e[b];b<i&&(r=o[b],(s=Hs(r))!==void 0);)n+=s+e[++b],h=!0;b!==i&&d.push(r),l.push(n),b++}if(b===i&&l.push(e[i]),h){let u=l.join("$$lit$$");(e=hi.get(u))===void 0&&(l.raw=l,hi.set(u,e=l)),o=d}return t(e,...o)},Et=pi(m),ja=pi(Eo);var B=t=>t??O;var f=class extends C{constructor(){super(...arguments),this.formControlController=new Me(this,{form:t=>{if(t.hasAttribute("form")){let e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new R(this,"[default]","prefix","suffix"),this.localize=new k(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ge}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?Rt`a`:Rt`button`;return Et`
      <${e}
        part="base"
        class=${W({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${B(t?void 0:this.disabled)}
        type=${B(t?void 0:this.type)}
        title=${this.title}
        name=${B(t?void 0:this.name)}
        value=${B(t?void 0:this.value)}
        href=${B(t?this.href:void 0)}
        target=${B(t?this.target:void 0)}
        download=${B(t?this.download:void 0)}
        rel=${B(t?this.rel:void 0)}
        role=${B(t?void 0:"button")}
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
    `}};f.styles=ii;f.dependencies={"sl-icon":G,"sl-spinner":ae};a([N(".button")],f.prototype,"button",2);a([et()],f.prototype,"hasFocus",2);a([et()],f.prototype,"invalid",2);a([c()],f.prototype,"title",2);a([c({reflect:!0})],f.prototype,"variant",2);a([c({reflect:!0})],f.prototype,"size",2);a([c({type:Boolean,reflect:!0})],f.prototype,"caret",2);a([c({type:Boolean,reflect:!0})],f.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],f.prototype,"loading",2);a([c({type:Boolean,reflect:!0})],f.prototype,"outline",2);a([c({type:Boolean,reflect:!0})],f.prototype,"pill",2);a([c({type:Boolean,reflect:!0})],f.prototype,"circle",2);a([c()],f.prototype,"type",2);a([c()],f.prototype,"name",2);a([c()],f.prototype,"value",2);a([c()],f.prototype,"href",2);a([c()],f.prototype,"target",2);a([c()],f.prototype,"rel",2);a([c()],f.prototype,"download",2);a([c()],f.prototype,"form",2);a([c({attribute:"formaction"})],f.prototype,"formAction",2);a([c({attribute:"formenctype"})],f.prototype,"formEnctype",2);a([c({attribute:"formmethod"})],f.prototype,"formMethod",2);a([c({attribute:"formnovalidate",type:Boolean})],f.prototype,"formNoValidate",2);a([c({attribute:"formtarget"})],f.prototype,"formTarget",2);a([D("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1);f.define("sl-button");var _s={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};lo(_s);G.define("sl-icon");ae.define("sl-spinner");var mi=["\u042F \u0432 \u0442\u043E\u043C \u0433\u043E\u0434\u0443 \u043D\u0430\u0447\u0438\u0442\u0430\u043B\u0441\u044F \u043D\u0430\u0432\u0435\u0440\u043D\u043E \u0432\u0441\u0435 \u0447\u0442\u043E \u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u0447\u0438\u0442\u0430\u0435\u0448\u044C. \u042F \u0442\u0430\u043A \u0438 \u043D\u0435 \u0440\u0435\u0448\u0438\u043B\u0441\u044F \u043E\u0434\u0438\u043D.","\u0411\u043B\u0438\u043D, \u041A\u043E\u043B\u044C, \u0442\u044B \u0443\u0436\u0435 \u043F\u0440\u043E\u0437\u0440\u0435\u043B:) \u043D\u043E \u0434\u043E\u0441\u0442\u0443\u0447\u0430\u0442\u044C\u0441\u044F \u0441\u043B\u043E\u0436\u043D\u043E, \u043D\u0430\u0434\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u043F\u0443\u0442\u0435\u043C \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u043F\u044B\u0442. \u0418 \u043E\u0441\u043E\u0437\u043D\u0430\u0442\u044C. \u0410 \u043F\u0443\u0442\u044C \u0432\u0441\u0435 \u0442\u0430\u043A\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u0435\u043D. \u041C\u0435\u043D\u044F \u043F\u043E\u0434\u0432\u044B\u0442\u0430\u0449\u0438\u043B \u0442\u043E\u0447\u043D\u043E","\u0423\u0442\u0440\u043E \u0434\u043E\u0431\u0440\u043E\u0435! \u041A\u043E\u043B\u044C, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E \u0443\u0442\u0440\u043E\u043C \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0438 \u0431\u0435\u0433\u0443 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0447\u0442\u043E \u0442\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043B. \u0421\u043F\u0430\u0441\u0438\u0431\u043E","\u0420\u0435\u0431\u0435\u043D\u043E\u043A \u0441\u0442\u0430\u043B \u0431\u043E\u043B\u0435\u0435 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439. \u041E\u043D \u0432\u0440\u043E\u0434\u0435 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u043E\u0432\u043D\u0435\u0435. \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u{1F44D}","\u0427\u0442\u043E \u0442\u043E \u044F \u0447\u0430\u0441\u0442\u043E \u0441\u0442\u0430\u043B \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F","\u041C\u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u0441\u0442\u0430\u043B\u043E \u0434\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043E \u0447\u0435\u043C \u043A\u043D\u0438\u0436\u043A\u0438","\u042F \u043D\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B \u0431\u044B \u0441\u0430\u043C \u0435\u0441\u043B\u0438 \u0431\u044B \u043D\u0435 \u0442\u044B, \u043D\u043E \u044F \u043D\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043B\u0441\u044F \u0438 \u043D\u0435 \u0447\u0438\u0442\u0430\u043B \u043D\u0438\u0447\u0435\u0433\u043E \u0434\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430.","\u0415\u0441\u043B\u0438 \u0431\u044B \u043C\u043D\u0435 \u0442\u0432\u043E\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043F\u043E\u043F\u0430\u043B\u0430\u0441\u044C \u043B\u0435\u0442 7-8 \u043D\u0430\u0437\u0430\u0434, \u044F \u0431\u044B \u043D\u0430\u0432\u0435\u0440\u043D\u043E \u043F\u0440\u044B\u0433\u043D\u0443\u043B \u0432 \u0441\u0430\u043C\u043E\u043B\u0435\u0442 \u0438 \u043F\u0440\u0438\u043B\u0435\u0442\u0435\u043B.","\u042F \u043A\u0430\u043A \u044D\u0442\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u0434\u0430\u0432\u043D\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u044E \u0441\u0435\u0431\u044F \u0432 \u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u0438.","\u0412\u0441\u0435 \u043A\u0430\u043A \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0447\u0442\u043E \u043B\u0438?","\u0427\u0442\u043E-\u0442\u043E \u0443 \u043C\u0435\u043D\u044F \u043E\u0442 \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430 \u0443\u0436\u0435, \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0431\u043E\u043E\u043E\u043B\u044C\u0448\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442","Last year, I probably read everything you're reading now. I never dared to do it alone.","Man, you've already seen the light :) But it's hard to get through, one has to go through the journey and gain experience himself. And understand. The path is still individual. It certainly pulled me out.","Good morning! I open the notebook in the morning and rush to see what you've written. Thank you.","The child has become calmer. He's the same, but just more even-tempered. Thanks \u{1F44D}.","I've been finding myself returning to childhood quite often.","It was only afterwards that I started to grasp what the books were really about.","I wouldn't have tried it myself if it weren't for you, but I wasn't interested and hadn't read anything until that moment.","If I had come across your program like 7-8 years ago, I probably would have jumped on a plane and flown over.","Since this story started, I hardly remember feeling depressed.","Is everything as it should be, perhaps?","Seems like I'm already feeling a huuuge effect from just one conversation.","\u041F\u0440\u0438\u0432\u0435\u0442, \u041A\u043E\u043B\u044F! \u041E\u0448\u0435\u043B\u043E\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u043F\u044B\u0442","\u042D\u0442\u043E \u043B\u0443\u0447\u0448\u0435\u0435 \u0447\u0442\u043E \u0431\u044B\u043B\u043E \u0432 \u043C\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438) \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u2665\uFE0F","\u041D\u0430\u0434\u0435\u044E\u0441\u044C \u043D\u0430 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435, \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C.","\u041E\u0447\u0435\u043D\u044C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C - \u0434\u0430\u0436\u0435 \u043D\u0435 \u0442\u0435 \u0441\u043B\u043E\u0432\u0430. \u041D\u0435 \u0441 \u0447\u0435\u043C \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C - \u0431\u044B\u043B\u043E \u0431\u044B \u0442\u043E\u0447\u043D\u0435\u0435.","\u041E\u0447\u0435\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u044C \u043C\u044B\u0441\u043B\u0438, \u043A\u0430\u043A \u043C\u044B\u0441\u043B\u044C \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 \u043F\u043E\u043B\u0435 \u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0441\u0435\u0431\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u0432\u0441\u0442\u0440\u0435\u0447\u0430 \u0441 \u0411\u043E\u0433\u043E\u043C.","\u041B\u044E\u0431\u043E\u0432\u044C - \u043D\u0430 \u0432\u0441\u0451 \u043E\u0442\u0432\u0435\u0442 \u0432 \u0438\u0442\u043E\u0433\u0435. \u0422\u0430 \u0441\u0430\u043C\u0430\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0442\u0432\u043E\u0440\u0438\u0442 \u043C\u0438\u0440\u044B \u0432\u043D\u0443\u0442\u0440\u0438 \u0438 \u0441\u043D\u0430\u0440\u0443\u0436\u0438.","\u041E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u044D\u0442\u043E\u0442 \u043D\u0435\u0437\u0430\u0431\u044B\u0432\u0430\u0435\u043C\u044B\u0439 \u0438 \u0437\u043D\u0430\u0447\u0438\u043C\u044B\u0439 \u043E\u043F\u044B\u0442! \u042D\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u0446\u0435\u043D\u043D\u043E!","\u041F\u043E\u043B\u044C\u0437\u0430 \u0434\u043B\u044F \u0436\u0438\u0437\u043D\u0438: \u043F\u043E\u044F\u0432\u0438\u043B\u043E\u0441\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043C\u0438\u0440\u0430. \u0418\u043D\u043E\u0433\u0434\u0430 \u043E\u043D\u043E \u0437\u0430\u0431\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043D\u043E \u043E\u043D\u043E \u0435\u0441\u0442\u044C \u0432\u043E \u043C\u043D\u0435.","\u0412\u0441\u0451 \u044D\u0442\u043E \u0432\u043C\u0435\u0441\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u043B\u043E \u043C\u0435\u043D\u044F \u0432 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u043D\u043E\u0432\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0438\u043C\u0435\u0435\u0442 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0435\u0449\u0451 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0435\u0431\u044F, \u043F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0441\u0435\u0431\u044F.","\u041A\u043E\u043B\u044F, \u043F\u0440\u0438\u0432\u0435\u0442, \u0443 \u043C\u0435\u043D\u044F \u0442\u0443\u0442 \u0432\u0441\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u0432\u043E\u0438 \u043C\u0435\u0441\u0442\u0430 \u0432 \u0433\u043E\u043B\u043E\u0432\u0435 \u0438 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0435\u0442\u0441\u044F, \u043A\u0430\u043A \u043D\u0430\u0434\u043E! \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0438\u0434\u0435\u0442! \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0432\u0430\u043C \u043E\u0431\u043E\u0438\u043C, \u0432\u044B \u0434\u0430\u0436\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435, \u0447\u0442\u043E \u0432\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u{1F600}","\u0422\u0435\u043F\u0435\u0440\u044C \u0431\u0443\u0434\u0443 \u0432\u044B\u0431\u0438\u0432\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u043E\u0432\u043A\u0443 \u0441\u044E\u0434\u0430 \u{1F600}","\u0422\u0430\u043A\u0430\u044F \u043F\u0440\u0438\u044F\u0442\u043D\u0430\u044F \u0433\u0440\u0443\u0441\u0442\u044C, \u044F \u0440\u0430\u0434\u0430, \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A \u043A\u043B\u0430\u0441\u0441\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C !","\u0420\u0430\u043D\u044C\u0448\u0435 \u0441\u043B\u044B\u0448\u0430\u043B\u0430 \u043C\u043D\u0435 \u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C \u0447\u0442\u043E \u044D\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0434\u0443\u0448\u043D\u044B\u0439 \u0431\u0440\u0435\u0434","\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u043B\u043E \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u043D\u0435\u043B\u044C\u0437\u044F \u0443\u0436\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u2026 \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A, \u043A\u0430\u043A \u0435\u0441\u0442\u044C, \u0438 \u0432\u044B\u0445\u043E\u0434\u0430 \u043D\u0435\u0442","\u042F \u0432\u0438\u0436\u0443 \u0447\u0442\u043E \u0435\u0449\u0435 \u0435\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u044C \u0432\u043F\u0435\u0440\u0435\u0434\u0438 \u0438 \u043A\u0430\u043A\u043E\u0439 \u043E\u043D\u0430 \u0431\u0443\u0434\u0435\u0442, \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0442 \u043C\u0435\u043D\u044F","\u041C\u043D\u0435 \u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u043E\u0432\u043E\u0433\u043E \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0433\u043E \u0443\u0436\u0435 \u043E\u0441\u043E\u0431\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442","\u0421\u0435\u0439\u0447\u0430\u0441 \u0442\u0430\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0441\u0442\u0438. \u041D\u0435 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u043F\u043B\u0435\u0441\u043A\u0430\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u043E\u0431\u044B\u0447\u043D\u0430\u044F \u0436\u0438\u0437\u043D\u044C \u0432\u043D\u0435 \u041F\u0445\u0443\u043A\u0435\u0442\u0430 \u{1F600}","\u042F \u0434\u0430\u0436\u0435 \u043D\u0435 \u043F\u0441\u0438\u0445\u0443\u044E \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0438 \u043E\u0442 \u0447\u0435\u0433\u043E, \u0445\u043E\u0442\u044F \u0435\u0449\u0435 \u043D\u0435\u0434\u0435\u043B\u044E \u043D\u0430\u0437\u0430\u0434 \u043F\u0441\u0438\u0445\u043E\u0432\u0430\u043B\u0430 \u0431\u044B","\u0421\u043C\u044B\u0441\u043B \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u044F \u043D\u0435 \u043D\u0435 \u043D\u0430 \u0442\u043E \u0442\u0440\u0430\u0442\u0438\u043B\u0430 \u0441\u0432\u043E\u044E \u0441\u0438\u043B\u0443 \u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u044E","\u0423 \u043C\u0435\u043D\u044F \u0432 \u0433\u043E\u043B\u043E\u0432\u0435 \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F \u0441\u043C\u044B\u0441\u043B \u{1F600}","\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0432\u0430\u043C \u043E\u0431\u043E\u0438\u043C! \u042D\u0442\u043E \u0431\u044B\u043B\u043E \u043D\u0438 \u0441 \u0447\u0435\u043C \u043D\u0435\u0441\u0440\u0430\u0432\u043D\u0438\u043C\u043E !!!","Hi, Nick! An astounding experience.","This is the best thing that happened in my life) Thank you \u2665\uFE0F.","Hoping for a continuation, as I really liked it.","Liked it a lot - even that's an understatement. 'Nothing to compare it with' would be more accurate.","The obviousness of thought, how thought shapes the field of self-perception from outside, meeting with God.","Love - ultimately, the answer to everything. The very one that creates worlds inside and outside.","Immense gratitude for this unforgettable and significant experience! It's very valuable!","Life benefit: a sense of world safety emerged. Sometimes it's forgotten, but it's there in me.","All of this together moved me into a completely new space, which has the potential to unfold into an even newer experience and a qualitatively different way of living and expressing myself.","Hello, Kolya, everything's falling into place in my head and settling as it should! The process is ongoing! Thank you both, you can't even imagine what you've done \u{1F600}.","Now I'll be vying for another trip here \u{1F600}.","Such pleasant sadness, I'm glad that everything turned out so great!","I used to hear and think it was such a beautifully crazy nonsense.","I had a feeling that nothing could be undone anymore\u2026 that things are as they are, with no way out.","I see now that there's still life ahead and how it will be is up to me.","I thought nothing new or interesting would happen again.","Currently, I'm in a state of fulfillment. Don't want to spill it when regular life starts outside Phuket \u{1F600}.","I'm not freaking out about anything right now, even though I would have a week ago.","The point is that I wasn't spending my strength and energy on the right things.","A sense of purpose has emerged in my mind \u{1F600}.","Thank you both so much! It was incomparable !!!","\u0412\u0441\u0435 \u043F\u0435\u0440\u0435\u0441\u0435\u043A\u0430\u0435\u0442\u0441\u044F \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E, \u043F\u043E\u0434 \u043D\u0430\u0448\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 \u0434\u0430?","\u0412\u043E\u043E\u0431\u0449\u0435\u043C \u0443 \u043C\u0435\u043D\u044F \u0442\u0430\u043A\u043E\u0435: \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u043B\u043E\u0434\u043E, \u043D\u0435 \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u044F \u0441\u0435\u0431\u044F, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C \u0432 \u043E\u043F\u0440\u0430\u0432\u0434\u0430\u043D\u0438\u0438 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F.","\u0412\u0435\u0440\u043D\u0443\u043B\u043E\u0441\u044C \u044F - \u044D\u0442\u043E \u044F, \u0430 \u043D\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B, \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0434\u043E\u043C\u0443, \u043E\u0442\u0434\u0430\u043D\u0438\u044F \u0434\u043E\u043B\u0433\u0430 \u043F\u0440\u0435\u0434\u043A\u0430\u043C.","\u041F\u0440\u043E\u0441\u0442\u043E \u043E\u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C \u0447\u0442\u043E \u044F \u0442\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440 \u0438 \u0434\u0438\u0440\u0438\u0436\u0435\u0440, \u0438 \u043C\u0443\u0437\u044B\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u044F. \u041F\u0440\u043E\u0441\u0442\u043E \u0436\u0438\u0432\u0443.","\u0410 \u0441\u0435\u0439\u0447\u0430\u0441 \u043E\u0442\u043F\u0443\u0441\u0442\u0438\u043B\u043E. \u0412\u0441\u0435 \u0436\u0435 \u0445\u043E\u0440\u043E\u0448\u043E. \u042F \u0442\u0430\u043A \u0436\u0435 \u0438\u0445 \u043B\u044E\u0431\u043B\u044E \u0438 \u0437\u0430\u0431\u043E\u0447\u0443\u0441\u044C, \u043D\u043E \u0431\u0435\u0437 \u0440\u0430\u0437\u0440\u044B\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0431\u044F \u043D\u0430 \u043A\u0443\u0441\u043A\u0438","\u041F\u0440\u0430\u0432 \u0442\u044B \u0431\u044B\u043B, \u043A\u043E\u0433\u0434\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u043B \u0447\u0442\u043E \u044D\u0442\u043E \u0442\u043E \u043A \u0447\u0435\u043C\u0443 \u043B\u044E\u0434\u0438 \u0433\u043E\u0434\u0430\u043C\u0438 \u0438\u0434\u0443\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0438\u044E \u0438 \u043F\u0440.","\u0422\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u043B \u043C\u043E\u0438 true colors \u0432 \u043C\u043E\u0435\u043C \u0441\u0438\u044F\u044E\u0449\u0435\u043C \u043D\u0435\u0431\u0435","\u0411\u044B\u043B \u043C\u043E\u043C\u0435\u043D\u0442 \u043A\u043E\u0433\u0434\u0430 \u044F \u0438\u0441\u043F\u0443\u0433\u0430\u043B\u0430\u0441\u044C \u0447\u0442\u043E \u044F \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u0432 \xAB\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0436\u0438\u0437\u043D\u044C \u0441 \u043F\u044F\u0442\u0435\u0440\u043E\u0447\u043A\u043E\u0439\xBB","\u042F \u0432\u0441\u0435 \u043F\u043E\u043C\u043D\u044E!","\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0430 \u043D\u0430 \u0442\u0435\u0431\u044F \u043F\u043E\u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E!","\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u043F\u043E\u0434\u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435.","\u0418 \u0437\u043D\u0430\u0435\u0448\u044C, \u0432\u043E\u0442 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u0432\u0441\u0435 \u0445\u043E\u0440\u043E\u0448\u043E","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0443 \u043C\u0435\u043D\u044F \u0432 \u0446\u0435\u043B\u043E\u043C \u043C\u043E\u0437\u0433 \u0441\u0442\u0430\u043B \u0436\u0438\u0432\u044B\u043C \u0432 \u043F\u043B\u0430\u043D\u0435 \u0443\u043B\u0435\u0442\u043E\u0432 \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0438","Everything shapes up harmoniously, to our tuning, right?","So here's my thing: I feel young, without judging myself, not needing to justify my existence.","I returned to being me - not just an app for work, housework, or repaying ancestral debts.","Turns out, I'm the composer and conductor here, and the music is for me. Just living.","And now it's let go. Everything is fine. I still love and care for them, but without tearing myself apart.","You were right when you said that this is what people take years of psychotherapy to reach.","You revealed my true colors in my shining sky.","There was a moment when I was scared that I wouldn't return to a 'normal life with grades'.","I remember everything!","I'm subscribed to you for life!","A journey into the subconscious.","And you know, I have this feeling that everything is alright.","I think my brain in general has become alive in terms of flights of fantasy.","\u0412\u0441\u0435 \u0445\u0435\u0440\u043D\u044F, \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0431\u044B\u043B \u043F\u0440\u0430\u0432, \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0441\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0435\u0433\u043E \u0437\u0430\u0432\u0435\u0442\u0430\u043C","\u0415\u0449\u0435 \u0440\u0430\u0437, \u0432\u0441\u0435 \u0447\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \u041D\u0438\u043A\u043E\u043B\u0430\u0439 - \u0438\u0441\u0442\u0438\u043D\u0430","\u042F \u043D\u0435 \u0432\u0435\u0440\u0438\u043B \u0432 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u041D\u0438\u043A\u043E\u043B\u0430\u044F \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0433\u043E\u0434\u0430-\u0434\u0432\u0443\u0445","\u0412\u043E\u0431\u0449\u0435\u043C \u0432\u0441\u0435 \u0447\u0442\u043E \u043C\u043D\u0435 \u0432\u0435\u0449\u0430\u043B \u041D\u0438\u043A\u043E\u043B\u0430\u0439 - \u043F\u0440\u0430\u0432\u0434\u0430. \u0425\u043E\u0447\u0435\u0448\u044C \u0431\u044B\u0442\u044C \u043F\u0441\u0438-\u043C\u0443\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0441\u043E\u0431\u0430\u043A\u043E\u0439, \u0434\u0435\u043B\u0430\u0439 \u043A\u0430\u043A \u043E\u043D","\u042F \u043F\u043E \u0442\u0432\u043E\u0438\u043C \u0437\u0430\u0432\u0435\u0442\u0430\u043C \u0441\u0442\u0430\u043B \u0436\u0438\u0442\u044C","\u041B\u0443\u0447\u0448\u0435\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432 \u0436\u0438\u0437\u043D\u0438","Everything else is nonsense, Nick is right, I strictly adhere to his teachings.","Again, everything Nick writes is the truth.","I didn't believe in Nick's stories for about a year or two.","In short, everything Nick told me is true. If you want to be a psi-mutated dog, do as he does.","I started living by your teachings.","The best decision in life.","\u041D\u0435\u0442, \u043D\u0435 \u0441\u0430\u043C\u043E\u0432\u043D\u0443\u0448\u0435\u043D\u0438\u0435. \u042F \u0442\u043E\u0436\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043B \u0432\u043E\u0441\u0442\u043E\u0440\u0433 \u043E\u0442 \u0442\u043E\u0433\u043E \u043A\u0430\u043A\u043E\u0439 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043C\u0438\u0440 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043A\u043B\u0430\u0441\u0441\u043D\u044B\u043C.","\u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u0430 \u043C\u0438\u0440\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u043B\u0430\u0441\u044C \u043D\u0430 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442 \u0435\u0435.","\u0414\u043E \u044D\u0442\u043E\u0433\u043E \u044D\u0442\u043E \u0431\u044B\u043B\u0430 \u043C\u043E\u043D\u043E\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0440\u0430\u044F \u043F\u043B\u043E\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u0430 \u043C\u0438\u0440\u0430.","C\u0442\u0430\u0440\u0430\u044E\u0441\u044C \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0442\u044C \u0438 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0438\u0437 \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0438 \u0432\u043D\u043E\u0441\u0438\u0442 \u0432 \u0436\u0435\u043B\u0430\u0435\u043C\u0443\u044E \u043C\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u0443 \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043A\u0440\u0430\u0441\u043A\u0438.","\u0418 \u044F \u0431\u044B \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u043D\u044F\u043B \u0438 \u043D\u0435 \u043E\u0441\u043E\u0437\u043D\u0430\u043B \u0441\u0435\u0439\u0447\u0430\u0441 \u0435\u0441\u043B\u0438 \u0431\u044B \u0442\u044B \u043D\u0435 \u043F\u043E\u0434\u0435\u043B\u0438\u043B\u0441\u044F \u044D\u0442\u0438\u043C","\u0417\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043A\u0440\u0430\u0441\u043E\u043A, \u043C\u0435\u043B\u043A\u0438\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u043C\u043E\u0435\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u041C\u0438\u0440\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u2014 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0441\u0432\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438)","No, it's not self-delusion. I too was thrilled by how cool the world can actually be.","After that, my worldview split into many factors that shape it.","Before, it was a monolithic, grey, flat picture of the world.","I try to recognize and improve each element that gets out of control and brings inappropriate colors into the picture of the world I desire.","And I wouldn't have understood or realized this now if you hadn't shared it.","I'm working on correcting the colors, the small details of my World picture. Each of us is the artist of our life)","Bro if you have the secret powers to sort people out, do it as much as possible I say \u{1F601}","I wish I\u2019d started sooner as well \u{1F62C} This is amazing man!","Doing amazing. Quit smoking a month ago.","Am managing to keep the alcohol at bay without much trouble.","My back spasm released itself...5 kms later I was like - whoa, this was impossible just yesterday.","hahahah I will see you in January for my second trip!","I remember the rocks and trees as bodhisatvas from that trip and now I see them everywhere, gently smiling and looking out for me.","I keep remembering you standing in the door, glowing because the trip had kicked in and saying to me - enjoy your life.","I\u2019m just focused on the homework and getting healthy.","Please write it man. There are so many books and they all find the readers they need to.","Don't remember much else about BKK than the crazy Russian \u{1F60B}","Fuck yes. Do it. Seems this is your calling.","The struggles of daily life have certainly returned but I\u2019m grateful for the perspective","I want to explore more!","Came home with such a renewed appreciation for my family and my wife","Also really interesting introspection on the stimulus I let into my life daily. Lots of meta perspective about life."].sort(()=>Math.random()-.5),Bi=document.getElementById("testimonials");function Ks(t){let e=document.createElement("div");e.classList.add("testimonial-box","bg-sky-100"),e.style.left=`${Math.round(Math.random()*(window.innerWidth-316))}px`,e.textContent=t,Bi.appendChild(e),setTimeout(()=>{e.remove()},5900)}var je=0;function $s(){if(je<mi.length){let t=mi[je];Ks(t),je++}else je=0}Bi&&setTimeout(()=>{setInterval($s,6e3)},6e3);var Fi=["IN CONTROL","IN LINE","IN ORDER","IN YOUR HANDS","IN ALIGNMENT","IN BALANCE","IN BLOOM","IN CONTROL","IN FOCUS","IN GEAR","IN HARMONY","IN MOTION","IN ORDER","IN PERSPECTIVE","IN RHYTHM","IN SHAPE","IN SYNC","IN THE GROOVE","IN THE MIX","IN THE RING","IN THE SADDLE","IN TOUCH","IN TUNE"],Ui,Ci=function(){(Ui=document.getElementById("lifeline"))&&(Ui.innerText=Fi[Math.floor(Math.random()*Fi.length)],setTimeout(Ci,3e3))};setTimeout(Ci,3e3);var yi=U`
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
`;var Z=class extends C{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?Rt`a`:Rt`button`;return Et`
      <${e}
        part="base"
        class=${W({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${B(t?void 0:this.disabled)}
        type=${B(t?void 0:"button")}
        href=${B(t?this.href:void 0)}
        target=${B(t?this.target:void 0)}
        download=${B(t?this.download:void 0)}
        rel=${B(t&&this.target?"noreferrer noopener":void 0)}
        role=${B(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${B(this.name)}
          library=${B(this.library)}
          src=${B(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};Z.styles=yi;Z.dependencies={"sl-icon":G};a([N(".icon-button")],Z.prototype,"button",2);a([et()],Z.prototype,"hasFocus",2);a([c()],Z.prototype,"name",2);a([c()],Z.prototype,"library",2);a([c()],Z.prototype,"src",2);a([c()],Z.prototype,"href",2);a([c()],Z.prototype,"target",2);a([c()],Z.prototype,"download",2);a([c()],Z.prototype,"label",2);a([c({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);var Li=new Map,qs=new WeakMap;function Ps(t){return t??{keyframes:[],options:{duration:0}}}function Ii(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function q(t,e){Li.set(t,Ps(e))}function P(t,e,o){let i=qs.get(t);if(i?.[e])return Ii(i[e],o.dir);let s=Li.get(e);return s?Ii(s,o.dir):{keyframes:[],options:{duration:0}}}function mt(t,e){return new Promise(o=>{function i(s){s.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function tt(t,e,o){return new Promise(i=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");let s=t.animate(e,ft(J({},o),{duration:tr()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function tr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ot(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{let i=requestAnimationFrame(o);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}var fi=U`
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
`;var Yt=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),it=class extends C{constructor(){super(...arguments),this.hasSlotController=new R(this,"icon","suffix"),this.localize=new k(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await ot(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=P(this,"alert.show",{dir:this.localize.dir()});await tt(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await ot(this.base);let{keyframes:t,options:e}=P(this,"alert.hide",{dir:this.localize.dir()});await tt(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}async toast(){return new Promise(t=>{Yt.parentElement===null&&document.body.append(Yt),Yt.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Yt.removeChild(this),t(),Yt.querySelector("sl-alert")===null&&Yt.remove()},{once:!0})})}render(){return m`
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
    `}};it.styles=fi;it.dependencies={"sl-icon-button":Z};a([N('[part~="base"]')],it.prototype,"base",2);a([c({type:Boolean,reflect:!0})],it.prototype,"open",2);a([c({type:Boolean,reflect:!0})],it.prototype,"closable",2);a([c({reflect:!0})],it.prototype,"variant",2);a([c({type:Number})],it.prototype,"duration",2);a([D("open",{waitUntilFirstUpdate:!0})],it.prototype,"handleOpenChange",1);a([D("duration")],it.prototype,"handleDurationChange",1);q("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});q("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});it.define("sl-alert");var vi=U`
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
    -webkit-user-select: none;
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
`;var st=class extends C{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){let t=m`
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
    `}};st.styles=vi;st.dependencies={"sl-icon":G};a([et()],st.prototype,"hasError",2);a([c()],st.prototype,"image",2);a([c()],st.prototype,"label",2);a([c()],st.prototype,"initials",2);a([c()],st.prototype,"loading",2);a([c({reflect:!0})],st.prototype,"shape",2);a([D("image")],st.prototype,"handleImageChange",1);st.define("sl-avatar");var wi=U`
  ${L}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var Gt=class extends C{constructor(){super(...arguments),this.localize=new k(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,o)=>{let i=e.querySelector('[slot="separator"]');i===null?e.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),m`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Gt.styles=wi;Gt.dependencies={"sl-icon":G};a([N("slot")],Gt.prototype,"defaultSlot",2);a([N('slot[name="separator"]')],Gt.prototype,"separatorSlot",2);a([c()],Gt.prototype,"label",2);Gt.define("sl-breadcrumb");var xi=U`
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
    -webkit-user-select: none;
  }
`;var Vt=class extends C{constructor(){super(...arguments),this.hasSlotController=new R(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){let t=!!this.href;return m`
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
                target="${B(this.target?this.target:void 0)}"
                rel=${B(this.target?this.rel:void 0)}
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
    `}};Vt.styles=xi;a([c()],Vt.prototype,"href",2);a([c()],Vt.prototype,"target",2);a([c()],Vt.prototype,"rel",2);Vt.define("sl-breadcrumb-item");var Ni=U`
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
`;var Qo=class extends C{constructor(){super(...arguments),this.hasSlotController=new R(this,"footer","header","image")}render(){return m`
      <div
        part="base"
        class=${W({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Qo.styles=Ni;Qo.define("sl-card");function er(t){return!!(t.offsetParent||t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function or(t){let e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!er(t)||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function Wi(t){var e,o;let i=Te(t),s=(e=i[0])!=null?e:null,r=(o=i[i.length-1])!=null?o:null;return{start:s,end:r}}function Te(t){let e=[];function o(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!e.includes(i)&&or(i)&&e.push(i);let s=r=>{var l;return((l=r.getRootNode({composed:!0}))==null?void 0:l.host)!==t};i instanceof HTMLSlotElement&&s(i)&&i.assignedElements({flatten:!0}).forEach(r=>{o(r)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&o(i.shadowRoot)}[...i.children].forEach(s=>o(s))}return o(t),e.sort((i,s)=>{let r=Number(i.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-r})}function*Ai(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*oi(Ai(t.shadowRoot.activeElement))))}function ir(){return[...Ai()].pop()}var ue=[],Oi=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=e=>{var o,i;if(e.key!=="Tab"||this.isExternalActivated)return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward",e.preventDefault();let s=Te(this.element),r=ir(),l=s.findIndex(n=>n===r);if(l===-1){this.currentFocus=s[0],(o=this.currentFocus)==null||o.focus({preventScroll:!0});return}let d=this.tabDirection==="forward"?1:-1;l+d>=s.length?l=0:l+d<0?l=s.length-1:l+=d,this.currentFocus=s[l],(i=this.currentFocus)==null||i.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){ue.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ue=ue.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ue[ue.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=Te(this.element);if(!this.element.matches(":focus-within")){let e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof i?.focus=="function"&&(this.currentFocus=i,i.focus({preventScroll:!0}))}}}};var po=new Set;function sr(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function mo(t){if(po.add(t),!document.body.classList.contains("sl-scroll-lock")){let e=sr();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Bo(t){po.delete(t),po.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}var Di=U`
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
`;var rt=class extends C{constructor(){super(...arguments),this.hasSlotController=new R(this,"footer"),this.localize=new k(this),this.modal=new Oi(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),mo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Bo(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let o=P(this,"dialog.denyClose",{dir:this.localize.dir()});tt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),mo(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ot(this.dialog),ot(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=P(this,"dialog.show",{dir:this.localize.dir()}),o=P(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([tt(this.panel,e.keyframes,e.options),tt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([ot(this.dialog),ot(this.overlay)]);let t=P(this,"dialog.hide",{dir:this.localize.dir()}),e=P(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([tt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),tt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Bo(this);let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}render(){return m`
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
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":m`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
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
    `}};rt.styles=Di;rt.dependencies={"sl-icon-button":Z};a([N(".dialog")],rt.prototype,"dialog",2);a([N(".dialog__panel")],rt.prototype,"panel",2);a([N(".dialog__overlay")],rt.prototype,"overlay",2);a([c({type:Boolean,reflect:!0})],rt.prototype,"open",2);a([c({reflect:!0})],rt.prototype,"label",2);a([c({attribute:"no-header",type:Boolean,reflect:!0})],rt.prototype,"noHeader",2);a([D("open",{waitUntilFirstUpdate:!0})],rt.prototype,"handleOpenChange",1);q("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});q("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});q("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});q("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});q("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});rt.define("sl-dialog");var Mi=U`
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
`;var ge=class extends C{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};ge.styles=Mi;a([c({type:Boolean,reflect:!0})],ge.prototype,"vertical",2);a([D("vertical")],ge.prototype,"handleVerticalChange",1);ge.define("sl-divider");var Gi=U`
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
`;var zi=U`
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
`;var dt=Math.min,j=Math.max,Qe=Math.round,pe=Math.floor,Bt=t=>({x:t,y:t}),rr={left:"right",right:"left",bottom:"top",top:"bottom"},lr={start:"end",end:"start"};function Ee(t,e,o){return j(t,dt(e,o))}function zt(t,e){return typeof t=="function"?t(e):t}function Ft(t){return t.split("-")[0]}function Xt(t){return t.split("-")[1]}function Fo(t){return t==="x"?"y":"x"}function Ye(t){return t==="y"?"height":"width"}function Jt(t){return["top","bottom"].includes(Ft(t))?"y":"x"}function Ve(t){return Fo(Jt(t))}function Xi(t,e,o){o===void 0&&(o=!1);let i=Xt(t),s=Ve(t),r=Ye(s),l=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=he(l)),[l,he(l)]}function ki(t){let e=he(t);return[Re(t),e,Re(e)]}function Re(t){return t.replace(/start|end/g,e=>lr[e])}function ar(t,e,o){let i=["left","right"],s=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:i:e?i:s;case"left":case"right":return e?r:l;default:return[]}}function Zi(t,e,o,i){let s=Xt(t),r=ar(Ft(t),o==="start",i);return s&&(r=r.map(l=>l+"-"+s),e&&(r=r.concat(r.map(Re)))),r}function he(t){return t.replace(/left|right|bottom|top/g,e=>rr[e])}function nr(t){return{top:0,right:0,bottom:0,left:0,...t}}function Uo(t){return typeof t!="number"?nr(t):{top:t,right:t,bottom:t,left:t}}function kt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Si(t,e,o){let{reference:i,floating:s}=t,r=Jt(e),l=Ve(e),d=Ye(l),n=Ft(e),b=r==="y",h=i.x+i.width/2-s.width/2,u=i.y+i.height/2-s.height/2,p=i[d]/2-s[d]/2,g;switch(n){case"top":g={x:h,y:i.y-s.height};break;case"bottom":g={x:h,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:u};break;case"left":g={x:i.x-s.width,y:u};break;default:g={x:i.x,y:i.y}}switch(Xt(e)){case"start":g[l]-=p*(o&&b?-1:1);break;case"end":g[l]+=p*(o&&b?-1:1);break}return g}var ji=async(t,e,o)=>{let{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:l}=o,d=r.filter(Boolean),n=await(l.isRTL==null?void 0:l.isRTL(e)),b=await l.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:u}=Si(b,i,n),p=i,g={},Q=0;for(let y=0;y<d.length;y++){let{name:v,fn:I}=d[y],{x,y:A,data:X,reset:M}=await I({x:h,y:u,initialPlacement:i,placement:p,strategy:s,middlewareData:g,rects:b,platform:l,elements:{reference:t,floating:e}});if(h=x??h,u=A??u,g={...g,[v]:{...g[v],...X}},M&&Q<=50){Q++,typeof M=="object"&&(M.placement&&(p=M.placement),M.rects&&(b=M.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:s}):M.rects),{x:h,y:u}=Si(b,p,n)),y=-1;continue}}return{x:h,y:u,placement:p,strategy:s,middlewareData:g}};async function Je(t,e){var o;e===void 0&&(e={});let{x:i,y:s,platform:r,rects:l,elements:d,strategy:n}=t,{boundary:b="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=zt(e,t),Q=Uo(g),v=d[p?u==="floating"?"reference":"floating":u],I=kt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(v)))==null||o?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(d.floating)),boundary:b,rootBoundary:h,strategy:n})),x=u==="floating"?{...l.floating,x:i,y:s}:l.reference,A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(d.floating)),X=await(r.isElement==null?void 0:r.isElement(A))?await(r.getScale==null?void 0:r.getScale(A))||{x:1,y:1}:{x:1,y:1},M=kt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:A,strategy:n}):x);return{top:(I.top-M.top+Q.top)/X.y,bottom:(M.bottom-I.bottom+Q.bottom)/X.y,left:(I.left-M.left+Q.left)/X.x,right:(M.right-I.right+Q.right)/X.x}}var Co=t=>({name:"arrow",options:t,async fn(e){let{x:o,y:i,placement:s,rects:r,platform:l,elements:d,middlewareData:n}=e,{element:b,padding:h=0}=zt(t,e)||{};if(b==null)return{};let u=Uo(h),p={x:o,y:i},g=Ve(s),Q=Ye(g),y=await l.getDimensions(b),v=g==="y",I=v?"top":"left",x=v?"bottom":"right",A=v?"clientHeight":"clientWidth",X=r.reference[Q]+r.reference[g]-p[g]-r.floating[Q],M=p[g]-r.reference[g],z=await(l.getOffsetParent==null?void 0:l.getOffsetParent(b)),Y=z?z[A]:0;(!Y||!await(l.isElement==null?void 0:l.isElement(z)))&&(Y=d.floating[A]||r.floating[Q]);let at=X/2-M/2,Ct=Y/2-y[Q]/2-1,$t=dt(u[I],Ct),qt=dt(u[x],Ct),K=$t,Pt=Y-y[Q]-qt,V=Y/2-y[Q]/2+at,nt=Ee(K,V,Pt),ct=!n.arrow&&Xt(s)!=null&&V!=nt&&r.reference[Q]/2-(V<K?$t:qt)-y[Q]/2<0,gt=ct?V<K?V-K:V-Pt:0;return{[g]:p[g]+gt,data:{[g]:nt,centerOffset:V-nt-gt,...ct&&{alignmentOffset:gt}},reset:ct}}});var yo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;let{placement:s,middlewareData:r,rects:l,initialPlacement:d,platform:n,elements:b}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:Q="none",flipAlignment:y=!0,...v}=zt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};let I=Ft(s),x=Ft(d)===d,A=await(n.isRTL==null?void 0:n.isRTL(b.floating)),X=p||(x||!y?[he(d)]:ki(d));!p&&Q!=="none"&&X.push(...Zi(d,y,Q,A));let M=[d,...X],z=await Je(e,v),Y=[],at=((i=r.flip)==null?void 0:i.overflows)||[];if(h&&Y.push(z[I]),u){let K=Xi(s,l,A);Y.push(z[K[0]],z[K[1]])}if(at=[...at,{placement:s,overflows:Y}],!Y.every(K=>K<=0)){var Ct,$t;let K=(((Ct=r.flip)==null?void 0:Ct.index)||0)+1,Pt=M[K];if(Pt)return{data:{index:K,overflows:at},reset:{placement:Pt}};let V=($t=at.filter(nt=>nt.overflows[0]<=0).sort((nt,ct)=>nt.overflows[1]-ct.overflows[1])[0])==null?void 0:$t.placement;if(!V)switch(g){case"bestFit":{var qt;let nt=(qt=at.map(ct=>[ct.placement,ct.overflows.filter(gt=>gt>0).reduce((gt,ps)=>gt+ps,0)]).sort((ct,gt)=>ct[1]-gt[1])[0])==null?void 0:qt[0];nt&&(V=nt);break}case"initialPlacement":V=d;break}if(s!==V)return{reset:{placement:V}}}return{}}}};async function cr(t,e){let{placement:o,platform:i,elements:s}=t,r=await(i.isRTL==null?void 0:i.isRTL(s.floating)),l=Ft(o),d=Xt(o),n=Jt(o)==="y",b=["left","top"].includes(l)?-1:1,h=r&&n?-1:1,u=zt(e,t),{mainAxis:p,crossAxis:g,alignmentAxis:Q}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return d&&typeof Q=="number"&&(g=d==="end"?Q*-1:Q),n?{x:g*h,y:p*b}:{x:p*b,y:g*h}}var Io=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:o,y:i}=e,s=await cr(e,t);return{x:o+s.x,y:i+s.y,data:s}}}},Lo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:d={fn:v=>{let{x:I,y:x}=v;return{x:I,y:x}}},...n}=zt(t,e),b={x:o,y:i},h=await Je(e,n),u=Jt(Ft(s)),p=Fo(u),g=b[p],Q=b[u];if(r){let v=p==="y"?"top":"left",I=p==="y"?"bottom":"right",x=g+h[v],A=g-h[I];g=Ee(x,g,A)}if(l){let v=u==="y"?"top":"left",I=u==="y"?"bottom":"right",x=Q+h[v],A=Q-h[I];Q=Ee(x,Q,A)}let y=d.fn({...e,[p]:g,[u]:Q});return{...y,data:{x:y.x-o,y:y.y-i}}}}};var He=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){let{placement:o,rects:i,platform:s,elements:r}=e,{apply:l=()=>{},...d}=zt(t,e),n=await Je(e,d),b=Ft(o),h=Xt(o),u=Jt(o)==="y",{width:p,height:g}=i.floating,Q,y;b==="top"||b==="bottom"?(Q=b,y=h===(await(s.isRTL==null?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(y=b,Q=h==="end"?"top":"bottom");let v=g-n[Q],I=p-n[y],x=!e.middlewareData.shift,A=v,X=I;if(u){let z=p-n.left-n.right;X=h||x?dt(I,z):z}else{let z=g-n.top-n.bottom;A=h||x?dt(v,z):z}if(x&&!h){let z=j(n.left,0),Y=j(n.right,0),at=j(n.top,0),Ct=j(n.bottom,0);u?X=p-2*(z!==0||Y!==0?z+Y:j(n.left,n.right)):A=g-2*(at!==0||Ct!==0?at+Ct:j(n.top,n.bottom))}await l({...e,availableWidth:X,availableHeight:A});let M=await s.getDimensions(r.floating);return p!==M.width||g!==M.height?{reset:{rects:!0}}:{}}}};function Ut(t){return Ri(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function bt(t){var e;return(e=(Ri(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ri(t){return t instanceof Node||t instanceof E(t).Node}function ut(t){return t instanceof Element||t instanceof E(t).Element}function lt(t){return t instanceof HTMLElement||t instanceof E(t).HTMLElement}function Ti(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function _t(t){let{overflow:e,overflowX:o,overflowY:i,display:s}=H(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(s)}function Ei(t){return["table","td","th"].includes(Ut(t))}function _e(t){let e=Ke(),o=H(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Yi(t){let e=Zt(t);for(;lt(e)&&!me(e);){if(_e(e))return e;e=Zt(e)}return null}function Ke(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function me(t){return["html","body","#document"].includes(Ut(t))}function H(t){return E(t).getComputedStyle(t)}function Be(t){return ut(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Zt(t){if(Ut(t)==="html")return t;let e=t.assignedSlot||t.parentNode||Ti(t)&&t.host||bt(t);return Ti(e)?e.host:e}function Vi(t){let e=Zt(t);return me(e)?t.ownerDocument?t.ownerDocument.body:t.body:lt(e)&&_t(e)?e:Vi(e)}function Ht(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);let s=Vi(t),r=s===((i=t.ownerDocument)==null?void 0:i.body),l=E(s);return r?e.concat(l,l.visualViewport||[],_t(s)?s:[],l.frameElement&&o?Ht(l.frameElement):[]):e.concat(s,Ht(s,[],o))}function _i(t){let e=H(t),o=parseFloat(e.width)||0,i=parseFloat(e.height)||0,s=lt(t),r=s?t.offsetWidth:o,l=s?t.offsetHeight:i,d=Qe(o)!==r||Qe(i)!==l;return d&&(o=r,i=l),{width:o,height:i,$:d}}function fo(t){return ut(t)?t:t.contextElement}function Kt(t){let e=fo(t);if(!lt(e))return Bt(1);let o=e.getBoundingClientRect(),{width:i,height:s,$:r}=_i(e),l=(r?Qe(o.width):o.width)/i,d=(r?Qe(o.height):o.height)/s;return(!l||!Number.isFinite(l))&&(l=1),(!d||!Number.isFinite(d))&&(d=1),{x:l,y:d}}var dr=Bt(0);function Ki(t){let e=E(t);return!Ke()||!e.visualViewport?dr:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function br(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==E(t)?!1:e}function St(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);let s=t.getBoundingClientRect(),r=fo(t),l=Bt(1);e&&(i?ut(i)&&(l=Kt(i)):l=Kt(t));let d=br(r,o,i)?Ki(r):Bt(0),n=(s.left+d.x)/l.x,b=(s.top+d.y)/l.y,h=s.width/l.x,u=s.height/l.y;if(r){let p=E(r),g=i&&ut(i)?E(i):i,Q=p.frameElement;for(;Q&&i&&g!==p;){let y=Kt(Q),v=Q.getBoundingClientRect(),I=H(Q),x=v.left+(Q.clientLeft+parseFloat(I.paddingLeft))*y.x,A=v.top+(Q.clientTop+parseFloat(I.paddingTop))*y.y;n*=y.x,b*=y.y,h*=y.x,u*=y.y,n+=x,b+=A,Q=E(Q).frameElement}}return kt({width:h,height:u,x:n,y:b})}function ur(t){let{rect:e,offsetParent:o,strategy:i}=t,s=lt(o),r=bt(o);if(o===r)return e;let l={scrollLeft:0,scrollTop:0},d=Bt(1),n=Bt(0);if((s||!s&&i!=="fixed")&&((Ut(o)!=="body"||_t(r))&&(l=Be(o)),lt(o))){let b=St(o);d=Kt(o),n.x=b.x+o.clientLeft,n.y=b.y+o.clientTop}return{width:e.width*d.x,height:e.height*d.y,x:e.x*d.x-l.scrollLeft*d.x+n.x,y:e.y*d.y-l.scrollTop*d.y+n.y}}function gr(t){return Array.from(t.getClientRects())}function $i(t){return St(bt(t)).left+Be(t).scrollLeft}function hr(t){let e=bt(t),o=Be(t),i=t.ownerDocument.body,s=j(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=j(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight),l=-o.scrollLeft+$i(t),d=-o.scrollTop;return H(i).direction==="rtl"&&(l+=j(e.clientWidth,i.clientWidth)-s),{width:s,height:r,x:l,y:d}}function Qr(t,e){let o=E(t),i=bt(t),s=o.visualViewport,r=i.clientWidth,l=i.clientHeight,d=0,n=0;if(s){r=s.width,l=s.height;let b=Ke();(!b||b&&e==="fixed")&&(d=s.offsetLeft,n=s.offsetTop)}return{width:r,height:l,x:d,y:n}}function pr(t,e){let o=St(t,!0,e==="fixed"),i=o.top+t.clientTop,s=o.left+t.clientLeft,r=lt(t)?Kt(t):Bt(1),l=t.clientWidth*r.x,d=t.clientHeight*r.y,n=s*r.x,b=i*r.y;return{width:l,height:d,x:n,y:b}}function Ji(t,e,o){let i;if(e==="viewport")i=Qr(t,o);else if(e==="document")i=hr(bt(t));else if(ut(e))i=pr(e,o);else{let s=Ki(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return kt(i)}function qi(t,e){let o=Zt(t);return o===e||!ut(o)||me(o)?!1:H(o).position==="fixed"||qi(o,e)}function mr(t,e){let o=e.get(t);if(o)return o;let i=Ht(t,[],!1).filter(d=>ut(d)&&Ut(d)!=="body"),s=null,r=H(t).position==="fixed",l=r?Zt(t):t;for(;ut(l)&&!me(l);){let d=H(l),n=_e(l);!n&&d.position==="fixed"&&(s=null),(r?!n&&!s:!n&&d.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||_t(l)&&!n&&qi(t,l))?i=i.filter(h=>h!==l):s=d,l=Zt(l)}return e.set(t,i),i}function Br(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t,l=[...o==="clippingAncestors"?mr(e,this._c):[].concat(o),i],d=l[0],n=l.reduce((b,h)=>{let u=Ji(e,h,s);return b.top=j(u.top,b.top),b.right=dt(u.right,b.right),b.bottom=dt(u.bottom,b.bottom),b.left=j(u.left,b.left),b},Ji(e,d,s));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}}function Fr(t){return _i(t)}function Ur(t,e,o){let i=lt(e),s=bt(e),r=o==="fixed",l=St(t,!0,r,e),d={scrollLeft:0,scrollTop:0},n=Bt(0);if(i||!i&&!r)if((Ut(e)!=="body"||_t(s))&&(d=Be(e)),i){let b=St(e,!0,r,e);n.x=b.x+e.clientLeft,n.y=b.y+e.clientTop}else s&&(n.x=$i(s));return{x:l.left+d.scrollLeft-n.x,y:l.top+d.scrollTop-n.y,width:l.width,height:l.height}}function Hi(t,e){return!lt(t)||H(t).position==="fixed"?null:e?e(t):t.offsetParent}function Pi(t,e){let o=E(t);if(!lt(t))return o;let i=Hi(t,e);for(;i&&Ei(i)&&H(i).position==="static";)i=Hi(i,e);return i&&(Ut(i)==="html"||Ut(i)==="body"&&H(i).position==="static"&&!_e(i))?o:i||Yi(t)||o}var Cr=async function(t){let{reference:e,floating:o,strategy:i}=t,s=this.getOffsetParent||Pi,r=this.getDimensions;return{reference:Ur(e,await s(o),i),floating:{x:0,y:0,...await r(o)}}};function yr(t){return H(t).direction==="rtl"}var Fe={convertOffsetParentRelativeRectToViewportRelativeRect:ur,getDocumentElement:bt,getClippingRect:Br,getOffsetParent:Pi,getElementRects:Cr,getClientRects:gr,getDimensions:Fr,getScale:Kt,isElement:ut,isRTL:yr};function Ir(t,e){let o=null,i,s=bt(t);function r(){clearTimeout(i),o&&o.disconnect(),o=null}function l(d,n){d===void 0&&(d=!1),n===void 0&&(n=1),r();let{left:b,top:h,width:u,height:p}=t.getBoundingClientRect();if(d||e(),!u||!p)return;let g=pe(h),Q=pe(s.clientWidth-(b+u)),y=pe(s.clientHeight-(h+p)),v=pe(b),x={rootMargin:-g+"px "+-Q+"px "+-y+"px "+-v+"px",threshold:j(0,dt(1,n))||1},A=!0;function X(M){let z=M[0].intersectionRatio;if(z!==n){if(!A)return l();z?l(!1,z):i=setTimeout(()=>{l(!1,1e-7)},100)}A=!1}try{o=new IntersectionObserver(X,{...x,root:s.ownerDocument})}catch{o=new IntersectionObserver(X,x)}o.observe(t)}return l(!0),r}function ts(t,e,o,i){i===void 0&&(i={});let{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:n=!1}=i,b=fo(t),h=s||r?[...b?Ht(b):[],...Ht(e)]:[];h.forEach(I=>{s&&I.addEventListener("scroll",o,{passive:!0}),r&&I.addEventListener("resize",o)});let u=b&&d?Ir(b,o):null,p=-1,g=null;l&&(g=new ResizeObserver(I=>{let[x]=I;x&&x.target===b&&g&&(g.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{g&&g.observe(e)})),o()}),b&&!n&&g.observe(b),g.observe(e));let Q,y=n?St(t):null;n&&v();function v(){let I=St(t);y&&(I.x!==y.x||I.y!==y.y||I.width!==y.width||I.height!==y.height)&&o(),y=I,Q=requestAnimationFrame(v)}return o(),()=>{h.forEach(I=>{s&&I.removeEventListener("scroll",o),r&&I.removeEventListener("resize",o)}),u&&u(),g&&g.disconnect(),g=null,n&&cancelAnimationFrame(Q)}}var es=(t,e,o)=>{let i=new Map,s={platform:Fe,...o},r={...s.platform,_c:i};return ji(t,e,{...s,platform:r})};function os(t){return Lr(t)}function vo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Lr(t){for(let e=t;e;e=vo(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=vo(t);e;e=vo(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function fr(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}var w=class extends C{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||fr(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=ts(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[Io({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(He({apply:({rects:o})=>{let i=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=s?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(yo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Lo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(He({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Co({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?o=>Fe.getOffsetParent(o,os):Fe.getOffsetParent;es(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ft(J({},Fe),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:s,placement:r})=>{let l=getComputedStyle(this).direction==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){let n=s.arrow.x,b=s.arrow.y,h="",u="",p="",g="";if(this.arrowPlacement==="start"){let Q=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=l?Q:"",g=l?"":Q}else if(this.arrowPlacement==="end"){let Q=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=l?"":Q,g=l?Q:"",p=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof n=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof n=="number"?`${n}px`:"",h=typeof b=="number"?`${b}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:p,left:g,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return m`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${W({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?m`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};w.styles=zi;a([N(".popup")],w.prototype,"popup",2);a([N(".popup__arrow")],w.prototype,"arrowEl",2);a([c()],w.prototype,"anchor",2);a([c({type:Boolean,reflect:!0})],w.prototype,"active",2);a([c({reflect:!0})],w.prototype,"placement",2);a([c({reflect:!0})],w.prototype,"strategy",2);a([c({type:Number})],w.prototype,"distance",2);a([c({type:Number})],w.prototype,"skidding",2);a([c({type:Boolean})],w.prototype,"arrow",2);a([c({attribute:"arrow-placement"})],w.prototype,"arrowPlacement",2);a([c({attribute:"arrow-padding",type:Number})],w.prototype,"arrowPadding",2);a([c({type:Boolean})],w.prototype,"flip",2);a([c({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],w.prototype,"flipFallbackPlacements",2);a([c({attribute:"flip-fallback-strategy"})],w.prototype,"flipFallbackStrategy",2);a([c({type:Object})],w.prototype,"flipBoundary",2);a([c({attribute:"flip-padding",type:Number})],w.prototype,"flipPadding",2);a([c({type:Boolean})],w.prototype,"shift",2);a([c({type:Object})],w.prototype,"shiftBoundary",2);a([c({attribute:"shift-padding",type:Number})],w.prototype,"shiftPadding",2);a([c({attribute:"auto-size"})],w.prototype,"autoSize",2);a([c()],w.prototype,"sync",2);a([c({type:Object})],w.prototype,"autoSizeBoundary",2);a([c({attribute:"auto-size-padding",type:Number})],w.prototype,"autoSizePadding",2);var S=class extends C{constructor(){super(...arguments),this.localize=new k(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,s;let r=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(s=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:s.activeElement:document.activeElement;(!this.containingElement||r?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let o=e.getAllItems(),i=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(i=>Wi(i).start),o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,mt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,mt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ot(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=P(this,"dropdown.show",{dir:this.localize.dir()});await tt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ot(this);let{keyframes:t,options:e}=P(this,"dropdown.hide",{dir:this.localize.dir()});await tt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return m`
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
    `}};S.styles=Gi;S.dependencies={"sl-popup":w};a([N(".dropdown")],S.prototype,"popup",2);a([N(".dropdown__trigger")],S.prototype,"trigger",2);a([N(".dropdown__panel")],S.prototype,"panel",2);a([c({type:Boolean,reflect:!0})],S.prototype,"open",2);a([c({reflect:!0})],S.prototype,"placement",2);a([c({type:Boolean,reflect:!0})],S.prototype,"disabled",2);a([c({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],S.prototype,"stayOpenOnSelect",2);a([c({attribute:!1})],S.prototype,"containingElement",2);a([c({type:Number})],S.prototype,"distance",2);a([c({type:Number})],S.prototype,"skidding",2);a([c({type:Boolean})],S.prototype,"hoist",2);a([D("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);q("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});q("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});S.define("sl-dropdown");var is=U`
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
`;var ss=U`
  ${L}
  ${is}

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
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
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
    -webkit-user-select: none;
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
`;var rs=(t="value")=>(e,o)=>{let i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,l,d){var n;let b=i.getPropertyOptions(t),h=typeof b.attribute=="string"?b.attribute:t;if(r===h){let u=b.converter||It,g=(typeof u=="function"?u:(n=u?.fromAttribute)!=null?n:It.fromAttribute)(d,b.type);this[t]!==g&&(this[o]=g)}s.call(this,r,l,d)}};var ls=Mt(class extends pt{constructor(t){if(super(t),t.type!==$.PROPERTY&&t.type!==$.ATTRIBUTE&&t.type!==$.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ze(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===T||e===O)return e;let o=t.element,i=t.name;if(t.type===$.PROPERTY){if(e===o[i])return T}else if(t.type===$.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return T}else if(t.type===$.ATTRIBUTE&&o.getAttribute(i)===e+"")return T;return gi(t),e}});var F=class extends C{constructor(){super(...arguments),this.formControlController=new Me(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new R(this,"help-text","label"),this.localize=new k(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i){this.input.setRangeText(t,e,o,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly,r=s&&(typeof this.value=="number"||this.value.length>0);return m`
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
              name=${B(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${ls(this.value)}
              autocapitalize=${B(this.autocapitalize)}
              autocomplete=${B(this.autocomplete)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${B(this.pattern)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
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
                    class=${W({input__clear:!0,"input__clear--visible":r})}
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
    `}};F.styles=ss;F.dependencies={"sl-icon":G};a([N(".input__control")],F.prototype,"input",2);a([et()],F.prototype,"hasFocus",2);a([c()],F.prototype,"title",2);a([c({reflect:!0})],F.prototype,"type",2);a([c()],F.prototype,"name",2);a([c()],F.prototype,"value",2);a([rs()],F.prototype,"defaultValue",2);a([c({reflect:!0})],F.prototype,"size",2);a([c({type:Boolean,reflect:!0})],F.prototype,"filled",2);a([c({type:Boolean,reflect:!0})],F.prototype,"pill",2);a([c()],F.prototype,"label",2);a([c({attribute:"help-text"})],F.prototype,"helpText",2);a([c({type:Boolean})],F.prototype,"clearable",2);a([c({type:Boolean,reflect:!0})],F.prototype,"disabled",2);a([c()],F.prototype,"placeholder",2);a([c({type:Boolean,reflect:!0})],F.prototype,"readonly",2);a([c({attribute:"password-toggle",type:Boolean})],F.prototype,"passwordToggle",2);a([c({attribute:"password-visible",type:Boolean})],F.prototype,"passwordVisible",2);a([c({attribute:"no-spin-buttons",type:Boolean})],F.prototype,"noSpinButtons",2);a([c({reflect:!0})],F.prototype,"form",2);a([c({type:Boolean,reflect:!0})],F.prototype,"required",2);a([c()],F.prototype,"pattern",2);a([c({type:Number})],F.prototype,"minlength",2);a([c({type:Number})],F.prototype,"maxlength",2);a([c()],F.prototype,"min",2);a([c()],F.prototype,"max",2);a([c()],F.prototype,"step",2);a([c()],F.prototype,"autocapitalize",2);a([c()],F.prototype,"autocorrect",2);a([c()],F.prototype,"autocomplete",2);a([c({type:Boolean})],F.prototype,"autofocus",2);a([c()],F.prototype,"enterkeyhint",2);a([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],F.prototype,"spellcheck",2);a([c()],F.prototype,"inputmode",2);a([D("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);a([D("step",{waitUntilFirstUpdate:!0})],F.prototype,"handleStepChange",1);a([D("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);F.define("sl-input");var as=U`
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
`;var $e=class extends C{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],o=t.composedPath().find(s=>{var r;return e.includes(((r=s?.getAttribute)==null?void 0:r.call(s,"role"))||"")});if(!o)return;let i=o;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),o=this.getCurrentItem(),i=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return m`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};$e.styles=as;a([N("slot")],$e.prototype,"defaultSlot",2);$e.define("sl-menu");var ns=U`
  ${L}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

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
    -webkit-user-select: none;
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

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
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
`;var Ue=(t,e)=>{let o=t._$AN;if(o===void 0)return!1;for(let i of o)i._$AO?.(e,!1),Ue(i,e);return!0},qe=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},cs=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),xr(e)}};function vr(t){this._$AN!==void 0?(qe(this),this._$AM=t,cs(this)):this._$AM=t}function wr(t,e=!1,o=0){let i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let r=o;r<i.length;r++)Ue(i[r],!1),qe(i[r]);else i!=null&&(Ue(i,!1),qe(i));else Ue(this,t)}var xr=t=>{t.type==$.CHILD&&(t._$AP??(t._$AP=wr),t._$AQ??(t._$AQ=vr))},Pe=class extends pt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,i){super._$AT(e,o,i),cs(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(Ue(this,e),qe(this))}setValue(e){if(Ze(this._$Ct))this._$Ct._$AI(e,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}};var ds=()=>new xo,xo=class{},wo=new WeakMap,bs=Mt(class extends Pe{render(t){return O}update(t,[e]){let o=e!==this.G;return o&&this.G!==void 0&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),O}ot(t){if(typeof this.G=="function"){let e=this.ct??globalThis,o=wo.get(e);o===void 0&&(o=new WeakMap,wo.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ct,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return typeof this.G=="function"?wo.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var us=class{constructor(t,e,o){this.popupRef=ds(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break;default:break}},this.handleClick=i=>{var s;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(s=i.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{let i=this.host.renderRoot.querySelector("slot[name='submenu']"),s=i?.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],r=this.localize.dir()==="rtl";if(!s)return;let{left:l,top:d,width:n,height:b}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?l+n:l}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${d}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?l+n:l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${d+b}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(let i of e.assignedElements())if(o=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let i=1;i!==o.length;++i)o[i].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((s,r)=>{var l;let d=(l=e.get(r))!=null?l:new CSSUnitValue(0,"px"),b=(d instanceof CSSUnitValue?d:new CSSUnitValue(0,"px")).to("px");return s-b.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=this.localize.dir()==="ltr";return this.isConnected?m`
      <sl-popup
        ${bs(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:m` <slot name="submenu" hidden></slot> `}};var _=class extends C{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new k(this),this.hasSlotController=new R(this,"submenu"),this.submenuController=new us(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return si(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return m`
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
    `}};_.styles=ns;_.dependencies={"sl-icon":G,"sl-popup":w};a([N("slot:not([name])")],_.prototype,"defaultSlot",2);a([N(".menu-item")],_.prototype,"menuItem",2);a([c()],_.prototype,"type",2);a([c({type:Boolean,reflect:!0})],_.prototype,"checked",2);a([c()],_.prototype,"value",2);a([c({type:Boolean,reflect:!0})],_.prototype,"disabled",2);a([D("checked")],_.prototype,"handleCheckedChange",1);a([D("disabled")],_.prototype,"handleDisabledChange",1);a([D("type")],_.prototype,"handleTypeChange",1);_.define("sl-menu-item");var gs=U`
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
    -webkit-user-select: none;
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
`;var vt=class extends C{constructor(){super(...arguments),this.localize=new k(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return m`
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
    `}};vt.styles=gs;vt.dependencies={"sl-icon-button":Z};a([c({reflect:!0})],vt.prototype,"variant",2);a([c({reflect:!0})],vt.prototype,"size",2);a([c({type:Boolean,reflect:!0})],vt.prototype,"pill",2);a([c({type:Boolean})],vt.prototype,"removable",2);vt.define("sl-tag");var hm=Ls(Qs());ke("remixicon",{resolver(t){let e=t.match(/^(.*?)\/(.*?)(-(fill)?)?$/m);return e[1]=e[1].charAt(0).toUpperCase()+e[1].slice(1),`https://cdn.jsdelivr.net/npm/remixicon@3.3.0/icons/${e[1]}/${e[2]}${e[3]=="-"?"":e[3]||"-line"}.svg`},mutator(t){return t.setAttribute("fill","currentColor")}});ke("heroicons",{resolver:t=>`https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/solid/${t}.svg`});de("/images");console.info("Bridgetown is loaded!");})();
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

@lit/reactive-element/decorators/event-options.js:
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
//# sourceMappingURL=/_bridgetown/static/index.JYPUD2EU.js.map
