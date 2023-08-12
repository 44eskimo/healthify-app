import React from 'react'

import {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import Header from '../Header'

import {FaSuitcase, FaHandHoldingMedical} from 'react-icons/fa'
import {BiFoodTag} from 'react-icons/bi'
import {GrYoga} from 'react-icons/gr'
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram} from 'react-icons/bs'
import {TfiYoutube} from 'react-icons/tfi'
import {AiOutlineHome} from 'react-icons/ai'



import './index.css'

const Dashboard = () => {

    
        const [joke, setJoke] = useState('')
    
        useEffect(() => {
            fetchJoke();

        }, []);

        const fetchJoke = async () => {
            console.log('hello')

            try {
                const response = await fetch('https://v2.jokeapi.dev/joke/Any')
                const data = await response.json()
            
            if (data.type==='single') {
                setJoke(data.joke)

            } else if (data.type==='twopart') {
                setJoke(`${data.setup} ${data.delivery}`)
            }
            } catch(error) {
                console.error(error)
            }

            

        }

       

    

    return (
        
        <div>
           
            <div className='dashboard-bt-container'>
            <Header/>
                
                    
                <h1 className='dashboard-heading'>Welcome back</h1>
                    <div className='dashboard-rowing'>
                        
                        {/* <div>                        
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                           Please select your age
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">65</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">66</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">67</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">68</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">69</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">70</Dropdown.Item>

                        </Dropdown.Menu>
                        </Dropdown>
                        </div> */}
                        <div className=' dashboard-flex-upper'>

                        <div className='dashboard-flex-1'>
                                <img src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80" className='flex-img1' alt='dash-img1' />
                                
                                    < FaSuitcase size={32} className='suitcase-icon' />
                                
                            <h3 className='dashboard-para'>    
                                Book a health check-up 
                            </h3>
                            <p className='dashboard-para-init'>
                            Traveling for medical care isn't easy. Get practical tips and activity
                             ideas to make your trip as easy and comfortable as possible.
                            </p>
                            <button className="button-33">Book</button>
                        </div>

                        <div className='dashboard-flex-1'>
                                <img src="https://plus.unsplash.com/premium_photo-1661274078177-3975521e1101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" className='flex-img1' alt='dash-img2' />
                                
                                    < FaHandHoldingMedical size={32} className='suitcase-icon' />
                                
                            <h3 className='dashboard-para'>    
                                Book a Surgery at a low cost 
                            </h3>
                            <p className='dashboard-para-2'>
                            Herniated or ruptured discs,
                            Spinal stenosis,
                            Progressive numbness or weakness radiating into your arms or legs,
                            Spinal infection, fracture, or tumors in the spine
                            
                            </p>
                            <button className="button-33">Book</button>

                        </div>

                        <div className='dashboard-flex-1'>
                                <img src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className='flex-img1' alt='dash-img3' />
                                
                                    < BiFoodTag size={32} className='suitcase-icon' />
                                
                            <h3 className='dashboard-para'>    
                                Book a Dietician (Free)
                            </h3>
                            <p className='dashboard-para-3'>
                            Redefining Weight Loss
                            No gym, No supplements {'\n'} 
                            <span className='happy-clients'>50,000+ </span>
                            Happy Clients
                            
                            </p>
                            <button className="button-33 margin-upper">Book</button>

                        </div>

                        <div className='dashboard-flex-1'>
                                <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=499&q=80" className='flex-img1' alt='dash-img3' />
                                
                                    < GrYoga size={32} className='suitcase-icon' />
                                
                            <h3 className='dashboard-para'>    
                                Book a Yoga Class
                            </h3>
                            <p className='dashboard-para-3'>
                            Yoga improves balance and flexibility. ...
                            
                            Yoga can ease arthritis symptoms. ...
                            Yoga benefits heart health. ...
                            Yoga relaxes you, to help you sleep better. ...
                            
                            </p>
                            <button className="button-33">Book</button>

                        </div>

                        </div>
                                                
                    </div>
                
               <div className='dashboard-lastcontent'>


                <div className='dashboard-last-calories'>
                <img src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="calorie-img" className='dashboard-calorie' />

                <h4 className='dashboard-calories-heading'>Want to check your calories?</h4>

                <Link to="/CaloriesCalculator">
                <button className="button-24" >Calories Section</button>
                </Link>
                </div>

                <div className='dashboard-test-container'>
                    <img src='https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className='dashboard-checkup' alt='checkup-img'/>
                    <h4 className='dashboard-tests-heading'>Want to book a few tests?</h4>

                    <Link to="/Tests">
                    <button className='button-24'>Test Booking Section</button>
                    </Link>
                </div>

                <div className='daily-tips-container'> 
                    <img src='https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80' className='dashboard-tips-image' alt='checkup-img'/>
                    <h4 className='dashboard-tests-heading-3'>Check out our daily tips for you by our Nutritionists</h4>

                    <Link to="/dailytips">
                    <button className='button-24'>Daily Tips Section</button>
                    </Link>
                </div>
                
               </div>

               <div className='last-buttons-container'>

                        

                        <div className='columning'>

                        <img src='https://images.unsplash.com/photo-1466979939565-131c4b39a51b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' className='jokes-img' alt='jokes-img' />


                            <button className='button-40' onClick={() => fetchJoke()}>
                                Click for another Joke
                            </button>
                            <p className='last-buttons-para' >(Entertainment)</p>
                        </div>

                        <div>
                            <p className='jokes-container'>{joke}</p>
                            <img src='https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=740&t=st=1691771747~exp=1691772347~hmac=ba368c86ae7b912f6f64d838a30f4614281df425c68216b4b01ff21001d53976' className='joke-img' alt='joke-img' />

                        </div>


                        
               </div>
               <div className='footer'>
                        <h1 className='footer-text'>"Health is Wealth"  </h1>
                        <img src="https://img.freepik.com/free-vector/strong-man-with-good-immune-system-against-viruses_23-2148568830.jpg?w=740&t=st=1691856720~exp=1691857320~hmac=f01fde28a492981dd2ed5e22fdb82888665a3d63743b53898f003513d523f92a" alt='healthy-footer-img' className='healthy-footer-img' />
               
               
               
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
    )
}

export default Dashboard