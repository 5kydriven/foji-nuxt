export function formatPeso(value: number): string {
	if (value === null || value === undefined) {
		return '';
	}

	return `₱${value.toFixed(2)}`;
}
