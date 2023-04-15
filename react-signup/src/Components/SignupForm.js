import {React, useState} from 'react';
import MyInput from './MyInput';
import SubmitButton from './SubmitButton';



const SignupForm = () => {
    
        /*const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [emailError, setEmailError] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [confirmPasswordError, setConfirmPasswordError] = useState("");
        const [successMessage, setSuccessMessage] = useState("");
        const [errorMessage, setErrorMessage] = useState("");*/
      
    const [fullName , setFullName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [password2 , setPassword2] = useState("");
    const [nameError , setNameError] = useState("");
    const [emailError , setEmailError] = useState("");
    const [passwordError , setPasswordError] = useState("");
    const [password2Error , setPassword2Error] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(fullName!=="" && email!=="" && password!=="" && password2!==""){
            if(nameError==="" && emailError==="" && passwordError==="" && password2Error===""){
                setSuccess("Successfully Signed Up!");
                setFullName("");
                setEmail("");
                setPassword("");
                setPassword2("");
                setError("");
            }else{
                setError("Error: All fields are mandatory");
                setSuccess("");
            }
        } else{
            setError("Error: All fields are mandatory");
            setSuccess("");
        }
    };

    const handleNameChange = (e) =>{
        const {value} = e.target;
        setFullName(value);
        if(fullName.length<2){
            setNameError("Name must be at least 2 characters");
        }else{
            setNameError("");
        }
    };
    function handleEmailChange(event) {
        setEmail(event.target.value);
        if (!event.target.validity.valid) {
          setEmailError("Please enter a valid email address");
        } else {
          setEmailError("");
        }
      }
     
      function handlePasswordChange(event) {
        setPassword(event.target.value);
        if (event.target.value.length < 8) {
          setPasswordError("Password must be at least 8 characters long");
        } else {
          setPasswordError("");
        }
      }
    
      function handleConfirmPasswordChange(event) {
        setPassword2(event.target.value);
        if (event.target.value !== password) {
            setPassword2Error("Passwords do not match");
        } else {
            setPassword2Error("");
        }
      }
    
 return (
    <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <MyInput myType="text" myPlace="Full Name" myValue={fullName} change={handleNameChange}/>

        {nameError!=="" && <div className="warning">{nameError}</div>}
        
        <MyInput myType="email" myPlace="Email" myValue={email} change={handleEmailChange}/>

        {emailError!=="" && <div className="warning">{emailError}</div>}
        
        <MyInput myType="password" myPlace="Password" myValue={password} change={handlePasswordChange} />

        {passwordError!=="" && <div className="warning">{passwordError}</div>}
        
        <MyInput myType="password" myPlace="Confirm Password" myValue={password2} change={handleConfirmPasswordChange} />

        {password2Error!=="" && <div className="warning">{password2Error}</div>}

        {error!=="" && <div className="warning">{error}</div>}

        {success!=="" && <div className="show-success">{success}</div>}


        <SubmitButton />
    </form>
  )
}

export default SignupForm;