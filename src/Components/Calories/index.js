import { useState } from "react"

import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import Header from "../Header"

import './index.css'
const CaloriesCalculator = () => {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [result, setResult] = useState(null)
    const [para, setpara] = useState(false)

    
    

    const heightInput = (event) => {
        setHeight(event.target.value)
    }
    const weightInput = (event) => {
        setWeight(event.target.value)
    }

    const sum = () => {

      const results =  (weight /  (height*height)).toFixed(2)
        setResult(results)
        setHeight("")
        setWeight("") 

    
        setpara(true)
             
    }

    return(

        <div> 
            
            <Header />
            
            <div className="calories-main-container">

            <   div className="columning">
                    <img src="https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80" alt="calci" className="calculator-img" />
            
                    <Link to="/dashboard">
                        <button className="button-55">
                        < BiArrowBack size={24} className='p-1 m-2' />
                        Back Home</button>
                    </Link>

            </div>

            <div className='calories-container'>

                <p className="calories-para">
                Older adults do better if they have a BMI between 25 and 27.
                 Research shows that adults over 65 who are underweight experience more health issues and shorter life expectancy.
                 A licensed nutritionist or a dietician can help you determine the best diet plan for your health.
                </p>
                <h1 className="result-heading">{result}</h1>
                
                {para && 
                <div >
                <p className="calories-para-2">If your BMI is less than 25 or more than 27, then please click on the below button
                    for booking an appointment with our doctor for consultation.
                </p>

                    <button className="button-55">Book now</button>
                </div>    
}


            </div>

            <div className="calories-form-container">
                <div>

                <h1 className="calories-header">BMI index calculator</h1>


                    <label htmlFor="age" className="age-label">Height (mts)</label>
                    <input id="age" className="form-control" type="number" value={height} onChange={heightInput} />
                </div>
                <div>
                    <label htmlFor="weight" className=" age-label weight-label"  >Weight (kgs)</label>
                    <input id="weight" className=" form-control" type="number" value={weight} onChange={weightInput} />
                </div>
                
                
                <button className="button-55" onClick={sum}>Calculate now</button>

            </div>

            <div>
                <img src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80" className="dog-img" alt="dog-img" />
            </div>
          

              </div>

              
        </div>
    )
}
export  default CaloriesCalculator