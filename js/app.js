const pupil = document.querySelector('.pupil');
const rota1 = document.querySelector('.letter--1');
const rota2 = document.querySelector('.letter--2');
const rota3 = document.querySelector('.letter--3');
const rota4 = document.querySelector('.letter--4');
const rota5 = document.querySelector('.letter--5');
pupil.addEventListener('animationend', (event) => {
  if (event.animationName == 'eye') {
    animateRotate(rota1);
    rota1.addEventListener('animationend', (event) => {
      if (event.animationName == 'rota') {
        animateRotate(rota2);
        rota2.addEventListener('animationend', (event) => {
          if (event.animationName == 'rota') {
            animateRotate(rota3);
            rota3.addEventListener('animationend', (event) => {
              if (event.animationName == 'rota') {
                animateRotate(rota4);
                rota4.addEventListener('animationend', (event) => {
                  if (event.animationName == 'rota') {
                    animateRotate(rota5)
                  }

                });
              }

            });
          }

        });
      }

    });
  }

})

const animateRotate = (element) => {
  element.style.animationName = 'rota';
  element.style.animationDuration = '2s';
  element.style.animationIterationCount = '1';
  element.style.animationTimingFunction = 'linear';
};