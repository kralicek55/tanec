function rovne_a_doleva () {
    cuteBot.forward()
    basic.pause(200)
    cuteBot.turnleft()
    basic.pause(400)
}
cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ffff)
cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
let vlevo = strip.range(0, 1)
let vpravo = strip.range(1, 1)
vlevo.showColor(neopixel.colors(NeoPixelColors.Blue))
vpravo.showColor(neopixel.colors(NeoPixelColors.Yellow))
basic.showIcon(IconNames.House)
for (let index = 0; index < 4; index++) {
    rovne_a_doleva()
}
cuteBot.forward()
basic.pause(200)
cuteBot.stopcar()
