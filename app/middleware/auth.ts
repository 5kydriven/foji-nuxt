export default defineNuxtRouteMiddleware((to, from) => {
	const user = useSupabaseUser();
	console.log(user.value);

	if (user.value && to.path == '/') {
		return navigateTo('/admin');
	}

	if (user.value && to.path == '/auth') {
		return navigateTo('/admin');
	}

	if (!user.value && to.path == '/admin') {
		return navigateTo('/auth');
	}
});
