robotbit.rgb().setBrightness(5)
let V1 = 100
let V2 = 90
let V3 = 80
let V4 = 70
let V5 = 60
let V6 = 50
let V7 = 40
let V8 = 30
let V9 = 10
basic.forever(function () {
    led.plotBrightness(0, 0, Math.map(V1, 0, 100, 10, 255))
    led.plotBrightness(0, 1, Math.map(V2, 0, 100, 10, 255))
    led.plotBrightness(1, 0, Math.map(V2, 0, 100, 10, 255))
    led.plotBrightness(0, 2, Math.map(V3, 0, 100, 10, 255))
    led.plotBrightness(1, 1, Math.map(V3, 0, 100, 10, 255))
    led.plotBrightness(2, 0, Math.map(V3, 0, 100, 10, 255))
    led.plotBrightness(0, 3, Math.map(V4, 0, 100, 10, 255))
    led.plotBrightness(1, 2, Math.map(V4, 0, 100, 10, 255))
    led.plotBrightness(2, 1, Math.map(V4, 0, 100, 10, 255))
    led.plotBrightness(3, 0, Math.map(V4, 0, 100, 10, 255))
    led.plotBrightness(0, 4, Math.map(V5, 0, 100, 10, 255))
    led.plotBrightness(1, 3, Math.map(V5, 0, 100, 10, 255))
    led.plotBrightness(2, 2, Math.map(V5, 0, 100, 10, 255))
    led.plotBrightness(3, 1, Math.map(V5, 0, 100, 10, 255))
    led.plotBrightness(4, 0, Math.map(V5, 0, 100, 10, 255))
    led.plotBrightness(1, 4, Math.map(V6, 0, 100, 10, 255))
    led.plotBrightness(2, 3, Math.map(V6, 0, 100, 10, 255))
    led.plotBrightness(3, 2, Math.map(V6, 0, 100, 10, 255))
    led.plotBrightness(4, 1, Math.map(V6, 0, 100, 10, 255))
    led.plotBrightness(2, 4, Math.map(V7, 0, 100, 10, 255))
    led.plotBrightness(3, 3, Math.map(V7, 0, 100, 10, 255))
    led.plotBrightness(4, 2, Math.map(V7, 0, 100, 10, 255))
    led.plotBrightness(3, 4, Math.map(V8, 0, 100, 10, 255))
    led.plotBrightness(4, 3, Math.map(V8, 0, 100, 10, 255))
    led.plotBrightness(4, 4, Math.map(V9, 0, 100, 10, 255))
})
basic.forever(function () {
    while (V1 != 0) {
        V1 += -10
        basic.pause(100)
    }
    while (V1 != 100) {
        V1 += 10
        basic.pause(100)
    }
})
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        robotbit.rgb().setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)
        robotbit.rgb().show()
    }
    for (let index = 0; index <= 4; index++) {
        robotbit.rgb().setPixelColor(index, neopixel.colors(NeoPixelColors.Black))
        basic.pause(100)
        robotbit.rgb().show()
    }
    robotbit.rgb().clear()
})
basic.forever(function () {
    while (V2 != 0) {
        V2 += -10
        basic.pause(100)
    }
    while (V2 != 100) {
        V2 += 10
        basic.pause(100)
    }
})
basic.forever(function () {
    while (V3 != 0) {
        V3 += -10
        basic.pause(100)
    }
    while (V3 != 100) {
        V3 += 10
        basic.pause(100)
    }
})
basic.forever(function () {
    while (V4 != 0) {
        V4 += -10
        basic.pause(100)
    }
    while (V4 != 100) {
        V4 += 10
        basic.pause(100)
    }
})
basic.forever(function () {
    while (V5 != 0) {
        V5 += -10
        basic.pause(100)
    }
    while (V5 != 100) {
        V5 += 10
        basic.pause(100)
    }
})
basic.forever(function () {
    while (V6 != 0) {
        V6 += -10
        basic.pause(100)
    }
    while (V6 != 100) {
        V6 += 10
        basic.pause(100)
    }
})
basic.forever(function () {
    while (V7 != 0) {
        V7 += -10
        basic.pause(100)
    }
    while (V7 != 100) {
        V7 += 10
        basic.pause(100)
    }
})
basic.forever(function () {
    while (V8 != 0) {
        V8 += -10
        basic.pause(100)
    }
    while (V8 != 100) {
        V8 += 10
        basic.pause(100)
    }
})
basic.forever(function () {
    while (V9 != 0) {
        V9 += -10
        basic.pause(100)
    }
    while (V9 != 100) {
        V9 += 10
        basic.pause(100)
    }
})
