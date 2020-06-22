<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="page-header">
      チーム一覧
      <div class="page-header-title">
        <SearchForm />
      </div>
      <common-button button-color="primary">
        チームを登録する
      </common-button>
    </div>
    <v-flex
      v-for="n in 10"
      :key="n"
      xs12
      sm8
      md6
      flex-wrap
      class="page-content"
    >
      <div class="page-content-item">
        <div class="page-content-item-header">
          野球チームA（東京都墨田区/隅田小学校）
        </div>
        <div class="page-content-item-main">
          <div class="page-content-item-list">
            <v-card class="d-inline-block mx-auto">
              <v-container>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-img
                      height="200"
                      width="200"
                      src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </div>
          <div class="page-content-item-list">
            <div class="page-content-item-lists">
              チームコメントチームコメント
            </div>
            <div class="page-content-item-lists">
              ★★★★★ 5.0評価表示
            </div>
            <div class="page-content-item-lists">
              口コミ評価[最新:createdate参照]
            </div>
          </div>
        </div>
      </div>
      <v-divider :inset="false"></v-divider>
    </v-flex>
    <common-button button-size="large" button-color="primary" button-width="25vw">
      ユーザー登録
    </common-button>
  </v-layout>
</template>

<script>
import { colors } from '~/assets/js/Colors.js'
import CommonButton from '~/components/atoms/CommonButton.vue'
import SearchForm from '~/components/molecules/SearchForm.vue'

export default {
  components: {
    CommonButton,
    SearchForm
  },
  data () {
    return {
      colors,
      valid: true,
      nickname: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    goLoginPage () {
      this.$router.push('/login')
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
.page-content {
  width: 100%;
  margin: 32px;
  &-item {
    margin: 12px;
    padding: 28px;
    .page-content-item-header {
      margin: 12px;
    }
    .page-content-item-main {
      display: flex;
      justify-content: flex-start;
      align-content: center;
    }
    .page-content-item-lists {
      margin: 12px;
    }
  }
}
.v-input {
  width: 25vw;
}
</style>
