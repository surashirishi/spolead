<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="page-header">
      <div class="page-header-title">
        野球チームA
      </div>
      <div class="page-header-sub">
        <common-button @click="showRegistTeamModal" button-color="primary">
          口コミ投稿する
        </common-button>
        <common-button @click="showRegistTeamModal" button-color="primary">
          チーム編集
        </common-button>
      </div>
    </div>
    <v-flex
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
        <div class="page-content-item-header">
          活動エリア：東京都墨田区/ジャンル：野球
        </div>
        <v-tabs
          fixed-tabs
          background-color="primary"
          dark
          class="tabs"
        >
        <v-tab>
          トップ
        </v-tab>
        <v-tab>
          口コミ
        </v-tab>
        <v-tab>
          活動場所
        </v-tab>
      </v-tabs>
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
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-textarea
                    autocomplete="チーム情報"
                    label="チーム情報"
                    height="200"
                    :readonly="true"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div class="page-content-item-footer">
          <common-button @click="goTeamDetail" button-color="primary">
            口コミ情報（最新１件）
          </common-button>
        </div>
      </div>
      <v-divider :inset="false" />
    </v-flex>
    <common-button button-size="large" button-color="primary" button-width="25vw">
      もっと見る
    </common-button>
    <team-regist-modal :dialog="registTeamModal" @closeModal="closeModal" />
  </v-layout>
</template>

<script>
import { colors } from '~/assets/js/Colors.js'
import CommonButton from '~/components/atoms/CommonButton.vue'
import TeamRegistModal from '~/components/organisms/TeamRegistModal.vue'

export default {
  components: {
    CommonButton,
    TeamRegistModal
  },
  data () {
    return {
      colors,
      valid: true,
      nickname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      registTeamModal: false
    }
  },
  methods: {
    goLoginPage () {
      this.$router.push('/login')
    },
    goTeamDetail () {
      console.log('teams detail')
    },
    showRegistTeamModal () {
      this.registTeamModal = true
    },
    closeModal () {
      this.registTeamModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/page.scss';
.page-header {
  @include default-page-header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-sub {
    .common-button {
      width: 10vw;
    }
  }
}
.page-content {
  @include default-page-content;
  &-item {
    &-footer {
      justify-content: flex-start;
    }
    &-list {
      margin: 0px 12px;
    }
  }
  .tabs {
    margin: 24px 0px;
  }
}
</style>
