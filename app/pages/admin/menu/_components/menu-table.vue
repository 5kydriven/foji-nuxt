<script setup lang="ts">
	import type { TableColumn, DropdownMenuItem, TableRow } from '@nuxt/ui';
	import type { Menu } from '~~/shared/types/menu.type';
	import { useMenuStore } from '~/stores/menu';
	import { useMenuModal } from '~/composables/lazy-menu-modal';
	import { LazyDeleteModal } from '#components';

	const { openViewModal, openEditModal, openDeleteModal } = useMenuModal();
	const store = useMenuStore();
	const UCheckbox = resolveComponent('UCheckbox');
	const UDropdownMenu = resolveComponent('UDropdownMenu');
	const overlay = useOverlay();

	const deleteModal = overlay.create(LazyDeleteModal);

	const menus = computed(() => toRaw(store.menus.value));
	const isLoading = computed(() => store.isLoading.value);

	const columns: TableColumn<Menu>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				h(UCheckbox, {
					modelValue: table.getIsSomePageRowsSelected()
						? 'indeterminate'
						: table.getIsAllPageRowsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all',
				}),
			cell: ({ row }) =>
				h(UCheckbox, {
					modelValue: row.getIsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						row.toggleSelected(!!value),
					'aria-label': 'Select row',
				}),
		},
		{
			accessorKey: 'id',
			header: 'ID',
		},
		{
			accessorKey: 'name',
			header: 'Name',
		},
		{
			accessorKey: 'description',
			header: 'Description',
		},
		{
			accessorKey: 'price',
			header: 'Price',
			cell: ({ row }) => formatPeso(row.getValue('price')),
		},
		{
			id: 'action',
		},
	];

	function getDropdownActions(user: any): DropdownMenuItem[][] {
		return [
			[
				{
					label: 'View Details',
					icon: 'i-lucide-eye',
					onSelect: () => openViewModal(user.id),
				},
				{
					label: 'Edit',
					color: 'info',
					icon: 'i-lucide-edit',
					onSelect: () => openEditModal(user.id),
				},
				{
					label: 'Delete',
					icon: 'i-lucide-trash',
					color: 'error',
					onSelect: () => deleteModal.open({ id: user.id }),
				},
			],
		];
	}

	const rowSelection = ref<Record<string, boolean>>({});

	function onSelect(row: TableRow<Menu>, e?: Event) {
		row.toggleSelected(!row.getIsSelected());

		console.log(e);
	}

	onMounted(async () => {
		await callOnce('admin-menus', () => store.getMenus());
	});
</script>

<template>
	<UTable
		:key="menus.length"
		v-model:row-selection="rowSelection"
		:loading="isLoading"
		loading-animation="carousel"
		:data="menus"
		:columns="columns"
		class="flex-1"
		sticky
		@select="onSelect"
	>
		<template #name-cell="{ row }">
			<div class="flex items-center gap-3">
				<UAvatar
					:src="row.original.image"
					size="lg"
				/>
				<div>
					<p class="font-medium text-highlighted">
						{{ row.original.japaneseName }}
					</p>
					<p>
						{{ row.original.name }}
					</p>
				</div>
			</div>
		</template>
		<template #action-cell="{ row }">
			<UDropdownMenu :items="getDropdownActions(row.original)">
				<UButton
					icon="i-lucide-ellipsis-vertical"
					color="neutral"
					variant="ghost"
					aria-label="Actions"
				/>
			</UDropdownMenu>
		</template>
	</UTable>
</template>
