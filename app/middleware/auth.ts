export default defineNuxtRouteMiddleware((to, from) => {
	const session = useSupabaseSession();

	if (session.value && to.path == '/auth') {
		console.log(to.path);
		return navigateTo('/admin');
	}

	if (!session.value && to.path == '/admin') {
		return navigateTo('/auth');
	}
});
