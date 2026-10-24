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

  document.querySelectorAll('[data-copy]').forEach(function(b){
    b.addEventListener('click',function(){
      var v=b.getAttribute('data-copy'),done=function(){b.textContent='Скопировано';setTimeout(function(){b.textContent='Копировать'},1500)};
      try{navigator.clipboard.writeText(v).then(done,function(){sel(b)})}catch(_){sel(b)}
    });
  });
  function sel(b){var c=b.parentNode.querySelector('code');var r=document.createRange();r.selectNodeContents(c);var s=getSelection();s.removeAllRanges();s.addRange(r);}
})();
