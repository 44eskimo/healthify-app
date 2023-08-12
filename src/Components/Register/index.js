
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram} from 'react-icons/bs'
import {TfiYoutube} from 'react-icons/tfi'
import {AiOutlineHome} from 'react-icons/ai'

const Register = () => {

    const handleSubmit = (e) => {
        e.prevent.default()
    }

    return(
        <div>
            <div>
            <div className="bt-container">
        
        <h1 className="login-heading" >Welcome to Healthify App for Good Health, Wealth & Fitness</h1>
            <form>
                <p className="login-para">“If you're happy, if you're feeling good, then nothing else matters.” – Robin Wright </p>
                <div className="rowing">
                    <img src="https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=751&q=80" className="login-image" alt="img" />

                    <div className="register-buttons-container">
                        <div>
                        <input type="text" placeholder="Select a username" className='m-2 form-control'   />
                        <input type="password" placeholder="Choose a password" className='m-2 form-control'  />
                        
                        </div>

                        <div className="login-container-rowing">

                            
                            <div>
                            <button class="button-68 button" type='submit' onClick={handleSubmit} >Register</button>

                            </div>


                        </div>
                        
                        
                        
                        
                    </div>

                    <div>
                       <img src='https://plus.unsplash.com/premium_photo-1678310819897-edfe9b9def64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='img2' className='login-image2' />
                    </div>
                </div>

            </form>

            <div className='middle-content'>
        <div className='flex-1'>
            <img src='https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className='center-img1' alt="main-img1" />
            <p className='middle-para'>"Fast Running isn't forced. You have to relax & let Run come out of you — J. Polo</p>
        </div>
        <div className='flex-2'>
            <img src='https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'  className='center-img2' alt="centerimg2" />
            <p className='middle-para2'>"Don't dream of winning, train for it!" — Usain Bolt</p>
        </div>
        <div className='flex-3'>
            <img src='https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt="yoga" className='center-img3' /> 
            <p className='middle-para3'>"True yoga is not about the shape of your body, but the shape of your life. ..." — Tom Cruise</p>
        </div>
        <div  className='flex-4'>
            <img src='https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className='center-img1' alt='img3' />
            <p className='middle-para4'>¨Exercise is labor without weariness.¨ — Indiana Jones

</p>
        </div>
                </div>  
                <div className='last-content'>
                    <div className='lastflex-1'>
                            <h3 className='lastflex-1'>Follow us on</h3>
                            < BsFacebook size={20} className='lastcontent-first-icon'/> < BsTwitter size={20} className='m-3'/>
                            < TfiYoutube size={20}/>
                            < BsLinkedin size={20} className='lastcontent-third-icon'/>
                            < BsInstagram size={20} className='lastcontent-third-icon' />
                            <p className='lastcontent-firstpara'>Insurance claim available.
                            Registered with ROHINI(Registry of Hospitals in Network of Insurance)
                            subject to the terms and condition of the underlying medical insurance policy
                            purchased by you</p>
                    </div>
                    <div className='lastflex-2'>
                        <h3 className='lastflex-2-font'>Quick Links</h3>
                        <ul className='styling'>
                            
                           <li> <a target='_blank' href='www.google.com' className='about-yoga'>About Yoga</a> </li>
                          <li>  <a target='_blank' href='www.google.com' className='about-yoga'>Exercise with us</a> </li>
                          <li>  <a target='_blank' href='www.google.com' className='about-yoga'>Special diet plans</a> </li>
                          <li>  <a target='_blank' href='www.google.com' className='about-yoga'>Routine medical tests</a> </li>
                          <li>  <a target='_blank' href='www.google.com' className='about-yoga'>Healthy Living</a> </li>

                        </ul>
                    </div>
                    <div className='lastflex-3'>
                        <h3>Contact Info</h3>
                        <p className='lastflex3-para'> <span>
                            < AiOutlineHome size={18} className='home-icon'/>
                        </span>
                             Healthify Yoga Fitness, S.No.261, Avathi, Devanahalli,
                            Bangalore – 562110,
                            Karnataka, INDIA</p>

                    </div>

                </div>


    </div>
    
          </div>
        </div>
    )
}

export default Register