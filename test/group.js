import {Group, Sprite, Layer} from '../src'
import {compare} from './helpers'
import {createCanvas} from 'canvas'

const test = require('ava')

test('draw group 1', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const g = new Group()
  g.attr({
    pos: [150, 150],
    anchor: 0.5,
    bgcolor: 'grey',
    rotate: 45,
  })
  layer.append(g)

  const s1 = new Sprite()
  s1.attr({
    size: [50, 50],
    borderRadius: 25,
    bgcolor: 'red',
  })
  const s2 = s1.cloneNode()
  s2.attr({
    bgcolor: 'blue',
    x: x => x + 50,
  })
  const s3 = s1.cloneNode()
  s3.attr({
    bgcolor: 'green',
    y: y => y + 50,
  })

  g.append(s1, s2, s3)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'group-1')
  t.truthy(isEqual)
})

test('draw group 2', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const clipPath = 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'

  const g = new Group()
  g.attr({
    pos: [150, 150],
    anchor: 0.5,
    bgcolor: 'grey',
    rotate: 45,
    clip: {
      d: clipPath,
      transform: {
        scale: 3,
      },
    },
  })
  layer.append(g)

  const s1 = new Sprite()
  s1.attr({
    size: [50, 50],
    borderRadius: 25,
    bgcolor: 'red',
  })
  const s2 = s1.cloneNode()
  s2.attr({
    bgcolor: 'blue',
    x: x => x + 50,
  })
  const s3 = s1.cloneNode()
  s3.attr({
    bgcolor: 'green',
    y: y => y + 50,
  })
  const s4 = s1.cloneNode()
  s4.attr({
    bgcolor: 'cyan',
    x: x => x + 50,
    y: y => y + 50,
  })

  g.append(s1, s2, s3, s4)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'group-2')
  t.truthy(isEqual)
})

test('draw group 3 not cached', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const g = new Group()
  g.attr({
    pos: [150, 150],
    anchor: 0.5,
    bgcolor: 'grey',
    rotate: 45,
  })
  layer.append(g)

  const s1 = new Sprite()
  s1.attr({
    size: [50, 50],
    borderRadius: 25,
    bgcolor: 'red',
  })
  const s2 = s1.cloneNode()
  s2.attr({
    bgcolor: 'blue',
    x: x => x + 60,
  })
  const s3 = s1.cloneNode()
  s3.attr({
    bgcolor: 'green',
    y: y => y + 60,
  })

  const s4 = s1.cloneNode()
  s4.attr({
    x: -1000,
    y: -1000,
  })

  g.append(s1, s2, s3, s4)

  await layer.prepareRender()

  for(let i = 0; i < 10; i++) {
    g.attr({
      x: x => x + 1,
    })
    await layer.prepareRender() // eslint-disable-line no-await-in-loop
  }
  t.truthy(g.baseCache == null)

  s3.attr({
    y: y => y + 20,
  })
  await layer.prepareRender()

  const isEqual = await compare(canvas, 'group-3')
  t.truthy(isEqual)
})


test('draw group 3 cached', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  canvas.cloneNode = function f() {
    const c = createCanvas(1, 1)
    c.cloneNode = f
    return c
  }

  const g = new Group()
  g.attr({
    pos: [150, 150],
    anchor: 0.5,
    bgcolor: 'grey',
    rotate: 45,
  })
  layer.append(g)

  const s1 = new Sprite()
  s1.attr({
    size: [50, 50],
    borderRadius: 25,
    bgcolor: 'red',
  })
  const s2 = s1.cloneNode()
  s2.attr({
    bgcolor: 'blue',
    x: x => x + 60,
  })
  const s3 = s1.cloneNode()
  s3.attr({
    bgcolor: 'green',
    y: y => y + 60,
  })

  const s4 = s1.cloneNode()
  s4.attr({
    x: -1000,
    y: -1000,
  })

  g.append(s1, s2, s3, s4)

  await layer.prepareRender()

  for(let i = 0; i < 10; i++) {
    g.attr({
      x: x => x + 1,
    })
    await layer.prepareRender() // eslint-disable-line no-await-in-loop
  }
  t.truthy(g.baseCache != null)

  s3.attr({
    y: y => y + 20,
  })
  await layer.prepareRender()

  g.clearCache()
  t.truthy(g.baseCache == null)

  const isEqual = await compare(canvas, 'group-3')
  t.truthy(isEqual)
})

test('draw group 4', async (t) => {
  const canvas = createCanvas(1200, 600),
    layer = new Layer({context: canvas.getContext('2d')})

  const g = new Group()
  g.attr({
    anchor: 0.5,
    pos: [600, 300],
    size: [400, 400],
    bgcolor: 'grey',
  })
  layer.append(g)

  const clipPath = 'M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'
  const g2 = new Group()
  g2.attr({
    anchor: 0.5,
    pos: [200, 200],
    size: [300, 300],
    clip: {
      d: clipPath,
      transform: {
        scale: 6,
        translate: [4, 4],
      },
    },
    bgcolor: 'blue',
  })
  g.append(g2)

  const s = new Sprite()
  s.attr({
    pos: [50, 50],
    bgcolor: 'red',
    borderRadius: 25,
    size: [50, 50],
  })
  g2.append(s)

  s.on('click', (evt) => {
    console.log('group sprite clicked!') // eslint-disable-line no-console
    t.is(evt.layerX, 527)
  })

  layer.dispatchEvent('click', {layerX: 10, layerY: 10})
  layer.dispatchEvent('click', {layerX: 527, layerY: 230})

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'group-4')
  t.truthy(isEqual)

  t.truthy(g2.svg != null)
  g2.attr('clip', null)
  t.is(g2.svg, null)
})

test('draw group 6', async (t) => {
  const canvas = createCanvas(600, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const g = new Group()
  g.attr({
    pos: [150, 150],
    anchor: 0.5,
    bgcolor: 'grey',
    rotate: 45,
  })
  layer.append(g)

  const s1 = new Sprite()
  s1.attr({
    size: [50, 50],
    borderRadius: 25,
    bgcolor: 'red',
  })
  const s2 = s1.cloneNode()
  s2.attr({
    bgcolor: 'blue',
    x: x => x + 50,
  })
  const s3 = s1.cloneNode()
  s3.attr({
    bgcolor: 'green',
    y: y => y + 50,
  })

  g.append(s1, s2, s3)
  await layer.prepareRender()

  const g2 = g.cloneNode(true)
  g2.attr({
    x: x => x + 300,
  })
  layer.append(g2)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'group-6')
  t.truthy(isEqual)
})

