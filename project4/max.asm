// MAX: max(R0, R1) => R2

// D = R0 - R1
@0
D=M
@1
D=D-M

// if D > 0 => R2 = R0
@IF
D;JGT

// R2 = R1
@1
D=M
@2
M=D
@END
0;JMP

// R2 = R0
(IF)
@0
D=M
@2
M=D

// END
(END)
@END
0;JMP
