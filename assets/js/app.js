const WA_NUMBER = ""; // رقم واتساب المعمل بصيغة دولية بدون + (مثال 9647XXXXXXXXX). فارغ = يختار الزبون جهة الاتصال
const IMG = window.WG_IMG;
const T = {
 ar:{dir:"rtl",title:"Woodgate — كتالوج 2026",h1:"كتالوج وود گيت 2026",intro:"أبواب HDF مقاومة للرطوبة، مجموعة YADA بالمقبض المحفور، شفاطات، غرف ملابس وديكور جدران. كلها من معمل واحد في أربيل.",inEd:"موديل في هذه النسخة",srch:"ابحث بكود الموديل",ph:"ابحث بكود الموديل، مثل WG-Y-11",phS:"ابحث بالكود: WG-Y-11",all:"كل الموديلات",allTab:"الكل",res:"نتائج البحث",n:"موديل",e1:"لا يوجد موديل بهذا الكود",e2:"تأكد من الكود، أو جرّب صيغة مثل WG-Y-11 أو 286",foot:"المعمل في أربيل، ووكلاؤنا في كل المحافظات.",footBtn:"اطلب الكتالوج الكامل على الواتساب",ask:"اطلب سعر هذا الموديل على الواتساب",copy:"انسخ رابط الموديل",note:"برسالتك اذكر القياس، وإذا تريده خام للصبغ أو جاهز، واللون أو التشطيب المطلوب.",prev:"السابق",next:"التالي",close:"إغلاق",theme:"تبديل الوضع الليلي",cats:"الفئات",copied:"تم نسخ رابط الموديل",hero:"عينات مجموعة YADA بالمقبض المحفور",
  waFoot:"هلا وود گيت، أريد الكتالوج الكامل والأسعار.",wa:id=>`هلا وود گيت، أريد سعر الموديل ${id}. القياس: ... اللون/التشطيب: ...`,
  c:{yada:"مجموعة YADA",routed:"أبواب محفورة",cseries:"سلسلة C",hoods:"شفاطات",dressing:"غرف ملابس",wall:"ديكور جدران"}},
 en:{dir:"ltr",title:"Woodgate — Catalog 2026",h1:"Woodgate catalog 2026",intro:"Moisture-resistant HDF doors, the YADA collection with routed handles, hoods, dressing rooms and wall decor. All from one factory in Erbil.",inEd:"models in this edition",srch:"Search by model code",ph:"Search by model code, e.g. WG-Y-11",phS:"Search code: WG-Y-11",all:"All models",allTab:"All",res:"Search results",n:"models",e1:"No model with this code",e2:"Check the code, or try a format like WG-Y-11 or 286",foot:"Our factory is in Erbil, with agents in every governorate.",footBtn:"Request the full catalog on WhatsApp",ask:"Request a price for this model on WhatsApp",copy:"Copy model link",note:"In your message, include the size, whether you want it raw for painting or finished, and the color or finish.",prev:"Previous",next:"Next",close:"Close",theme:"Toggle dark mode",cats:"Categories",copied:"Model link copied",hero:"YADA collection samples with routed handles",
  waFoot:"Hello Woodgate, I'd like the full catalog and prices.",wa:id=>`Hello Woodgate, I'd like the price of model ${id}. Size: ... Color/finish: ...`,
  c:{yada:"YADA collection",routed:"Routed doors",cseries:"C series",hoods:"Hoods",dressing:"Dressing rooms",wall:"Wall decor"}},
 ckb:{dir:"rtl",title:"Woodgate — کاتالۆگی 2026",h1:"کاتالۆگی وود گەیت 2026",intro:"دەرگای HDF ی بەرگر لە شێ، کۆمەڵەی YADA بە دەسکی هەڵکۆڵراو، هودی چێشتخانە، ژووری جل و دیکۆری دیوار. هەمووی لە یەک کارگە لە هەولێر.",inEd:"مۆدێل لەم وەشانەدا",srch:"بە کۆدی مۆدێل بگەڕێ",ph:"بە کۆدی مۆدێل بگەڕێ، وەک WG-Y-11",phS:"گەڕان بە کۆد: WG-Y-11",all:"هەموو مۆدێلەکان",allTab:"هەموو",res:"ئەنجامی گەڕان",n:"مۆدێل",e1:"هیچ مۆدێلێک بەم کۆدە نییە",e2:"کۆدەکە بپشکنە، یان شێوەیەکی وەک WG-Y-11 یان 286 تاقی بکەرەوە",foot:"کارگەکەمان لە هەولێرە، و بریکارەکانمان لە هەموو پارێزگاکانن.",footBtn:"داوای کاتالۆگی تەواو بکە لە واتسئاپ",ask:"داوای نرخی ئەم مۆدێلە بکە لە واتسئاپ",copy:"بەستەری مۆدێلەکە کۆپی بکە",note:"لە نامەکەتدا قەبارە بنووسە، ئایا بە خاوی بۆ بۆیەکردن یان ئامادە دەتەوێت، و ڕەنگ یان جۆری تەواوکاری.",prev:"پێشوو",next:"دواتر",close:"داخستن",theme:"گۆڕینی دۆخی شەو",cats:"پۆلەکان",copied:"بەستەری مۆدێلەکە کۆپی کرا",hero:"نموونەکانی کۆمەڵەی YADA بە دەسکی هەڵکۆڵراو",
  waFoot:"سڵاو وود گەیت، کاتالۆگی تەواو و نرخەکانم دەوێت.",wa:id=>`سڵاو وود گەیت، دەمەوێت نرخی مۆدێلی ${id} بزانم. قەبارە: ... ڕەنگ/تەواوکاری: ...`,
  c:{yada:"کۆمەڵەی YADA",routed:"دەرگای هەڵکۆڵراو",cseries:"زنجیرەی C",hoods:"هود",dressing:"ژووری جل",wall:"دیکۆری دیوار"}}
};
const CATS = ["yada","routed","cseries","hoods","dressing","wall"];
const P = window.WG_PRODUCTS;
const $ = s => document.querySelector(s);
const norm = s => s.toUpperCase().replace(/[\s\-_.]/g,"").replace(/^WG/,"");
let cat = "all", list = P, idx = -1, L = "ar";
const t = () => T[L];

function wa(text){ const x = encodeURIComponent(text); return WA_NUMBER ? `https://wa.me/${WA_NUMBER}?text=${x}` : `https://wa.me/?text=${x}`; }
function setLang(l){
  L = T[l] ? l : "ar"; const d = t();
  document.documentElement.lang = L; document.documentElement.dir = d.dir; document.title = d.title;
  document.querySelectorAll("[data-i]").forEach(el => el.textContent = d[el.dataset.i]);
  document.querySelectorAll("#langs button").forEach(b => b.setAttribute("aria-pressed", b.dataset.l===L));
  $("#q").placeholder = matchMedia("(max-width:520px)").matches ? d.phS : d.ph;
  $("#tabs").setAttribute("aria-label", d.cats); $("#dClose").setAttribute("aria-label", d.close);
  $("#theme").setAttribute("aria-label", d.theme); $("#heroImg").alt = d.hero;
  $("#footWa").href = wa(d.waFoot);
  try{ localStorage.setItem("wg-lang", L); }catch(_){}
  const u = new URL(location.href); u.searchParams.set("lang", L); history.replaceState(null,"",u);
  renderTabs(); render(); if($("#dlg").open) open(idx);
}
$("#total").textContent = P.length;

function renderTabs(){
  const counts = {all:P.length}; P.forEach(p=>counts[p.c]=(counts[p.c]||0)+1);
  $("#tabs").innerHTML = [["all",t().allTab],...CATS.map(k=>[k,t().c[k]])].map(([k,n]) =>
    `<button class="tab" data-c="${k}" aria-pressed="${k===cat}"><bdi>${n}</bdi><span>${counts[k]||0}</span></button>`).join("");
}
function render(){
  const q = norm($("#q").value.trim());
  list = P.filter(p => (cat==="all"||p.c===cat) && (!q || norm(p.id).includes(q)));
  $("#secTitle").textContent = q ? t().res : (cat==="all" ? t().all : t().c[cat]);
  $("#secCount").textContent = list.length + " " + t().n;
  $("#grid").innerHTML = list.map((p,i) =>
    `<button class="card" data-i="${i}" aria-label="${p.id}, ${t().c[p.c]}">
       <div class="ph"><img loading="lazy" decoding="async" src="${IMG[p.img]}" alt=""></div>
       <div class="meta"><span class="code">${p.id}</span><bdi class="cat">${t().c[p.c]}</bdi></div>
     </button>`).join("");
  $("#empty").hidden = list.length > 0;
}
function open(i){
  idx = i; const p = list[i];
  $("#dImg").src = IMG[p.img]; $("#dImg").alt = p.id;
  $("#dCode").textContent = p.id; $("#dCat").textContent = t().c[p.c];
  $("#dWa").href = wa(t().wa(p.id));
  $("#dPrev").disabled = i===0; $("#dNext").disabled = i===list.length-1;
  history.replaceState(null,"",location.pathname+location.search+"#"+p.id);
  if(!$("#dlg").open) $("#dlg").showModal();
}
function close(){ $("#dlg").close(); }
$("#dlg").addEventListener("close",()=>history.replaceState(null,"",location.pathname+location.search));
$("#langs").addEventListener("click",e=>{const b=e.target.closest("button"); if(b) setLang(b.dataset.l);});
$("#tabs").addEventListener("click",e=>{const b=e.target.closest(".tab"); if(!b) return; cat=b.dataset.c; renderTabs(); render();});
$("#grid").addEventListener("click",e=>{const b=e.target.closest(".card"); if(b) open(+b.dataset.i);});
$("#q").addEventListener("input",()=>{ if($("#q").value){cat="all";renderTabs();} render(); });
$("#dClose").onclick = close;
$("#dlg").addEventListener("click",e=>{ if(e.target===$("#dlg")) close(); });
$("#dPrev").onclick=()=>idx>0&&open(idx-1);
$("#dNext").onclick=()=>idx<list.length-1&&open(idx+1);
document.addEventListener("keydown",e=>{ if(!$("#dlg").open) return;
  const fwd = t().dir==="rtl" ? "ArrowLeft" : "ArrowRight", back = t().dir==="rtl" ? "ArrowRight" : "ArrowLeft";
  if(e.key===fwd && idx<list.length-1) open(idx+1);
  if(e.key===back && idx>0) open(idx-1); });
function toast(m){ const el=$("#toast"); el.textContent=m; el.classList.add("on"); setTimeout(()=>el.classList.remove("on"),1800); }
$("#dShare").onclick = async ()=>{ const url = location.href.split("#")[0]+"#"+list[idx].id;
  try{ if(navigator.share){ await navigator.share({title:list[idx].id,url}); return; }
       await navigator.clipboard.writeText(url); toast(t().copied); }
  catch(_){ toast(url); } };
try{ const th=localStorage.getItem("wg-theme"); if(th) document.documentElement.dataset.theme=th; }catch(_){}
$("#theme").onclick=()=>{ const cur=document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
  const nx=cur==="dark"?"light":"dark"; document.documentElement.dataset.theme=nx; try{localStorage.setItem("wg-theme",nx);}catch(_){} };
let start = new URLSearchParams(location.search).get("lang");
if(!start){ try{ start = localStorage.getItem("wg-lang"); }catch(_){} }
setLang(start || "ar");
const h = decodeURIComponent(location.hash.slice(1));
if(h){ const i = list.findIndex(p=>p.id===h); if(i>=0) open(i); }
