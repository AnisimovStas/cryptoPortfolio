(function(){"use strict";var e={7660:function(e,t,r){var i=r(9963),n=r(6252),s=r(3577);const a={class:"container mx-auto flex flex-col items-center bg-gray-100 p-4"},o={class:"container"},l=(0,n._)("div",{class:"w-full my-4"},null,-1),c=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),d=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),u={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},p=["onClick"],h={class:"px-4 py-5 sm:p-6 text-center"},g={class:"mt-1 text-3xl font-semibold text-gray-900"},m=(0,n._)("div",{class:"w-full border-t border-gray-200"},null,-1),f=["onClick"],k=(0,n._)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),w=(0,n._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),y={key:1,class:"relative"},b={class:"text-lg leading-6 font-medium text-gray-900 my-8"};function v(e,t,r,v,x,T){const _=(0,n.up)("AddTicker"),E=(0,n.up)("graph-section");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",o,[l,(0,n.Wm)(_,{onAddTicker:T.add,disabled:T.tooManyTickersAdded},null,8,["onAddTicker","disabled"]),x.tickers.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[c,(0,n._)("div",null,[x.page>1?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",onClick:t[0]||(t[0]=e=>x.page=x.page-1)}," Назад ")):(0,n.kq)("",!0),T.hasNextPage?((0,n.wg)(),(0,n.iD)("button",{key:1,class:"my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",onClick:t[1]||(t[1]=e=>x.page=x.page+1)}," Вперед ")):(0,n.kq)("",!0),(0,n._)("div",null,[(0,n.Uk)("Фильтр: "),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>x.filter=e)},null,512),[[i.nr,x.filter]])])]),d,(0,n._)("dl",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(T.paginatedTickers,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.name,onClick:t=>T.select(e),class:(0,s.C_)([{"border-4":x.selectedTicker===e},"bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"])},[(0,n._)("div",h,[(0,n._)("dt",{class:(0,s.C_)({" font-medium text-gray-500 truncate":e.priced," font-medium text-red-500 truncate":!e.priced})},(0,s.zw)(e.name)+" - USD ",3),(0,n._)("dd",g,(0,s.zw)(T.formatPrice(e.price))+" "+(0,s.zw)(T.paintPricelessTickets(e)),1)]),m,(0,n._)("button",{onClick:(0,i.iM)((t=>T.handleDelete(e)),["stop"]),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},[k,(0,n.Uk)("Удалить ")],8,f)],10,p)))),128))]),w],64)):(0,n.kq)("",!0),x.selectedTicker?((0,n.wg)(),(0,n.iD)("section",y,[(0,n._)("h3",b,(0,s.zw)(x.selectedTicker.name)+" - USD ",1),(0,n.Wm)(E,{onUpdateMaxGraphElements:T.updateGraph,selectedTicker:x.selectedTicker,graph:x.graph,onUnSelectTicker:t[3]||(t[3]=e=>x.selectedTicker=null)},null,8,["onUpdateMaxGraphElements","selectedTicker","graph"])])):(0,n.kq)("",!0)])])}r(7658);const x="85d4964e83d6e54ba4a126a258e47674a81e1f9be1b18b900757e96652e4ec5a",T=new Map,_=new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${x}`),E="5",C="500";function S(e){const t=JSON.stringify(e);_.readyState!==WebSocket.OPEN?_.addEventListener("open",(()=>{_.send(t)}),{once:!0}):_.send(t)}function D(e){S({action:"SubAdd",subs:[`5~CCCAGG~${e}~USD`]})}function G(e){S({action:"SubRemove",subs:[`5~CCCAGG~${e}~USD`]})}_.addEventListener("message",(async e=>{let{TYPE:t,FROMSYMBOL:r,PRICE:i,PARAMETER:n,FLAGS:s}=JSON.parse(e.data);if(t!==E&&t!==C||4==s)return;if(t==C){let e=n.slice(9),t=e.indexOf("~"),s=e.slice(0,t);console.log("ticker_"+s+"_INVALID"),r=s,i=await A(s)}const a=T.get(r)??[];a.forEach((e=>e(i)))}));const O=(e,t)=>{const r=T.get(e)||[];T.set(e,[...r,t]),D(e)},M=e=>{T.delete(e),G(e)};async function A(e){const t=await fetch("https://min-api.cryptocompare.com/data/price?fsym="+e+"&tsyms=BTC"),r=await t.json();if(r.BTC){const t=await fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD"),i=await t.json(),n=await r.BTC*i.USD;return console.log("ticker "+e+" price to USD IS: "+n),n}return console.log("ticker "+e+" have'nt trade pair to BTC")}const U={class:"flex"},z={class:"max-w-xs"},j=(0,n._)("label",{for:"wallet",class:"block text-sm font-medium text-gray-700"},"Тикер",-1),P={class:"mt-1 relative rounded-md shadow-md"};function B(e,t,r,s,a,o){const l=(0,n.up)("add-button");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("div",U,[(0,n._)("div",z,[j,(0,n._)("div",P,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.ticker=e),onKeydown:t[1]||(t[1]=(0,i.D2)(((...e)=>o.add&&o.add(...e)),["enter"])),type:"text",name:"wallet",id:"wallet",class:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",placeholder:"Например DOGE"},null,544),[[i.nr,a.ticker]])])])]),(0,n.Wm)(l,{onClick:o.add,type:"button",disabled:r.disabled,class:"my-4"},null,8,["onClick","disabled"])])}const I=["disabled"],$=(0,n._)("svg",{class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"},[(0,n._)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1);function L(e,t,r,i,a,o){return(0,n.wg)(),(0,n.iD)("button",{type:"button",disabled:r.disabled,class:(0,s.C_)(["inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",{"bg-red-500":r.disabled}])},[$,(0,n.Uk)(" Добавить ")],10,I)}var N={props:{disabled:{type:Boolean,require:!1,default:!1}}},H=r(3744);const V=(0,H.Z)(N,[["render",L]]);var q=V,R={components:{AddButton:q},props:{disabled:{type:Boolean,required:!1,default:!1}},emits:{"add-ticker":e=>"string"===typeof e&&e.length>0},data(){return{ticker:""}},methods:{add(){0!==this.ticker.length&&(this.$emit("add-ticker",this.ticker),this.ticker="")}}};const W=(0,H.Z)(R,[["render",B]]);var Y=W;const F={class:"flex items-end border-gray-600 border-b border-l h-64",ref:"graph"},J={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},Z=(0,n._)("g",null,[(0,n._)("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#718096","data-original":"#000000"})],-1),K=[Z];function Q(e,t,r,i,a,o){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",F,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.normalizedGraph,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,style:(0,s.j5)({height:`${e}%`}),class:"bg-purple-800 border w-10"},null,4)))),128))],512),(0,n._)("button",{onClick:t[0]||(t[0]=t=>e.$emit("un-select-ticker")),type:"button",class:"absolute top-0 right-0"},[((0,n.wg)(),(0,n.iD)("svg",J,K))])],64)}var X={props:{graph:{type:Array},selectedTicker:{type:Object}},emits:["update-maxGraphElements","un-select-ticker"],data(){return{maxGraphElements:1}},mounted(){this.calculateMaxGraphElements(),window.addEventListener("resize",this.calculateMaxGraphElements)},beforeUnmount(){window.removeEventListener("resize",this.calculateMaxGraphElements)},computed:{normalizedGraph(){const e=Math.max(...this.graph),t=Math.min(...this.graph);return e===t?this.graph.map((()=>50)):this.graph.map((r=>5+95*(r-t)/(e-t)))}},methods:{calculateMaxGraphElements(){this.$refs.graph&&(this.maxGraphElements=Math.floor(this.$refs.graph.clientWidth/38),console.log("Может быть максимум столбцов в графике "+this.maxGraphElements),this.$emit("update-maxGraphElements",this.maxGraphElements))}},watch:{graph:{handler:function(){this.calculateMaxGraphElements()},deep:!0}}};const ee=(0,H.Z)(X,[["render",Q]]);var te=ee,re={name:"App",components:{AddTicker:Y,GraphSection:te},data(){return{filter:"",tickers:[],selectedTicker:null,graph:[],page:1}},created(){const e=Object.fromEntries(new URL(window.location).searchParams.entries()),t=["filter","page"];t.forEach((t=>{e[t]&&(this[t]=e[t])}));const r=localStorage.getItem("cryptonomicon-list");r&&(this.tickers=JSON.parse(r),this.tickers.forEach((e=>{O(e.name,(t=>this.updateTicker(e.name,t)))}))),setInterval(this.updateTicker,5e3)},computed:{tooManyTickersAdded(){return this.tickers.length>20},startIndex(){return 6*(this.page-1)},endIndex(){return 6*this.page},filteredTickers(){return this.tickers.filter((e=>e.name.includes(this.filter)))},paginatedTickers(){return this.filteredTickers.slice(this.startIndex,this.endIndex)},hasNextPage(){return this.filteredTickers.length>this.endIndex},pageStateOptions(){return{filter:this.filter,page:this.page}}},methods:{updateGraph(e){while(this.graph.length>e)this.graph.shift()},paintPricelessTickets(e){"-"!==e.price&&void 0!==e.price&&(e.priced=!0)},updateTicker(e,t){this.tickers.filter((t=>t.name===e)).forEach((e=>{e===this.selectedTicker&&this.graph.push(t),e.price=t}))},formatPrice(e){return e&&"number"===typeof e?e>1?e.toFixed(2):e.toPrecision(2):"-"},add(e){const t={name:e,price:"-",priced:!1};this.tickers=[...this.tickers,t],this.filter="",O(t.name,(e=>this.updateTicker(t.name,e)))},select(e){console.log(e),this.selectedTicker=e},handleDelete(e){this.tickers=this.tickers.filter((t=>t!==e)),this.selectedTicker===e&&(this.selectedTicker=null),M(e.name)}},watch:{selectedTicker(){this.graph=[]},tickers(){localStorage.setItem("cryptonomicon-list",JSON.stringify(this.tickers))},paginatedTickers(){0===this.paginatedTickers.length&&this.page>1&&(this.page-=1)},filter(){this.page=1},pageStateOptions(e){window.history.pushState(null,document.title,`${window.location.pathname}?filter=${e.filter}&page=${e.page}`)}}};const ie=(0,H.Z)(re,[["render",v]]);var ne=ie;(0,i.ri)(ne).mount("#app")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,s){if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],s=e[d][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[l])}))?i.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,n,s]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,a=i[0],o=i[1],l=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var d=l(r)}for(t&&t(i);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},i=self["webpackChunkcryptotracker"]=self["webpackChunkcryptotracker"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(7660)}));i=r.O(i)})();
//# sourceMappingURL=app.f40cbcfb.js.map