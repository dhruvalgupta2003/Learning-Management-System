import React, { useState } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import rstyles from '../styles/Register.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate.js';
import convertToBase64 from '../helper/convert.js';
import { registerUser } from '../helper/helper.js';
export default function Register() {

  const navigate = useNavigate()
  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues : {
      email : '',
      username : '',
      password : ''
    },
    validate : registerValidation,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values =>{
      values = await Object.assign(values, {profile : file || ''});
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating...",
        success: <b>Registered Successfully...!</b>,
        error: <b>Could not Register.</b>
      });

      registerPromise.then(function(){navigate('/')});

    }

  });

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e =>{
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className='container mx-auto'>

      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={rstyles.glass} style={{width : "30%"}}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Happy to join you!</span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">
                <img src={file || avatar} className={styles.profile_img} alt="avatar" srcset="" />
              </label>
                <input onChange={onUpload} type="file" name="" id="profile" />
            </div>
            <div className="textbox flex flex-col items-center gap-6" >
              <input {...formik.getFieldProps('email')} className={rstyles.textbox} type="email" placeholder='Email*' />
              <input {...formik.getFieldProps('username')} className={rstyles.textbox} type="text" placeholder='Username*' />
              <input {...formik.getFieldProps('password')} className={rstyles.textbox} type="password" placeholder='Password*' />
              <button className={styles.btn} type='submit'>Register</button>
            </div>
            <div className="text-center py-4">
              <span className='text-grey-500'>Already Registered? <Link className='text-red-500' to='/login'>Login Now</Link></span>

            </div>
          </form>
        </div>
      </div>
    </div>


  )
};
