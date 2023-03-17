import React from 'react';
import { useFormik } from 'formik';
import './style.scss';

type InitValue = {
    userName: string,
    password: string,
}
 const Login = () => {
    const initValue: InitValue = {
        userName: '',
        password: '',
    }
   const formik = useFormik({
     initialValues: initValue,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit} className="user-login">
         <div className="formik-input">
             <div className="formik-label">
                 <label htmlFor="userName" >User Name</label>
             </div>
             <input
                 id="userName"
                 name="userName"
                 type="text"
                 onChange={formik.handleChange}
                 value={formik.values.userName}
             />
         </div>
         <div className="formik-input">
             <div className="formik-label">
                 <label htmlFor="password" >Password</label>
             </div>
         <input
             id="password"
             name="password"
             type="password"
             onChange={formik.handleChange}
             value={formik.values.password}
         />
         </div>
         <div className="summit-button">
             <button type="submit">Submit</button>

         </div>
     </form>
   );
 };

 export default Login;