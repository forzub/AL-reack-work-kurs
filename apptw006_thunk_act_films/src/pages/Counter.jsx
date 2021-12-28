import React from "react";
import MyButton from "../componets/basic/MyButton";
import MyInput from "../componets/basic/MyInput";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counter';


const Counter = () => {

const counter = useSelector(state => state.ReducerCounter.counter);
const dispatch = useDispatch();

const onPlusClick = () => {
  dispatch( increment() );
};

const onMinusClick = () =>  {
  dispatch( decrement() );
};

  

  return (
    <>
      <section className="section">
        <div className="wrp1024">
            <div className="ct_content">
              <MyButton className='ct_button' onClick={onMinusClick} >-</MyButton>
              <MyInput disabled value={counter} onChange={e => {}} />
              <MyButton className='ct_button' onClick={onPlusClick} >+</MyButton>
            </div>
        </div>
      </section>
    </>
  );
}

export default Counter;