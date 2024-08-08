// RAM[0] = RAM[1] / RAM[0]

// a = RAM[1]
// b = RAM[0]
// c = 0

// a - b < 0 goto END
// LOOP:
// a = a - b
// c = c + 1
// a - b >= 0 goto LOOP

// END
// RAM[0] = c


@ans
M=0	// c = 0

@R1
D=M
@R0
D=D-M
@END
D;JLT	// a - b < 0 goto END

(LOOP)
@R0
D=M
@R1
M=M-D	// a = a - b
@ans
M=M+1	// c = c + 1
@R1
D=M
@R0
D=D-M
@LOOP
D;JGE	// a - b >= 0 goto LOOP

(END)
@R1
M=0		// RAM[1] = 0
@ans
D=M
@R0
M=D		// RAM[0] = ans

(STOP)
@STOP
0;JMP
