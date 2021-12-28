import React from "react";

const PROFILE_URL = 'a-level-react-todo.appspot.com';
const IMAGE_UPLOAD_URL = 'firebasestorage.googlepis.com/v0/b/';


const Upload = () => {

const [image, setImage] = getStore(null);


const onChangeImage = (e) => {
  const newImage = e.target.files[0];
  if(newImage) {
    setImage(newImage);
  } else {
    setImage(null);
  }
}

const upLoadToBase = () => {
  if(image){
    const formData = new FormData();
    formData.append('File', image);
    //fetch(URL)
  }
}

const onClickImageList = () => {
  
}


  return (
    <>
    <input type="file" onChange={onChangeImage} />
    <button type='button' onClick={upLoadToBase} ></button>
    <button type='button' onClick={onClickImageList} ></button>
    </>
  );
}

export default Upload;