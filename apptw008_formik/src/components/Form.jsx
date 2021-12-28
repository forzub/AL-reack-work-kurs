import React from "react";
import { useFormik } from 'formik';
import MyInput from './MyInput';
import MyButton from './MyButton';
import * as yup from 'yup';

const Form = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  };

  const onSubmit = values => {
    console.log('SUBMIT', values);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(3).max(10),
    confirmPassword: yup.string().required().min(3).max(10).oneOf([yup.ref('password')]),
    agree: yup.boolean().test(val => val),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <div className="wrp1024">
        <form onSubmit={formik.handleSubmit} >
          <MyInput
            name='firstName'
            placeholder='First Name'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <MyInput
            name='lastName'
            placeholder='Last Name'
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <MyInput
            name='email'
            placeholder='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <MyInput
            name='password'
            placeholder='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <MyInput
            name='confirmPassword'
            placeholder='Confirm Password'
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <p>
            <MyInput
              type='checkbox'
              name='agree'
              onChange={formik.handleChange}
              value={formik.values.agree}
            />
            <span>Agree?</span>
          </p>

          <p><MyButton type='submit' > submit </MyButton></p>
          <div className="texblock">
            <p>{formik.touched.firstName && formik.errors.firstName}</p>
            <p>{formik.touched.lastName && formik.errors.lastName}</p>
            <p>{formik.touched.email && formik.errors.email}</p>
            <p>{formik.touched.password && formik.errors.password}</p>
            <p>{formik.touched.confirmPassword && formik.errors.confirmPassword}</p>
            <p>{formik.touched.agree && formik.errors.agree}</p>
          </div>

        </form>
      </div>
    </>

  );
}

export default Form;