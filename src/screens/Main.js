import React from 'react';
import imgMain from '../assets/dis-hashorot.png'
function Main() {
    return (
        <div className='container' >
            <div className='row'>
                <div className='col-6'>
                    <h1>Dizinfeksiya xizmati</h1>
                    <p>Биз Тошкентда 10 йилдан бери профессионал дезинфексия ишларини олиб борамиз, шунинг учун биринчи марта зараркунандалардан қандай қутулишни биламиз.</p>
                    <a href="#!" >Contact</a>
                </div>
                <div className='col-6'>
                    <img src={imgMain} alt='mainImage' className='w-50' />
                </div>
            </div>
        </div>
    );
}

export default Main;