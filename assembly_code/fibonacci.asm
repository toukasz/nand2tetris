// find nth value of fibonacci
// RAM[0] = nth value of fibonacci
// RAM[1] = 0 + 1 + 1 + 2 + 3 + 5 + ...

// n = RAM[0]
@R0
D=M
@n
M=D
// i = 2;
@2
D=A
@i
M=D
// a = 0
@a
M=0
// b = 1
@b
M=1

// LOOP:
(LOOP)
// ? i > n goto STOP
@i
D=M
@n
D=D-M
@STOP
D;JGT
// i = i + 1
@i
M=M+1
// c = a + b
@a
D=M
@b
D=D+M
@c
M=D
// a = b
@b
D=M
@a
M=D
// b = c
@c
D=M
@b
M=D
// goto LOOP
@LOOP
0;JMP

// STOP:
(STOP)
// R1 = b
@b
D=M
@R1
M=D

// END
(END)
@END
0;JMP
