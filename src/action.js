export const addFormAction = () => ({
    type: 'OPEN_FORM',
  })
  
  export const closeFormAction = () => ({
    type: 'CLOSE_FORM',
  })
  

  export const listArray = (data) =>(({
      type:'LIST_ARRAY',
      payload: data
  }))

  export const editValueReducer = (data) =>(({
    type:'EDIT_VALUE_REDUCER',
    payload: data
}))

export const deleteAction = data => ({
  type:'DELETE_VALUE_REDUCER',
    payload: data
});

export const closeEditFormAction = () =>({
  type: 'CLOSE_EDIT_FORM'
})