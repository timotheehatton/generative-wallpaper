const colorArray = [
  [
      {
          r: 75,
          g: 86,
          b: 120
      },
      {
          r: 228,
          g: 175,
          b: 124
      },
      {
          r: 84,
          g: 144,
          b: 148
      },
      {
          r: 238,
          g: 204,
          b: 146
      },
      {
          r: 220,
          g: 135,
          b: 118
      },
      {
          r: 248,
          g: 125,
          b: 97
      },
      {
          r: 77,
          g: 186,
          b: 184
      },
  ],
  [
      {
          r: 227,
          g: 193,
          b: 213
      },
      {
          r: 29,
          g: 52,
          b: 74
      },
      {
          r: 255,
          g: 89,
          b: 70
      },
      {
          r: 255,
          g: 133,
          b: 84
      },
      {
          r: 224,
          g: 212,
          b: 117
      },
      {
          r: 124,
          g: 209,
          b: 209
      },
      {
          r: 11,
          g: 143,
          b: 208
      },
      {
          r: 237,
          g: 191,
          b: 22
      },
  ],
  [
      {
          r: 1,
          g: 136,
          b: 206
      },
      {
          r: 118,
          g: 217,
          b: 230
      },
      {
          r: 20,
          g: 45,
          b: 68
      },
      {
          r: 240,
          g: 200,
          b: 11
      },
      {
          r: 255,
          g: 125,
          b: 1
      },
  ],
  [
      {
          r: 96,
          g: 1,
          b: 69
      },
      {
          r: 255,
          g: 3,
          b: 57
      },
      {
          r: 77,
          g: 0,
          b: 7
      },
      {
          r: 195,
          g: 2,
          b: 134
      },
      {
          r: 194,
          g: 194,
          b: 194
      },
      {
          r: 237,
          g: 207,
          b: 44
      },
      {
          r: 164,
          g: 0,
          b: 10
      },

  ],
  [
      {
          r: 1,
          g: 24,
          b: 33
      },
      {
          r: 4,
          g: 96,
          b: 95
      },
      {
          r: 0,
          g: 63,
          b: 118
      },
      {
          r: 4,
          g: 124,
          b: 158
      },
      {
          r: 156,
          g: 214,
          b: 216
      },
      {
          r: 222,
          g: 72,
          b: 15
      },
      {
          r: 252,
          g: 112,
          b: 62
      },

  ],
  //
  [
    {
      r:70,
      g:99,
      b:101
    },
    {
      r:180,
      g:154,
      b:103
    },
    {
      r:218,
      g:216,
      b:167
    },
    {
      r:255,
      g:158,
      b:157
    },
    {
      r:255,
      g:61,
      b:127
    },
  ],
  [
    {
      r:27,
      g:103,
      b:107
    },
    {
      r:81,
      g:149,
      b:72
    },
    {
      r:136,
      g:196,
      b:37
    },
    {
      r:190,
      g:242,
      b:2
    },
    {
      r:234,
      g:253,
      b:230
    },
  ],
  [
    {
      r:65,
      g:62,
      b:74
    },
    {
      r:115,
      g:98,
      b:110
    },
    {
      r:179,
      g:129,
      b:132
    },
    {
      r:240,
      g:180,
      b:158
    },
    {
      r:247,
      g:228,
      b:190
    },
  ],
  [
    {
      r:252,
      g:184,
      b:197
    },
    {
      r:255,
      g:106,
      b:137
    },
    {
      r:249,
      g:49,
      b:112
    },
    {
      r:244,
      g:24,
      b:91
    },
  ],
  [
    {
      r:131,
      g:241,
      b:225
    },
    {
      r:205,
      g:245,
      b:217
    },
    {
      r:255,
      g:230,
      b:209
    },
    {
      r:255,
      g:207,
      b:200
    },
    {
      r:255,
      g:189,
      b:189
    },
  ],
  [
    {
      r:161,
      g:76,
      b:148
    },
    {
      r:222,
      g:155,
      b:220
    },
    {
      r:232,
      g:211,
      b:235
    },
    {
      r:241,
      g:222,
      b:232
    },
    {
      r:250,
      g:232,
      b:230
    },
  ],
  [
    {
      r:168,
      g:230,
      b:206
    },
    {
      r:220,
      g:237,
      b:194
    },
    {
      r:255,
      g:211,
      b:181
    },
    {
      r:255,
      g:170,
      b:166
    },
    {
      r:255,
      g:140,
      b:148
    },
  ],
  [
    {
      r:64,
      g:24,
      b:67
    },
    {
      r:114,
      g:38,
      b:99
    },
    {
      r:178,
      g:52,
      b:120
    },
    {
      r:240,
      g:134,
      b:148
    },
    {
      r:247,
      g:212,
      b:184
    },
  ],
  [
    {
      r:5,
      g:102,
      b:141
    },
    {
      r:2,
      g:128,
      b:144
    },
    {
      r:0,
      g:168,
      b:150
    },
    {
      r:2,
      g:195,
      b:154
    },
    {
      r:240,
      g:243,
      b:189
    },
  ],
  [
    {
      r:253,
      g:197,
      b:245
    },
    {
      r:247,
      g:174,
      b:248
    },
    {
      r:179,
      g:136,
      b:235
    },
    {
      r:128,
      g:147,
      b:241
    },
    {
      r:114,
      g:221,
      b:247
    },
  ],
]

// params

let fieldIntensity = 200;

let fieldScale = 150;

let agentCount = 6000;

let agentSize = 1.3;

let agentAlpha = 100;

let stepSize = .5;

let field;

let agents;

let imei = ''

let seed;

let oneRender = false;

let colorSet = colorArray[3]
let indexColorChange = 0;
let indexColorStep = 0;
let randomRbg;
let prevRandomColor;

let minIntensity = 6;
let maxIntensity = 12;

let indexDrawing = 0;

let stopDrawing = 60;

function createSeed(imei) {
  let tempSeed = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let index = 0; index < imei.length; index++) {
    const element = imei[index];
    if(element.match(/[a-z]/i)) {
      let char = element.toLowerCase();
      if (alphabet.indexOf(char) !== -1){
        tempSeed += "" + (alphabet.indexOf(char) + 1 + 10)
    }

    } else {
      tempSeed += "" + element
    }

    seed = parseInt(tempSeed)
  }
}

function getFieldImei() {
  let formInput = document.querySelector('.form__input')
  let formButton = document.querySelector('.form__button')

  formButton.addEventListener('click', function(e) {
    imei = formInput.value
    createSeed(imei)
    launchSketch()
  })
}

function launchSketch() {

  var sketch = function(p) {

    p.setup = function() {

      var canvasEl = p.createCanvas(375, 812);
      canvasEl.parent('sketch-holder');

      p.randomSeed(seed);

      randomIntensity = p.random(minIntensity, maxIntensity)

      colorSet = colorArray[Math.round(p.random(colorArray.length -1))]

      stopDrawing = p.random(60, 80)

      stepSize = p.random(0.5, 0.8)

      agentCount = p.random(6000, 7000)

      fieldScale = p.random(150, 250)

      field = new PerlinField(randomIntensity, fieldScale, p);
      agents = [];

      let a;
      p.randomSeed(seed);
      for (let i = agentCount - 1; i >= 0; i--) {
        let angle = p.random(p.TWO_PI)
        let position = p.createVector(p.random(p.width), p.random(p.height))
        a = new Agent(position, seed, angle, p);
        a.stepSize = stepSize;
        agents.push(a);
      };

      p.pixelDensity(2);
      p.frameRate(10);

      p.background(0);
      randomRbg = Math.round(p.random(colorSet.length -1))
      prevRandomColor = randomRbg
    }

    function getRandomColor() {
      let randomRbgStep = Math.round(p.random(colorSet.length -1))
      if(randomRbgStep === prevRandomColor) {
          getRandomColor()
      } else {
          prevRandomColor = randomRbgStep
          randomRbg = randomRbgStep
          return randomRbg
      }
    };

    function returnRandom() {
      let randomRbgStep = Math.round(p.random(colorSet.length -1))
      return randomRbgStep
    }

    p.draw = function() {

      p.randomSeed(seed);

      if(indexDrawing < stopDrawing) {
          indexDrawing += 1

          p.randomSeed(seed);
          agents.forEach(function(a) {
            let randomBgTemp = Math.round(p.random(colorSet.length -1))
              a.angle = field.getFieldValue(a.position, seed); // Utilisation de la valeur du champ à l'endroit où se trouve l'agent comme nouvelle valeur de l'angle.
              let position = p.createVector(p.random(p.width), p.random(p.height))
              a.updatePosition(position);
              p.stroke(colorSet[randomBgTemp].r, colorSet[randomBgTemp].g, colorSet[randomBgTemp].b);
              p.strokeWeight(agentSize);
              p.line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
          });
      } else {
        if(oneRender === false) {
          oneRender = true
          download()
        }
      }
    }

    function refreshBackground() {
      background(255);
    }

    function dataURLtoBlob(dataurl) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type:mime});
  }

    function download() {

      var button = document.querySelector('.generate_download');
      var labelEl = document.querySelector('.generate__form__label-dl');

      var canvas = document.querySelector('canvas');

      button.classList.remove('hide')
      labelEl.classList.remove('hide')

      var dataURL = canvas.toDataURL('image/png');
      var blob = dataURLtoBlob(dataURL);

      button.href = URL.createObjectURL(blob);blob;

    }

  }

  var myp5 = new p5(sketch)
}

function pageAnimation() {
  let body = document.querySelector('body')
  setTimeout(() => {
    body.classList.add('active')
  }, 10);

  window.addEventListener('scroll', (e) => {
    let toAnime = document.querySelectorAll('.to-animate')

    toAnime.forEach(element => {
      if(window.scrollY >= getCoords(element).top - window.innerHeight / 1.5) {
        element.classList.add('active')
      }
    });
  })
}

function getCoords(elem) { // crossbrowser version
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}

getFieldImei()
pageAnimation()
