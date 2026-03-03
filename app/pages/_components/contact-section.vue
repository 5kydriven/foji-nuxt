<template>
	<div
		id="contact"
		class="w-full min-h-[60vh] flex flex-col items-center justify-center gap-10 bg-[#f6ecda] px-4 py-10"
	>
		<h1 class="text-3xl font-bold text-[#1f1812]">Contact Us</h1>
		<p class="max-w-2xl text-center text-lg text-[#5f513d]">
			We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us through the contact form below.
		</p>
		<form class="w-full max-w-md">
			<div class="mb-4">
				<label
for="name"
class="block text-sm font-medium text-[#3f3328]"
>Name</label>
				<input
id="name"
type="text"
class="mt-1 block *:w-full rounded-md border border-[#d7c3a2] bg-[#fffdf8] px-3 py-2 text-sm text-[#1f1812] shadow-sm focus:border-[#a52b26] focus:outline-none focus:ring-[#ebc3bf]"
required
>
			</div>
		</form>
	</div>
</template>
