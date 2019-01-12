import {combineReducers} from 'redux';

const userReducer =(state = {user: []}, action) => {
	switch(action.type) {
		case "ADD_USER_DATA" :
		let user= state.user.concat(action.payload);
		return {user};
		break;

		case "EDIT_USER_DATA" :
			const currentUserToUpdate = [...state.user];

			const indexToDelete = currentUserToUpdate.findIndex(function(user,index) {
				return index === action.payload.id;
			});

			
			const newuserToUpdate = {
				name:action.payload.data.name,
				email:action.payload.data.email,
				phone:action.payload.data.phone
			};
			console.log("newuserToUpdate", newuserToUpdate)

			return {user:
				[...currentUserToUpdate.slice(0, indexToDelete),
				newuserToUpdate, ...currentUserToUpdate.slice(indexToDelete + 1)]};
				break;
			break;

		case "DELETE_USER_DATA":
			return {
				user: [
		    		...state.user.slice(0, action.payload),
		    		...state.user.slice(action.payload + 1)
		]} 


		default:
			return state;
	}
};
export default userReducer;