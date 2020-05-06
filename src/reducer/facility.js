const initialState = {
    facilityModal : false,
}

const FacilityReducer = (state = initialState, action) =>{
  switch(action.type){
      case 'FACILITY_MODAL_OPEN' :
        return {
            ...state,
             facilityModal:true
        }
       case 'FACILITY_MODAL_CLOSE' :
             return {
                ...state,
                facilityModal:false
            } 
      default:
         return state;
  }
}



export default FacilityReducer;