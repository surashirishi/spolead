<template>
  <div>
    <v-card>
      <v-container>
        <h2>お問い合わせ</h2>
        <p>
          通常、いただいたお問い合わせについては、担当よりご連絡させていただいております。<br>
          なお、内容に不備のある場合にはご対応致しかねる場合がございますので、予めご了承ください。
        </p>
        <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>
          <v-text-field
            v-model="contactForm.name"
            :rules="contactFormValidation.nameRules"
            label="名前"
            required
          />
          <v-text-field
            v-model="contactForm.email"
            :rules="contactFormValidation.emailRules"
            label="メールアドレス"
            required
          />
          <v-textarea
            v-model="contactForm.contents"
            :rules="contactFormValidation.contentsRules"
            label="内容"
            required
          />
          <v-btn
            :loading="contactForm.loading"
            :disabled="!contactFormValidation.valid"
            @click="sendMail()"
            block
            large
            color="info"
            class="mt-4 font-weight-bold"
          >
            送信
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
    <v-snackbar
      v-model="snackBar.show"
      :color="snackBar.color"
      :timeout="6000"
      bottom
      right
      class="font-weight-bold"
    >
      {{ snackBar.message }}
    </v-snackbar>
  </div>
</template>

<script>
// import { functions } from '@/plugins/firebase'

export default {
  data: () => ({
    contactForm: {
      name: '',
      contents: '',
      email: '',
      loading: false
    },
    contactFormValidation: {
      valid: false,
      nameRules: [v => !!v || '名前は必須項目です'],
      emailRules: [v => !!v || 'メールアドレスは必須項目です'],
      contentsRules: [v => !!v || '内容は必須項目です']
    },
    snackBar: {
      show: false,
      color: '',
      message: ''
    }
  }),
  methods: {
    sendMail () {
      if (this.$refs.form.validate()) {
        this.contactForm.loading = true
        // const mailer = functions.httpsCallable('sendMail')

        // mailer(this.contactForm)
        //   .then(() => {
        //     this.formReset()
        //     this.showSnackBar(
        //       'success',
        //       'お問い合わせありがとうございます。送信完了しました'
        //     )
        //   })
        //   .catch((err) => {
        //     this.showSnackBar(
        //       'error',
        //       '送信に失敗しました。時間をおいて再度お試しください'
        //     )
        //     console.log(err)
        //   })
        //   .finally(() => {
        //     this.contactForm.loading = false
        //   })
      }
    },
    showSnackBar (color, message) {
      this.snackBar.message = message
      this.snackBar.color = color
      this.snackBar.show = true
    },
    formReset () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style lang="scss" scoped>
p {
  font-size: 16px;
  padding: 4px;
}
.container {
  margin-top: 24px
}
</style>
