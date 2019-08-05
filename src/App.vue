<template>
  <div id="app">
    <sui-menu pointing secondary>
      <a 
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)" />
        <sui-menu-menu position="right">
          <a
            is="sui-menu-item"
            :active="isActive('Logout')"
            content="Logout"
            @click="select('Logout')"
          />
        </sui-menu-menu>
    </sui-menu>

    <!-- <nav>
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
    </nav> -->
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'Home',
      items: ['Home', 'Register', 'Login', 'Student']
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
      this.$router.push({name: name.toLowerCase()});
    }
  }
};
</script>
