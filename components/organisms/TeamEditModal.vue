<script src="https://yubinbango.github.io/yubinbango/yubinbango.js" charset="UTF-8"></script>
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px" persistent>
      <v-card>
        <v-card-title class="justify-space-between">
          <span class="headline">チーム編集フォーム</span>
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
                <v-select
                  v-model="sports_id"
                  :items="sportsList"
                  label="sportsジャンル"
                  item-text="sportsType"
                  item-value="sportsId"
                />
                <v-col cols="12">
                  <v-file-input
                    @change="upload"
                    label="イメージ画像"
                    prepend-icon="mdi-camera"
                  />
                </v-col>
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
                <v-select
                  v-model="team_type"
                  :items="teamTypeList"
                  item-text="teamType"
                  item-value="typeId"
                  label="運営団体"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="target_age_type"
                  :items="targetAgeList"
                  item-text="targetAgeType"
                  item-value="ageId"
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
          <v-btn @click="updateTeam" color="blue darken-1" text>
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
    },
    team: {
      type: Object,
      default: () => {}
    }
  },
  mounted() {
    this.id = this.team.id
    this.name = this.team.name
    this.mail_address = this.team.mail_address
    this.prefecture = this.team.prefecture
    this.city = this.team.city
    this.street_number = this.team.street_number
    this.street_number = this.team.street_number
    this.team_image = this.team.team_image
    this.sports_id = this.team.sports_id
    this.team_type = this.team.team_type
    this.target_age_type = this.team.target_age_type
    this.team_information = this.team.team_information
  },
  data () {
    return {
      id: '',
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
      teamTypeList: [
        { teamType: 'チーム', typeId: 1 },
        { teamType: 'スクール', typeId: 2 }
      ],
      sportsList: [
          { sportsType: 'バスケ', sportsId: 1 },
          { sportsType: '野球', sportsId: 2 },
          { sportsType: 'サッカー', sportsId: 3 },
          { sportsType: 'ダンス', sportsId: 4 },
          { sportsType: 'バレー', sportsId: 5 },
          { sportsType: 'ラグビー', sportsId: 6 },
        ],
      targetAgeList: [
          { targetAgeType: 'キッズ', ageId: 1 },
          { targetAgeType: '小学生', ageId: 2 },
          { targetAgeType: '中学生', ageId: 3 },
          { targetAgeType: '大学生', ageId: 4 },
        ]
    }
  },
  methods: {
    updateTeam () {
      this.$store
        .dispatch('api/apiRequest', {
          api: 'teamEdit',
          data: {
            id: this.id,
            name: this.name,
            mail_address: this.mail_address,
            prefecture: this.prefecture,
            city: this.city,
            street_number: this.street_number,
            team_image: this.team_image,
            sports_id: this.sports_id,
            team_type: this.team_type,
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
    },
  }
}
</script>
<style lang="scss" scoped>
</style>
