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
              口コミ評価[最新:createdate参照]
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
    <common-button button-size="large" button-color="primary" button-width="25vw">
      ユーザー登録
    </common-button>
    <team-regist-modal :dialog="registTeamModal" @closeModal="closeModal" />
  </v-layout>
</template>

<script>
import { colors } from '~/assets/js/Colors.js'
import CommonButton from '~/components/atoms/CommonButton.vue'
import TeamRegistModal from '~/components/organisms/TeamRegistModal.vue'
import SearchForm from '~/components/molecules/SearchForm.vue'

export default {
  components: {
    CommonButton,
    SearchForm,
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
      registTeamModal: false,
      teams: []
    }
  },
  created () {
    this.getTeams()
  },
  methods: {
    getTeams () {
      console.log('getteams param = ', this.$route.params)
      let params = {}
      // get Teams related to sportsId
      if (this.$route.params.sportsId) {
        params = {
          sports_id: this.$route.params.sportsId
        }
      // get Teams related to cityCodes
      } else if (this.$route.params.cityCode) {
        params = {
          city_code: this.$route.params.cityCode
        }
      }

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
      this.$router.push({ name: 'TeamDetails', params: { teamId } })
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
