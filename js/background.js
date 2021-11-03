const config = {
    selectors: {
      xPos: 'xPos',
      yPos: 'yPos',
      random1: 'random1',
      random2: 'random2',
      random3: 'random3',
    },
    data : {
      random1to5: Math.floor(Math.random() * 5) + 1,
      textCharAppearance: 70,  // milliseconds
    }
  };
  
  let log = {
    init() {
      let xPos = document.getElementById(config.selectors.xPos),
          yPos = document.getElementById(config.selectors.yPos),
          random1 = document.getElementById(config.selectors.random1),
          random2 = document.getElementById(config.selectors.random2);
          random3 = document.getElementById(config.selectors.random3);
    },
    log(element, data) {
      element.innerText = data;
    },
  };
  
  let setRandom = {
    setRandomNumber1(interval) {
      setInterval(() => {
          let number = Math.random().toFixed(3);
          document.body.style.setProperty("--random1", number);
          log.log(random1, number);
      }, interval);
    },
    
    setRandomNumber2(interval) {
      setInterval(() => {
          let number = Math.random().toFixed(3);
          document.body.style.setProperty("--random2", number);
          log.log(random2, number);
      }, interval);
    },
    
    setRandomNumber3(interval) {
      setInterval(() => {
          let number = Math.random().toFixed(3);
          document.body.style.setProperty("--random3", number);
          log.log(random3, number);
      }, interval);
    },
    
    init() {
      // Populate css custom properties with random numbers
      this.setRandomNumber1(200);
      this.setRandomNumber2(1000);
      this.setRandomNumber3(10000);
    },
  };
  
  let mouseMove = {
    init() {
      document.addEventListener("mousemove", function(e) {
        let wh = window.innerHeight / 2,
            ww = window.innerWidth / 2,
            mouseXVal = (e.clientX - ww) / 100,
            mouseYVal = -((e.clientY - wh) / 100);
  
        document.body.style.setProperty("--mouseX", mouseXVal);
        document.body.style.setProperty("--mouseY", mouseYVal);
  
        log.log(xPos, mouseXVal);
        log.log(yPos, mouseYVal);
      });
    }
  };
  
  let UATester = {
    UA: window.navigator.userAgent,
    
    init() {
      if (/firefox/gi.test(this.UA)) {      document.querySelector('html').classList.add('firefox');
      }
    }
  };
  
  document.addEventListener('DOMContentLoaded', (event) => {
    UATester.init();
    log.init();
    setRandom.init();
    mouseMove.init();
  });