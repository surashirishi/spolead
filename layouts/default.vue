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
      <common-button @click="logOut" v-if="!!token" button-color="warning">
        ログアウト
      </common-button>
      <common-button @click="$router.push('/login')" v-else button-color="primary">
        チームを登録するにはログインが必要です
      </common-button>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      color="primary lighten-1"
      padless
      app
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="(link,i) in footerLinks"
          :key="i"
          :to="link.to"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.title }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          <span>&copy; Spolead.All rights reserved 2020 {{ nowYear }}</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import CommonButton from '~/components/atoms/CommonButton.vue'
export default {
  components: {
    CommonButton
  },
  data () {
    return {
      token: '',
      clipped: false,
      drawer: false,
      fixed: false,
      isLogin: localStorage,
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
      footerLinks: [
        {
          title: 'ホーム',
          to: '/top'
        },
        {
          title: 'お問い合わせ',
          to: '/ContactForm'
        },
        {
          title: '利用規約',
          to: '/TermOfService'
        },
        {
          title: '運営管理',
          to: '/MasterInformation'
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
  },
  created () {
    this.token = localStorage.getItem('token')
    // if (!this.token) {
    //   this.$router.push('/login')
    // }
  },
  methods: {
    logOut () {
      // only remove localStorage

      // this.$store
      //   .dispatch('api/apiRequest', {
      //     api: 'login',
      //     data: {
      //       email: this.email,
      //       password: this.password
      //     }
      //   }).then((res) => {
      //     if (res.status === 200) {
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('loginDateTime')
      this.$router.push('/top')
      // location.replace('http://localhost:8000/top')
      location.replace('https://spolead.com/top')
      //   }
      // }).catch((err) => {
      //   console.log('ERROR', err)
      // })
    }
  }
}
</script>
<style lang="scss">
#app{
  font-family: 'spolead';
}
.v-toolbar__content {
  .common-button {
    margin-right: 20px;
  }
}
</style>
