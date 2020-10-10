<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="page-header">
      チーム一覧
      <div class="page-header-title">
        <SearchForm @execSearch="execSearch" />
      </div>
      <common-button @click="showRegistTeamModal" button-color="primary">
        チームを登録する
      </common-button>
    </div>
    <v-flex
      v-for="team in teams"
      :key="team.id"
      xs12
      sm8
      md6
      flex-wrap
      class="page-content"
    >
      <div class="page-content-item">
        <div class="page-content-item-header">
          {{ team.name }} ({{ team.prefecture }}{{ team.city }}{{ team.street_number }})
        </div>
        <div class="page-content-item-main">
          <div class="page-content-item-list">
            <v-card class="d-inline-block mx-auto">
              <v-container>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-img
                      :src="team.team_image ? team.team_image : ''"
                      height="200"
                      width="200"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </div>
          <div class="page-content-item-list">
            <div class="page-content-item-lists">
              {{ team.team_information }}
            </div>
            <div class="page-content-item-lists">
              ★★★★★ 5.0評価表示
            </div>
            <div class="page-content-item-lists">
              最新の口コミ評価({{ getLatestReview(team.reviews) ? new Date(getLatestReview(team.reviews).updated_at).toLocaleString() : 'まだ口コミがありません' }})
            </div>
            <div v-if="getLatestReview(team.reviews)" class="page-content-item-lists">
              {{ getLatestReview(team.reviews).general_post }}
            </div>
          </div>
        </div>
        <div class="page-content-item-footer">
          <common-button @click="goTeamDetail(team.id)" button-color="primary">
            チームの詳細を確認する
          </common-button>
        </div>
      </div>
      <v-divider :inset="false" />
    </v-flex>
    <!-- <common-button button-size="large" button-color="primary" button-width="25vw">
      ユーザー登録
    </common-button> -->
    <!-- <Pagination /> -->
    <team-regist-modal :dialog="registTeamModal" @registTeam="registTeam" />
  </v-layout>
</template>

<script>
import { colors } from '~/assets/js/Colors.js'
import CommonButton from '~/components/atoms/CommonButton.vue'
import TeamRegistModal from '~/components/organisms/TeamRegistModal.vue'
import SearchForm from '~/components/molecules/SearchForm.vue'
// import Pagination from '~/components/molecules/Pagination.vue'

export default {
  components: {
    CommonButton,
    SearchForm,
    TeamRegistModal
    // Pagination
  },
  data () {
    return {
      colors,
      valid: true,
      nickname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      registTeamModal: false,
      teams: []
    }
  },
  created () {
    this.getTeams()
  },
  methods: {
    getTeams (searchWord) {
      let params = {}
      // get Teams related to sportsId
      if (localStorage.getItem('sportsId')) {
        params = {
          sports_id: localStorage.getItem('sportsId')
        }
      // get Teams related to cityCodes
      } else {
        params = {
          city_code: localStorage.getItem('cityCode')
        }
      }
      params.search_word = searchWord
      // params.page = page || 1

      this.$store
        .dispatch('api/apiRequest', {
          api: 'teamIndex',
          params
        }).then((res) => {
          if (res.status === 200) {
            this.teams = res.data
            console.log('this.teams  ', this.teams)
          }
        })
    },
    goLoginPage () {
      this.$router.push('/login')
    },
    goTeamDetail (teamId) {
      localStorage.setItem('teamId', teamId)
      this.$router.push('TeamDetails')
    },
    showRegistTeamModal () {
      this.registTeamModal = true
    },
    registTeam () {
      this.getTeams()
      this.closeModal()
    },
    closeModal () {
      this.registTeamModal = false
    },
    execSearch (searchWord) {
      console.log('searching by', searchWord)
      this.getTeams(searchWord)
    },
    getLatestReview (reviews) {
      let latestReviewDate = ''
      let latestReview = ''
      if (reviews.length > 0) {
        reviews.forEach((review) => {
          const updatedAt = new Date(review.updated_at)
          latestReviewDate = updatedAt
          latestReview = review
          if (review.updated_at > latestReviewDate) {
            latestReviewDate = updatedAt
            latestReview = review
          }
        })
      }
      return latestReview === '' ? false : latestReview
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
}
.page-content {
  @include default-page-content;
  &-item {
    &-footer {
      justify-content: flex-end;
    }
  }
}
.v-input {
  width: 25vw;
}
</style>
