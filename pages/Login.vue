<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="page-header">
      <div class="page-header-title">
        <common-button @click="goSignupPage" :button-color="colors.suggestion" button-size="large">
          アカウントの新規作成
        </common-button>
      </div>
    </div>
    <div class="page-title">
      ログインページ
    </div>
    <v-flex
      xs12
      sm8
      md6
      d-flex
      flex-wrap
      class="page-content"
    >
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="メールアドレス"
          required
        />
        <!-- user@example.com -->
        <v-text-field
          v-model="password"
          label="パスワード"
          required
        />
        <!-- mypass -->
      </v-form>
    </v-flex>
    <common-button @click="login" button-size="large" button-color="primary" button-width="25vw">
      ログイン
    </common-button>
  </v-layout>
</template>

<script>
import { colors } from '~/assets/js/Colors.js'
import CommonButton from '~/components/atoms/CommonButton.vue'

export default {
  components: {
    CommonButton
  },
  data () {
    return {
      colors,
      valid: true,
      email: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    login () {
      console.log('store', this.$store)
      this.$store
        .dispatch('api/apiRequest', {
          api: 'login',
          data: {
            email: this.email,
            password: this.password
          }
        }).then((res) => {
          if (res.status === 200) {
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('loginDateTime', new Date())
            this.$router.push('/teams')
            console.log('token →', res.data.access_token)
          }
        })
    },
    goSignupPage () {
      this.$router.push('/signup')
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
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
  justify-content: flex-end;
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
}
.v-input {
  width: 25vw;
}
</style>
