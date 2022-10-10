input.onButtonPressed(Button.A, function () {
    Text1 += 1
    if (Text1 == 1) {
        basic.showIcon(IconNames.Heart)
    }
    if (Text1 == 2) {
        basic.showIcon(IconNames.Happy)
    }
    if (Text1 == 3) {
        basic.showIcon(IconNames.Sad)
    }
    if (Text1 == 4) {
        basic.showIcon(IconNames.Angry)
    }
    if (Text1 == 5) {
        basic.showIcon(IconNames.Asleep)
    }
    if (Text1 == 6) {
        basic.showIcon(IconNames.Silly)
    }
    if (Text1 == 7) {
        basic.showIcon(IconNames.Fabulous)
    }
    if (Text1 == 8) {
        basic.showIcon(IconNames.Surprised)
    }
    if (Text1 == 9) {
        basic.showIcon(IconNames.EigthNote)
    }
    if (Text1 == 10) {
        basic.showIcon(IconNames.Skull)
    }
    if (Text1 == 11) {
        basic.showIcon(IconNames.Yes)
    }
    if (Text1 == 12) {
        basic.showIcon(IconNames.No)
    }
    if (Text1 == 13) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
    }
    if (Text1 == 14) {
        Text1 = 1
        basic.showIcon(IconNames.Heart)
    }
})
radio.onReceivedString(function (receivedString) {
    if (interferencecheck == 0) {
        if (receivedString == "connected") {
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
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
            connecting = 1
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
            basic.pause(500)
            if (receivedString == "O1Vt55XkxF") {
                basic.showIcon(IconNames.Heart)
            } else if (receivedString == "2iexReSuMD") {
                basic.showIcon(IconNames.Happy)
            } else if (receivedString == "aH8rn9PxmT") {
                basic.showIcon(IconNames.Sad)
            } else if (receivedString == "fKk4YXjdH1") {
                basic.showIcon(IconNames.Angry)
            } else if (receivedString == "6NCnBwkRBQ") {
                basic.showIcon(IconNames.Asleep)
            } else if (receivedString == "Sw6ILbQUcj") {
                basic.showIcon(IconNames.Silly)
            } else if (receivedString == "7loUKZq9rv") {
                basic.showIcon(IconNames.Fabulous)
            } else if (receivedString == "2nVj8GTRIm") {
                basic.showIcon(IconNames.Surprised)
            } else if (receivedString == "GLeQMn7dmT") {
                basic.showIcon(IconNames.EigthNote)
            } else if (receivedString == "n3QZAVpdPE") {
                basic.showIcon(IconNames.Skull)
            } else if (receivedString == "SSk3N6pBdh") {
                basic.showIcon(IconNames.Yes)
            } else if (receivedString == "BqbrStClPh") {
                basic.showIcon(IconNames.No)
            } else if (receivedString == "YPX55sqbhU") {
                basic.showLeds(`
                    . # # # .
                    # . . . #
                    . . # # .
                    . . . . .
                    . . # . .
                    `)
            } else {
                music.playMelody("D C - - - - - - ", 220)
                basic.showString("ERR 2")
            }
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.showString("ERR 1")
            music.playMelody("C - - - - - - - ", 150)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Text1 == 1) {
        radio.sendString("O1Vt55XkxF")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 2) {
        radio.sendString("2iexReSuMD")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 3) {
        radio.sendString("aH8rn9PxmT")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 4) {
        radio.sendString("fKk4YXjdH1")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 5) {
        radio.sendString("6NCnBwkRBQ")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 6) {
        radio.sendString("Sw6ILbQUcj")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 7) {
        radio.sendString("7loUKZq9rv")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 8) {
        radio.sendString("2nVj8GTRIm")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 9) {
        radio.sendString("GLeQMn7dmT")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 10) {
        radio.sendString("n3QZAVpdPE")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 11) {
        radio.sendString("SSk3N6pBdh")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 12) {
        radio.sendString("BqbrStClPh")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
    if (Text1 == 13) {
        radio.sendString("YPX55sqbhU")
        basic.showIcon(IconNames.Yes)
        Text1 = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    connecting = 1
    basic.clearScreen()
    if (interferencecheck == 0) {
        radio.sendString("connect")
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    }
})
let disableinterferencecheck = 0
let connectindicator = 0
let Text1 = 0
let connecting = 0
let interferencecheck = 0
radio.setGroup(167)
basic.pause(100)
interferencecheck = 1
for (let index = 0; index < 3; index++) {
    led.plot(1, 1)
    basic.pause(185)
    led.unplot(1, 1)
    led.plot(2, 1)
    basic.pause(370)
    led.unplot(2, 1)
    led.plot(3, 1)
    basic.pause(185)
    led.unplot(3, 1)
    led.plot(3, 2)
    basic.pause(185)
    led.unplot(3, 2)
    led.plot(3, 3)
    basic.pause(185)
    led.unplot(3, 3)
    led.plot(2, 3)
    basic.pause(185)
    led.unplot(2, 3)
    led.plot(1, 3)
    basic.pause(185)
    led.unplot(1, 3)
    led.plot(1, 2)
    basic.pause(185)
    led.unplot(1, 2)
    led.plot(1, 1)
    basic.pause(185)
    led.unplot(1, 1)
    led.plot(2, 1)
    basic.pause(370)
    led.unplot(2, 1)
    led.plot(3, 1)
    basic.pause(185)
    led.unplot(3, 1)
    led.plot(3, 2)
    basic.pause(185)
    led.unplot(3, 2)
    led.plot(3, 3)
    basic.pause(185)
    led.unplot(3, 3)
    led.plot(2, 3)
    basic.pause(185)
    led.unplot(2, 3)
    led.plot(1, 3)
    basic.pause(185)
    led.unplot(1, 3)
    led.plot(1, 2)
    basic.pause(185)
    led.unplot(1, 2)
}
basic.clearScreen()
basic.pause(100)
led.plot(0, 3)
basic.pause(100)
led.plot(1, 4)
basic.pause(100)
led.plot(2, 3)
basic.pause(100)
led.plot(3, 2)
basic.pause(100)
led.plot(4, 1)
basic.pause(500)
interferencecheck = 0
if (connecting == 0) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}
basic.pause(9000)
if (connecting == 0) {
    basic.clearScreen()
    basic.showString("PRESS LOGO")
}
