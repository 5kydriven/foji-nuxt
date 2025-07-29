<script setup lang="ts">
	import type { TableColumn, DropdownMenuItem, TableRow } from '@nuxt/ui';
	import type { Menu } from '~~/shared/types/menu.type';
	import { LazyFeatureViewModal, LazyFeatureDeleteModal, LazyFeatureEditModal } from '#components';

	const UCheckbox = resolveComponent('UCheckbox');
	const UDropdownMenu = resolveComponent('UDropdownMenu');
	const overlay = useOverlay();

  const viewModal = overlay.create(LazyFeatureViewModal);
	const deleteModal = overlay.create(LazyFeatureDeleteModal);
	const editModal = overlay.create(LazyFeatureEditModal);

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

	function getDropdownActions(feature: any): DropdownMenuItem[][] {
		return [
			[
				{
					label: 'View Details',
					icon: 'i-lucide-eye',
					onSelect: () => viewModal.open(feature),
				},
				{
					label: 'Edit',
					color: 'info',
					icon: 'i-lucide-edit',
					onSelect: () => editModal.open({ ...feature }),
				},
				{
					label: 'Delete',
					icon: 'i-lucide-trash',
					color: 'error',
					onSelect: () => deleteModal.open({ id: feature.id }),
				},
			],
		];
	}

	function onSelect(row: TableRow<Menu>, e?: Event) {
		row.toggleSelected(!row.getIsSelected());

		console.log(e);
	}

	const props = defineProps<{
		menus: Menu[];
		isLoading: boolean;
	}>();
</script>

<template>
	<UTable
		:loading="props.isLoading"
		loading-animation="carousel"
		:loading-state="{
			icon: 'i-heroicons-arrow-path-20-solid',
			label: 'Loading...',
		}"
		:data="props.menus"
		:columns="columns"
		class="flex-1 capitalize"
		sticky
		@select="onSelect"
	>
		<template #name-cell="{ row }">
			<div class="flex items-center gap-3">
				<UAvatar
					:src="row.original.image"
					size="xl"
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
