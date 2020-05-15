/* global width, height, createCanvas, background, line, random, stroke, strokeWeight, pixelDensity, windowWidth, windowHeight, translate, frameRate, color, noLoop */
/* eslint no-unused-vars: 0 */

let lines
let i = 0
let maxi
const lineWidth = 50
const spacing = 5
const maxHeight = 700

function setup () {
  const canvas = createCanvas(windowWidth, windowHeight)
  canvas.style('display', 'block')
  pixelDensity(1)
  frameRate(10)

  createLines()
  maxi = lines.length
}

function draw () {
  // Stop sorting if finished
  if (maxi === 0) noLoop()

  background(0)
  translate(lineWidth / 2, 0)

  drawLines(i)

  if (lines[i + 1] < lines[i]) swap(lines, i, i + 1)

  i++

  if (i === lines.length || i >= maxi) {
    i = 0
    maxi--
  }
}

// Swaps two elements in an array
function swap (arr, from, to) {
  const temp = arr[to]
  arr[to] = arr[from]
  arr[from] = temp
}

// Creates an array of random values
function createLines () {
  lines = []
  for (let i = 0; i * (lineWidth + spacing) + lineWidth <= width; i++) lines.push(random(maxHeight))
}

// Draws the lines
function drawLines (selected) {
  strokeWeight(lineWidth)

  for (let i = 0; i < lines.length; i++) {
    // Red if this line is the selected line, otherwise white
    if (selected === i && maxi !== 0) {
      stroke(255, 0, 0)
    } else {
      stroke(255)
    }

    // Draw the line
    line(i * (lineWidth + spacing), height, i * (lineWidth + spacing), height - lines[i])
  }
}
