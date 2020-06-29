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
                <v-text-field label="チーム名*" required />
              </v-col>
              <v-col cols="12">
                <v-text-field label="メールアドレス*" required />
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="['野球', 'バスケ', 'サッカー', 'ダンス', 'バレー', 'ラグビー']"
                  label="sportsジャンル"
                  multiple
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['東京都', '大阪府', '京都府', '神奈川県']"
                  label="都道府県"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['墨田区', '大田区', '台東区', '江戸川区']"
                  label="市町村"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['チーム', 'スクール']"
                  label="運営団体"
                  multiple
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['キッズ', '小学生', '中学生', '大学生']"
                  label="対象層"
                  multiple
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  autocomplete="チーム情報"
                  label="チーム情報"
                  dense
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="closeModal" color="blue darken-1" text>
            Close
          </v-btn>
          <v-btn @click="closeModal" color="blue darken-1" text>
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
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
