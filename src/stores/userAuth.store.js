import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserAuthStore = defineStore('userInfo', () => {
  const isAuth = ref(false);
	const userName = ref(null)

  function signIn() {
		console.log("isAuth");
    isAuth.value = true;
		userName.value = 'Awesome user';
  }

	function signOut() {
		console.log("isAuth out");
		isAuth.value = false;
		userName.value = null;
	}

  return { isAuth, userName, signIn, signOut }
})
