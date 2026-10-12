'use strict';
const projects = [
 {id:'underwater-enemy',name:'Fish of Fortune — Underwater Enemy',short:'Underwater Enemy',brand:'Fish of Fortune',bg:'#243e4c',genre:{en:'Arcade / Casual',es:'Arcade / Casual'},interaction:{en:'Tap to Aim & Shoot',es:'Toca para apuntar y disparar'}},
 {id:'idle-chef-pingo',name:'Fish of Fortune — Idle Chef Pingo',short:'Idle Chef Pingo',brand:'Fish of Fortune',bg:'#464736',genre:{en:'Idle / Simulation',es:'Idle / Simulación'},interaction:{en:'Tap to Upgrade · Drag to Explore',es:'Toca para mejorar · Arrastra para explorar'}},
 {id:'chained-treasure',name:'Fish of Fortune — Chained Treasure Slot',short:'Chained Treasure Slot',brand:'Fish of Fortune',bg:'#4a382c',genre:{en:'Slots / Casual',es:'Tragamonedas / Casual'},interaction:{en:'Tap to Spin',es:'Toca para girar'}},
 {id:'merge-chain',name:'The Merge Chain — Spire Defense',short:'The Merge Chain',brand:'Spire Defense',bg:'#393449',genre:{en:'Merge / Tower Defense',es:'Fusión / Defensa de torres'},interaction:{en:'Drag & Drop to Merge',es:'Arrastra y suelta para fusionar'}},
 {id:'havoc-crew',name:'Havoc Crew',short:'Havoc Crew',brand:'',bg:'#423744',genre:{en:'Action / Shooter',es:'Acción / Disparos'},interaction:{en:'Drag to Move · Auto-Shoot',es:'Arrastra para moverte · Disparo automático'}},
 {id:'tiki-bar-merge',name:'Fish of Fortune — Tiki Bar Merge',short:'Tiki Bar Merge',brand:'Fish of Fortune',bg:'#2f4339',genre:{en:'Merge / Puzzle',es:'Fusión / Rompecabezas'},interaction:{en:'Drag & Drop to Merge',es:'Arrastra y suelta para fusionar'}},
 {id:'shiba-survival',name:'Shiba Survival',short:'Shiba Survival',brand:'Shiba Story Go!',bg:'#3c4830',genre:{en:'Action / Survival',es:'Acción / Supervivencia'},interaction:{en:'Drag to Move · Auto-Attack',es:'Arrastra para moverte · Ataque automático'}}
];
const copy = {
 en:{themeLight:'Light',themeDark:'Dark',switchLight:'Switch to light mode',switchDark:'Switch to dark mode',ribbonStrategy:'CREATIVE STRATEGY',ribbonAds:'PLAYABLE ADS',ribbonGame:'GAME DESIGN',ribbonMotion:'MOTION DESIGN',ribbonInteractive:'INTERACTIVE EXPERIENCES',cardType:'Playable Ad',skip:'Skip to work',role:'Playable Ads Designer',navWork:'Work',navExpertise:'Expertise',navAbout:'About',contactMe:'Contact me',hero1:'Small games.',hero2:'Big ideas.',heroIntro:'I turn creative concepts into playful ad experiences. Design, motion, and a little game magic.',explore:'Explore my work',heroNote:'Creative thinking. Playful execution.',artLabel:'Built for curiosity.',workEyebrow:'A little glimpse into my world',workTitle:'Selected work<span class="lime">.</span>',workNote:'Different worlds. Different mechanics.<br>One playful mindset.',expertiseEyebrow:'From the first idea to the final experience',expertiseTitle:'A creative toolkit<br>for <em>play.</em>',expertiseIntro:'A mix of design, storytelling, and interactive thinking. For full production, I collaborate with a team across specialist disciplines.',aboutEyebrow:'Behind the work',aboutTitle:"Hi, I'm Narine.<br>I think in <span class=\"lavender\">possibilities.</span>",aboutText:"I'm a Playable Ads Designer working at the intersection of visual design, game ideas, and interactive experiences. I help turn a concept into something people want to explore.",aboutTeam:'Some projects are individual; others are a team effort. I collaborate across creative strategy, game design, motion, and development to bring the complete experience together.',tag1:'Design with intention',tag2:'Create with curiosity',tag3:'Build together',contactEyebrow:'New project? New opportunity?',contactTitle:"Let's make<br>something <em>playful.</em>",contactText:"Let's talk about creative projects,<br>collaborations, and design roles.",contactPending:'Contact details coming soon',footerRole:'Playable Ads Designer',backTop:'Back to top',projectPreview:'Project preview',selectedProject:'Selected project',project:'Project',type:'Type',genre:'Genre',interaction:'Interaction',typeValue:'Interactive Playable Ad',viewProject:'View project',close:'Close project',previous:'Previous project',next:'Next project',imageAlt:'Playable ad screenshot for',meta:'Playable ad design, creative strategy and game experiences by Narine Saghoyan. Explore selected work and collaboration opportunities.',navigation:'Main navigation',language:'Language'},
 es:{themeLight:'Claro',themeDark:'Oscuro',switchLight:'Cambiar a modo claro',switchDark:'Cambiar a modo oscuro',ribbonStrategy:'ESTRATEGIA CREATIVA',ribbonAds:'ANUNCIOS JUGABLES',ribbonGame:'DISEÑO DE JUEGOS',ribbonMotion:'DISEÑO DE MOVIMIENTO',ribbonInteractive:'EXPERIENCIAS INTERACTIVAS',cardType:'Anuncio jugable',skip:'Ir a los proyectos',role:'Diseñadora de Playable Ads',navWork:'Proyectos',navExpertise:'Especialidades',navAbout:'Sobre mí',contactMe:'Contáctame',hero1:'Pequeños juegos.',hero2:'Grandes ideas.',heroIntro:'Transformo conceptos creativos en anuncios que invitan a jugar. Diseño, movimiento y un poco de magia.',explore:'Explora mis proyectos',heroNote:'Ideas creativas. Ejecución con juego.',artLabel:'Hecho para despertar curiosidad.',workEyebrow:'Un vistazo a mi mundo',workTitle:'Proyectos destacados<span class="lime">.</span>',workNote:'Distintos mundos. Distintas mecánicas.<br>La misma pasión por jugar.',expertiseEyebrow:'De la primera idea a la experiencia final',expertiseTitle:'Creatividad diseñada<br>para <em>jugar.</em>',expertiseIntro:'Una combinación de diseño, narrativa e interactividad. Para la producción completa, colaboro con un equipo de especialistas.',aboutEyebrow:'Detrás de los proyectos',aboutTitle:'Hola, soy Narine.<br>Pienso en <span class="lavender">posibilidades.</span>',aboutText:'Soy diseñadora de Playable Ads. Mi trabajo une diseño visual, ideas de juego y experiencias interactivas. Ayudo a convertir un concepto en algo que las personas quieran explorar.',aboutTeam:'Algunos proyectos son individuales; otros se crean en equipo. Colaboro en estrategia creativa, diseño de juegos, animación y desarrollo para dar forma a la experiencia completa.',tag1:'Diseñar con intención',tag2:'Crear con curiosidad',tag3:'Construir en equipo',contactEyebrow:'¿Un proyecto? ¿Una oportunidad?',contactTitle:'Creemos algo<br>que invite a <em>jugar.</em>',contactText:'Hablemos de proyectos creativos,<br>colaboraciones y oportunidades de diseño.',contactPending:'Datos de contacto próximamente',footerRole:'Diseñadora de Playable Ads',backTop:'Volver arriba',projectPreview:'Vista del proyecto',selectedProject:'Proyecto destacado',project:'Proyecto',type:'Tipo',genre:'Género',interaction:'Interacción',typeValue:'Anuncio interactivo jugable',viewProject:'Ver proyecto',close:'Cerrar proyecto',previous:'Proyecto anterior',next:'Siguiente proyecto',imageAlt:'Captura del anuncio jugable de',meta:'Diseño de anuncios jugables, estrategia creativa y experiencias de juego por Narine Saghoyan. Explora sus proyectos y oportunidades de colaboración.',navigation:'Navegación principal',language:'Idioma'}
};
const expertise = [
 {en:['Playable Ads Design','UI/UX, visual design, and interactive experiences that make the first moments count.'],es:['Diseño de Playable Ads','UI/UX, diseño visual y experiencias interactivas que dan sentido a los primeros momentos.']},
 {en:['Playable Ads Development','HTML5 development, gameplay implementation, and technical optimization, in collaboration with the development team.'],es:['Desarrollo de Playable Ads','Desarrollo HTML5, implementación de mecánicas de juego y optimización técnica, en colaboración con el equipo de desarrollo.']},
 {en:['Motion Design','2D/3D animation, visual effects, and transitions that bring ideas to life.'],es:['Diseño de movimiento','Animación 2D/3D, efectos visuales y transiciones que dan vida a las ideas.']},
 {en:['Game Design','Game mechanics, level design, and player experiences shaped around a clear creative concept.'],es:['Diseño de juegos','Mecánicas, diseño de niveles y experiencias de juego construidas a partir de un concepto creativo claro.']},
 {en:['Creative Strategy','Ad concepts, engaging hooks, and creative approaches designed with conversion in mind.'],es:['Estrategia creativa','Conceptos publicitarios, ideas que captan la atención y enfoques creativos orientados a la conversión.']}
];
let language='en';
try{const saved=localStorage.getItem('narine-language');if(saved==='es')language='es';}catch{}
let theme=document.documentElement.dataset.theme==='light'?'light':'dark';
function updateThemeControl(){
 const c=copy[language],isLight=theme==='light',button=document.getElementById('themeToggle');
 const label=isLight?c.switchDark:c.switchLight;
 button.setAttribute('aria-label',label);button.title=label;button.setAttribute('aria-pressed',String(isLight));
 document.getElementById('themeLabel').textContent=isLight?c.themeDark:c.themeLight;
}
function setTheme(value){
 theme=value==='light'?'light':'dark';document.documentElement.dataset.theme=theme;
 document.querySelector('meta[name="theme-color"]').content=theme==='light'?'#faf9f5':'#141416';
 updateThemeControl();try{localStorage.setItem('narine-theme',theme);}catch{}
}
document.getElementById('themeToggle').addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
let activeProject=0;
const dialog=document.getElementById('projectDialog');
function renderProjects(){
 const grid=document.getElementById('workGrid');
 if(revealObserver)grid.querySelectorAll('.project-card').forEach(card=>revealObserver.unobserve(card));
 grid.replaceChildren();
 projects.forEach((p,index)=>{
  const card=document.createElement('button');card.type='button';card.className='project-card';card.setAttribute('aria-label',`${copy[language].viewProject}: ${p.name}`);card.setAttribute('aria-haspopup','dialog');card.style.setProperty('--card-bg',p.bg);
  card.innerHTML=`<div class="project-image"><img src="assets/${p.id}.webp" alt="${copy[language].imageAlt} ${p.name}" loading="lazy" width="990" height="1766"><span class="card-index">${String(index+1).padStart(2,'0')}</span><span class="card-open" aria-hidden="true">↗</span></div><div class="card-info"><span class="card-franchise">${p.brand||copy[language].typeValue}</span><h3>${p.short}</h3><div class="card-meta"><span>${p.genre[language]}</span><i>·</i><span>${copy[language].cardType}</span></div></div>`;
  card.addEventListener('click',()=>openProject(index));grid.append(card);
 });
}
function renderServices(){
 const previous=[...document.querySelectorAll('.service')].map(d=>d.open);
 const parent=document.getElementById('services');parent.replaceChildren();
 expertise.forEach((s,i)=>{const d=document.createElement('details');d.className='service';d.open=previous.length?previous[i]:i===0;d.innerHTML=`<summary><span class="service-number">0${i+1}</span><span class="service-name">${s[language][0]}</span><span class="service-plus" aria-hidden="true">+</span></summary><p>${s[language][1]}</p>`;parent.append(d);});
}
function renderDialog(){
 const p=projects[activeProject],c=copy[language];
 document.getElementById('dialogTitle').textContent=p.short;
 const img=document.getElementById('dialogImage');img.src=`assets/${p.id}.webp`;img.alt=`${c.imageAlt} ${p.name}`;
 document.getElementById('dialogMetadata').innerHTML=[[c.project,p.name],[c.type,c.typeValue],[c.genre,p.genre[language]],[c.interaction,p.interaction[language]]].map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
 document.getElementById('projectNumber').textContent=`${String(activeProject+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}`;
 document.getElementById('closeDialog').setAttribute('aria-label',c.close);document.getElementById('previousProject').setAttribute('aria-label',c.previous);document.getElementById('nextProject').setAttribute('aria-label',c.next);
}
function openProject(index){activeProject=index;renderDialog();dialog.showModal();document.body.classList.add('modal-open');document.getElementById('closeDialog').focus();}
function changeLanguage(lang){
 language=lang;document.documentElement.lang=lang;const c=copy[lang];
 document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=c[el.dataset.i18n]);
 document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
 document.title=lang==='en'?'Narine Saghoyan — Playable Ads Designer':'Narine Saghoyan — Diseñadora de Playable Ads';
 document.querySelector('meta[name="description"]').content=c.meta;document.getElementById('nav').setAttribute('aria-label',c.navigation);document.querySelector('.languages').setAttribute('aria-label',c.language);
 renderProjects();renderServices();renderDialog();updateThemeControl();setupScrollReveals();try{localStorage.setItem('narine-language',lang);}catch{}
}
document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>changeLanguage(el.dataset.lang)));
document.getElementById('closeDialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const box=dialog.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)dialog.close();});
document.getElementById('previousProject').addEventListener('click',()=>{activeProject=(activeProject+projects.length-1)%projects.length;renderDialog();});
document.getElementById('nextProject').addEventListener('click',()=>{activeProject=(activeProject+1)%projects.length;renderDialog();});
document.getElementById('year').textContent=new Date().getFullYear();
// Motion is progressive: content stays visible when observer support is absent.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
let revealObserver=null;
const revealedNodes=new WeakSet();
function setupScrollReveals(){
 if(reducedMotion.matches||!('IntersectionObserver' in window))return;
 if(!revealObserver){revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');entry.target.classList.add('revealed');revealObserver.unobserve(entry.target);}});
 },{threshold:0.08,rootMargin:'0px 0px -20px 0px'});}
 const cardsPerRow=window.matchMedia('(max-width: 760px)').matches?1:3;
 document.querySelectorAll('.section-top,.project-card,.expertise-intro,.services,.about-label,.about-copy,.contact > .eyebrow,.contact > h2,.contact-bottom').forEach(node=>{
  if(revealedNodes.has(node))return;revealedNodes.add(node);
  if(node.classList.contains('project-card')){const index=[...node.parentElement.children].indexOf(node);node.style.setProperty('--reveal-delay',`${(index%cardsPerRow)*80}ms`);}
  node.classList.add('reveal-pending');revealObserver.observe(node);
 });
}
const heroArt=document.querySelector('.hero-art');
const phones=[...heroArt.querySelectorAll('.phone')];
const phoneDepth=[0.7,0.9,1.2];
let pointerFrame=0;
function resetPhoneMotion(){
 if(pointerFrame){cancelAnimationFrame(pointerFrame);pointerFrame=0;}
 phones.forEach(phone=>{phone.style.removeProperty('--phone-x');phone.style.removeProperty('--phone-y');phone.style.removeProperty('--phone-tilt');});
}
heroArt.addEventListener('pointermove',event=>{
 if(reducedMotion.matches||!finePointer.matches)return;
 const rect=heroArt.getBoundingClientRect();
 const x=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1));
 const y=Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1));
 if(pointerFrame)cancelAnimationFrame(pointerFrame);
 pointerFrame=requestAnimationFrame(()=>{phones.forEach((phone,i)=>{const d=phoneDepth[i];phone.style.setProperty('--phone-x',`${x*8*d}px`);phone.style.setProperty('--phone-y',`${y*6*d}px`);phone.style.setProperty('--phone-tilt',`${x*2*d}deg`);});pointerFrame=0;});
});
heroArt.addEventListener('pointerleave',resetPhoneMotion);
reducedMotion.addEventListener('change',()=>{
 resetPhoneMotion();
 if(reducedMotion.matches){document.querySelectorAll('.reveal-pending').forEach(node=>node.classList.remove('reveal-pending'));if(revealObserver){revealObserver.disconnect();revealObserver=null;}}
 else setupScrollReveals();
});
changeLanguage(language);
