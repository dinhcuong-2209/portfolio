const cursor=document.querySelector('.cursor'), follower=document.querySelector('.cursor-follower');
let mx=innerWidth/2,my=innerHeight/2,fx=mx,fy=my;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
function animate(){fx+=(mx-fx)*.12;fy+=(my-fy)*.12;follower.style.left=fx+'px';follower.style.top=fy+'px';requestAnimationFrame(animate)} animate();

document.querySelectorAll('a,.project,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{follower.style.width='60px';follower.style.height='60px';follower.style.background='rgba(255,255,255,.08)'});
  el.addEventListener('mouseleave',()=>{follower.style.width='34px';follower.style.height='34px';follower.style.background='transparent'});
});

const modal=document.querySelector('.project-modal');
const title=document.querySelector('.modal-title');
const type=document.querySelector('.modal-type');
document.querySelectorAll('.project').forEach(project=>{
  project.addEventListener('click',()=>{
    title.textContent=project.dataset.title;
    type.textContent='PROJECT / '+project.dataset.type;
    modal.classList.add('open');
    document.body.style.overflow='hidden';
  });
});
document.querySelector('.modal-close').addEventListener('click',()=>{
  modal.classList.remove('open'); document.body.style.overflow='';
});
addEventListener('keydown',e=>{if(e.key==='Escape'){modal.classList.remove('open');document.body.style.overflow=''}});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
  });
});
