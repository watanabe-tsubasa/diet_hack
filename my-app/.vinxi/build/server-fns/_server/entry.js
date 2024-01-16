import{fromJSON as v,crossSerializeStream as U,getCrossReferenceHeader as $}from"seroval";import{CustomEventPlugin as w,DOMExceptionPlugin as R,EventPlugin as b,FormDataPlugin as S,HeadersPlugin as y,ReadableStreamPlugin as q,RequestPlugin as P,ResponsePlugin as E,URLSearchParamsPlugin as x,URLPlugin as O}from"seroval-plugins/web";import{sharedConfig as H}from"solid-js";import{provideRequestEvent as C}from"solid-js/web/storage";import{getRequestURL as p,getRequestWebStream as F,getRequestIP as W,eventHandler as D,setHeader as N}from"h3";const d="Invariant Violation",{setPrototypeOf:k=function(e,t){return e.__proto__=t,e}}=Object;class m extends Error{framesToPop=1;name=d;constructor(t=d){super(typeof t=="number"?`${d}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),k(this,m.prototype)}}function g(e,t){if(!e)throw new m(t)}function z(e){let t;const n=p(e),s={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(n,{...s,body:e.node.req.body}):new Request(n,{...s,get body(){return t||(t=F(e),t)}})}function A(e){return e.web??={request:z(e),url:p(e)},e.web.request}const T=Symbol("h3Event"),f=Symbol("fetchEvent"),J={get(e,t){return t===f?e:e[t]??e[T][t]}};function M(e){return e.web||(e.web={url:p(e),request:A(e)}),new Proxy({request:e.web.request,clientAddress:W(e),locals:{},[T]:e},J)}function _(e){if(!e[f]){const t=M(e);e[f]=t}return e[f]}function j(e,t){return new ReadableStream({start(n){U(t,{scopeId:e,plugins:[w,R,b,S,y,q,P,E,x,O],onSerialize(s,i){const o=i?`(${$(e)},${s})`:s;n.enqueue(new TextEncoder().encode(`${o};
`))},onDone(){n.close()},onError(s){n.error(s)}})}})}async function B(e){g(e.method==="POST",`Invalid method ${e.method}. Expected POST.`);const t=_(e),n=t.request,s=n.headers.get("x-server-id"),i=n.headers.get("x-server-instance"),o=new URL(n.url);let u,c;if(s)g(typeof s=="string","Invalid server function"),[u,c]=s.split("#");else if(u=o.searchParams.get("id"),c=o.searchParams.get("name"),!u||!c)throw new Error("Invalid request");const I=(await globalThis.MANIFEST["server-fns"].chunks[u].import())[c];let a=[];if(!i){const r=o.searchParams.get("args");r&&JSON.parse(r).forEach(l=>a.push(l))}const h=n.headers.get("content-type");h.startsWith("multipart/form-data")||h.startsWith("application/x-www-form-urlencoded")?a.push(await n.formData()):a=v(await n.json(),{plugins:[w,R,b,S,y,q,P,E,x,O]});try{const r=await C(t,()=>(H.context={event:t},I(...a)));if(!i){const l=r instanceof Error,L=new URL(n.headers.get("referer"));return new Response(null,{status:302,headers:{Location:L.toString(),...r?{"Set-Cookie":`flash=${JSON.stringify({url:o.pathname+encodeURIComponent(o.search),result:l?r.message:r,error:l,input:[...a.slice(0,-1),[...a[a.length-1].entries()]]})}; Secure; HttpOnly;`}:{}}})}return typeof r=="string"?new Response(r):(N(e,"content-type","text/javascript"),j(i,r))}catch(r){return r instanceof Response&&r.status===302?new Response(null,{status:i?204:302,headers:{Location:r.headers.get("Location")}}):r}}const Y=D(B);export{Y as default};
