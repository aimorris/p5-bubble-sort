/* global width, height, createCanvas, background, line, random, stroke, strokeWeight, pixelDensity, windowWidth, windowHeight, translate, frameRate, color */
/* eslint no-unused-vars: 0 */

let lines
let i = 0
const lineWidth = 70
const maxHeight = 700

function setup () {
  const canvas = createCanvas(windowWidth, windowHeight)
  canvas.style('display', 'block')
  pixelDensity(1)
  frameRate(10)

  createLines()
}

function draw () {
  background(0)
  translate(lineWidth / 2, 0)
  drawLines(i)

  if (lines[i + 1] < lines[i]) {
    const temp = lines[i + 1]
    lines[i + 1] = lines[i]
    lines[i] = temp
  }

  i++

  if (i === lines.length) i = 0
}

function createLines () {
  lines = []
  for (let i = 0; i < width; i += lineWidth) lines.push(random(maxHeight))
}

function drawLines (selected) {
  strokeWeight(lineWidth)

  for (let i = 0; i < lines.length; i++) {
    stroke(selected === i ? color(255, 0, 0) : color(255, 255, 255))

    line(i * lineWidth, height, i * lineWidth, height - lines[i])
  }
}
