function Jingle_Bells () {
    for (let index = 0; index < 2; index++) {
        music.playTone(659, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(659, music.beat(BeatFraction.Half))
        basic.pause(10)
        music.playTone(659, music.beat(BeatFraction.Whole))
        basic.pause(10)
    }
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(784, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(587, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Double))
    for (let index = 0; index < 5; index++) {
        music.playTone(698, music.beat(BeatFraction.Half))
        basic.pause(10)
    }
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(659, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(784, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(784, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(698, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(587, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(523, music.beat(BeatFraction.Double))
}
function LED_Matrix () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(100)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.UntilDone)
}
function Ros () {
    for (let index = 0; index < 2; index++) {
        Ros_Thema()
    }
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(349, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.pause(500)
    Ros_Thema()
}
function Snow_Flake () {
    for (let index = 0; index < 3; index++) {
        basic.clearScreen()
        basic.pause(200)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(200)
    }
}
function LEDs () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 50; index++) {
        strip.show()
        strip.rotate(1)
        basic.pause(100)
    }
}
input.onPinPressed(TouchPin.P1, function () {
    LEDs()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    Snow_Flake()
    if (song % 3 == 0) {
        Wish()
    }
    if (song % 3 == 1) {
        Ros()
    }
    if (song % 3 == 2) {
        Jingle_Bells()
    }
    song += 1
    LED_Matrix()
})
function Ros_Thema () {
    music.playTone(523, music.beat(BeatFraction.Double))
    basic.pause(10)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(523, music.beat(BeatFraction.Double))
    basic.pause(10)
    music.playTone(440, music.beat(BeatFraction.Double))
    basic.pause(10)
    music.playTone(466, music.beat(BeatFraction.Double))
    basic.pause(10)
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(392, music.beat(BeatFraction.Double))
    basic.pause(10)
    music.playTone(349, music.beat(BeatFraction.Double))
    basic.pause(10)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(349, music.beat(BeatFraction.Double))
    basic.pause(500)
}
function Wish () {
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(370, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(370, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(294, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(494, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.pause(10)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(370, music.beat(BeatFraction.Whole))
    basic.pause(10)
    music.playTone(392, music.beat(BeatFraction.Double))
    basic.pause(10)
}
let strip: neopixel.Strip = null
let song = 0
song = randint(1, 3)
strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
