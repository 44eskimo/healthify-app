import './index.css'
import Header from '../Header'

import { Link } from 'react-router-dom'

const MorningRoutine = () => {
    return(
        <div>
            < Header />
            
            <div className='morning-container'>

                <div className='columning'>
                <h1 className='morning-heading1'>Mourning Routine Exercises for old age people that keep you fit</h1>

                    
                
                        <div className='video-1'>

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/8BcPHWGQO44"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h3 className='morning-headings'>Seated exercises</h3>

                        <ul className='morningcontainer-list'>
                            <li>A lower risk of some health conditions like stroke, heart disease, hypertension, and type 2 diabetes.</li>
                            <li>Better bone health.</li>
                            <li>Improved quality of life</li>
                            <li>Lower risk of dementia.</li>
                            <li>Reduced risk of depression.</li>
                        </ul>
                        
                        </div>

                        <div className='video-2'>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/mQLzNf8VOIc"
                         title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                           picture-in-picture; web-share" allowFullScreen></iframe>

                            <h3 className='morning-headings'>Standing exercises</h3>

                        <ul className='morningcontainer-list'>
                            <li>It improves your strength. </li>
                            <li>It improves your balance. </li>
                            <li>It gives you more energy.</li>
                            <li>It prevents or delays diseases, such as heart disease, diabetes, or osteoporosis.</li>
                            <li>It can improve your mood and fight off depression.</li>
                            <li>It may improve cognitive function (how your brain works).</li>
                        </ul>
                        
                        </div>

                        <div className='video-3'>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3Xpx5bDLplo"
                        title="YouTube video player" frameborder="0"
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen></iframe>

                            <h3 className='morning-headings'>Mobility exercises</h3>

                        <ul className='morningcontainer-list'>
                            <li>Greater joint range of motion and freedom of movement.</li>
                            <li>Improved circulation. </li>
                            <li>Decreased risk of injury.</li>
                            <li>Reduced muscle tension and soreness.</li>
                            <li>Improved posture.</li>
                            <li>Improved movement efficiency.</li>
                        </ul>
                        
                        </div>  

                         <div className='video-4'>

                         <iframe width="560" height="315" src="https://www.youtube.com/embed/g8Lr15qzbeE"
                         title="YouTube video player" frameborder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                         allowFullScreen></iframe>

                            <h3 className='morning-headings'>Healing Music for stress relief</h3>

                        <ul className='morningcontainer-list'>
                            <li>Lowered stress and anxiety.</li>
                            <li>Better mood.</li>
                            <li>Reduced pain.</li>
                            <li>Improved sleep.</li>
                            <li>Sharpened focus or memory.</li>
                            <li>Relaxing your body and helping with meditation.</li>
                            <li>Assistance with speech or physical therapy.</li>
                            <li>Fostering community and a sense of togetherness.</li>
                        </ul>
                        
                        </div>    

                    <Link to="/dashboard">
                    <button className='button-55'>Back home</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default MorningRoutine