export function nand(a, b)
{
	switch (a === 1 && b === 1)
	{
		case true:
		return 0;

		default:
		return 1;
	}
}

export function not(a)
{
	switch (a)
	{
		case 1:
		return 0;

		default:
		return 1;
	}
}

export function and(a, b)
{
	switch (a === 1 && b === 1)
	{
		case true:
		return 1;

		default:
		return 0;
	}
}

export function or(a, b)
{
	switch (a === 0 && b === 0)
	{
		case true:
		return 0;

		default:
		return 1;
	}
}

export function xor(a, b)
{
	switch (a !== b)
	{
		case true:
		return 1;

		default:
		return 0;
	}
}

export function mux(a, b, sel)
{
	switch (sel)
	{
		case 1:
		return b;

		default:
		return a;
	}
}

export function dmux(a, sel, out)
{
	switch (out)
	{
		case 0:
		switch (sel)
		{
			case 1:
			return 0;

			default:
			return a;
		}

		case 1:
		switch (sel)
		{
			case 1:
			return a;

			default:
			return 0;
		}
	}
}

export function not16(a)
{
	let out = [];

	for (let i = 0; i < 16; i++)
	{
		out.push(not(a[i]));
	}

	return out;
}

export function and16(a, b)
{
	let out = [];

	for (let i = 0; i < 16; i++)
	{
		out.push(and(a[i], b[i]));
	}

	return out;
}

export function or16(a, b)
{
	let out = [];

	for (let i = 0; i < 16; i++)
	{
		out.push(or(a[i], b[i]));
	}

	return out;
}

export function mux16(a, b, sel)
{
	switch (sel)
	{
		case 1:
		return b;

		default:
		return a;
	}
}

export function or8way(a)
{
	let out = 0;

	for (let i = 0; i < 8; i++)
	{
		out += a[i];
	}

	switch (out)
	{
		case 0:
		return 0;

		default:
		return 1;
	}
}

export function mux4way16(a, b, c, d, sel)
{
	switch (sel[0])
	{
		case 0:
		switch (sel[1])
		{
			case 0:
			return a;

			default:
			return b;
		}

		default:
		switch (sel[1])
		{
			case 0:
			return c;

			default:
			return d;
		}
	}
}

export function mux8way16(a, b, c, d, e, f, g, h, sel)
{
	switch (sel.join(''))
	{
		case '000':
		return a;

		case '001':
		return b;

		case '010':
		return c;

		case '011':
		return d;

		case '100':
		return e;

		case '101':
		return f;

		case '110':
		return g;

		default:
		return h;
	}
}

export function dmux4way(a, sel)
{
}

export function dmux8way(a, sel)
{
}

export function halfAdder(a, b, out)
{
	switch (out)
	{
		case 'sum':
		return xor(a, b);

		case 'carry':
		return and(a, b);
	}
}

export function fullAdder(a, b, c, out)
{
	switch (out)
	{
		case 'sum':
		return xor(c, xor(a, b));

		case 'carry':
		let w0 = xor(a, b);
		return or(and(a, b), and(c, w0));
	}
}

export function add16(a, b)
{
	let sum = [halfAdder(a[15], b[15], 'sum')];
	let carry = halfAdder(a[15], b[15], 'carry');

	for (let i = 14; i >= 0; i--)
	{
		sum.unshift(fullAdder(a[i], b[i], carry, 'sum'));
		carry = fullAdder(a[i], b[i], carry, 'carry');
	}

	return sum;
}

export function inc16(a)
{
	return add16(a, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
}

export function alu(x, y, zx, nx, zy, ny, f, no)
{
	let out;

	if (zx === 1)
	{
		x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	if (nx === 1)
	{
		x = not16(x);
	}
	if (zy === 1)
	{
		y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	if (ny === 1)
	{
		y = not16(y);
	}
	if (f === 1)
	{
		out = add16(x, y);
	}
	if (f === 0)
	{
		out = and16(x, y);
	}
	if (no === 1)
	{
		out = not16(out);
	}

	return out;
}

export var RAM = pushRAM(8);

export function pushRAM(length)
{
	let memory = [];

	for (let i = 0; i < length; i++)
	{
		memory.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	}

	return memory;
}

export function ram(a, load, address)	//NOTE: output of load=1 has no delay
{
	const i = parseInt(address.join(''), 2);

	if (load === 1)
	{
		RAM[i] = a;
	}

	return RAM[i];
}

export var count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export function pc(a, reset, load, inc)
{
	if (reset === 1)
	{
		count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		return count;
	}
	if (load === 1)
	{
		count = a;
		return count;
	}
	if (inc === 1)
	{
		count = inc16(count);
		return count;
	}

	return count;
}
