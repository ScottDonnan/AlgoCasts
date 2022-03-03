// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

  constructor() {
    this.events = {};
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(eventName);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let fn of this.events[eventName]) {
        fn();
      }
    }
  }
    
  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}


const handleRain = () => {
  console.log('its raining')
}

const handleClick = () => loseSound.trigger('play')
const handleOff =() => loseSound.off('play');

const playSound = () => {
  const sadSound = new Audio('2G7CF5V-gamers-fail-game.mp3')
  sadSound.play()
  console.log('you lost')
  alert('you lost')
}

const raining = new Events()
const loseSound = new Events()
loseSound.on('play', playSound)
raining.on('click', handleRain)

const bttn = document.querySelector('button')
const offBttn = document.querySelector('#off')

bttn.addEventListener('click', handleClick)
offBttn.addEventListener('click', handleOff)

module.exports = Events;
