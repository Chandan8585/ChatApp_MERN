export const authReducer = (state, {type, payload})=> {
  switch(type){
    case 'SET_USERNAME' : return {
        ...state,
        userName: payload
    }
    case 'SET_EMAIL' : return {
        ...state,
         email: payload
    }
    case 'SET_PASSWORD' : return {
        ...state,
        password: payload
    }
    case 'SET_CONFIRMPASSWORD' : return {
        ...state,
        confirmPassword: payload
    }

  }
}