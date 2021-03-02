import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../Action/registerAction';

const initialRegister = {
  data: {},
  success: false,
}

const registerReducer = (state = initialRegister, action) => {
  switch(action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        data: action.data,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        success: true,
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        success: false,
        message: action.message,
      }
    default:
      return state;
  }
}

export default registerReducer;