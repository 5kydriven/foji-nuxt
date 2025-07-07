<script setup lang="ts">
	import type { TableColumn, DropdownMenuItem } from '@nuxt/ui';
	import AddMenuModal from './modals/add-modal.vue';
	import type { Menu } from '~~/types/menu.type';
	import { useMenuStore } from '~/stores/menu';
	import { useMenuModal } from '~/composables/lazy-menu-modal';

	const { openEditModal, openDeleteModal } = useMenuModal();
	const store = useMenuStore();
	const toast = useToast();
	const menu = ref<Menu>({});
	const value = ref('');
	const page = ref(5);

	const columns: TableColumn<any>[] = [
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
		},
		{
			id: 'action',
		},
	];

	function getDropdownActions(user: any): DropdownMenuItem[][] {
		return [
			[
				{
					label: 'Edit',
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
</script>

<template>
	<div class="p-4 rounded-md border border-neutral-200">
		<div class="flex justify-between items-center p-2">
			<UInput
				v-model="value"
				placeholder="Type something..."
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
			:data="store"
			:columns="columns"
			class="flex-1"
			sticky
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
			<template #price-cell="{ row }">
				<div>
					<p>
						{{ formatPeso(row.original.price) }}
					</p>
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
