import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Form = (props) => {

    const { handleChange, handleSubmit, firstname, lastname, dateofbirth, grade } = props;


    return (
        <div>
            <Navbar />
            <h1>CAPTURE APP</h1>

            <form onSubmit={handleSubmit} >
                <div class="form-group">
                    <label>First Name: </label>
                    <input type="text"
                        placeholder='First Name'
                        onChange={handleChange}
                        name="firstname"
                        value={firstname}
                        className="form-control"
                    />
                </div >
                <div class="form-group">
                    <label>Last Name: </label>

                    <input type="text"
                        placeholder='Last Name'
                        onChange={handleChange}
                        name="lastname"
                        value={lastname}
                        className="form-control"

                    />
                </div>
                <div class="form-group">
                    <label>Date Of Birth: </label>

                    <input type="date"
                        onChange={handleChange}
                        name="dateofbirth"
                        value={dateofbirth}
                        className="form-control"

                    />
                </div>
                <div class="form-group">
                    <label>Grade: </label>
                    <input type="number"
                        placeholder='Grade'
                        onChange={handleChange}
                        name="grade"
                        value={grade}
                        className="form-control"

                    />
                </div>
                <div className='submit-button'>

                    <button type="submit" class='btn btn-outline-success' >Submit</button>
                </div>
            </form>
        </div>
    )
}


export default Form;