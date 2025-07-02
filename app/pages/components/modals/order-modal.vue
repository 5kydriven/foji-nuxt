<template>
  <UModal :dismissible="false" title="Order Details">
    <UButton label="Order now" color="error" />

    <template #body>
      <Placeholder class="h-48" />
    </template>
  </UModal>
</template>
