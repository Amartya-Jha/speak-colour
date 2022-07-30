const speech = new p5.SpeechRec('en-US', parseResult)
speech.continuous = true
speech.interimResults = false

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(255)
  fill(25)

  textSize(48)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Avenir Next", system-ui, sans-serif')
  text('SAY A COLOUR', width / 2, height / 2)
  speech.start()
}

function parseResult() {
  if (speech.resultValue) {
    const color = speech.resultString
      .split(' ')
      .pop()
      .toUpperCase()
    background(color)
    text(color, width / 2, height / 2)
    console.log(colors)
  }
}