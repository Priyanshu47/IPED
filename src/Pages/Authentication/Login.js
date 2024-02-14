"use client"
import React, { useState } from "react";
import DefaultENG from "../../Assest/Languages/Defaulttext.json"
import Nav from '../../components/navbar'
import { useEffect} from "react";
import { useRouter } from "next/navigation";
// import axios from "axios";
import Link from "next/link";
// import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const router = useRouter();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const payload = {
  //     email,
  //     password,
  //   };

  //   axios
  //     .post(`http://localhost:3001/Login`, payload)
  //     .then((res) => {
  //       console.log(res.data);
  //       toast.success(<div>Successfully Login</div>);

  //       router.push("/");
  //     })
  //     .catch((err) => console.log(err));
  // };


  return (
    <>
    <Nav/>
      <div className="flex items-center justify-center min-h-[80vh] font-Mulish bg-white">
      
        <div className="w-full max-w-[430px] px-8 py-10 mx-auto bg-white border rounded-lg">
          <p className="text-base text-custom-red">{DefaultENG.Login_Page.welcomemsg}</p>
          <h3 className="text-2xl font-semibold">{DefaultENG.Login_Page.login}</h3>
          <div className="my-5">
            <label>{DefaultENG.Login_Page.email}</label>
            <input
              type="email"
              className="border w-full py-2 px-2 rounded-md hover:border-indigo-600"
              placeholder="johndoe|"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
            </div>
            <div className="my-5">
            <label>{DefaultENG.Login_Page.password}</label>
            <input
              type="Password"
              className="border w-full py-2 px-2 text-neutral-500 rounded-md hover:border-indigo-600"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            </div>


            <button className="w-full h-12 px-3.5 py-2 bg-custom-blue rounded-3xl justify-center items-center gap-2.5 inline-flex text-white text-base font-bold font-Mulish leading-none"
            //  onClick={handleSubmit}
            >
              {DefaultENG.Login_Page.loginbtn}
            </button>

            <p className="text-center pt-5 text-custom-sky text-s font-normal font-Mulish underline">
              {DefaultENG.Login_Page.cantaccess}
            </p>
        </div>
      </div>
    </>
  );
};

export default Login;
