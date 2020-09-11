function isValideForm(input, value, cb, isValide, stock) {
  switch (input) {
    case 'email':
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) {
        cb({ ...isValide, email: true });
        stock.current = { ...isValide, email: true };
      } else {
        cb({ ...isValide, email: false });
        stock.current = { ...isValide, email: false };
      }
      break;
    case 'name':
      if (value?.length > 5) {
        cb({ ...isValide, name: true });
        stock.current = { ...isValide, name: true };
      } else {
        cb({ ...isValide, name: false });
        stock.current = { ...isValide, name: false };
      }
      break;
    case 'message':
      if (value?.length >= 15) {
        cb({ ...isValide, message: true });
        stock.current = { ...isValide, message: true };
      } else {
        cb({ ...isValide, message: false });
        stock.current = { ...isValide, message: false };
      }
      break;
    default:
      cb({
        name: false,
        email: false,
        message: false,
      });
  }
}

export default isValideForm;
