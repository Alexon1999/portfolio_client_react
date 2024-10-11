const contactState = {
  name: { value: "", valide: false },
  email: { value: "", valide: false },
  message: { value: "", valide: false },
};

const contactReducer = (state = contactState, action) => {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: { ...state.email, value: action.payload },
      };
    case "name":
      return {
        ...state,
        name: { ...state.name, value: action.payload },
      };
    case "message":
      return {
        ...state,
        message: { ...state.message, value: action.payload },
      };
    case "submited":
      return contactState;
    case "saveValide":
      return {
        ...state,
        email: { ...state.email, valide: action.payload.email.valide },
        name: { ...state.name, valide: action.payload.name.valide },
        message: { ...state.message, valide: action.payload.message.valide },
      };
    default:
      return state;
  }
};

export default contactReducer;
