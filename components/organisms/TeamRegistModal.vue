<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="justify-space-between">
          <span class="headline">チーム登録フォーム</span>
          <small><span style="color: red;">*</span>は必須項目です</small>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="name" label="チーム名*" required />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="mail_address" label="メールアドレス*" required />
              </v-col>
              <v-col cols="12">
                <!-- NOTE once simple select  -->
                <!-- <v-autocomplete
                  :items="['野球', 'バスケ', 'サッカー', 'ダンス', 'バレー', 'ラグビー']"
                  v-model="sports_id"
                  label="sportsジャンル"
                  multiple
                /> -->
                <v-select
                  :items="sportsList"
                  v-model="sports_id"
                  label="sportsジャンル"
                />
              </v-col>
              <v-col cols="12">
                <v-file-input
                  @change="upload"
                  label="イメージ画像"
                  prepend-icon="mdi-camera"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['東京都', '大阪府', '京都府', '神奈川県']"
                  v-model="prefecture"
                  label="都道府県"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['墨田区', '大田区', '台東区', '江戸川区']"
                  v-model="city"
                  label="市町村"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <!-- NOTE once simple select
                <v-select
                  v-model="selectedTeamTypes"
                  :items="teamTypeList"
                  item-text="teamType"
                  item-value="teamId"
                  label="運営団体"
                  multiple
                /> -->
                <v-select
                  v-model="selectedTeamTypes"
                  :items="teamTypeList"
                  item-text="teamType"
                  item-value="teamId"
                  label="運営団体"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <!-- <v-autocomplete
                  :items="['キッズ', '小学生', '中学生', '大学生']"
                  v-model="target_age_type"
                  label="対象層"
                  multiple
                /> -->
                <v-select
                  :items="['キッズ', '小学生', '中学生', '大学生']"
                  v-model="target_age_type"
                  label="対象層"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="team_information"
                  autocomplete="チーム情報"
                  label="チーム情報"
                  dense
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="closeModal" color="blue darken-1" text>
            Close
          </v-btn>
          <v-btn @click="regTeam" color="blue darken-1" text>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  components: {
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      name: '',
      mail_address: '',
      zipcode: '',
      prefecture: '',
      city: '',
      street_number: '',
      team_image: '',
      sports_id: '',
      team_type: '',
      target_age_type: '',
      team_information: '',
      selectedTeamTypes: [],
      teamTypeList: [
        { teamType: 'チーム', typeId: 1 },
        { teamType: 'スクール', typeId: 2 }
      ],
      sportsList: ['野球', 'バスケ', 'サッカー', 'ダンス', 'バレー', 'ラグビー']
    }
  },
  // watch: {
  //   zipcode (zipcode) {
  //     const _this = this
  //     new YubinBango.Core(zipcode, function (addr) {
  //       _this.prefecture = addr.region_id // 都道府県ID
  //       _this.city = addr.locality // 市区町村
  //       _this.street_number = addr.street // 町域
  //     })
  //   }
  // },
  methods: {
    regTeam () {
      this.$store
        .dispatch('api/apiRequest', {
          api: 'teamCreate',
          data: {
            name: this.name,
            mail_address: this.mail_address,
            prefecture: this.prefecture,
            city: this.city,
            street_number: this.street_number,
            team_image: this.team_image,
            sports_id: this.sports_id,
            team_type: this.selectedTeamTypes,
            target_age_type: this.target_age_type,
            team_information: this.team_information
          }
        })
        .then((response) => {
          if (response.status === 200) {
            this.closeModal()
          }
        })
    },
    upload (file) {
      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(file)
        fr.addEventListener('load', () => {
          this.team_image = fr.result
        })
      } else {
        this.team_image = ''
      }

      console.log('team_image', this.team_image)
    },
    getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
