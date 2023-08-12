import Header from "../Header"

import './index.css'

import { Link } from "react-router-dom"

const Dietplan1 = () => {
    return(
        <div >

            <Header />
            <div className="dietplan1-container">

                <div className="columning">
                <h1 className="dietplan-heading">Healthy Meal Planning: Tips for Older Adults</h1>
                <p className="dietplan1-para">Eating healthfully and having an active lifestyle can support healthy aging.
                    Use the resources below to learn about different patterns of healthy eating
                     and ways to create a nutritious meal plan.</p>

                <h1 className="dietplan-heading2">
                Older adults' unique nutrition needs

                </h1>
                

                <img src="https://www.nia.nih.gov/sites/default/files/2023-01/choose-healthier-foods-nia_link_325px_0.png" className="dietplan1-img" alt="dietplan1-img" />

                

                <ul className="dietlist1-container">
                    <li className="diet1-list">Plan in advance: Meal planning takes the guesswork out of eating and can help ensure you eat a variety of nutritious foods throughout the day.</li>
                    <li className="diet1-list">Find budget-friendly foods. Create a shopping list in advance to help stick to a budget and follow these SNAP-friendly recipes</li>
                    <li className="diet1-list">
                    Consider preparation time. Some meals can be made in as little as five minutes. If you love cooking,
                     or if you’re preparing a meal with or for friends or family,
                    you may want to try something a little more challenging.</li>
                    <li className="diet1-list">
                    Keep calories in mind. The number of calories people need each day varies by individual.
                    Always discuss your weight and fitness goals with your health care provider before making big changes.
                    Read about calorie goals and healthy food swaps.</li>

                </ul>
                <h3 className="sample-menus">Sample menus</h3>
                <table>
                    <tr>
                        <th>Breakfast</th>
                        <th>Lunch</th>
                    </tr>
                    <tr>
                        <td>Smoothie with spinach, fruit, and yogurt</td>
                        <td>Chicken, tomato, avocado sandwich on whole-grain bread</td>
                    </tr>
                    <tr>
                        <td>
                        Vegetable omelet with whole-grain toast
                        </td>
                        <td>Quinoa with stir-fried vegetables</td>
                    </tr>
                    <tr>
                        <td>Avocado breakfast bruschetta</td>
                        <td>Apple coleslaw</td>
                    </tr>
                </table>

                <Link to="/dashboard">
                    <button className='button-55'>Back home</button>
                    </Link>

                </div>

                

            </div>
            
        
        
        </div>
    )
}

export default Dietplan1