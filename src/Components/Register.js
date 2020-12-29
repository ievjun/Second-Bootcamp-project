import axios from 'axios';
import { useState } from 'react';


function Register() {
    // internal state
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [gender, setGender] = useState('');
    // internal events
    const handleNameChange = (event) => setName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handlegenderChange = (event) => setGender(event.target.value);


    const addNewTask = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if ((name === '') || (description === '') || (age === '')) {
            errorsForForm.push('Please fill all fields');
        }

        if (description.length < 5) {
            errorsForForm.push('Your email is to short');
        }

        if ((age.length > 3) || (isNaN(age)) || (age <= 17)) {
            errorsForForm.push('Are you sure about the age?');
        }
        if ((description.includes("@") === false ) || (description.includes(".") === false ))  {
            errorsForForm.push('Please insert valid email');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return ;
        } 
        {alert('Registration successful!')}
        setName('');
        setAge('');
        setDescription('');
        setLoading(false);

     
    };


    
    const saveButtonText = loading ? 'Loading...' : 'Register';
    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div className="alert alert-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }

    return (
        <div class="container">
            {errorsElement}
            <div className="form-group">
                <label htmlFor="new-task-title">Your name</label>
                <input value={name} onChange={handleNameChange} disabled={loading} type="text" className="form-control" id="new-task-title"></input>
            </div>
            <div className="form-group">
                <label htmlFor="new-task-title">Your age</label>
                <input value={age} onChange={handleAgeChange} disabled={loading} type="text" className="form-control" id="new-task-title"></input>
            </div>
            <div className="form-group">
                <label htmlFor="new-task-title" input >Your gender </label>
                <div>
                <select value={gender} onChange={handlegenderChange}>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select></div>
            
            </div>
            <div className="form-group">
                <label htmlFor="new-task-description">Your e-mail</label>
                <input value={description} onChange={handleDescriptionChange} disabled={loading} id="new-task-description" className="form-control"></input>
            </div>
            <div>
              
      </div>
            <div className="form-group">
                <button onClick={addNewTask} disabled={loading} className="btn btn-outline-info btn-inverse">{saveButtonText}</button>
            </div>
        </div>
    );
}

export default Register;