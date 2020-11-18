<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      v-if="token"
    > -->
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="token" /> -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" @click="$router.push('/top')" style="cursor: pointer" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2020 {{ nowYear }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  created () {
    this.token = localStorage.getItem('token')
    // if (!this.token) {
    //   this.$router.push('/login')
    // }
  },
  data () {
    return {
      token: '',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'スポーツ一覧',
          to: '/top'
        },
        {
          icon: 'mdi-apps',
          title: 'エリアから探す',
          to: '/topPrefecture'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ログイン',
          to: '/login'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'アカウント登録',
          to: '/signup'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '総合スポーツチーム口コミ情報サイト​ - SPOLEAD'
    }
  },
  computed: {
    nowYear () {
      const year = new Date()
      const nowYear = year.getFullYear()
      if (nowYear > 2020) {
        return `~ ${nowYear}`
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss">
#app{
  font-family: 'spolead';
}
</style>
