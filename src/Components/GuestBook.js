import React from 'react';

const GuestBook = () => {
    const initialFormData = Object.freeze({
        username: "",
        password: ""
      });
      let value = ('comments');

        const [formData, updateFormData] = React.useState(initialFormData);
        const handleChange = (e) => {
          updateFormData({
            ...formData,
            
       
            [e.target.name]: e.target.value.trim()
          });
          value = formData;
        };
        
        const handleSubmit = (e) => {
          e.preventDefault()
          console.log(formData);
          document.getElementById("chat").value = ((formData.password)+(formData.password));
         
        };
      

        return (
          <>
          <div>
          <textarea class="chat" id="chat" defaultValue={value}></textarea>
          </div>
            <label>
              Username
              <input name="username" onChange={handleChange} />
            </label>
            <br />
            <label>
              Password
              <input name="password" onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </>
        );
      };
  export default GuestBook