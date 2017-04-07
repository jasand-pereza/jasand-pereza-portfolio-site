import React from 'react';

let Hamburger = () => {
    return (
        <div onClick={(e) => { $('.hamburger').toggleClass('is-active'); $('#header-main').toggleClass('overlay-exposed') }} className="hamburger hamburger--collapse js-hamburger digesting">
            <div className="hamburger-box">
                <div className="hamburger-inner"></div>
            </div>
        </div>
    );
}
export default Hamburger;
