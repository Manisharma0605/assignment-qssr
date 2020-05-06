const initialState = {
    addForm: false,
    editForm:false,
    editfun : false,
    listNames:[],
    delteval : true,
}
const Todos = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_FORM':
          return {
              ...state,
              addForm: true,
          }
          case 'CLOSE_FORM':
            return {
                ...state,
                addForm: false,
                editfun:false,
            }  
            case 'LIST_ARRAY':
                    var listBox = [];
                if(localStorage.getItem('list') === null){
                    listBox = [action.payload];
                    localStorage.setItem('list', JSON.stringify(listBox))
                }else{
                   let exitList =  JSON.parse(localStorage.getItem('list'));
                    listBox = [...exitList,action.payload];
                    localStorage.clear();
                    localStorage.setItem('list', JSON.stringify(listBox));
                }
                   
                return {    
                    ...state,
                    listNames: [...state.listNames,action.payload],
                    addForm: false,
                    editForm: false,
                }   
             case 'DELETE_VALUE_REDUCER':
                    localStorage.setItem('list', JSON.stringify(action.payload)); 
                    return{
                        ...state,
                      delteval: !state.delteval
                    }

             case 'EDIT_VALUE_REDUCER':
                 return{
                     ...state,
                     editfun: true,
                     editForm: true,
                     editValue : action.payload

                 }
             case 'CLOSE_EDIT_FORM' :
                 return{
                     ...state,
                     editForm: false
                 }
        default:
          return state
      }

  }
  export default Todos;