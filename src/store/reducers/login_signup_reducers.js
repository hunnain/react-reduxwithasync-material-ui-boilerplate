import login_signup_action from '../actions/login_signup_action';
const INITIAL_STATE={
    userAuth:{},
    userRegistered:false,
    authenticated:false,
    loading:false,
    error:false,
    errorMessage:{}
}  
const login_signup_reducer=(state=INITIAL_STATE,action)=>{
     switch (action.type) {
         case login_signup_action.REGISTER:
             return{
                 ...state , loading:true, error:false,userRegistered:false
             }
            case login_signup_action.REGISTER_SUCCESS:
            return{
                ...state , loading:false, error:false,userRegistered:true
            }
            case login_signup_action.REGISTER_FAILED:
            return{
                ...state,loading:false,error:true,errorMessage:action.payload
            }
            case login_signup_action.LOGIN:
            return{
                ...state,loading:false,error:false,authenticated:false
            }
            case login_signup_action.LOGIN_SUCCESS:
            return{
                ...state, loading:false, error:false, authenticated:true, userAuth:action.payload , userRegistered:false, errorMessage:{}
            }
            case login_signup_action.LOGIN_FAILED:
            // console.log(action.payload)
            return{
                ...state, loading:false, error:true, authenticated:false, errorMessage:action.payload
            }
            case login_signup_action.LOGOUT:
            return{
                ...state, loading:false, error:false, authenticated:false,userRegistered:false
            }
         default:
             return state;
     }
}
export default login_signup_reducer;