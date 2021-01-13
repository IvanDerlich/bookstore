// eslint-disable-next-line import/prefer-default-export
const capitalize = str => {
  if (typeof str === 'string') {
    return str.replace(/^\w/, c => c.toUpperCase());
  }
  return '';
};

export default capitalize;
