import * as types from "./actiontype"

const initialState={
    
    mealData:[],
    SinglemealData:[],
    isLoading:false,
    IsError:false,
};

const MealReducer=(state=initialState,action)=>{

    const {type,payload}=action

    switch(type){

            case types.GET_GETDATA_REQUEST:

                return{
                    ...state,
                    isLoading:true,
                };

            case types.GET_GETDATA_SUCCESS:

                return{
                    ...state,

                    isLoading:false,

                    mealData:payload
    
                };
            case types.GET_GETDATA_FAILURE:

                return{

                    ...state,

                    IsError:true,
    
                };
        case types.GET_GETSINGLEDATA_REQUEST:

                return{
                    ...state,
                    isLoading:true,
                };

            case types.GET_GETSINGLEDATA_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    SinglemealData:payload
    
                };

            case types.GET_GETSINGLEDATA_FAILURE:
                return{
                    ...state,
                    IsError:true,
    
                };
        default:
            return state    

    }
}
export {MealReducer}