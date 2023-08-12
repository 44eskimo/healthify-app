
import Header from '../Header'
import './index.css'

import { Link } from 'react-router-dom'

const Dietplan2 = () => {
    return(
        <div>
            <Header />
            <div className='dietcontainer-2'>

                <div className='diet-subcontainer'>
                <h1 className='dietplan2-heading'>Diet for  people above the age of 70</h1>
                <h3>List of best Fruits</h3>

                <ul className='dietplan2-list1'>

                <li>Papaya</li>
                <li>Strawberries</li>
                <li>Mangoes</li>
                <li>Peaches</li>
                <li>Raspberries</li>

                </ul>

                <h3>List of Best Vegetables</h3>

                
                <ul className='dietplan2-list1'>

                <li>Sweet Potatoes</li>
                <li>Tomatoes</li>
                <li>Brocolli</li>
                <li>Beats</li>
                <li>Carrots</li>

                </ul>

                <h3>List of Best Dairy Products & Nuts</h3>

                
                <ul className='dietplan2-list1'>

                <li>Low Fat Milk</li>
                <li>Walnuts</li>
                <li>Low-fat Yogurt</li>
                <li>Almond</li>
                <li>Low-fat Cheese</li>

                </ul>

                <h3>Go for Healthier Convenience Food</h3>
                
                <ul className='dietplan2-list1'>
                <li>Instant Oat-meal</li>
                <li>Low-sodium canned vegetables</li>
                <li>Baked beans and bean mixes</li>
                <li>Canned meat and fish</li>
                <li>Frozen unsweetened fruit or low-sugar canned fruit</li>
                </ul>

                <Link to="/dashboard">
                    <button className='button-55'>Back home</button>
                </Link>

                </div>

                

            </div>
            
        </div>
    )
}
export default Dietplan2