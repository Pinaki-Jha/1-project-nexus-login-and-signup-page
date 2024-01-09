import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passVis,setPassVis] = useState("password")
    const [message, setMessage] = useState("");

    const togglePassVis = () =>{
        if(passVis=="password"){
            setPassVis("text")
        }
        else{
            setPassVis("password")
        }
    }
    return(
    <div>
        <div className="bg-circle bg-right"></div>
        <div className="bg-circle bg-left"></div>
        <div className="master-div">
            <div className="welcome-div">
                <h1 className="heading-main">Welcome Back!</h1>
                <p className="text-main">We're thrilled to have you back!^^</p>
            </div>
            <div className="form-div">
                <h1 style={{textAlign:"center", opacity:"0.9"}}>Login</h1>
                <hr style={{marginBottom:"72px", border:"1px solid"}}/>
                <form>
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
                    <div style={{textAlign:"right", paddingRight:"20px"}}>
                        <input type="checkbox" onClick={togglePassVis}/><>Show Password</>
                    </div>
                    <p>{message}</p>
                    <input type="submit" className="form-submit" value="Login"/>
                </form>
                <div style={{textAlign:"center"}}>
                    <p style={{display:"inline-block", padding:"0 5px"}}>Not a member yet?</p>
                    <Link to="/register">Register Now.</Link>
                </div>

            </div>
        </div>
    </div>)
}
export default Login;