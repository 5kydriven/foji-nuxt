export const useAuth = defineStore('auth', () => {
	const client = useSupabaseClient();
	const localePath = useLocalePath();

	async function signIn({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) {}

	async function signOut() {
		await client.auth.signOut();
		await navigateTo(localePath('/auth'));
	}

	return {
		signOut,
	};
});
