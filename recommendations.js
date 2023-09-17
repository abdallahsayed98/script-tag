const e="https://raw.githack.com/abdallahsayed98/script-tag/main/widget.css";if(document.createStyleSheet){document.createStyleSheet(O)}else{var t=`@import url('${e}');`;var n=document.createElement("link");n.rel="stylesheet";n.href="data:text/css,"+escape(t);document.getElementsByTagName("head")[0].appendChild(n)}let a="square";let A=false;let z=false;let B=false;let o=false;let c=true;let q="";let s=false;const i="development-kainic";const W="us-central1";const u=`https://${W}-${i}.cloudfunctions.net`;const D=`${u}/get_products/api/v1`;const l=`${u}/api/v1`;const J=`${l}/integrations/get`;const p=`${l}/get_products_ids_by_type`;const R=`${l}/get_products_by_ids`;const _=window.Shopify.shop;const F=window.Shopify.currency.active;const V=async()=>{const e=await fetch(p,{method:"POST",body:JSON.stringify({request_domain:_,products_type:"all_products"}),headers:{"Content-Type":"application/json"}});if(e.ok){const t=await e.json();return t.products.products_ids}return[]};const H=async()=>{const e=window.ShopifyAnalytics.meta.product.id;if(e){return e}return null};const K=async()=>{let e=window.location.search.split("=")[1];if(e&&typeof parseInt(e)==="number"&&parseInt(e)!==0){return e}else{e=window.ShopifyAnalytics.meta.product.variants[0].id;if(e){return e}}return null};const m=async e=>{const t=await fetch(R,{method:"POST",body:JSON.stringify({request_domain:_,products_ids:e}),headers:{"Content-Type":"application/json"}});if(t.ok){const n=await t.json();return n.products}return null};const G=()=>{let n=(new Date).getTime();let e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let t=(n+Math.random()*16)%16|0;n=Math.floor(n/16);return(e=="x"?t:t&3|8).toString(16)});return e};const U=()=>{let e=window.ShopifyAnalytics.meta.page.pageType;if(!e){e=window.location.pathname.substring(1)}return e};const r=document.getElementsByClassName("w__products-recommedations");let w=[];for(const j of r){w.push(j.dataset)}let d=document.documentElement;d.style.setProperty("--widget-product-colo-price",w[0]["priceColor"]);d.style.setProperty("--widget-left-padding",`${w[0]["paddingLeft"]}px`);d.style.setProperty("--widget-right-padding",`${w[0]["paddingRight"]}px`);d.style.setProperty("--widget-product-font-size",`${w[0]["fontSize"]}px`);d.style.setProperty("--widget-product-font-weight",w[0]["fontWeight"]);d.style.setProperty("--widget-product-font-family",w[0]["fontFamily"]);d.style.setProperty("--widget-product-desc-font-color",w[0]["descFontColor"]);const f=document.getElementsByClassName("w__products-list");const g=document.getElementsByClassName("w__slider-dots");for(let e=0;e<r.length;e++){r[e].style.display="none"}const h=(e,t,n,a,i,l)=>{const r=document.createElement(t);if(n){r.classList.add(...n)}if(a){a.forEach(e=>{if(e.value!=="null"){r.setAttribute(e.name,e.value)}})}if(i){for(const o in i){r.style[o]=i[o]}}if(e){e.appendChild(r)}if(l){r.innerHTML=l}return r};const Q=(e,t)=>{a=w[t]["imageRatio"];let n=1;if(e&&a==="portrait"){n=.8}else if(e&&a==="adapt"){n=e.width/e.height}if(n===0||n===null){n=1}return n};const y=e=>{e=parseFloat(e).toFixed(2);return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};const v=(e,t)=>{let n=t-e;let a=n*100;a=a/t;a=Math.round(a);return a};const X=(e,t,n,a)=>{const i=h(e,"div",["card-wrapper","w__card-wrapper","product-card-wrapper","w__product-card-wrapper","underline-links-hover","w__underline-links-hover"],null,null,null);const l=h(i,"div",["card","w__card",`card--${w[a]["cardStyle"]}`,`w__card--${w[a]["cardStyle"]}`,`${t.images[0]?"card--media":"card--text"}`,`${t.images[0]?"w__card--media":"w__card--text"}`,`${w[a]["cardStyle"]==="card"?`color-${w[a]["cardColorScheme"]}`:null}`,`${w[a]["cardStyle"]==="card"?`w__color-${w[a]["cardColorScheme"]}`:null}`,`${w[a]["cardStyle"]==="card"?"gradient":null}`,`${w[a]["cardStyle"]==="card"?"w__gradient":null}`,`${o?"card--extend-height":null}`,`${o?"w__card--extend-height":null}`,`${t.images[0]===null&&w[a]["cardStyle"]==="card"?"ratio":null}`,`${t.images[0]===null&&w[a]["cardStyle"]==="card"?"w__ratio":null}`,`${s?"card--horizontal":null}`,`${s?"w__card--horizontal":null}`],[{name:"style",value:`--ratio-percent:${1/n*100}%`}],null,null);const r=h(l,"div",["card__inner","w__card__inner",`${w[a]["cardStyle"]==="standard"?`color-${w[a]["cardColorScheme"]}`:null}`,`${w[a]["cardStyle"]==="standard"?`w__color-${w[a]["cardColorScheme"]}`:null}`,`${w[a]["cardStyle"]==="standard"?"gradient":null}`,`${w[a]["cardStyle"]==="standard"?"w__gradient":null}`,`${t.images[0]||w[a]["cardStyle"]==="standard"?"ratio":null}`,`${t.images[0]||w[a]["cardStyle"]==="standard"?"w__ratio":null}`],[{name:"style",value:`--ratio-percent:${1/n*100}%`}],null,null);Y(r,t,a);ee(l,t,a)};const Y=(e,t,n)=>{const a=h(e,"div",["card__media","w__card__media"],null,null,null);const i=h(a,"div",["media","w__media","media--transparent","w__media--transparent","media--hover-effect","w__media--hover-effect"],null,null,null);const l=h(i,"a",null,[{name:"href",value:`/products/${t.handle}`}],null,null);l.addEventListener("click",function(){const e=Date.now();P(t,e,n)});if(t.images[0]){h(l,"img",["motion-reduce","w__motion-reduce"],[{name:"srcset",value:`
              ${t.images[0].width>=165?`${t.images[0].src}&165w,`:""}
              ${t.images[0].width>=360?`${t.images[0].src}&360w,`:""}
              ${t.images[0].width>=533?`${t.images[0].src}&533w,`:""}
              ${t.images[0].width>=720?`${t.images[0].src}&720w,`:""}
              ${t.images[0].width>=940?`${t.images[0].src}&940w,`:""}
              ${t.images[0].width>=1066?`${t.images[0].src}&1066w,`:""}
              ${t.images[0].src}&${t.images[0].width}w`},{name:"src",value:`${t.images[0].src}&533w`},{name:"alt",value:`${t.images[0].alt}`},{name:"width",value:`${t.images[0].width}`},{name:"height",value:`${t.images[0].height}`},{name:"loading",value:`${c?"lazy":null}`},{name:"sizes",value:`(min-width): ${w[n]["pageWidth"]}px ${(w[n]["pageWidth"]-130)/4}px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)`}],null,null);const r=w[n]["showComparedPrice"]==="true";if(t.variants[0].compare_at_price&&t.variants[0].compare_at_price>t.variants[0].price&&r){const o=h(l,"div",["w__grid-product__tags_container"],null,{display:"flex","flex-direction":"row-reverse"},null);h(o,"div",["w__grid-product__tag"],null,null,`${v(t.variants[0].price,t.variants[0].compare_at_price)}%`)}}};const Z=(e,t)=>{const n=h(e,"div",["card__content","w__card__content"],null,null,null);const a=h(n,"div",["card__information","w__card__information"],null,null,null);const i=h(a,"h3",["card__heading","w__card__heading"],null,null,null);const l=h(i,"a",["full-unstyled-link","w__full-unstyled-link"],[{name:"href",value:`/products/${t.handle}`}],null,`${t.title}`);l.addEventListener("click",function(){const e=Date.now();P(t,e)})};const ee=(e,t,n)=>{const a=h(e,"div",["card__content","w__card__content"],null,null,null);const i=h(a,"div",["card__information","w__card__information",w[n]["alignText"]],null,null,null);if(w[n]["showBrand"]==="true"){h(i,"div",["w__grid-product__vendor"],null,null,`${t.vendor}`)}const l=h(i,"h3",["card__heading","w__card__heading",`${t.images[0]||w[n]["cardStyle"]==="standard"?"h5":null}`],null,null,null);const r=h(l,"a",["full-unstyled-link","w__full-unstyled-link",`${w[n]["showBrand"]==="true"?"w__uppercase":null}`],[{name:"href",value:`/products/${t.handle}`}],null,`${t.title}`);r.addEventListener("click",function(){const e=Date.now();P(t,e,n)});te(i,t,n);ne(i,t,n)};const te=(e,t,n)=>{const a=h(e,"div",["card__information","w__card__information"],null,null,null);const i=h(a,"div",["price","w__price",`${t.available===false?"price--sold-out":null}`,`${t.available===false?"w__price--sold-out":null}`,`${t.price_varies===false&&t.compare_at_price_varies?"price--no-compare":null}`,`${t.price_varies===false&&t.compare_at_price_varies?"w__price--no-compare":null}`],null,null,null);const l=h(i,"div",["price__container","w__price__container"],null,null,null);const r=w[n]["showComparedPrice"]==="true";const o=h(l,"div",["price__regular","w__price__regular",r?"w_letter_spacing_non":null],null,null,null);if(t.variants[0].compare_at_price&&t.variants[0].compare_at_price>t.variants[0].price&&r){h(o,"del",["price-item","w__price-item","price-item--regular","w__price-item--regular"],null,null,`LE ${y(t.variants[0].compare_at_price)}`)}h(o,"span",["price-item","w__price-item","price-item--regular","w__price-item--regular"],null,null,`${t.variants[0].compare_at_price&&t.variants[0].compare_at_price>t.variants[0].price&&r?"&nbsp;":""}LE ${y(t.variants[0].price)}`);if(t.variants[0].compare_at_price&&t.variants[0].compare_at_price>t.variants[0].price&&r){h(o,"span",["w__grid-product__price--savings"],null,null,`Save ${v(t.variants[0].price,t.variants[0].compare_at_price)}%`)}};const ne=(e,t,n)=>{let a=0;t.options.forEach(e=>{if(e.name==="Color"){a=e.values.length}});const i=w[n]["showComparedPrice"]==="true";if(a&&i){h(e,"div",["h5"],null,{"font-size":"0.7em"},`AVAILABLE IN ${a} COLORS`)}};const ae=(e,t)=>{const n=h(null,"li",["grid__item","w__grid__item"],null,null,null);const a=Q(e.image,t);X(n,e,a,t);return n};async function $(e){let t=`; ${document.cookie}`;let n=t.split(`; ${e}=`);if(n.length===2)return n.pop().split(";").shift()}var x=async function(){try{let e=await $("anon_uid");if(e!==undefined&&e!==null&&e!==""){return e}}catch(e){}return null};var S=async function(){try{let e=await $("sid");if(e!==undefined&&e!==null&&e!==""){return e}}catch(e){}return null};const ie=async()=>{const e=await fetch(J,{method:"POST",body:JSON.stringify({request_domain:_}),headers:{"Content-Type":"application/json"}});if(e.ok){const t=await e.json();const n=t.integration;return[n.project_id,n.tracker_id,n.tracker_apk]}return null};const le=async(e,t)=>{const n=await fetch(e,{method:"POST",headers:{accept:"*/*",origin:"HTTP_ORIGIN","Content-Type":"application/json"},body:JSON.stringify(t)});if(n.ok){const a=await n.json();return a}return undefined};let k;let b;let C;let E;let I;let L;const re=async t=>{const e=`${u}/predictor/api/v1/get_model_prediction?api_key=${w[t]["apiKey"]}`;const n="web";const a={kainic_pid:k,kainic_mid:w[t]["modelId"],platform:n,uid:E,sid:I,items:L,top_k:parseInt(w[t]["itemsNumbers"])};let i;let l=[];for(let e=0;e<parseInt(w[t]["itemsNumbers"]);e++){l.push(L[Math.floor(Math.random()*L.length)])}i=await m(l);return i};const oe=async t=>{const e=`${u}/predictor/api/v1/get_similar_items?api_key=${w[t]["apiKey"]}`;const n="web";const a=w[t]["useVariant"]==="true";const i=a?await K():await H();let l=i?[i.toString()]:[];const r={kainic_pid:k,kainic_mid:w[t]["modelId"],platform:n,uid:E,sid:I,items:l,top_k:parseInt(w[t]["itemsNumbers"])};let o;let c=[];const s=await fetch(p,{method:"POST",body:JSON.stringify({request_domain:_,products_type:"all_products"}),headers:{"Content-Type":"application/json"}});if(s.ok){const d=await s.json();L=d.products.products_ids}for(let e=0;e<parseInt(w[t]["itemsNumbers"]);e++){c.push(L[Math.floor(Math.random()*L.length)])}o=await m(c);return o};const P=async(e,t,n)=>{const a=`${u}/collector/collect/custom/${k}/${b}?api_key=${C}`;const i=navigator?.userAgent.includes("Mobile")?"mobile":"web";const l={pv_id:null,platform:i?i:"web",category:"ecom",action:"widgetItemView",label:e.id,value:e.variants[0].price,data:[{key:"item_name",value:e.title},{key:"variant_id",value:e.variants[0].id},{key:"model_id",value:w[n]["modelId"]},{key:"widget_location",value:U()},{key:"widget_name",value:w[n]["heading"]}],appId:"test-app",anon_uid:await x(),uid:null,sid:await S(),eid:G(),event_generated_ts:t,event_sent_ts:Date.now(),event_timezone:"UTC"};const r=await le(a,[l]);return false};const T=(a,i)=>{g[i].textContent="";let e=getComputedStyle(g[i]).display;if(e!=="none"){let t=Math.ceil(a.length/parseInt(w[i]["mobileColumn"]));for(let e=0;e<t;e++){const o=document.createElement("div");o.classList.add("w__slider-dot");g[i].appendChild(o)}let e=g[i].querySelectorAll(".w__slider-dot");e.forEach(e=>{e.addEventListener("click",r)});let n=0;function l(){e.forEach(e=>{e.classList.remove("active")});f[i].scrollLeft=f[i].scrollWidth/a.length*parseInt(w[i]["mobileColumn"])*n;e[n].classList.add("active")}function r(){n=Array.from(this.parentNode.children).indexOf(this);l()}l()}};async function ce(a){let i;if(w[a]["recommendationMode"]==="recommendation"){i=await re(a)}else if(w[a]["recommendationMode"]==="get_similar_items"){i=await oe(a)}if(i){r[a].style.display="block"}const e=async(e,t)=>{if(!e[0].isIntersecting)return;t.unobserve(r[a]);i.forEach(e=>{const t=ae(e,a);f[a].appendChild(t)});let n=w[a]["mobileSlideshow"]==="true";if(n){d.style.setProperty("--grid-mobile-horizontal-spacing",`${(parseInt(w[a]["paddingLeft"])+parseInt(w[a]["paddingRight"]))/2}px`);visualViewport.addEventListener("resize",()=>{T(i,a)});T(i,a);f[a].addEventListener("scroll",()=>{let e=0;if(f[a].scrollLeft===0){e=0}else{e=(f[a].scrollLeft+f[a].scrollWidth/i.length*parseInt(w[a]["mobileColumn"]))/(f[a].scrollWidth/i.length*parseInt(w[a]["mobileColumn"]));e=Math.floor(e)}let t=g[a].querySelectorAll(".w__slider-dot");t.forEach(e=>{e.classList.remove("active")});t[e].classList.add("active")})}};const t=new IntersectionObserver(e,{rootMargin:"0px 0px 200px 0px"});t.observe(r[a])}(async()=>{const e=await Promise.all([x(),S(),ie()]);E=e[0];I=e[1];[k,b,C]=e[2];const t=[];for(let e=0;e<w.length;e++){if(w[e]["recommendationMode"]==="recommendation"){if(!L){L=await V()}}t.push(ce(e))}await Promise.all(t)})();let N=document.getElementsByTagName("link");let M=false;let O=null;for(let n=0;n<N.length;n++){let e=N[n];let t=e.href;if(t.includes("base.css")){M=true}if(t.includes("widget.css")){O=N[n]}}if(M){O.disabled=true}