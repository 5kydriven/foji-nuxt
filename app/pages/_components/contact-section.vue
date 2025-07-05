<template>
	<div
		id="contact"
		class="w-full min-h-[60vh] flex flex-col items-center justify-center gap-10 dark:bg-gray-900 px-4 py-10"
	>
		<h1 class="text-3xl font-bold ">Contact Us</h1>
		<p class="text-lg text-gray-600 max-w-2xl text-center">
			We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us through the contact form below.	
		</p>
		<form class="w-full max-w-md">
			<div class="mb-4">
				<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
				<input type="text" id="name" class="mt-1 block *:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
			</div>
		</form>
	</div>
</template>