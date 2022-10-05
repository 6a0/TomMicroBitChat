def on_button_pressed_a():
    global Text1
    Text1 += 1
    if Text1 == 1:
        basic.show_string("a")
    if Text1 == 2:
        basic.show_string("b")
    if Text1 == 3:
        basic.show_string("c")
    if Text1 == 4:
        basic.show_string("d")
    if Text1 == 5:
        basic.show_string("e")
    if Text1 == 6:
        basic.show_string("f")
    if Text1 == 7:
        basic.show_string("g")
    if Text1 == 8:
        basic.show_string("h")
    if Text1 == 9:
        basic.show_string("i")
    if Text1 == 10:
        basic.show_string("j")
    if Text1 == 11:
        basic.show_string("k")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    global connectindicator
    if receivedString == "connected":
        basic.show_icon(IconNames.YES)
        basic.pause(1000)
        basic.show_leds("""
            . . . . .
                        # # # # #
                        # . . . #
                        # # # # #
                        . . . # .
        """)
        connectindicator = 1
    elif receivedString == "connect":
        radio.send_string("connected")
        basic.show_icon(IconNames.YES)
        basic.pause(1000)
        basic.show_leds("""
            . . . . .
                        # # # # #
                        # . . . #
                        # # # # #
                        . . . # .
        """)
        connectindicator = 1
    elif connectindicator == 1:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . . . . .
                        . . # . .
        """)
        basic.pause(1000)
        basic.show_string(receivedString)
    else:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global Text1
    if Text1 == 1:
        radio.send_string("a")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 2:
        radio.send_string("b")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 3:
        radio.send_string("c")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 4:
        radio.send_string("d")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 5:
        radio.send_string("e")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 6:
        radio.send_string("f")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 7:
        radio.send_string("g")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 8:
        radio.send_string("h")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 9:
        radio.send_string("i")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 10:
        radio.send_string("j")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 11:
        radio.send_string("k")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 12:
        radio.send_string("l")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 13:
        radio.send_string("m")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 14:
        radio.send_string("n")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 15:
        radio.send_string("o")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 16:
        radio.send_string("p")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 17:
        radio.send_string("q")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 18:
        radio.send_string("r")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 19:
        radio.send_string("s")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 20:
        radio.send_string("t")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 21:
        radio.send_string("u")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 22:
        radio.send_string("v")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 23:
        radio.send_string("w")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 24:
        radio.send_string("x")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 25:
        radio.send_string("y")
        basic.show_icon(IconNames.YES)
        Text1 = 0
    if Text1 == 26:
        radio.send_string("z")
        basic.show_icon(IconNames.YES)
        Text1 = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    radio.send_string("connect")
    basic.show_leds("""
        . . . . .
                . . . . .
                # . # . #
                . . . . .
                . . . . .
    """)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

connectindicator = 0
Text1 = 0
radio.set_group(1)
basic.pause(100)