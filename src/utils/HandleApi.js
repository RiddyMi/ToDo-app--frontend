import axios from 'axios'

const baseUrl = "https://todo-app-backend-kryy.onrender.com"

const getAllToDo = (setTodo) => {
  axios
  .get(baseUrl)
  .then(({data}) => {
    console.log('data ---> ', data);
    setTodo(data)
  })

}

const addToDo = (text, setText, setToDo) => {

  axios
  .post(`${baseUrl}/save`, {text})
  .then((data) => {
    console.log(data);
    setText('')
    getAllToDo(setToDo)
  })
  .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {

  axios
  .post(`${baseUrl}/update`, {_id: toDoId, text})
  .then((data) => {
    // console.log(data);
    setText("")
    setIsUpdating(false)
    getAllToDo(setToDo)
  })
  .catch((err) => console.log(err))
}
// IT WAS SETtODO BEFORE NOT SETTODOID
const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id}) // change to axios.delete and pass _id in data
    .then((data) => {
      console.log(data)
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};
//add {getAllToDO, addToDo}
export {getAllToDo, addToDo, updateToDo, deleteToDo}