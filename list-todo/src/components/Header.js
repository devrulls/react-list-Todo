import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
const Header = ({displayTaskCompleted, changeDisplayTask}) => {
    const toggleCompletedTask = () =>{
        changeDisplayTask(!displayTaskCompleted)
    }
    return (  
        <header className="header">
            <h1 className='header__title'>List of Task!</h1>
            {displayTaskCompleted ?
                <button 
                    className='header__button'
                    onClick={()=>toggleCompletedTask()}
                >
                    Do not show completed tasks
                    <FontAwesomeIcon 
                        icon={faEyeSlash} 
                        className='header__icon-button'/>
                </button>
            :
                <button 
                    className='header__button'
                    onClick={()=>toggleCompletedTask()}                    
                >
                    Show completed tasks
                    <FontAwesomeIcon 
                        icon={faEye} 
                        className='header__icon-button'/>
                </button>
            }
        </header>
    );
}
 
export default Header;
