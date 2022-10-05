input.onButtonPressed(Button.A, function () {
    Text1 += 1
    if (Text1 == 1) {
        basic.showString("a")
    }
    if (Text1 == 2) {
        basic.showString("b")
    }
    if (Text1 == 3) {
        basic.showString("c")
    }
    if (Text1 == 4) {
        basic.showString("d")
    }
    if (Text1 == 5) {
        basic.showString("e")
    }
    if (Text1 == 6) {
        basic.showString("f")
    }
    if (Text1 == 7) {
        basic.showString("g")
    }
    if (Text1 == 8) {
        basic.showString("h")
    }
    if (Text1 == 9) {
        basic.showString("i")
    }
    if (Text1 == 10) {
        basic.showString("j")
    }
    if (Text1 == 11) {
        basic.showString("k")
    }
    if (Text1 == 12) {
        basic.showString("l")
    }
    if (Text1 == 13) {
        basic.showString("m")
    }
    if (Text1 == 14) {
        basic.showString("n")
    }
    if (Text1 == 15) {
        basic.showString("o")
    }
    if (Text1 == 16) {
        basic.showString("p")
    }
    if (Text1 == 17) {
        basic.showString("q")
    }
    if (Text1 == 18) {
        basic.showString("r")
    }
    if (Text1 == 19) {
        basic.showString("s")
    }
    if (Text1 == 20) {
        basic.showString("t")
    }
    if (Text1 == 21) {
        basic.showString("u")
    }
    if (Text1 == 22) {
        basic.showString("v")
    }
    if (Text1 == 23) {
        basic.showString("w")
    }
    if (Text1 == 24) {
        basic.showString("x")
    }
    if (Text1 == 25) {
        basic.showString("y")
    }
    if (Text1 == 26) {
        basic.showString("z")
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "connected") {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            # # # # #
            # . . . #
            # # # # #
            . . . # .
            `)
        music.playMelody("E G B C5 - - - - ", 165)
        connectindicator = 1
    } else if (receivedString == "connect") {
        disableinterferencecheck = 1
        radio.sendString("connected")
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            # # # # #
            # . . . #
            # # # # #
            . . . # .
            `)
        music.playMelody("E G B C5 - - - - ", 165)
        connectindicator = 1
    } else if (connectindicator == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        music.playMelody("G A C5 - - - - - ", 190)
        basic.pause(1000)
        basic.showString(receivedString)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playMelody("C - - - - - - - ", 150)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Text1 == 1) {
        radio.sendString("a")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 2) {
        radio.sendString("b")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 3) {
        radio.sendString("c")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 4) {
        radio.sendString("d")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 5) {
        radio.sendString("e")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 6) {
        radio.sendString("f")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 7) {
        radio.sendString("g")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 8) {
        radio.sendString("h")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 9) {
        radio.sendString("i")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 10) {
        radio.sendString("j")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 11) {
        radio.sendString("k")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 12) {
        radio.sendString("l")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 13) {
        radio.sendString("m")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 14) {
        radio.sendString("n")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 15) {
        radio.sendString("o")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 16) {
        radio.sendString("p")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 17) {
        radio.sendString("q")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 18) {
        radio.sendString("r")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 19) {
        radio.sendString("s")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 20) {
        radio.sendString("t")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 21) {
        radio.sendString("u")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 22) {
        radio.sendString("v")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 23) {
        radio.sendString("w")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 24) {
        radio.sendString("x")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 25) {
        radio.sendString("y")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 26) {
        radio.sendString("z")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    disableinterferencecheck = 1
    radio.sendString("connect")
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
})
let connectindicator = 0
let Text1 = 0
let disableinterferencecheck = 0
radio.setGroup(167)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.pause(10000)
if (disableinterferencecheck == 0) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
}
