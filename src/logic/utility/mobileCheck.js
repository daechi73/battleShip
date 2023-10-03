const mobileCheck = (dimension) => {
  if (window.innerWidth <= dimension) return true;
  else return false;
};

export default mobileCheck;
