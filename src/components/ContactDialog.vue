<script>
import DialogControllable from '@/mixins/dialog-controllable.js';

export default {
  mixins: [
    DialogControllable,
  ],
  data () {
    return {
      step: 1,
      loading: false,
      valid: false,
      registration: {
        name: '',
        company: '',
        email: '',
        inquiry: '',
      },
      rules: {
        required: v => !!v || 'この項目は必須です。',
        email:  v => /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'メールアドレスの形式が正しくないようです。',
        max60: v => !v || v.length <= 60 || '60文字以内で入力してください。',
        max256: v => !v || v.length <= 256 || '256文字以内で入力してください。',
        max2000: v => !v || v.length <= 2000 || '2000文字以内で入力してください。',
      },
    }
  },
  methods: {
    async submit() {
      if (this.loading) return;
      this.loading = true;
      //await axios.post('/api/contact', registration);
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.$refs.form.reset();
      this.loading = false;
      this.changeStep(3);
    },
    changeStep(step) {
      this.step = step;
      this.resetScroll();
    },
    close() {
      this.showDialog = false;
      this.loading = false;
      this.step = 1;
    }
  },
  props: {
    btnLabel: String,
    btnClass: String,
  },
}
</script>

<template>
<v-dialog v-model="showDialog" max-width="800" :fullscreen="$vuetify.breakpoint.smAndDown">
  <v-btn flat color="blue darken-2" slot="activator" :class="btnClass">{{ btnLabel }}</v-btn>
  <v-card>
    <v-layout v-if="$vuetify.breakpoint.smAndDown" justify-start>
      <v-btn icon @click="close">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-layout>
    <v-layout v-else justify-end>
      <v-btn icon @click="close">
        <v-icon>close</v-icon>
      </v-btn>
    </v-layout>
    <v-card-title primary-title class="layout justify-center py-0">
      <h2>CONTACT</h2>
    </v-card-title>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1" editable :complete="step > 1">Input</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="step > 2">Check</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Send</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-layout column class="mb-3">
            <div>下記フォームに必要事項をご入力いただき、確認ボタンを押してください。</div>
            <div>お急ぎの方はお電話(03-6273-4837)にてお問い合わせください。</div>
            <div>また、入力いただいた連絡先に誤りがありますとご連絡が取れませんのでご注意ください。</div>
          </v-layout>
          <v-form ref="form" v-model="valid">
            <v-text-field
              label="お名前（必須）"
              v-model="registration.name"
              :rules="[rules.required, rules.max60]"
              clearable
              required
            ></v-text-field>
            <v-text-field
              label="会社名"
              v-model="registration.company"
              :rules="[rules.max60]"
              clearable
            ></v-text-field>
            <v-text-field
              label="メールアドレス（必須）"
              v-model="registration.email"
              :rules="[rules.required, rules.email, rules.max256]"
              validate-on-blur
              clearable
              required
            ></v-text-field>
            <v-textarea
              label="お問い合わせ内容（必須）"
              v-model="registration.inquiry"
              :rules="[rules.required, rules.max2000]"
              auto-grow
              clearable
            ></v-textarea>
          </v-form>
          <v-layout justify-end>
            <v-btn v-if="$vuetify.breakpoint.smAndDown" flat color="blue darken-2" @click="close">BACK</v-btn>
            <v-btn :disabled="!valid" color="primary" @click.native="changeStep(2)">確認</v-btn>
          </v-layout>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-layout column class="mb-3">
            <div>入力内容をご確認いただき、よろしければ送信ボタンを押してください。</div>
          </v-layout>
          <v-form>
            <v-text-field
              label="お名前"
              :value="registration.name"
              placeholder="未入力"
              outline
              readonly
            ></v-text-field>
            <v-text-field
              label="会社名"
              :value="registration.company"
              placeholder="未入力"
              outline
              readonly
            ></v-text-field>
            <v-text-field
              label="メールアドレス"
              :value="registration.email"
              placeholder="未入力"
              outline
              readonly
            ></v-text-field>
            <v-textarea
              label="お問い合わせ内容"
              :value="registration.inquiry"
              placeholder="未入力"
              outline
              readonly
            ></v-textarea>
          </v-form>
          <v-layout justify-end>
            <v-btn flat color="blue darken-2" @click.native="changeStep(1)">入力に戻る</v-btn>
            <v-btn color="primary" :loading="loading" @click.prevent="submit">送信</v-btn>
          </v-layout>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-layout column class="mb-3">
            <div>お問い合わせありがとうございます。</div>
            <div>お送りいただきました内容を確認の上、折り返しご連絡させていただきます。</div>
            <div>お急ぎの場合はお電話(03-6273-4837)にてご連絡ください。</div>
          </v-layout>
          <v-layout justify-end>
            <v-btn flat color="blue darken-2" @click.native="close">CLOSE</v-btn>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</v-dialog>
</template>
