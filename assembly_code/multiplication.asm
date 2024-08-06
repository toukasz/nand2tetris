// MULTIPLICATION
// RAM[0] * RAM[1] = RAM[0]

// a = RAM[0]
// b = RAM[1]
// sum = 0

// LOOP:
// ? b = 0 goto STOP
// sum = sum + a
// b = b - 1
// goto LOOP

// STOP:
// R1 = 0
// R0 = sum
// END


@R0
D=M
@a
M=D		// a = RAM[0]

@R1
D=M
@b
M=D		// b = RAM[1]

@sum
M=0		// sum = 0

@b
D=M
@a
D=D-M
@LOOP
D;JLT	// ? b < a goto LOOP

@a
D=M
@temp
M=D		// temp = a

@b
D=M
@a
M=D		// a = b

@temp
D=M
@b
M=D		// b = temp

(LOOP)
@b
D=M
@STOP
D;JEQ	// ? b = 0 goto STOP

@a
D=M
@sum
M=D+M	// sum = sum + a

@b
M=M-1	// b = b - 1

@LOOP
0;JMP	// goto LOOP

(STOP)
@R1
M=0		// R1 = 0

@sum
D=M
@R0
M=D		// R0 = sum

(END)
@END
0;JMP	// END
