// ブラウザの判定
const getBrowser = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
    return 'ie';
  } else if(userAgent.indexOf('edge') != -1) {
    return 'edge';
  } else if(userAgent.indexOf('chrome') != -1) {
    return 'chrome';
  } else if(userAgent.indexOf('safari') != -1) {
    return 'safari';
  } else if(userAgent.indexOf('firefox') != -1) {
    return 'firefox';
  } else {
    return 'other';
  }
};

export default {
  computed: {
    $browser() {
      const name = getBrowser();
      const ie = name === 'ie';
      const edge = name === 'edge';
      const chrome = name === 'chrome';
      const safari = name === 'safari';
      const firefox = name === 'firefox';
      const other = name === 'other';
      return {
        name,
        ie,
        edge,
        chrome,
        safari,
        firefox,
        other,
      };
    },
  },
};
