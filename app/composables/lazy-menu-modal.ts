import ViewModal from '~/pages/admin/menu/_components/modals/view-modal.vue';
import EditModal from '~/pages/admin/menu/_components/modals/edit-modal.vue';
import DeleteModal from '~/pages/admin/menu/_components/modals/delete-modal.vue';

export function useMenuModal() {
	const overlay = useOverlay();
	const toast = useToast();

	async function openViewModal(id: string) {
		const modal = overlay.create(ViewModal, {
			props: { id },
		});
		const instance = modal.open();
	}

	async function openEditModal(menu: any) {
		const modal = overlay.create(EditModal, {
			props: { ...menu },
		});
		const instance = modal.open();
		const result = await instance.result;

		handleModalResult(result, 'Edit');
	}

	async function openDeleteModal(id: string) {
		const modal = overlay.create(DeleteModal, {
			props: { id },
		});
		const instance = modal.open();
		const result = await instance.result;

		handleModalResult(result, 'Delete');
	}

	function handleModalResult(result: any, action: string) {
		if (result) {
			toast.add({
				title: `${action} Successful: ${result}`,
				color: 'success',
			});
		} else {
			toast.add({
				title: `${action} Cancelled`,
				color: 'error',
			});
		}
	}

	return {
		openViewModal,
		openEditModal,
		openDeleteModal,
	};
}
