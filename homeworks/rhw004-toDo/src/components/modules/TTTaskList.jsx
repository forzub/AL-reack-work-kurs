import React from "react";
import { NavLink } from 'react-router-dom';
import Style from '../modules/TTSection.module.css';
import MyButton from '../base/MyButton';
import { useDispatch } from 'react-redux';

const TTTaskList = ({ begin, title, dedline, done, children, idkey, clickkey }) => {


  // console.log(begin, title, dedline, done, children, idkey, clickkey)

  const onClickEdit = () => { }
  const onClickRemove = () => { }

  return (
    <>
      <li className='tl_item'>{
        children ? children : (<>
          <div className="tl_begin">{begin}</div>
          <div className="tl_title">
            {/* <span className="tl_title_tx">{title}</span> */}
            {title}
          </div>
          <div className="tl_dedline">{dedline}</div>
          <div className="tl_done">
            <input
              type="checkbox"
              checked={done}
              listid={idkey}
              clickkey={clickkey}
            />
            <span>
              <MyButton listid={idkey} clickkey={clickkey} className={Style.lst_btn} onClick={onClickEdit}>E</MyButton>
              <MyButton listid={idkey} clickkey={clickkey} className={Style.lst_btn} onClick={onClickRemove}>X</MyButton>
            </span>
          </div>
        </>)
      }</li>
    </>
  )
}

export default TTTaskList;