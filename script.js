(function(){
  var root=document.documentElement, btn=document.getElementById('themeBtn');
  try{ var saved=localStorage.getItem('theme'); if(saved) root.setAttribute('data-theme',saved); }catch(e){}
  if(btn) btn.addEventListener('click',function(){
    var cur=root.getAttribute('data-theme');
    if(!cur){ cur=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'; }
    var next=cur==='dark'?'light':'dark';
    root.setAttribute('data-theme',next);
    try{ localStorage.setItem('theme',next); }catch(e){}
  });
  var yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();
})();
