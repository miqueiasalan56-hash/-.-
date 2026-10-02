const fx=document.getElementById('fx');
for(let i=0;i<26;i++){const t=document.createElement('div');t.className='tower';
t.style.cssText=`--w:${14+Math.random()*34}px;--h:${20+Math.random()*55}vh;--x:${Math.random()*100}%;--d:${4+Math.random()*6}s;--o:${.25+Math.random()*.6}`;fx.appendChild(t);}
const $=id=>document.getElementById(id),scr={boot:$('boot'),menu:$('menu'),panel:$('panel')};
const titles={sobre:'SOBRE MIM',skills:'HABILIDADES',cv:'CURRÍCULO',galeria:'GALERIA',contato:'CONTATO'};
let cur='boot',sel=0;const items=[...document.querySelectorAll('.item')];
function show(k){cur=k;for(const s in scr)scr[s].classList.toggle('on',s===k)}
function pick(i){sel=(i+items.length)%items.length;items.forEach((e,j)=>e.classList.toggle('sel',j===sel));items[sel].focus()}
function open(k){$('ptitle').textContent=titles[k];$('pbody').replaceChildren($('t-'+k).content.cloneNode(true));show('panel');$('pbody').scrollTop=0;
 if(k==='contato')$('fc').addEventListener('submit',ev=>{ev.preventDefault();
  const tx=encodeURIComponent(`Olá, meu nome é ${$('n').value}.\nE-mail: ${$('e').value}\nMensagem: ${$('m').value}`);
  window.open('https://wa.me/5581992914844?text='+tx,'_blank');ev.target.reset()});}
items.forEach(b=>b.addEventListener('click',()=>open(b.dataset.go)));
$('back').onclick=()=>{show('menu');pick(sel)};
scr.boot.addEventListener('click',()=>{show('menu');pick(0)});
addEventListener('keydown',e=>{
 if(cur==='boot'){show('menu');pick(0);return}
 if(cur==='menu'){if(e.key==='ArrowRight')pick(sel+1);if(e.key==='ArrowLeft')pick(sel-1)}
 if(cur==='panel'&&(e.key==='Escape'||e.key==='Backspace')&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)){show('menu');pick(sel)}
});