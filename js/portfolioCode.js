// Get the modal



// Get the image and insert it inside the modal - use its "alt" text as a caption
const imgs = document.querySelectorAll('.myImg');

var captionText = document.querySelectorAll(".caption");
const mostrarmodal=(e)=>{
    let cual = `mymodal${e.target.name}`
    let ventana = document.getElementById(cual)
    ventana.style.display ='block'
    let link = "img"+e.target.name
    let modalImgSrc = e.target.src
    let ventanamodal = document.getElementById(link);
    ventanamodal.src=modalImgSrc
    switch(e.target.name){
      case "01":
        captionText[0].innerHTML = e.target.alt
      break
      case "02":
        captionText[1].innerHTML = e.target.alt
      break
      case "03":
        captionText[2].innerHTML = e.target.alt
      break
    }

    let closemodal = ventana.childNodes[3]
    closemodal.addEventListener('click', ()=>{
      ventana.style.display="none"
    })
    
}
imgs.forEach((img) => {
  img.addEventListener('click', mostrarmodal)
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
console.log(span)

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

const typed = new Typed('.typed', {

  strings:['//Hi, my name is']
  ,
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

})

particlesJS({
  "particles": {
    "number": {
      "value": 15,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.16034120608655228,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 12.181158184520175,
        "size_min": 4.060386061506725,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 2
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

/*==================== SCROLL REVEAL ANIMATION ====================*/


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal();

sr.reveal('.header', {
  duration:2000,
  origin: 'top',
  distance: '-180px'
});
sr.reveal('.link-left', {
  duration:1200,
  origin: 'top',
  distance: '-180px'
});
sr.reveal('.email', {
  duration:1500,
  origin: 'top',
  distance: '-180px'
});
sr.reveal('.principal', {
  duration:3000,
  origin: 'top',
  distance: '-180px'
});
sr.reveal('.portfolio', {
  duration:1000,
  origin: 'top',
  distance: '-180px'
});
sr.reveal('.card', {
  duration:2000,
  origin: 'top',
  distance: '-150px'
});
sr.reveal('.other-section', {
  duration:1800,
  origin: 'top',
  distance: '-180px'
});
sr.reveal('.card-other', {
  duration:3000,
  origin: 'top',
  distance: '-200px'
});
sr.reveal('.header-info', {
  duration:2000,
  origin: 'top',
  distance: '-200px'
});
sr.reveal('.skills', {
  duration:3000,
  origin: 'top',
  distance: '-200px'
});
sr.reveal('.technologies', {
  duration:3000,
  origin: 'top',
  distance: '-200px'
});
sr.reveal('.contact', {
  duration:3000,
  origin: 'top',
  distance: '-200px'
});
sr.reveal('.footer-page', {
  duration:3000,
  origin: 'top',
  distance: '-200px'
});

/* {
  origin: 'top',
  distance: '60px',
  duration: 1000,
  reset: true
} */