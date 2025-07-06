export default defineNuxtRouteMiddleware((to, from) => {
	const user = useSupabaseUser();

	if (user.value && to.path == '/auth') {
		return navigateTo('/admin');
	}

	if (!user.value && to.path == '/admin') {
		return navigateTo('/auth');
	}
});
