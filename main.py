def LED_Matrix():
    for index in range(3):
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.pause(100)
        basic.show_leds("""
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            """)
        basic.pause(100)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
def jingle_bells():
    for index2 in range(2):
        music.play_tone(659, music.beat(BeatFraction.HALF))
        basic.pause(10)
        music.play_tone(659, music.beat(BeatFraction.HALF))
        basic.pause(10)
        music.play_tone(659, music.beat(BeatFraction.WHOLE))
        basic.pause(10)
    music.play_tone(659, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(784, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(523, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(587, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(659, music.beat(BeatFraction.DOUBLE))
    for index3 in range(5):
        music.play_tone(698, music.beat(BeatFraction.HALF))
        basic.pause(10)
    music.play_tone(659, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(659, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(659, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(784, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(784, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(698, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(587, music.beat(BeatFraction.HALF))
    basic.pause(10)
    music.play_tone(523, music.beat(BeatFraction.DOUBLE))
def LEDs():
    strip.show_rainbow(1, 360)
    for index4 in range(20):
        strip.show()
        strip.rotate(1)
        basic.pause(100)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))

def on_pin_pressed_p1():
    LEDs()
    jingle_bells()
    LED_Matrix()
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
strip.show_color(neopixel.colors(NeoPixelColors.BLACK))