class Validate {
  // static isEmail(email) {
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // }
  static isPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(
      password
    );
  }
  // static isUsername(username) {
  //   return /^[a-zA-Z0-9]{3,20}$/.test(username);
  // }
  // static isName(name) {
  //   return /^[a-zA-Z]{3,20}$/.test(name);
  // }
  static isPhone(phone) {
    return /^[0-9]{10}$/.test(phone);
  }
  // static isAddress(address){
  //     return /^[a-zA-Z0-9\s,.'-]{3,}$/.test(address);
  // }
  // static isCity(city){
  //     return /^[a-zA-Z\s]{3,}$/.test(city);
  // }
  // static isState(state){
  //     return /^[a-zA-Z\s]{3,}$/.test(state);
  // }
  // static isZip(zip){
  //     return /^[0-9]{6}$/.test(zip);
  // }
  // static isCountry(country){
  //     return /^[a-zA-Z\s]{3,}$/.test(country);
  // }
}

export default Validate;
