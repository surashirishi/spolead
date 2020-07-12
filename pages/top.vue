<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="page-header">
      <div class="page-header-title">
        総合スポーツチーム口コミ情報サイト
      </div>
      <div class="page-header-title">
        <v-btn large>
          ログイン
        </v-btn>
      </div>
    </div>
    <div class="page-title">
      SPOLEAD
    </div>
    <v-flex
      xs12
      sm8
      md6
      d-flex
      flex-wrap
      class="page-content"
    >
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
        @click="goTeamsPage"
        class="sports"
      >
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title" />
          </v-img>
        </v-card>
      </v-col>
    </v-flex>
    <common-button @click="registUserPage" button-size="large">
      ユーザー登録
    </common-button>
  </v-layout>
</template>

<script>
import CommonButton from '~/components/atoms/CommonButton.vue'

export default {
  components: {
    CommonButton
  },
  data () {
    return {
      cards: [
        { title: 'Soccer', src: require('~/assets/images/soccer.jpg'), flex: 3 },
        { title: 'Baseball', src: require('~/assets/images/baseball.jpg'), flex: 3 },
        { title: 'Basketball', src: require('~/assets/images/basketball.jpeg'), flex: 3 },
        { title: 'Volleyball', src: require('~/assets/images/volleyball.jpeg'), flex: 3 },
        { title: 'Dance', src: require('~/assets/images/dance.jpeg'), flex: 3 },
        { title: 'Rugby', src: require('~/assets/images/rugby.jpeg'), flex: 3 },
        { title: 'Swimming', src: require('~/assets/images/swimming.jpeg'), flex: 3 }
      ]
    }
  },
  methods: {
    registUserPage () {
      this.$router.push('/signup')
    },
    goTeamsPage () {
      this.$router.push('/teams')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: 10vh;
  margin: 16px;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-title {
  width: 100%;
  height: 13vh;
  font-size: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-content {
  margin: 32px;
  .sports {
    cursor: pointer;
  }
}
</style>
