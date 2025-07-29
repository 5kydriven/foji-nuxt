export function toFormData(obj: Record<string, any>): FormData {
	const formData = new FormData();

	Object.entries(obj).forEach(([key, value]) => {
		if (value instanceof File) {
			formData.append(key, value);
		} else if (Array.isArray(value)) {
			value.forEach((item, index) => {
				formData.append(`${key}[${index}]`, item);
			});
		} else if (typeof value === 'object' && value !== null) {
			formData.append(key, JSON.stringify(value));
		} else if (value !== undefined && value !== null) {
			formData.append(key, String(value));
		}
	});

	return formData;
}
