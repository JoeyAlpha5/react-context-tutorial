import React, {useContext} from 'react';
import NavBar from "../Components/Menu";
import { GlobalUserContext } from '../GlobalStates';
const About = ()=>{
    const {current_user} = useContext(GlobalUserContext);

    return(
        <>
            <NavBar/>
            <div className="content-container">
                <h4>
                    This is the about page
                </h4>
                <p>
                    {current_user}
                </p>
            </div>
        </>
    )
}

export default About;