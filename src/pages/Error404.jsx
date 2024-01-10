import { Link } from "react-router-dom";

function Error404(){
    return(
        <div style={{padding:"96px 0 196px 0",margin:"96px 0", textAlign:"center"}}>
            <h1 className="heading-main">404 Error</h1>
            <p className="text-main">You're not supposed to be here.</p>
            <Link className="text-main" to="/">Go back.</Link>
        
        </div>
    )
}

export default Error404