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
          v-model="tab"
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

        <v-tabs-items v-model="tab">
          <v-tab-item>
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
                      <h1>チームトップ情報</h1>
                      <p>コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント</p>
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
          </v-tab-item>
          <v-tab-item>
            <div class="page-content-item-main">
              <div class="page-content-item-list">
                <v-container>
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <h1>users.nameさんの口コミ</h1>
                      <h2>性別[genders.men]年代[ages.category]在籍年[enrollments.yaer]あなたの立場[player_flags.player]</h2>
                      <div class="d-flex justify-left align-center">
                        <v-rating v-model="rating" />
                        <div>{{ rating }}</div>
                        <div>方針:5体制:5活動:5環境:5イベント:5費用:5</div>
                      </div>
                      <v-card class="d-inline-block mx-auto" min-width="60vw">
                        <v-card-title>
                          口コミ評価
                        </v-card-title>
                        <v-card-subtitle>
                          評価理由
                        </v-card-subtitle>
                        <v-card-text>
                          [総合]
                          -general_post
                        </v-card-text>
                        <v-card-text>
                          [チーム方針]
                          -policy_post
                        </v-card-text>
                        <v-card-text>
                          [チーム体制]
                          - organization_post
                        </v-card-text>
                        <v-card-text>
                          [活動内容]
                          - activity_post
                        </v-card-text>
                        <v-card-text>
                          [チーム環境]
                          - environment_post
                        </v-card-text>
                        <v-card-text>
                          [イベント]
                          - event_post
                        </v-card-text>
                        <v-card-text>
                          [費用]
                          - cost_post
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-tab-item>
          <v-tab-item>
            <div class="page-content-item-main">
              <div class="page-content-item-list">
                <v-container>
                  <v-row justify="space-between">
                    <v-col cols="auto">
                      <h1>teamの活動場所</h1>
                      <h2>性別[genders.men]年代[ages.category]在籍年[enrollments.yaer]あなたの立場[player_flags.player]</h2>
                      <div class="d-flex justify-left align-center">
                        <v-rating v-model="rating" />
                        <div>{{ rating }}</div>
                        <div>方針:5体制:5活動:5環境:5イベント:5費用:5</div>
                      </div>
                      <v-card class="d-inline-block mx-auto" min-width="60vw">
                        <iframe
                          src="http://maps.google.co.jp/maps?q=〒131-0031 東京都墨田区墨田４丁目６−５&output=embed&t=m&z=16&hl=ja"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                          width="100%"
                          height="450"
                        />
                        <v-card-title>〒131-0031 東京都墨田区墨田４丁目６−５</v-card-title>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-tab-item>
        </v-tabs-items>
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
      tab: null,
      rating: 3,
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
