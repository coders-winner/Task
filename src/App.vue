<template>
  <a-layout class="my-app">
    <a-layout-header class="my-headr">
      <router-link to="/" class="my-logo">Task</router-link>
      <a-button href="/task" ghost>Task board</a-button>
    </a-layout-header>
    <main>
      <router-view></router-view>
    </main>
    <a-layout-footer class="my-footer">Viktor Shatskov © 2024</a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap')

.my-logo
  font-family: "Bungee Spice", sans-serif
  font-weight: 400
  font-style: normal
  font-size: 48px
.my-app
  background: none !important
main
  margin: 20px
  flex: 1 0 auto
.my-headr
  color: white
  background-color: #37474F
  display: flex
  justify-content: space-between
  align-items: center

.my-footer
  text-align: center
  flex: 0 0 auto
  color: white
  background-color: #263238
</style>
