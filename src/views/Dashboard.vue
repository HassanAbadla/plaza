<template>
  <div class="dashboard">
    <div class="header">
      <nav>
        <h4>لوحة التحكم</h4>
        <p> مرحبا حسن </p>
      </nav>
    </div>
    <main>
      <div class="sidebar">
        <div class="sections">
          <router-link to="/dashboard"
            class="flex items-center px-3 pl-24 hover:bg-green-400 py-4 cursor-default font-semibold border-b border-gray-700 transition ease-out duration-200">
            <HomeIcon class="text-green-300 h-6 pl-4 " />الرئيسية
          </router-link>
          <router-link to="/properties"
            class="flex items-center px-3 pl-24 hover:bg-green-400 py-4 cursor-default font-semibold border-b border-gray-700 transition ease-out duration-200">
            <HomeIcon class="text-green-300 h-6 pl-4 " />العقارات
          </router-link>
          <router-link to="/clients"
            class="flex items-center px-3 pl-24 hover:bg-green-400 py-4 cursor-default font-semibold border-b border-gray-700 transition ease-out duration-200">
            <HomeIcon class="text-green-300 h-6 pl-4 " />الزبائن
          </router-link>
          <router-link to="/brokers"
            class="flex items-center px-3 pl-24 hover:bg-green-400 py-4 cursor-default font-semibold border-b border-gray-700 transition ease-out duration-200">
            <HomeIcon class="text-green-300 h-6 pl-4 " />الوسطاء
          </router-link>
          <router-link to="/sales"
            class="flex items-center px-3 pl-24 hover:bg-green-400 py-4 cursor-default font-semibold border-b border-gray-700 transition ease-out duration-200">
            <HomeIcon class="text-green-300 h-6 pl-4 " />المبيعات
          </router-link>
          <router-link to="/employees"
            class="flex items-center px-3 pl-24 hover:bg-green-400 py-4 cursor-default font-semibold border-b border-gray-700 transition ease-out duration-200">
            <HomeIcon class="text-green-300 h-6 pl-4 " />الموظفون
          </router-link>
          <router-link to="/business-expenses"
            class="flex items-center px-3 pl-24 hover:bg-green-400 py-4 cursor-default font-semibold border-b border-gray-700 transition ease-out duration-200">
            <HomeIcon class="text-green-300 h-6 pl-4 " />مصاريف العمل
          </router-link>
          <router-link to="/office-expenses"
            class="flex items-center px-3 pl-24 hover:bg-green-400 py-4 cursor-default font-semibold border-b border-gray-700 transition ease-out duration-200">
            <HomeIcon class="text-green-300 h-6 pl-4 " />مصاريف المكتب
          </router-link>
          <router-link to="/salaries"
            class="flex items-center px-3 pl-24 hover:bg-green-400 py-4 cursor-default font-semibold border-b border-gray-700 transition ease-out duration-200">
            <HomeIcon class="text-green-300 h-6 pl-4 " />الرواتب
          </router-link>
        </div>
      </div>

      <RouterView />
    </main>

  </div>
</template>

<script>
  import { RouterView } from 'vue-router'


</script>

<style scoped>
  .dashboard {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    /* Full height of the screen */
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 95%; */
    /* padding: 6px; */
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 6px 12px;
    margin-inline: auto;
    background-color: #e4e4e4;

  }

  main {
    display: flex;
    flex: 1;
    /* background-color: blueviolet; */

    /* Takes up the remaining height after the header */
  }

  .sidebar {
    display: flex;
    justify-content: center;
    /* min-height: 100dvh; */
    min-width: 230px;
    height: 100%;
    background-color: #3a4f7c;
  }

  .sections {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .sidebar a {
    text-decoration: none;
    color: #e4e4e4;
    font-weight: bold;
    transition: 0.4s;
    padding: 3px;
  }


</style>