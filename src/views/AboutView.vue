<template>
  <div class="about">
    <form @submit.prevent="handleLogin" method="post">
      <input type="text" name="user_name" v-model="user_name" placeholder="username" id="">
      <input type="password" name="password" v-model="password" placeholder="password" id="">
      <button type="submit">SING IN</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user_name: '',
      password: '',
    }
  },

  methods: {
    async handleLogin() {
      let data = {
        user_name: this.user_name,
        password: this.password
      }
      
      await this.$store.dispatch('auth/login', data).then(() => {
        this.$router.replace({
          name: 'dashboard'
        })
      })
    }
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    padding: 8px;
  }
  button {
    width: 350px;
    padding: 8px;
  }
}
</style>
