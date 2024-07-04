export function nand(a, b)
{
	switch (a === true && b === true)
	{
		case true:
		return false;

		default:
		return true;
	}
}

export function not(a)
{
	return !a;
}

export function and(a, b)
{
	switch (a === true && b === true)
	{
		case true:
		return true;

		default:
		return false;
	}
}

export function or(a, b)
{
	switch (a === false && b === false)
	{
		case true:
		return false;

		default:
		return true;
	}
}

export function xor(a, b)
{
	switch (a !== b)
	{
		case true:
		return true;

		default:
		return false;
	}
}

export function mux(a, b, sel)
{
	switch (sel)
	{
		case true:
		return b;

		default:
		return a;
	}
}

export function dmux(a, sel, out)
{
	switch (out)
	{
		case false:
		switch (sel)
		{
			case true:
			return false;

			default:
			return a;
		}

		case true:
		switch (sel)
		{
			case true:
			return a;

			default:
			return false;
		}
	}
}

export function not16(a)
{
	return a.map(i => !i);
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
		case true:
		return b;

		default:
		return a;
	}
}

export function or8way(a)
{
	let out = false;

	for (let i = 0; i < 8; i++)
	{
		out += a[i];
	}

	switch (out)
	{
		case 0:
		return false;

		default:
		return true;
	}
}

export function mux4way16(a, b, c, d, sel)
{
	switch (sel[0])
	{
		case false:
		switch (sel[1])
		{
			case false:
			return a;

			default:
			return b;
		}

		default:
		switch (sel[1])
		{
			case false:
			return c;

			default:
			return d;
		}
	}
}
