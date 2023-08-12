import Header  from '../Header'
import {Link} from 'react-router-dom'

import arrow from './arrow.png'

import {BiArrowBack} from 'react-icons/bi'



import './index.css'

const Tests = () => {
    return(
        
        <div className='tests-main-container'>
            <Header />
            <div className='tests-container'>

                <Link to="/dashboard">
                <button className='tests-back-button button-55'>
                < BiArrowBack size={18} className='m-2' />
                    Back
                </button>
                </Link>


                <div className='cbc-container'>
                    <p className='tests-container-para'>The CBC test identifies and counts the 7 types of cells found in the blood,
                        red blood cell, neutrophil, eosinophil, basophil, lymphocyte, monocyte, and platelet.
                        Sickle cell anemia is an inherited blood disease in which the red blood cells produce
                        abnormal pigment (hemoglobin).</p>
                <button className='button-55'>Book CBC test</button>

                </div>

                <div className='diabetes-container'>
                    <p className='tests-container-para' >This measures your blood sugar at the time you're tested.
                     You'll drink a liquid that contains glucose, and then 1 hour later your blood will be drawn to check your blood sugar level.
                     A normal result is 140 mg/dL or lower.</p>
                <button className='button-55 button-para-2'>Book Diabetes test</button>

                </div>

                <div className='lungs-container'>
                    <p className='tests-container-para-3' >An X-ray image of your lungs may reveal an abnormal mass or nodule.
                     A CT scan can reveal small lesions in your lungs that might not be detected on an X-ray. Sputum cytology.
                     If you have a cough and are producing sputum,
                     looking at the sputum under the microscope can sometimes reveal the presence of lung cancer cells</p>
                <button className='button-55'>Book Lung cancer test</button>

                </div>

                <div className='breast-container'>
                    <p className='tests-container-para' >Mammogram. A mammogram is an X-ray of the breast.
                     Mammograms are commonly used to screen for breast cancer.
                     If an abnormality is detected on a screening mammogram,
                      your doctor may recommend a diagnostic mammogram to further evaluate that abnormality.</p>
                      <button className='button-55'>Book Breast cancer test</button>


                </div>

                <div className='colorectal-container'>
                    <p className='tests-container2-para'>The tests used to screen for colorectal cancer are described below.
                     Colonoscopy. A colonoscopy allows the doctor to look inside the entire rectum and colon while a patient is sedated.
                      A flexible, lighted tube called a colonoscope is inserted into the rectum and the entire colon to look for polyps or cancer.</p>
                <button className='button-55' >Book Colorectal cancer test</button>

                </div>

                <div className='osteoporosis-container'>
                    <p className='tests-container2-para'>A bone density scan, also known as a DEXA scan,
                     is a type of low-dose x-ray test that measures calcium and other minerals in your bones.
                      The measurement helps show the strength and thickness (known as bone density or mass) of your bones. 
                      Most people's bones become thinner as they get older.</p>
                      <button className='button-55' >Book Osteoporosis test</button>


                </div>

                <div className='annual-container'>
                    <p className='tests-container2-para'>
                    In addition to the aforementioned screenings,
                     getting a physical exam each year is important for overall health as well.
                     During the annual exam, a health care provider will ask about: 
                    </p>
                      
                    <button className='button-55 annual-button ' >
                  
                        Book Annual test</button> 

                </div>

                
                    
                    


                <div>
                    <img src={arrow} className='arrow-img' alt='arrow-img'  />
                </div>

                <div className='annual-tests-container'> 
                        <h3>Annual tests below:</h3>
                    <ul>
                        <li className='items'>Prescription regulation</li>
                        <li className='items'>Alcohol & tobacco usage</li>
                        <li className='items'>Diet & Exercise</li>
                        <li className='items'>Mental health issues</li>
                        <li className='items'>Sleep regulation</li>
                        <li className='items'>Fall prevention</li>
                        <li className='items'> Balance issues</li>
                    </ul>

                </div>



            </div>


            

            

            
        </div>
        
    )
}
export default Tests