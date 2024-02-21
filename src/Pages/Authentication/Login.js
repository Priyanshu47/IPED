"use client"
import React, { useState } from "react";
import DefaultENG from "../../Assest/Languages/Defaulttext.json"
import Nav from '../../components/navbar'
import { useEffect} from "react";
import loginApi from "@/Assest/api/Authentication/Login";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => 
{
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 
  const router = useRouter();
  const showToastMessage = () => {};
  

  useEffect(() => 
  {
    validateForm(); 
  }, [email, password]); 
  
  // Validate form 
  const validateForm = () => 
  {
    let errors = {}; 
    if (!email) 
    {
      errors.email = ([]); 
    } 
    else if (!/\S+@\S+\.\S+/.test(email)) 
    { 
          errors.email = DefaultENG.Login_Page.emailInv; 
    } 

    if (!password) 
    {
      errors.password = ([]); 
    } 
    else if (password.length < 6) 
    {
      errors.password = DefaultENG.Login_Page.passwordInv; 
    } 

    setErrors(errors); 
    setIsFormValid(Object.keys(errors).length === 0); 
  }; 
  

  const handleSubmit = async (event) =>
  {
    event.preventDefault();
    // Access the form elements through the event.target
    let logindata =
    {
      email : event.target.email.value,
      password : event.target.password.value
    }

    if (isFormValid) 
    { 
      const data = await loginApi(logindata); 
      if (data?.code == 200) 
      {
        alert(data?.message);
        localStorage.setItem('Token', data?.token);
        router.push("/dashboard");
      }
      else 
      {
        toast.error(data?.message);
      }
    } 
    else 
    { 
      toast.warning(DefaultENG.Login_Page.empty);
    } 
  };

  return (
    <>
    <Nav/>
<div className="flex items-center justify-center min-h-[80vh] font-Mulish bg-white">
  <form onSubmit={handleSubmit} className="w-[430px] px-8 py-10 mx-auto bg-white border rounded-lg">
    <p className="text-base text-custom-red">{DefaultENG.Login_Page.welcomemsg}</p>
    <h3 className="text-2xl font-semibold">{DefaultENG.Login_Page.login}</h3>
    <div className="my-5">
      <label>{DefaultENG.Login_Page.email}</label>
      <input
        type="email"
        className="border w-full py-2 px-2 rounded-md hover:border-indigo-600"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      {errors.email && <p style={styles.error}>{errors.email}</p>} 
    </div>
    <div className="my-5">
      <label>{DefaultENG.Login_Page.password}</label>
      <input
        type="password"
        className="border w-full py-2 px-2 text-neutral-500 rounded-md hover:border-indigo-600"
        placeholder="Enter Password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        name="password"
      />
      {errors.password && <p style={styles.error}>{errors.password}</p>}  
    </div>
    <button
    
      onClick={showToastMessage}
      type="submit"
      className="w-full h-12 px-3.5 py-2 bg-custom-blue rounded-3xl justify-center items-center gap-2.5 inline-flex text-white text-base font-bold font-Mulish leading-none"
    >
      <ToastContainer />
      
      {DefaultENG.Login_Page.loginbtn}
    </button>
    <p className="text-center pt-5 text-custom-sky text-s font-normal font-Mulish underline">
      {DefaultENG.Login_Page.cantaccess}
    </p>
  </form>
</div>
</>
  );
};
const styles = { 
  error: { 
      color: 'red', 
      fontSize: '14px', 
      marginBottom: '6px', 
  }, 
}; 


export default Login;
