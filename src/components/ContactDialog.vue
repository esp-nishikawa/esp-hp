<script>
import axios from 'axios';
import DialogControllable from '@/mixins/dialog-controllable.js';
import PrivacyDialog from '@/components/PrivacyDialog.vue';

export default {
  mixins: [
    DialogControllable,
  ],
  data () {
    return {
      step: 1,
      loading: false,
      valid: false,
      status: 0,
      registration: {
        type: Number(this.selectedType),
        name: '',
        affiliation: '',
        email: '',
        phone: '',
        contents: '',
        privacy: false,
      },
      rules: {
        /* eslint-disable no-useless-escape */
        required: v => !!v || 'この項目は必須です。',
        email:  v => !v || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'メールアドレスの形式が正しくないようです。',
        phone:  v => !v || /^[0-9０-９\-‐－―ー\(\)（）]+$/.test(v) || '電話番号の形式が正しくないようです。',
        max25: v => !v || v.length <= 25 || '25文字以内で入力してください。',
        max60: v => !v || v.length <= 60 || '60文字以内で入力してください。',
        max256: v => !v || v.length <= 256 || '256文字以内で入力してください。',
        max2000: v => !v || v.length <= 2000 || '2000文字以内で入力してください。',
        privacy: v => v || '個人情報の取り扱いについて同意をお願いします。',
        /* eslint-enable no-useless-escape */
      },
      types: [
        { value: 1, text: '採用についてのお問い合わせ' },
        { value: 2, text: 'お仕事のご依頼やご相談' },
        { value: 3, text: 'パートナーシップに関するお問い合わせ' },
        { value: 4, text: 'その他' },
      ],
      name: 'contact-dialog',
    }
  },
  computed: {
    validateStatus() {
      return this.status >= 200 && this.status < 300;
    }
  },
  methods: {
    confirm() {
      if (this.$refs.form.validate()) {
        this.changeStep(2);
      }
    },
    send() {
      if (this.loading) return;
      this.loading = true;
      axios.post('/api/contact.php', this.registration)
        .then((response) => {
          this.status = response.status;
          this.loading = false;
          this.changeStep(3);
        })
        .catch((error) => {
          this.status = error.response ? error.response.status : 400;
          this.loading = false;
          this.changeStep(3);
        });
    },
    changeStep(step) {
      this.step = step;
      this.resetScroll();
    },
    close() {
      if (this.validateStatus) {
        this.$refs.form.reset();
      }
      this.showDialog = false;
      this.status = 0;
      this.loading = false;
      this.step = 1;
    }
  },
  props: {
    btnLabel: String,
    btnClass: String,
    btnStyle: { type: String, default: 'min-width:0' },
    btnColor: { type: String, default: 'blue darken-2' },
    btnIcon: String,
    iconColor: String,
    selectedType: { type: [String, Number], default: 0 },
  },
  components: {
    PrivacyDialog,
  },
}
</script>

<template>
<v-dialog v-model="showDialog" ref="dialog" max-width="960" :fullscreen="$vuetify.breakpoint.smAndDown">
  <v-btn flat round slot="activator" :class="btnClass" :style="btnStyle" :color="btnColor">
    <v-icon v-if="btnIcon" :color="iconColor" class="mr-1">{{ btnIcon }}</v-icon>{{ btnLabel }}
  </v-btn>
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
        <v-stepper-step step="2" :complete="step > 2">Confirm</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" :rules="[() => status < 300]">Send</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-layout column class="mb-3">
            <div>下記フォームに必要事項をご入力いただき、「確認」ボタンを押してください。</div>
          </v-layout>
          <v-layout column class="mb-3 body-2">
            <div>【お問い合わせいただく前の注意事項】</div>
            <ul>
              <li>ご回答までに数日要する場合や、ご質問によってはお応えできかねる場合もございます。あらかじめご了承ください。</li>
              <li>お急ぎの方はお電話(03-6273-4837)にてお問い合わせください。</li>
              <li>お客様からいただく個人情報は、お問い合わせ・ご質問への回答、情報提供のために使用させていただきます。</li>
              <li>
                プライバシーポリシーについては
                <privacy-dialog btn-label="こちら" btn-class="ma-0 pa-0" btn-style="min-width:0;height:24px;"></privacy-dialog>
                をご確認ください。
              </li>
            </ul>
          </v-layout>
          <v-form ref="form" v-model="valid">
            <v-checkbox
              color="primary"
              v-model="registration.privacy"
              :rules="[rules.privacy]"
              class="ml-3"
            >
              <div slot="label" class="text-main">個人情報の取り扱いについて同意する</div>
            </v-checkbox>
            <v-select
              label="お問い合わせ種類"
              :items="types"
              item-value="value"
              item-text="text"
              v-model="registration.type"
              :rules="[rules.required]"
            >
              <v-chip slot="prepend" small color="blue darken-3" text-color="white">必須</v-chip>
            </v-select>
            <v-text-field
              label="お名前"
              v-model="registration.name"
              :rules="[rules.required, rules.max60]"
              clearable
            >
              <v-chip slot="prepend" small color="blue darken-3" text-color="white">必須</v-chip>
            </v-text-field>
            <v-text-field
              label="ご所属（会社名等）"
              v-model="registration.affiliation"
              :rules="[rules.max60]"
              clearable
            >
              <v-chip slot="prepend" small color="blue lighten-2" text-color="white">任意</v-chip>
            </v-text-field>
            <v-text-field
              label="メールアドレス"
              v-model="registration.email"
              :rules="[rules.required, rules.email, rules.max256]"
              hint="ご連絡先として使用いただけるメールアドレスの記入をお願いいたします。"
              validate-on-blur
              clearable
            >
              <v-chip slot="prepend" small color="blue darken-3" text-color="white">必須</v-chip>
            </v-text-field>
            <v-text-field
              label="電話番号"
              v-model="registration.phone"
              :rules="[rules.phone, rules.max25]"
              clearable
            >
              <v-chip slot="prepend" small color="blue lighten-2" text-color="white">任意</v-chip>
            </v-text-field>
            <v-textarea
              label="お問い合わせ内容"
              v-model="registration.contents"
              :rules="[rules.required, rules.max2000]"
              clearable
            >
              <v-chip slot="prepend" small color="blue darken-3" text-color="white">必須</v-chip>
            </v-textarea>
          </v-form>
          <v-layout justify-end>
            <v-btn outline round color="primary" @click="close">CANCEL</v-btn>
            <v-btn round color="primary" @click.native="confirm">確認</v-btn>
          </v-layout>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-layout column class="mb-3">
            <div>入力内容をご確認いただき、よろしければ「送信」ボタンを押してください。</div>
            <div>修正する場合は、「入力に戻る」ボタンを押してください。</div>
            <div>※ブラウザの「戻る」ボタンは使用しないでください。</div>
          </v-layout>
          <v-form>
            <v-select
              label="お問い合わせ種類"
              :items="types"
              item-value="value"
              item-text="text"
              :value="registration.type"
              color="black"
              outline
              readonly
            ></v-select>
            <v-text-field
              label="お名前"
              :value="registration.name"
              placeholder="未入力"
              color="black"
              outline
              readonly
            ></v-text-field>
            <v-text-field
              label="ご所属（会社名等）"
              :value="registration.affiliation"
              placeholder="未入力"
              color="black"
              outline
              readonly
            ></v-text-field>
            <v-text-field
              label="メールアドレス"
              :value="registration.email"
              placeholder="未入力"
              color="black"
              outline
              readonly
            ></v-text-field>
            <v-text-field
              label="電話番号"
              :value="registration.phone"
              placeholder="未入力"
              color="black"
              outline
              readonly
            ></v-text-field>
            <v-textarea
              label="お問い合わせ内容"
              :value="registration.contents"
              placeholder="未入力"
              color="black"
              outline
              readonly
            ></v-textarea>
          </v-form>
          <v-layout justify-end>
            <v-btn outline round color="primary" @click.native="changeStep(1)">入力に戻る</v-btn>
            <v-btn round color="primary" :loading="loading" @click.prevent="send">送信</v-btn>
          </v-layout>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-layout v-if="validateStatus" column class="mb-3">
            <div>お問い合わせありがとうございます。</div>
            <div>お送りいただきました内容を確認の上、ご連絡させていただきますので、少々お待ちください。</div>
            <div class="mt-3">なお、ご入力いただいたメールアドレス宛てに自動返信メールをお送りしております。</div>
            <div>しばらく経っても自動返信メールが届かない場合にはお問い合わせが受け付けられていない可能性がございます。</div>
            <div>ご入力いただいたメールアドレスに誤りがあることも考えられますので、数日中に弊社からの連絡がない場合、</div>
            <div>大変お手数ですが再度お問い合わせいただくか、お電話(03-6273-4837)にてご連絡ください。</div>
          </v-layout>
          <v-layout v-else column class="mb-3">
            <div>メッセージの送信に失敗しました。</div>
            <div>申し訳ありませんが、しばらく時間を置いてからもう一度お試しください。</div>
            <div>お急ぎの場合はお電話(03-6273-4837)にてご連絡ください。</div>
          </v-layout>
          <v-layout justify-end>
            <v-btn outline round color="primary" @click.native="close">CLOSE</v-btn>
          </v-layout>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</v-dialog>
</template>
