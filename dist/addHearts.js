// This script appends a few floating heart SVGs into the hearts-layer for visual effect.
// It's imported dynamically by the App component via index.html injection.
(function addHearts(){
  try {
    const layer = document.querySelector('.hearts-layer');
    if (!layer) return;
    const svgns = 'http://www.w3.org/2000/svg';
    for (let i=0;i<6;i++){
      const svg = document.createElementNS(svgns,'svg');
      svg.setAttribute('width','36');
      svg.setAttribute('height','36');
      svg.setAttribute('viewBox','0 0 24 24');
      svg.style.left = (10 + Math.random()*80) + '%';
      svg.style.top = (60 + Math.random()*30) + '%';
      svg.style.position = 'absolute';
      svg.style.animationDelay = (Math.random()*3) + 's';
      svg.innerHTML = '<path fill="url(#g)" d="M12 21s-7-4.35-9.5-6.5C-0.8 11.1 3 5 8 6.5 9.9 7.2 12 10 12 10s2.1-2.8 4-3.5c5-1.5 8.8 4.6 5.5 8L12 21z"></path>';
      layer.appendChild(svg);
    }
  } catch(e){}
})();
