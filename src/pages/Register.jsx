import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(){

    const navigateTo = useNavigate()
    
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [passVis,setPassVis] = useState("password")
    const [message, setMessage] = useState("")

    useEffect(()=>{
        const isLogin = localStorage.getItem('projectOneisLogin')
        if(isLogin){
            navigateTo("/")
        }
    },[])

    const togglePassVis = () =>{
        if(passVis=="password"){
            setPassVis("text")
        }
        else{
            setPassVis("password")
        }
    }

    function registerUser(event){
        console.log("Registering User...")
        event.preventDefault();
        if (password!=confirmPass){
            setMessage("Passwords do not match.")
        }
        else if(password.trim().length<8 || password.trim().length>16){
            setMessage("Password must be between 8 and 16 characters.")
        }
        else if(!/\d/.test(password.trim())){
            setMessage("Password must contain a number.")
        }
        else if(!/[a-z]/i.test(password.trim())){
            setMessage("Password must contain a letter.")
        }
        else if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password.trim())){
            setMessage("Password must contain atleast one special character.")
        }
        else if(password.trim()==""){
            setMessage("Spaces only is not a valid password.")
        }
        else if(username.trim()==""){
            setMessage("Spaces only is not a valid username")
        }
        else{
            setMessage("Registration Successful.Please Log In.")
        }
    }

    return(
    <div>
        <div className="bg-circle bg-right-up"></div>
        <div className="bg-circle bg-left"></div>
        <div className="bg-circle bg-right-down"></div>
        <div className="master-div">
            <div className="welcome-div">
                <h1 className="heading-main">Welcome Onboard!</h1>
                <p className="text-main">We're thrilled to have you!^^</p>
            </div>
            <div className="form-div">
                <h1 style={{textAlign:"center", opacity:"0.9"}}>New User Sign Up</h1>
                <hr style={{marginBottom:"72px", border:"1px solid"}}/>
                <form onSubmit={registerUser}>
                    <div className="form-field">
                        <div className="form-symbol">
                            <span className="material-symbols-outlined">face</span>
                        </div>
                        <input required className="form-input" type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    </div>
                    <div className="form-field">
                        <div className="form-symbol">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                        <input required className="form-input" type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="form-field">
                        <div className="form-symbol">
                            <span className="material-symbols-outlined">lock</span>
                        </div>
                        <input required className="form-input" type={passVis} placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className="form-field">
                        <div className="form-symbol">
                            <span className="material-symbols-outlined">lock</span>
                        </div>
                        <input required className="form-input" type={passVis} placeholder="Confirm Password" value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value)}}/>
                    </div>

                    <div style={{textAlign:"right", paddingRight:"20px"}}>
                        <input type="checkbox" onClick={togglePassVis}/><>Show Password</>
                    </div>
                    <p style={{textAlign:"center",marginTop:"10px"}}>{message}</p>
                    <input type="submit" className="form-submit" value="Sign Up"/>
                </form>
                <div style={{textAlign:"center"}}>
                    <p style={{display:"inline-block", padding:"0 5px"}}>Already a member?</p>
                    <Link to="/login">Login.</Link>
                </div>

            </div>
        </div>
    </div>)
}
export default Register;