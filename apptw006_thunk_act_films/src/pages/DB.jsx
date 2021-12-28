import React from "react";
import MyButton from "../componets/basic/MyButton";

const user1 = { name : 'Vasian', email: 'vasiliy@import.ua' }
const user2 = { name : 'Pipin', email: 'pipin@import.ua' }
const user3 = { name : 'Sarumian', email: 'sarumian@import.ua', id: 4 }
const user4 = { name : 'Petras', email: 'petras@import.ua', id:7 }
const user5 = {  id:7 }

const DB = () => {

  // POST -  создать новую запись
  // PUT - полностью обновить запись
  // PATCH - частично обновить запись
  // DELETE - удалить запись
  // GET - получить данные

const URL = 'https://a-level-react-todo-default-rtdb.europe-west1.firebasedatabase.app/';

  const onClickPost = () =>{
      fetch(`${URL}users.json`,
        {
          method: 'POST',
          ETag: 'qwerty',
          body: JSON.stringify(user2)
        }).then(res => res.json()).then(data=> console.log(data));
  }

  const onClickPut = () =>{
    fetch(`${URL}users/-MrThrBCSWd4WKTzvvyO.json`,
    {
      method: 'PUT',   
      body: JSON.stringify(user3)   
    }).then(res => res.json()).then(data=> console.log(data));
  }

  const onClickPatch = () =>{
    fetch(`${URL}users/-MrThrBCSWd4WKTzvvyO.json`,
    {
      method: 'PATCH',
      body: JSON.stringify(user5)
    }).then(res => res.json()).then(data=> console.log(data));
  }

  const onClickDel = () =>{
    fetch(`${URL}users/-MrThrBCSWd4WKTzvvyO.json`,
    {
      method: 'DELETE',      
    }).then(res => res.json()).then(data=> console.log(data));
  }

  const onClickGet = () =>{

  }


  return (

    <>
      <div className="wrp1024">
        <MyButton className='db_but' onClick={onClickGet} >GET</MyButton>
        <MyButton className='db_but' onClick={onClickPost} >POST</MyButton>
        <MyButton className='db_but' onClick={onClickPut} >PUT</MyButton>
        <MyButton className='db_but' onClick={onClickPatch} >PATCH</MyButton>
        <MyButton className='db_but' onClick={onClickDel} >DELETE</MyButton>
      </div>
    </>

  );

 }

 export default DB;