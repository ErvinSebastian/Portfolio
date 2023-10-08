<script setup>
import HomeView from './views/HomeView.vue'


</script>

<template>
      <html data-theme="dark">
            <div class="fixed navbar bg-base-100">
                  <div class="flex-1">
                        <a href="/" class="btn btn-ghost normal-case text-xl">Ervin Sebastian</a>
                  </div>
                        <div class="flex-none">
                        <ul class="menu menu-horizontal px-1">
                        <li>
                              <a href="/about">About</a></li>
                        <li>
                              <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                              <a>Contact</a>
                        </li>
                        </ul>
                  </div>
            </div>
            <RouterView />
      
      </html>
      

</template>

<style scoped>

</style>
