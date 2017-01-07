var base64Encode;
if (process.browser) {
  base64Encode = function (string) {
    return btoa(string);
  };
} else {
  base64Encode = function (string) {
    return Buffer.from(string, 'utf8').toString('base64');
  };
}
export default base64Encode;