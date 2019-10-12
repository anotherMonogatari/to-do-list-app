const initState = [
	
]

let idCount = 0;

const reducer = (state = initState, action) => {
    if (action.type === 'ADD') {
       return [
		   ...state,
		   {
			   text: action.payload,
			   id: idCount++,
			   date: new Date()
		   }
	   ]
    }
    if (action.type === 'DELETE') {
        return state.filter(item => item.id !== + action.payload)
    }
    if (action.type === 'SORT') {
		let newArray = [...state]
        return newArray.sort((a,b) => {
			return (a.date < b.date) ? 1 : -1;
		})
    }
    return state
}

export default reducer