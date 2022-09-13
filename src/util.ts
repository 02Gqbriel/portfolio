function map(min1, max1, min2, max2, input) {
	return min2 + ((input - min1) * (max2 - min2)) / (max1 - min1);
}

export { map };
