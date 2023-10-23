<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useUserAuthStore } from './stores/userAuth.store'
import { storeToRefs } from 'pinia';

	const userAuthStore = useUserAuthStore();

	const { isAuth, userName } = storeToRefs(userAuthStore);
</script>

<template>
  <header>
    <div class="wrapper">
			<h1>Vue App start!</h1>

      <nav>
				<ul>
					<li><RouterLink to="/">Home</RouterLink></li>
					<li><RouterLink to="/about">About</RouterLink></li>
				</ul>
      </nav>
			<h1>{{ userName }}</h1>
			<button v-if="!isAuth" @click="userAuthStore.signIn()">SignIn</button>
			<button v-if="isAuth" @click="userAuthStore.signOut()">SignOut</button>
    </div>


  </header>

  <RouterView />
</template>
