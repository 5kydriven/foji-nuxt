const apiUrl = '/v1/api/menus';

export async function indexMenus() {
	const data = await $fetch(apiUrl);
	return data;
}

export async function createMenu({ payload }: { payload: any }) {}

export async function updateMenu({
	id,
	payload,
}: {
	id: string;
	payload: any;
}) {}

export async function destroyMenu({ id }: { id: string }) {}
