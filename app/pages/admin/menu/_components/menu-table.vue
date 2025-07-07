<script setup lang="ts">
	import type { TableColumn, DropdownMenuItem, TableRow } from '@nuxt/ui';
	import AddMenuModal from './modals/add-modal.vue';
	import type { Menu } from '~~/types/menu.type';
	import { useMenuStore } from '~/stores/menu';
	import { useMenuModal } from '~/composables/lazy-menu-modal';

	const { openViewModal, openEditModal, openDeleteModal } = useMenuModal();
	const store = useMenuStore();
	const value = ref('');
	const page = ref(5);
	const UCheckbox = resolveComponent('UCheckbox')

	const columns: TableColumn<any>[] = [
		{
			id: 'select',
			header: ({ table }) =>
				h(UCheckbox, {
					modelValue: table.getIsSomePageRowsSelected()
						? 'indeterminate'
						: table.getIsAllPageRowsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
						table.toggleAllPageRowsSelected(!!value),
					'aria-label': 'Select all'
				}),
			cell: ({ row }) =>
				h(UCheckbox, {
					modelValue: row.getIsSelected(),
					'onUpdate:modelValue': (value: boolean | 'indeterminate') => row.toggleSelected(!!value),
					'aria-label': 'Select row'
				})
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
					onSelect: () => openDeleteModal(user.id),
				},
			],
		];
	}

	const rowSelection = ref<Record<string, boolean>>({})

	function onSelect(row: TableRow<Menu>, e?: Event) {
		row.toggleSelected(!row.getIsSelected())

		console.log(e)
	}
	
</script>

<template>
	<div class="p-4 rounded-md border border-neutral-200">
		<div class="flex justify-between items-center p-2">
			<UInput
				v-model="value"
				icon="heroicons:magnifying-glass-solid"
				placeholder="Search..."
				:ui="{ trailing: 'pe-1' }"
			>
				<template
					v-if="value?.length"
					#trailing
				>
					<UButton
						color="neutral"
						variant="link"
						size="sm"
						icon="i-lucide-circle-x"
						aria-label="Clear input"
						@click="value = ''"
					/>
				</template>
			</UInput>
			<AddMenuModal />
		</div>
		<UTable
			v-model:row-selection="rowSelection"
			:data="store"
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
		<div class="flex justify-center my-2">
			<UPagination
				v-model:page="page"
				:sibling-count="1"
				:total="100"
				active-color="error"
			/>
		</div>
	</div>
</template>
