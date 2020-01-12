window.document.onload = function(e){ 
  console.log("document.onload", e, Date.now() ,window.tdiff,  
  (window.tdiff[0] = Date.now()) && window.tdiff.reduce(fred) ); 
}