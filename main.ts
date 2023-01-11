basic.showLeds(`
    # # # # #
    . # # # .
    . # # # .
    . . . . .
    . . . . .
    `)
radio.raiseEvent(
EventBusSource.MICROBIT_ID_BUTTON_A,
EventBusValue.MICROBIT_EVT_ANY
)
basic.forever(function () {
    radio.setGroup(1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playMelody("C5 B A G F E D C ", 120)
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.ringTone(262)
    music.setVolume(127)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    music.stopAllSounds()
})
