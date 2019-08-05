<template>
  <div id="app">
    <nav>
      <li>
          <router-link :to="{name: 'home'}">Home</router-link>
      </li>
      <li>
          <router-link :to="{name: 'register'}">Register</router-link>
      </li>
      <li>
          <router-link :to="{name: 'login'}">Login</router-link>
      </li>
      <li>
          <router-link :to="{name: 'student', params: {id: 2}}">Student</router-link>
      </li>
    </nav>
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  
}
</script>
