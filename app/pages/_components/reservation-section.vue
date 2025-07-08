<template>
	<div
		id="faq"
		class="w-full min-h-[60vh] flex flex-col items-center justify-center gap-10 dark:bg-gray-900 px-4 py-10 xl:px-16 "
	>
		<div class="flex flex-col md:flex-row items-center justify-between gap-10 p-4 xl:p-8 rounded-md bg-red-50">
			<div class="flex-1 space-y-2">
				<h1 class="text-3xl font-bold ">
					Do you have any plan to eat at our restaurant? Reserve your table now!
				</h1>
				<p class="text-gray-600">
					We are excited to welcome you to our restaurant! To ensure a smooth dining experience, we recommend making a reservation in advance.
				</p>
				<UButton
				label="Reserve Now"
				color="error"
				/>
			</div>
			<div class="flex-1 flex justify-center items-center">
				<img	
					src="/menu.png"
					class="w-48 h-48 md:w-72 md:h-72 rounded-lg drop-shadow-2xl/50"
				/>
			</div>
		</div>
	</div>
</template>
