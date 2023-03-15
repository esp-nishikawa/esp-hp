import rules from '@/utils/rules.js';

describe("rules", () => {
  it.each([
    ["正常", "a", true],
    ["空白", " ", true],
    ["空文字", "", "この項目は必須です。"],
  ])("required %s %s -> %s", (description, value, expected) => {
    expect(rules.required(value)).toBe(expected);
  });

  it.each([
    ["正常", "e-mail_Test.1@esoft-powers.com", true],
    ["@なし", "e-mail_Test.1esoft-powers.com", "メールアドレスの形式が正しくないようです。"],
    ["@のみ", "@", "メールアドレスの形式が正しくないようです。"],
    ["ユーザ名不正文字", "e-mail>Test.1@esoft-powers.com", "メールアドレスの形式が正しくないようです。"],
    ["ユーザ名なし", "@esoft-powers.com", "メールアドレスの形式が正しくないようです。"],
    ["ドメイン不正文字", "e-mail_Test.1@esoft?powers.com", "メールアドレスの形式が正しくないようです。"],
    ["ドメイン.なし", "e-mail_Test.1@com", "メールアドレスの形式が正しくないようです。"],
    ["ドメイン.のみ", "e-mail_Test.1@.", "メールアドレスの形式が正しくないようです。"],
    ["ドメイン.先頭", "e-mail_Test.1@.com", "メールアドレスの形式が正しくないようです。"],
    ["ドメイン.後尾", "e-mail_Test.1@esoft-powers.", "メールアドレスの形式が正しくないようです。"],
    ["ドメイン.連続", "e-mail_Test.1@esoft-powers..com", "メールアドレスの形式が正しくないようです。"],
    ["ドメインなし", "e-mail_Test.1@", "メールアドレスの形式が正しくないようです。"],
    ["空文字", "", true],
  ])("email %s %s -> %s", (description, value, expected) => {
    expect(rules.email(value)).toBe(expected);
  });

  it.each([
    ["正常", "03-1234-5678", true],
    ["不正文字", "03a1234-5678", "電話番号の形式が正しくないようです。"],
    ["空文字", "", true],
  ])("phone %s %s -> %s", (description, value, expected) => {
    expect(rules.phone(value)).toBe(expected);
  });

  it.each([
    ["正常", 3, "abc", true],
    ["制限超え", 3, "abcd", "3文字以内で入力してください。"],
    ["空文字", 1, "", true],
  ])("max %s %s %s -> %s", (description, max, value, expected) => {
    expect(rules.max(max)(value)).toBe(expected);
  });
});
