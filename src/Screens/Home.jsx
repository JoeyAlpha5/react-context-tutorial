import React, {useContext} from 'react';
import NavBar from "../Components/Menu";
import { GlobalUserContext } from '../GlobalStates';
const Home = ()=>{
    const {current_user,update_user} = useContext(GlobalUserContext);
    return(
        <>
            <NavBar/>
            <div className="content-container">
                <h4>
                    This is the home page
                </h4>
                <p>
                    {current_user}
                </p>
                <div>
                    <button type="button" className="btn btn-primary" onClick={()=>update_user("Joey")}>Update user</button> 
                </div>
            </div>
        </>
    )
}

export default Home;