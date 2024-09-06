// ADD: R0 + R1 => R2

// D = R0
@0
D=M

// D = D + R1
@1
D=D+M

// R2 = D
@2
M=D

// END
(END)
@END
0;JMP
