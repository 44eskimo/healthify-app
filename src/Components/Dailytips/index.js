import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const DailyTips = () => {
    return(
        <div>
            <Header />
            
        
        <div className="tips-container">
            <h1>Blood pressure check</h1>
            <p>
            One in every three adults has elevated blood pressureTrusted Source, which is known as hypertension.
             According to the Centers for Disease Control and Prevention (CDC)Trusted Source,
              64 percent of men and 69 percent of women between the ages of 65 and 74 have high blood pressure.

            Hypertension is often called a “silent killer” because symptoms may not show up until it’s too late.
             It increases your risk for stroke or heart attack.
              This is why it’s essential to have your blood pressure checked at least once a year.
            </p>
        

        
            <h1>Blood tests for lipids</h1>

            <p>
            Healthy cholesterol and triglyceride levels decrease your risk of a heart attack or stroke.
             If test results show high levels of either, your doctor at <span className='dailytips-para1'> Healthify</span> may recommend an improved diet, lifestyle changes, or medications to reduce them.
            </p>

            <h1>Vaccinations</h1>

            <p>
            Get a tetanus booster every 10 years. And the CDCTrusted Source recommends a yearly flu shot for everyone,
            especially for those who are chronically ill.

            At age 65, ask your doctor about a pneumococcal vaccine to protect against pneumonia and other infections.
            Pneumococcal disease can result in a number of health issues,
             including:
            </p>
            <ul>
                <li className='tips-lists'>Pneumonia</li>
                <li className='tips-lists'>meningitis</li>
                <li className='tips-lists'>sinusitis</li>
                <li className='tips-lists'>endocarditis</li>
                <li className='tips-lists'>pericarditis</li>
                <li className='tips-lists'>inner ear infections</li>
            </ul>
            <p className='tips-heading'>
            Everyone over age 60 also should be vaccinated against shingles.
            </p>

            <h1 className='tips-heading'>Eye Exam</h1>

            <p>
            The American Academy of Ophthalmology suggests adults get a baseline screening at age 40.
             Your eye doctor will then decide when follow-ups are needed.
              This may mean annual vision screenings if you wear contacts or glasses, and every other year if you don’t.
            Age also increases the chances for eye diseases like glaucoma or cataracts and new or worsening vision problems.
            </p>

            <h1>
            Periodontal exam
            </h1>

            <p>
            Oral health becomes more important as you age.
            Many older Americans also may take medications that can have a negative effect on dental health.
             These medications include:
            </p>
            <ul>
                <li className='tips-lists'>antihistamines</li>
                <li className='tips-lists'>diuretics</li>
                <li className='tips-lists'>antidepressants</li>
            </ul>
            
            <h1 className='tips-heading'>Hearing test</h1>

            <p className='tips-para'>
            Hearing loss is often a natural part of aging.
            Sometimes it can be caused by an infection or other medical condition.
            Every two to three years you should get an audiogram.

            An audiogram checks your hearing at a variety of pitches and intensity levels.
            Most hearing loss is treatable, although treatment options depend on the cause and seriousness of your hearing loss.
            </p>

            <h1>Bone density scan</h1>

            <p >
            According to the International Osteoporosis Foundation, 
            75 million people are affected by osteoporosis in Japan, Europe, and the United States.
            Both women and men are at risk for this condition, however women are affected more often.

            A bone density scan measures bone mass, which is a key indicator of bone strength.
             Regular bone scans are recommended after age 65, especially for women.
            </p>

            <h1>
            Vitamin D test
            </h1>

            <p>
            Many Americans are deficient in Vitamin D. This vitamin helps protect your bones.
             It may also defend against heart disease, diabetes, and some cancers.

            You may need this test performed annually.
            As you get older your body has a harder time synthesizing vitamin D.
            </p>

            <h1>Keep up with routine check-ups</h1>

            <p>
            Simply being aware of your personal fall risk can go a long way toward fall prevention. This can be done in collaboration with your healthcare team.

                Your primary care physician, for example, can discuss any chronic conditions you have,
                like diabetes or heart disease, that might increase fall risk.
                They can also let you know whether medications you take regularly might cause dizziness, lightheadedness, or muscle weakness.
            </p>

            <h1>Improving sleep hygiene</h1>

            <p>
                Poor sleep is linkedTrusted Source to an increased fall risk across many different groups of people.
                It can cause attention problems, daytime sleepiness, and poor balance,
                 all of which can increase your chances of falling.

                Finding the right key to unlock a good night’s sleep isn’t easy,  but some important habits can help.
            
                Known together as the term “sleep hygiene,” these habits include:
            </p>    
            <ul className='sleep-list'>
                <li className='tips-lists'>limiting screen time or blue light exposure before bed </li>
                <li className='tips-lists'>going to bed and waking up around the same time each day</li>
                <li className='tips-lists'>maintaining a dark, cool environment in your bedroom</li>
                <li className='tips-lists'>sticking to a pre-sleep routine</li>
                <li className='tips-lists'>skipping caffeine, large meals, and alcohol before bed</li>
                <li className='tips-lists'>exercising regularly, even if it’s just a daily walk around the block</li>
                <li className='tips-lists'>limiting daytime napping</li>
                <li className='tips-lists'>going to bed only if you’re tired</li>
            </ul>    
            
            <h1>
                The Bottom Line
            </h1>

            <p>
            Fall risk increases as you age, but that doesn’t mean falls have to be a certainty.

            Fall prevention tips — like improving lighting, keeping your hands free, and exercising regularly
             — can be all it takes to help reduce the chances that a fall will affect your comfort, independence, or wallet.
            </p>
            <Link to="/dashboard">
            <button className='button-55'>Go Back</button>

            </Link>
        </div>
        
        </div>
    )
}
export default DailyTips