import React , { useState } from "react"
import "./Join.css"
import axios  from "axios"

const  Join =()=>{

    const [state, setState] =useState({
        regUserInput: "",
        regPwInput: "",
        email: "",
        position : "",
        assistanceOffered :""

    })

    const changeHandler =(e)=>{
           const { name , value } =  e.target;
           setState((prevVal)=>({
            ...prevVal,[name] : value
           }))
           console.log(state)
    }

    const sendFormDataToServer = (formData) => {
      console.log(formData);
    
      axios.post('http://localhost:3000/join', formData, { withCredentials: false })
        .then((response) => {
          console.log('Success:', response.data);
          // Handle success, e.g., redirect to a success page
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error, e.g., show an error message to the user
        });
    };
    
    // const sendFormDataToServer = async (formData) => {
    //   console.log(formData)
    //   try {
    //     const response = await Axios.post('http://localhost:3000/join/createUser', formData, {withCredentials:false});
    //     console.log('Success:', response.data);
        // Handle success, e.g., redirect to a success page
      // } catch (error) {
      //   console.error('Error:', error);
        // Handle error, e.g., show an error message to the user
    //   }
    // };
    
   
    
      // const  sendFormDataToServer = (formData) => {
      //   Axios.post('/join/createUser', formData)
      //     .then((response) => {
      //       console.log('Success:', response.data);
            // Handle success, e.g., redirect to a success page
          // })
          // .catch((error) => {
          //   console.error('Error:::', error);
            // Handle error, e.g., show an error message to the user
    //       });

    // }


 const submitHandler=(e)=>{

        e.preventDefault();

        // Call a function to send the form data to your server
        console.log(state)
        sendFormDataToServer(state);
      };


    return (
        <div className="bodyStyle joinBody">
         
            <form className="joinForm" onSubmit={submitHandler}>
               <h1 className="joinHeader">
            Register
            </h1> 
                <label htmlFor="regUserInput">Username</label>
                <input name="regUserInput" type="text" value={state.regUserInput} id="regUserInput" placeholder="Username" onChange={changeHandler}></input>

                <label id="regPwInput">Password</label>
                <input  name="regPwInput" htmlFor="password" type="password" value={state.regPwInput} id="regPwInput" placeholder="Password"  onChange={changeHandler}></input>

                <label htmlFor="email">Position:</label>
                <select name="position"  id="position" placeholder="Select" onChange={changeHandler}>
                <option value="returning citizen">Returning Citizen</option>
    <option value="mentor">Mentor</option>
    <option value="educator">Educator</option>
    <option value="volunteer">Volunteer</option>
                </select>

                <label htmlFor="email">Email</label>
                <input name="email" type="text" value={state.email} id="email" placeholder="Email" onChange={changeHandler}></input>

                <label htmlFor="assistanceOffered">Assistance Offered</label>
                <input name="assistanceOffered" type="textarea" value={state.assistanceOffered} id="assistanceOffered" placeholder="Assistance Offered" onChange={changeHandler}></input>

                <button type="submit">Join</button>
                </form> 
        </div>
    )
}

export default Join