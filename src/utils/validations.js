export default {
  isPhoneNumber(values, value) {
    if (typeof value !== 'undefined' && value.length !== 11) {
      return false;
    }
    return true;
  },
  containsPlusPrefix(values, value) {
    if (typeof value !== 'undefined' && value[0] === '+') {
      return false;
    }
    return true;
  },
  strongPassword(values, value) {
    if (typeof value !== 'undefined' && !value.match(new RegExp('(?=.*[0-9])'))) {
      return false;
    }
    return true;
  },
  isName(values, value) {
    if (typeof value !== 'undefined' && !value.match(new RegExp("(^[А-ЯЁA-Za-zа-яё ,.'-]+$)"))) {
      return false;
    }
    return true;
  },
  isFirstLetterCapital(values, value) {
    if (typeof value !== 'undefined' && !value.match(new RegExp("^([A-ZА-ЯЁ])"))) {
      return false;
    }
    return true;
  }
}