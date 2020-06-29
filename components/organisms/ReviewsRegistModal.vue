<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="justify-space-between">
          <span class="headline">口コミ投稿フォーム</span>
          <small><span style="color: red;">*</span>は必須項目です</small>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <!-- <v-col cols="12">
                <v-text-field label="チーム名*" required />
              </v-col>
              <v-col cols="12">
                <v-text-field label="メールアドレス*" required />
              </v-col> -->
              <v-col cols="12" sm="6">
                <v-select
                  :items="['男性', '女性']"
                  label="性別"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['2015〜2020', '2010〜2014', '2005〜2009', '2000〜2004', 'それ以前']"
                  label="在籍年"
                />
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="['キッズ', '小学生', '中学生', '大学生']"
                  label="年代"
                  multiple
                />
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  :items="['プレーヤー', '保護者',]"
                  label="あなたの立場"
                  multiple
                />
              </v-col>
              <v-card-title class="justify-space-between">
                <span class="headline">チーム口コミ評価</span>
              </v-card-title>
              <v-col cols="12">
                <v-rating v-model="rating" />
                <v-textarea
                  autocomplete="総合評価"
                  label="総合評価"
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-rating v-model="rating" />
                <v-textarea
                  autocomplete="チーム方針"
                  label="チーム方針"
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-rating v-model="rating" />
                <v-textarea
                  autocomplete="チーム体制"
                  label="チーム体制"
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-rating v-model="rating" />
                <v-textarea
                  autocomplete="活動内容"
                  label="活動内容"
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-rating v-model="rating" />
                <v-textarea
                  autocomplete="チーム環境"
                  label="チーム環境"
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-rating v-model="rating" />
                <v-textarea
                  autocomplete="イベント"
                  label="イベント"
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-rating v-model="rating" />
                <v-textarea
                  autocomplete="費用"
                  label="費用"
                  dense
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="closeModal" color="blue darken-1" text>
            やめる
          </v-btn>
          <v-btn @click="closeModal" color="blue darken-1" text>
            投稿する
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
      rating: 3
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
.v-rating {
  z-index: 1;
  position: relative;
  top: 40px;
  left: 88px;
}
</style>
