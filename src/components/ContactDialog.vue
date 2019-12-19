<script>
import axios from 'axios';
import DialogWrapper from '@/components/DialogWrapper';
import PrivacyDialog from '@/components/PrivacyDialog';

// お問い合わせダイアログ
export default {
  components: {
    DialogWrapper,
    PrivacyDialog,
  },
  props: {
    selectedType: { type: [String, Number], default: 0 },
  },
  data() {
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
    };
  },
  computed: {
    validateStatus() {
      return this.status >= 200 && this.status < 300;
    },
  },
  methods: {
    confirm() {
      if (this.$refs.form.validate()) {
        this.changeStep(2);
      } else {
        const dialog = this.$refs.dialog.getDialogElement();
        this.$common.scrollTo(dialog.getElementsByClassName('scroll-target')[0], 0, 200);
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
      this.$refs.dialog.resetScroll();
    },
    close(reset) {
      if (reset) {
        this.$refs.form.reset();
      }
      this.$refs.dialog.close();
      this.status = 0;
      this.loading = false;
      this.step = 1;
    },
  },
};
</script>

<template>
  <dialog-wrapper ref="dialog" max-width="960">
    <template #activator>
      <slot/>
    </template>
    <template #title>
      <base-headline>CONTACT</base-headline>
    </template>
    <template #body>
      <v-stepper v-model="step" class="d-flex flex-column">
        <v-stepper-header class="flex-shrink-0">
          <v-stepper-step step="1" editable :complete="step > 1">Input</v-stepper-step>
          <v-divider/>
          <v-stepper-step step="2" :complete="step > 2">Confirm</v-stepper-step>
          <v-divider/>
          <v-stepper-step step="3" :rules="[() => status < 300]">Send</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items class="scroll-target overflow-y-auto">
          <v-stepper-content step="1">
            <base-text class="mb-3">下記フォームに必要事項をご入力いただき、「確認」ボタンを押してください。</base-text>
            <base-text style="font-size:14px;">
              <div>【お問い合わせいただく前の注意事項】</div>
              <ul>
                <li>ご回答までに数日要する場合や、ご質問によってはお応えできかねる場合もございます。あらかじめご了承ください。</li>
                <li>お急ぎの方はお電話(03-6273-4837)にてお問い合わせください。</li>
                <li>お客様からいただく個人情報は、お問い合わせ・ご質問への回答、情報提供のために使用させていただきます。</li>
                <li>
                  <div class="d-inline-flex align-center" style="height:24px;">
                    <span>プライバシーポリシーについては</span>
                    <privacy-dialog>
                      <base-link class="pa-0">こちら</base-link>
                    </privacy-dialog>
                    <span>をご確認ください。</span>
                  </div>
                </li>
              </ul>
            </base-text>
            <v-form ref="form" v-model="valid">
              <v-checkbox
                color="primary"
                v-model="registration.privacy"
                :rules="[rules.privacy]"
                class="ml-2 mb-2"
              >
                <template #label>
                  <base-text>個人情報の取り扱いについて同意する</base-text>
                </template>
              </v-checkbox>
              <v-select
                label="お問い合わせ種類"
                :items="types"
                v-model="registration.type"
                :rules="[rules.required]"
              >
                <template #prepend>
                  <v-chip small color="blue darken-3" text-color="white" class="ma-0">必須</v-chip>
                </template>
              </v-select>
              <v-text-field
                label="お名前"
                v-model="registration.name"
                :rules="[rules.required, rules.max60]"
                clearable
                clear-icon="cancel"
              >
                <template #prepend>
                  <v-chip small color="blue darken-3" text-color="white" class="ma-0">必須</v-chip>
                </template>
              </v-text-field>
              <v-text-field
                label="ご所属（会社名等）"
                v-model="registration.affiliation"
                :rules="[rules.max60]"
                clearable
                clear-icon="cancel"
              >
                <template #prepend>
                  <v-chip small color="blue lighten-2" text-color="white" class="ma-0">任意</v-chip>
                </template>
              </v-text-field>
              <v-text-field
                label="メールアドレス"
                v-model="registration.email"
                :rules="[rules.required, rules.email, rules.max256]"
                hint="ご連絡先として使用いただけるメールアドレスの記入をお願いいたします。"
                validate-on-blur
                clearable
                clear-icon="cancel"
              >
                <template #prepend>
                  <v-chip small color="blue darken-3" text-color="white" class="ma-0">必須</v-chip>
                </template>
              </v-text-field>
              <v-text-field
                label="電話番号"
                v-model="registration.phone"
                :rules="[rules.phone, rules.max25]"
                clearable
                clear-icon="cancel"
              >
                <template #prepend>
                  <v-chip small color="blue lighten-2" text-color="white" class="ma-0">任意</v-chip>
                </template>
              </v-text-field>
              <v-textarea
                label="お問い合わせ内容"
                v-model="registration.contents"
                :rules="[rules.required, rules.max2000]"
                rows="8"
                clearable
                clear-icon="cancel"
                counter="2000"
                class="mb-4"
              >
                <template #prepend>
                  <v-chip small color="blue darken-3" text-color="white" class="ma-0">必須</v-chip>
                </template>
              </v-textarea>
            </v-form>
            <div class="d-flex justify-end">
              <v-btn outlined rounded color="primary" class="mr-4" @click="close(true)">CANCEL</v-btn>
              <v-btn rounded color="primary" min-width="100" @click="confirm">確認</v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content step="2">
            <base-text>入力内容をご確認いただき、よろしければ「送信」ボタンを押してください。</base-text>
            <base-text>修正する場合は、「入力に戻る」ボタンを押してください。</base-text>
            <base-text class="mb-8">※ブラウザの「戻る」ボタンは使用しないでください。</base-text>
            <v-form>
              <v-select
                label="お問い合わせ種類"
                :items="types"
                :value="registration.type"
                color="black"
                outlined
                readonly
              />
              <v-text-field
                label="お名前"
                :value="registration.name"
                placeholder="未入力"
                color="black"
                outlined
                readonly
              />
              <v-text-field
                label="ご所属（会社名等）"
                :value="registration.affiliation"
                placeholder="未入力"
                color="black"
                outlined
                readonly
              />
              <v-text-field
                label="メールアドレス"
                :value="registration.email"
                placeholder="未入力"
                color="black"
                outlined
                readonly
              />
              <v-text-field
                label="電話番号"
                :value="registration.phone"
                placeholder="未入力"
                color="black"
                outlined
                readonly
              />
              <v-textarea
                label="お問い合わせ内容"
                :value="registration.contents"
                placeholder="未入力"
                rows="8"
                color="black"
                outlined
                readonly
              />
            </v-form>
            <div class="d-flex justify-end">
              <v-btn outlined rounded color="primary" class="mr-4" @click="changeStep(1)">入力に戻る</v-btn>
              <v-btn rounded color="primary" min-width="100" :loading="loading" @click.prevent="send">送信</v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content step="3">
            <template v-if="validateStatus">
              <base-text>お問い合わせありがとうございます。</base-text>
              <base-text class="mb-3">お送りいただきました内容を確認の上、ご連絡させていただきますので、少々お待ちください。</base-text>
              <base-text>なお、ご入力いただいたメールアドレス宛てに自動返信メールをお送りしております。</base-text>
              <base-text>しばらく経っても自動返信メールが届かない場合にはお問い合わせが受け付けられていない可能性がございます。</base-text>
              <base-text>ご入力いただいたメールアドレスに誤りがあることも考えられますので、数日中に弊社からの連絡がない場合、</base-text>
              <base-text class="mb-4">大変お手数ですが再度お問い合わせいただくか、お電話(03-6273-4837)にてご連絡ください。</base-text>
            </template>
            <template v-else>
              <base-text>メッセージの送信に失敗しました。</base-text>
              <base-text>申し訳ありませんが、しばらく時間を置いてからもう一度お試しください。</base-text>
              <base-text class="mb-4">お急ぎの場合はお電話(03-6273-4837)にてご連絡ください。</base-text>
            </template>
            <div class="d-flex justify-end">
              <v-btn outlined rounded color="primary" @click="close(validateStatus)">CLOSE</v-btn>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </template>
  </dialog-wrapper>
</template>

<style scoped>
>>> .v-messages__message {
  line-height: 1.2;
}

>>> .v-label--active {
  background-color: #fff;
}
</style>
