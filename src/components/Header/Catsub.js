import React from 'react';
import './dropdown.css'

const Catsub = ({ cat, subcat }) => {
    return (
        <div className='brick-bolte'>
            <div className='brickopp'>
                <h6 className='brick-bolte1'>{cat}</h6>
                {
                    subcat && subcat.map((r, l) =>
                        <p key={l}>{r}</p>
                    )
                }
            </div>
        </div>
    );
};

export default Catsub;