(function(){
  var lb=document.getElementById('lb'),img=document.getElementById('lbImg');
  document.querySelectorAll('.shot').forEach(function(b){
    b.addEventListener('click',function(){
      var s=b.querySelector('img');img.src=s.src;img.alt=s.alt;
      if(lb.showModal)lb.showModal();
    });
  });
  document.getElementById('lbClose').addEventListener('click',function(){lb.close()});
  lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});

  var map={'1':'games','2':'product','3':'brand','4':'more','c':'contact','с':'contact'};
  document.addEventListener('keydown',function(e){
    if(e.ctrlKey||e.metaKey||e.altKey||lb.open)return;
    var t=e.target.tagName;if(t==='INPUT'||t==='TEXTAREA')return;
    var id=map[e.key.toLowerCase()];
    if(id){var el=document.getElementById(id);if(el){el.scrollIntoView();}}
  });

  var en=document.documentElement.lang==='en';
  document.querySelectorAll('[data-lang]').forEach(function(a){
    a.addEventListener('click',function(){
      try{localStorage.setItem('lang',a.getAttribute('data-lang'))}catch(_){}
      a.href=a.getAttribute('href').split('#')[0]+location.hash;
    });
  });

  document.querySelectorAll('[data-copy]').forEach(function(b){
    var label=b.textContent;
    b.addEventListener('click',function(){
      var v=b.getAttribute('data-copy'),done=function(){b.textContent=en?'Copied':'Скопировано';setTimeout(function(){b.textContent=label},1500)};
      try{navigator.clipboard.writeText(v).then(done,function(){sel(b)})}catch(_){sel(b)}
    });
  });
  // PDF = the browser's print dialog ("Save as PDF") with the print stylesheet. Lazy images are forced in first, otherwise unscrolled screens print blank.
  function eager(){document.querySelectorAll('img[loading="lazy"]').forEach(function(i){i.loading='eager'})}
  window.addEventListener('beforeprint',eager);
  document.querySelectorAll('[data-pdf]').forEach(function(b){
    b.addEventListener('click',function(){
      eager();
      var imgs=[].slice.call(document.querySelectorAll('.hero img,main img'));
      Promise.all(imgs.map(function(i){return i.decode?i.decode().catch(function(){}):null})).then(function(){window.print()});
    });
  });

  function sel(b){var c=b.parentNode.querySelector('code');var r=document.createRange();r.selectNodeContents(c);var s=getSelection();s.removeAllRanges();s.addRange(r);}
})();
