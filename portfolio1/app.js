// -------typinganimation--
var typed = new Typed('.typing', {
    strings: ['And I am a Frontend Developer', 'And I am a Frontend Developer'],
    typeSpeed: 200,
    backSpeed:150,
    loop:true
  });

  // -----activelink-------
  let section=document.querySelectorAll('section')
  let navlink=document.querySelectorAll('nav ul li a')
  window.onscroll=()=>{
    section.forEach(sec=>{
      let top=window.scrollY;
      let offset=sec.offset-150;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id')
      if(top>offset && top<offset + height){
        navlink.forEach(link=>{
          link.classList.remove('active')
          document.querySelector('nav ul li a[href*='+id+']').classList.add('active')
        })
      }
    })
  }

  
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});