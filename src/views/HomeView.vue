<template>
  <div class="login">
    <div class="header">
      <h2>Plaza</h2>
    </div>
    <form @submit.prevent="handleLogin" method="post">
      <input type="text" name="user_name" v-model="user_name" placeholder="اسم المستخدم" id="">
      <input type="password" name="password" v-model="password" placeholder="كلمة المرور" id="">
      <button type="submit">دخول</button>
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

<style scoped>
  @media (min-width: 1024px) {
    .login {
      /* min-height: 100vh; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem;
      border: 1px solid #494949;
      border-radius: 1rem;
      /* background-color: blueviolet; */

    }
    .header {
      min-width: 300px;
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
