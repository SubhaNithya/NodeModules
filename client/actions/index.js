export function sendObjectData(dataObject)
{
	return {
		type: "ADD_USER_DATA",
		payload:dataObject
	};
}
export function editUserData(data, indexById)
{
	return{
		type:"EDIT_USER_DATA" ,
		payload:{data: data, id: indexById}
	};
}
export function deleteUserData(id)
{
	return{
		type: "DELETE_USER_DATA",
		payload:id
	};
}