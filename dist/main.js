(()=>{"use strict";var e,t={400:(e,t,r)=>{e.exports=r.p+"698138a315bda11f77c4.png"}},r={};function i(e){var l=r[e];if(void 0!==l)return l.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),e=i(400),document.querySelector("#plus-button").addEventListener("click",(()=>{!function(){const t=document.querySelector("#grid-container");let r=document.createElement("div");r.id="to-do-form",r.style.gridRow="3/4",r.style.gridColumn="3/4";let i=document.createElement("img");i.src=e,i.className="x-icon icon";let l=document.createElement("input");l.className="form-text-input",l.setAttribute("type","text"),l.placeholder="Title...";let n=document.createElement("textarea");n.className="form-text-input",n.placeholder="Description...",n.style.resize="none",n.rows="3";let o=document.createElement("input");o.setAttribute("type","date"),o.className="form-text-input",o.style.marginBottom="40px";let d=document.createElement("div");d.id="priority-container",d.style.display="flex",d.style.gap="10px";let c=document.createElement("div");c.textContent="LOW:",c.style.color="#4CA64C";let p=document.createElement("input");p.setAttribute("type","radio"),p.name="priority",p.id="low-priority";let u=document.createElement("div");u.textContent="MEDIUM:",u.style.color="#FFFF4C";let a=document.createElement("input");a.setAttribute("type","radio"),a.name="priority",a.id="medium-priority";let m=document.createElement("div");m.textContent="HIGH:",m.style.color="#FF4C4C";let s=document.createElement("input");s.setAttribute("type","radio"),s.name="priority",s.id="high-priority",d.appendChild(c),d.appendChild(p),d.appendChild(u),d.appendChild(a),d.appendChild(m),d.appendChild(s);let y=document.createElement("input");y.setAttribute("type","submit"),r.appendChild(i),r.appendChild(l),r.appendChild(n),r.appendChild(o),r.appendChild(d),r.appendChild(y),t.appendChild(r)}(),function(){let e=document.createElement("div");e.id="above-form-row",e.style.gridRow="2/3",e.style.gridColumn="2/5";let t=document.createElement("div");t.id="below-form-row",t.style.gridRow="4/5",t.style.gridColumn="2/5";let r=document.createElement("div");r.id="left-form-column",r.style.gridRow="2/5",r.style.gridColumn="2/3";let i=document.createElement("div");i.id="right-form-column",i.style.gridRow="2/5",i.style.gridColumn="4/5",document.querySelector("#plus-button-container").style.filter="blur(5px)",document.querySelector("#header").style.filter="blur(5px)",document.querySelector("#sidebar").style.filter="blur(5px)",e.style.filter="blur(5px)",t.style.filter="blur(5px)",r.style.filter="blur(5px)",i.style.filter="blur(5px)"}()}))})();