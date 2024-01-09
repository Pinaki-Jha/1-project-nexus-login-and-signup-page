function Home(){
    return(
        <div style={{height:"65vh", textAlign:"center", padding:"auto"}}>
            <h1 className="heading-main">Congratulations!</h1>
            <p className="heading-main">You've logged in successfully!</p>
            <p className="text-main">Unfortunately, that's all this website does.</p>
            <p className="text-main"> Your data is also only stored locally, and hence,you won't be able to log in on other devices</p>
            <button className="form-submit">LogOut</button>
        </div>
    )
}

export default Home;