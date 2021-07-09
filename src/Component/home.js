import React from 'react';
import Cover from './flowers.jpg';
import display from '../images/dp.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import Details from './details.json';
function Home(){

    return(
        <div className="fullbody">
            <div className="header">
            <div className="cover">
                <img src={Cover} alt="cover"></img>
            </div>
            <div className="center top">
                <div className="rounded-img">
                    <img src={display} alt="dp"></img>
                </div>		
            </div>
        </div>
        <div className="center margin30 graycolor">
            {/* <div>
                <h2>
                    I am a Smily
                </h2>
                <p>
                    The first smileys to be widely used were made as yellow buttons, but now the most common smileys are made using computer keyboard symbols.
                </p>	
            </div> */}
            {Details.map(post=>{
                return(
                    <>
                        <h2>{post.name}</h2>
                        <h4>{post.job}</h4>
                    </>
                )
            })}
        </div>
            <div className="center flexcontainer">
                <div>
                    <h2> <ImLocation2/><span>Chennai</span></h2>
                </div>
                <div>
                    <h2><AiOutlineMail/><span> Send Mail</span></h2>
                </div>
            </div>
            <div className="follow center">
                <div className="followers">
                    <h3>8,100</h3>
                    <p>Followers</p>
                </div>
                <div className="following">
                    <h3>3,650</h3>
                    <p>Following</p>
                </div>
            </div>
        <button>Follow</button>        
    </div>
    
    )
}

export default Home;