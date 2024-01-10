import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(){

    const navigateTo = useNavigate()

    useEffect(()=>{
        const isLogin = localStorage.getItem('projectOneisLogin')
        if(!isLogin){
            navigateTo("/register")
        }
    },[])

    function logout(){
        localStorage.removeItem("projectOneisLogin")
        navigateTo("/login")
    }
    return(
        <div style={{margin:"96px auto 96px auto", textAlign:"center", padding:"auto"}}>
            <h1 className="heading-main">Congratulations!</h1>
            <p className="heading-main">You've logged in successfully!</p>
            <p className="text-main">Unfortunately, that's all this website does.</p>
            <p className="text-main"> Consider logging out and doing it all over again.</p>
            <button className="form-submit" onClick={logout}>LogOut</button>
        </div>
    )
}

export default Home;