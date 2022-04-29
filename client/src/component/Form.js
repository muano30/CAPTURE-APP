import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Form = () => {
 const navigate = useNavigate()
    const [formInfo, setFormInfo] = useState({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        grade: ""
    })

    useEffect(() => {
        axios.get("http://localhost:4001").then(res => setList(res.data)).catch(error => console.log(error))
      }, [formInfo]);

// const changeRoute = () => {
//     navigate('/display')
// }

    const [list, setList] = useState([])


    const handleChange = (e) => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
    //     setList([...list, formInfo])
    
    try {
        const res = axios.post("http://localhost:4001/post", formInfo);
        return res.status == 200 && axios.get("http://localhost:4001").then(res => setList(res.data)).catch(error => console.log(error))
        
    } catch (error) {
        
    }

}

    return (
        <div>

<h1>CAPTURE APP</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input type="text"
                     placeholder='First Name' 
                     onChange={handleChange}
                     name="firstname"
                     value={formInfo.firstname}
                     />
                </div>
                <div>
                    <label>Last Name: </label>

                    <input type="text" 
                    placeholder='Last Name'
                    onChange={handleChange}
                    // onChange={(e) => setWords(e.target.value)}

                    name="lastname"
                    value={formInfo.lastname}
                    />
                </div>
                <div>
                    <label>Date Of Birth: </label>

                    <input type="date" 
                    onChange={handleChange}
                    name="dateofbirth"
                    value={formInfo.dateofbirth}
                    />
                </div>
                <div>
                    <label>Grade: </label>
                    <input type="number" 
                    placeholder='Grade' 
                    onChange={handleChange}
                    name="grade"
                    value={formInfo.grade}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>

            {list.map((item)=>{
        return (
            <ul key={item._id}>
                <li>{item.firstName}</li>
                <li>{item.lastName}</li>
                <li>{item.dateOfBirth}</li>
                <li>{item.grade}</li>
            </ul>
        )
    })}

        </div>
    )
}


export default Form;