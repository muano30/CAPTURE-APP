import React, { useState, useEffect } from "react";
import Form from "./Form";
import axios from 'axios'
import {
  useNavigate,
  Routes,
  Route
} from "react-router-dom";

import Display from "./Display";

const Main = () => {

let navigate = useNavigate()

  const [formInfo, setFormInfo] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    grade: ""
  })

  const [list, setList] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  if(formInfo.firstname === "" || formInfo.lastname === "" || formInfo.dateofbirth === "" || formInfo.grade === ""){
    return   alert ("Fill up all the input")
  }else{

    try {
      const saveDetails = await axios.post(
        "http://localhost:4001/save_details",
          formInfo,
          
      );
      getDetails();
      navigate('/display')
      setFormInfo({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        grade: ""
      })
      return saveDetails;
      
    } catch (error) {
      console.log("error", error);
    }
  }
    
  };
  
  
  const getDetails = async () => {
    await axios
      .get("http://localhost:4001/get_details")
      .then((response) => {
        const data = response.data;
        setList(data);
      })
      .catch(() => {
      });
  };


  return (
    
      <div>
        <Routes>
          <Route path="/" exact element={<Form handleChange={handleChange} handleSubmit={handleSubmit} />} />
          <Route path="/display" element={<Display list={list} getDetails={getDetails}/>} />
        </Routes>
      </div>
  
  );
}

export default Main;