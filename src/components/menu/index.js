import React from 'react';
import { MdBrightness4, MdBrightness5 } from 'react-icons/md';
import './style.scss';

const Menu = () => {
    const toggleTheme = (e) => {
        const theme = e.target.id;

        if (theme === 'dark-mode') {
            console.log('dark');
        } else if (theme === 'bright-mode') {
            console.log('bright');
        }
    };

    return (
        <nav>
            <div className='wrapper'>
                <h1>Where in the world?</h1>

                <div className='toggle-theme'>
                    <button id='dark-mode' className='button-theme' onClick={toggleTheme}>
                        <MdBrightness4 />
                        <p>Dark mode</p>
                    </button>

                    <button id='bright-mode' className='button-theme' onClick={toggleTheme}>
                        <MdBrightness5 />
                        <p>Bright mode</p>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
