// Fill:
// This program runs an infinite loop that listens to the
// keyboard. When a key is pressed (any key), the program
// blackens the entire screen by writing "black" in every
// pixel. When no key is pressed, the program clears the screen
// by writing "white" in every pixel. You may choose to blacken
// and clear the screen in any spatial order (top-down,
// bottom-up, spiral, etc.), as long as pressing a key
// continuously for long enough will result in a fully
// blackened screen, and not pressing any key for long enough
// will result in a cleared screen.


(KEY)
@24575
D=A
@0
M=D

@24576
D=M
@BLACK
D;JNE
@WHITE
0;JMP

(BLACK)
@0
D=M
A=D
M=-1
D=D-1
@0
M=D

@16383
D=D-A
@KEY
D;JEQ
@BLACK
0;JMP

(WHITE)
@0
D=M
A=D
M=0
D=D-1
@0
M=D

@16383
D=D-A
@KEY
D;JEQ
@WHITE
0;JMP
