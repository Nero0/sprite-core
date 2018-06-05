import {Sprite, Layer} from '../src'
import {compare} from './helpers'
import {createCanvas, loadImage} from 'canvas'

const test = require('ava')

function box(rect) {
  const [x, y, w, h] = rect
  return [...[x, y].map(Math.floor), ...[w, h].map(Math.ceil)]
}

test('box model', (t) => {
  const block = new Sprite()
  t.deepEqual(block.contentSize, [0, 0])
  t.deepEqual(block.innerSize, [0, 0])
  t.deepEqual(block.clientSize, [0, 0])
  t.deepEqual(block.outerSize, [0, 0])
  t.deepEqual(block.offsetSize, [0, 0])

  t.deepEqual(block.originalRect, [-0, -0, 0, 0])
  t.deepEqual(block.boundingRect, [0, 0, 0, 0])
  t.deepEqual(block.originalRenderRect, [0, 0, 0, 0])
  t.deepEqual(block.renderRect, [0, 0, 0, 0])

  block.attr({
    pos: [385, 300],
    size: [100, 100],
    anchor: 0.5,
  })

  t.deepEqual(block.contentSize, [100, 100])
  t.deepEqual(block.innerSize, [100, 100])
  t.deepEqual(block.clientSize, [100, 100])
  t.deepEqual(block.outerSize, [100, 100])
  t.deepEqual(block.offsetSize, [100, 100])

  t.deepEqual(block.originalRect, [-50, -50, 100, 100])
  t.deepEqual(block.boundingRect, [-50, -50, 100, 100])
  t.deepEqual(block.originalRenderRect, [335, 250, 100, 100])
  t.deepEqual(block.renderRect, [335, 250, 100, 100])

  block.attr({
    rotate: 45,
  })

  t.deepEqual(block.contentSize, [100, 100])
  t.deepEqual(block.innerSize, [100, 100])
  t.deepEqual(block.clientSize, [100, 100])
  t.deepEqual(block.outerSize, [100, 100])
  t.deepEqual(block.offsetSize, [100, 100])

  t.deepEqual(block.originalRect, [-50, -50, 100, 100])
  t.deepEqual(box(block.boundingRect), [-71, -71, 142, 142])
  t.deepEqual(box(block.originalRenderRect), [335, 250, 100, 100])
  t.deepEqual(box(block.renderRect), [314, 229, 142, 142])

  block.attr({
    padding: 10,
    border: 5,
  })

  t.deepEqual(block.contentSize, [100, 100])
  t.deepEqual(block.innerSize, [100, 100])
  t.deepEqual(block.clientSize, [120, 120])
  t.deepEqual(block.outerSize, [130, 130])
  t.deepEqual(block.offsetSize, [130, 130])

  t.deepEqual(block.originalRect, [-65, -65, 130, 130])
  t.deepEqual(box(block.boundingRect), [-92, -92, 184, 184])
  t.deepEqual(box(block.originalRenderRect), [320, 235, 130, 130])
  t.deepEqual(box(block.renderRect), [293, 208, 184, 184])
})

test('red block 150/300', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const block = new Sprite()
  const width = 300,
    height = 300

  block.attr({
    size: [150, 150],
    bgcolor: 'red',
    pos: [width / 2, height / 2],
    anchor: [0, 0],
  })

  layer.append(block)
  layer.draw()
  let isEqual = await compare(canvas, 'red-block-150-300-right-bottom')
  t.truthy(isEqual)

  block.attr({
    anchor: [0.5, 0.5],
  })
  layer.draw()
  isEqual = await compare(canvas, 'red-block-150-300-center')
  t.truthy(isEqual)

  block.attr({
    anchor: [1, 0],
  })
  layer.draw()
  isEqual = await compare(canvas, 'red-block-150-300-left-bottom')
  t.truthy(isEqual)

  block.attr({
    anchor: [0, 1],
  })
  layer.draw()
  isEqual = await compare(canvas, 'red-block-150-300-right-top')
  t.truthy(isEqual)

  block.attr({
    anchor: [1, 1],
  })
  layer.draw()
  isEqual = await compare(canvas, 'red-block-150-300-left-top')
  t.truthy(isEqual)
})

test('draw guanguan', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const img = await loadImage('./test/res/guanguan1.png')

  const s = new Sprite()
  s.attr({
    textures: img,
    pos: [150, 150],
    anchor: 0.5,
  })
  layer.append(s)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'image-guanguan')
  t.truthy(isEqual)
})

test('draw guanguan 2', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d'), renderMode: 'repaintDirty'})

  const img = await loadImage('./test/res/guanguan1.png')

  const s = new Sprite(img)
  s.attr({
    pos: [150, 150],
    anchor: 0.5,
  })
  layer.append(s)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'image-guanguan-2')
  t.truthy(isEqual)
})

test('draw guanguan body', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const img = await loadImage('./test/res/guanguan_p.png')

  const s = new Sprite()
  s.attr({
    textures: [{image: img, srcRect: [0, 41, 86, 56]}],
    pos: [150, 150],
    anchor: 0.5,
  })
  layer.append(s)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'image-guanguan-body')
  t.truthy(isEqual)
})

test('draw guanguan body filter', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const img = await loadImage('./test/res/guanguan_p.png')

  const s = new Sprite()
  s.attr({
    textures: [{image: img, srcRect: [0, 41, 86, 56], filter: {opacity: 0.5}}],
    pos: [150, 150],
    anchor: 0.5,
  })
  layer.append(s)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'image-guanguan-body-filter')
  t.truthy(isEqual)
})

test('draw guanguan body filter 2', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const img = await loadImage('./test/res/guanguan_p.png')

  const s = new Sprite()
  s.attr({
    textures: [{image: img, srcRect: [0, 41, 86, 56], filter: {dropShadow: [2, 2, 10, 'black']}}],
    pos: [150, 150],
    anchor: 0.5,
  })
  layer.append(s)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'image-guanguan-body-filter-2')
  t.truthy(isEqual)
})

test('draw guanguan filter 3', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const img = await loadImage('./test/res/guanguan1.png')

  const s = new Sprite()
  s.attr({
    textures: [{image: img, filter: {dropShadow: [2, 2, 10, 'black']}}],
    pos: [150, 150],
    anchor: 0.5,
  })
  layer.append(s)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'image-guanguan-filter-3')
  t.truthy(isEqual)
})


test('draw guanguan body parts', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const img = await loadImage('./test/res/guanguan_p.png')

  const guanguan = new Sprite()

  guanguan.attr({
    textures: [
      {image: img, srcRect: [50, 0, 46, 18], rect: [72, 66, 46, 18]}, // neck
      {image: img, srcRect: [0, 97, 86, 76], rect: [50, 0, 86, 76]}, // head
      {image: img, srcRect: [0, 41, 86, 56], rect: [50, 76, 86, 56]}, // body
      {image: img, srcRect: [0, 0, 25, 41], rect: [40, 76, 25, 41]}, // left-arm
      {image: img, srcRect: [25, 0, 25, 41], rect: [120, 76, 25, 41]}, // right-arm
    ],
    pos: [150, 10],
    size: [300, 300],
    anchor: [0.5, 0],
  })

  layer.append(guanguan)

  await layer.prepareRender()

  const isEqual = await compare(canvas, 'image-guanguan-parts')
  t.truthy(isEqual)
})


test('draw sprite cached', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  canvas.cloneNode = function () {
    return createCanvas(1, 1)
  }

  const s = new Sprite()
  s.attr({
    pos: [150, 150],
    anchor: 0.5,
    bgcolor: 'red',
    size: [50, 50],
  })
  layer.append(s)

  await layer.prepareRender()

  for(let i = 0; i < 10; i++) {
    s.attr({
      x: x => x + 1,
    })
    await layer.prepareRender() // eslint-disable-line no-await-in-loop
  }

  t.truthy(s.cache != null)
})

test('sprite event', async (t) => {
  const canvas = createCanvas(300, 300),
    layer = new Layer({context: canvas.getContext('2d')})

  const img = await loadImage('./test/res/guanguan1.png')

  const s = new Sprite({
    pos: [150, 150],
    anchor: 0.5,
  })
  s.textures = [img]

  const s2 = s.cloneNode()
  s2.attr({
    anchor: [0, 0],
  })
  layer.append(s, s2)

  await layer.prepareRender()

  s.on('click', (evt) => {
    t.is(evt.layerX, 160)
    t.is(evt.layerY, 160)
    t.is(evt.targetTextures[0], s.textures[0])
  })

  layer.on('click', (evt) => {
    if(evt.layerX === 10) {
      t.is(evt.targetSprites.length, 0)
    } else if(evt.layerX === 160) {
      t.is(evt.targetSprites.length, 2)
    }
  })

  layer.dispatchEvent('click', {layerX: 10, layerY: 10})
  layer.dispatchEvent('click', {layerX: 160, layerY: 160})
})
