export default {
  /* eslint-disable no-useless-escape */
  required: value => !!value || 'この項目は必須です。',
  email: value =>
    !value ||
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(value) ||
    'メールアドレスの形式が正しくないようです。',
  phone: value => !value || /^[0-9０-９\-‐－―ー\(\)（）]+$/.test(value) || '電話番号の形式が正しくないようです。',
  max: max => value => !value || value.length <= max || `${max}文字以内で入力してください。`,
  privacy: value => value || '個人情報の取り扱いについて同意をお願いします。',
  /* eslint-enable no-useless-escape */
};
