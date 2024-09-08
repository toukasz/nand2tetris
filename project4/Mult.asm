// Multi: R2 = R0 * R1

// R2 = 0
@2
M=0

// if R0 = 0 || R1 = 0 END
@0
D=M
@END
D;JEQ
@1
D=M
@END
D;JEQ

// R3 = R1
@1
D=M
@3
M=D

// R2 = R2 + R0
(LOOP)
@0
D=M
@2
M=D+M

// R3 = R3 - 1
@3
M=M-1
D=M

// if R3 = 0 END
@END
D;JEQ

// else LOOP
@LOOP
0;JMP

// END
(END)
0;JMP
