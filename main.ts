function rovne_a_doleva () {
    cuteBot.forward()
    basic.pause(200)
    cuteBot.motors(50, 100)
    basic.pause(200)
}
basic.showIcon(IconNames.House)
for (let index = 0; index < 4; index++) {
    rovne_a_doleva()
}
