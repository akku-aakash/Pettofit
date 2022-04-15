import React from 'react';
import './dropdown.css'
import Catsub from './Catsub'

const CategoryDropdown = () => {
    return (
        <div className='cat-dropdown-cont'>
            <div className='cat-drop-cont'>
                <div className='cat-drop-cont-div'>
                    <div>
                        <Catsub cat='SmartPhones' subcat={["SmartPhones under 10000", "SmartPhones under 15000", "SmartPhones under 20000", 'SmartPhones under 25000', 'SmartPhones under 40000']}/>
                    </div>
                    <div>
                        <Catsub cat='Laptops'/>
                    </div>
                </div>
                <div className='cat-drop-cont-div'>
                    <div>
                        <Catsub cat="Wearables"/>
                    </div>
                    <div>
                        <Catsub cat="Earphones" subcat={["Earphones under 1000", "Earphones under 1500", "Earphones under 2500", 'Earphones under 4000']}/>
                    </div>
                </div>
                <div className='cat-drop-cont-div'>
                    <div>
                        <Catsub cat="Gaming Smartphones"/>
                    </div>
                    <div>
                        <Catsub cat="Speakers" subcat={["Speakers under 1000", "Speakers under 1500", "Speakers under 2500"]}/>
                    </div>
                </div>
                <div className='cat-drop-cont-div'>
                    <div>
                        <Catsub cat="TVs & LED" subcat={["TVs & LED under 1000", "TVs & LED under 1500", "TVs & LED under 2500"]}/>
                    </div>
                    <div>
                        <Catsub cat="Controllers"/>
                    </div>
                </div>
                <div className='cat-drop-cont-div'>
                    <div>
                        <Catsub cat="Smart Home Device" subcat={["TVs & LED under 1000", "TVs & LED under 1500", "TVs & LED under 2500"]}/>
                    </div>
                    <div>
                        <Catsub cat="Air Conditioners" subcat={["TVs & LED under 1000", "TVs & LED under 1500", "TVs & LED under 2500"]}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDropdown;