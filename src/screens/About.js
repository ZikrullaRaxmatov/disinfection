import React from 'react';
import aboutImg from '../assets/dis-1.jpg'

function About() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>About</h1>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <i class="fa-solid fa-bolt fa-2xl" style={{ color: "#0cad00" }}></i>
                    <h3>Tezda xizmat ko'rsatish</h3>
                    <p>АРИЗАЛАР КУНИГА 24 СОАТ ҚАБУЛ ҚИЛИНАДИ. АГАР МУАММО ШОШИЛИНЧ БЎЛСА, БИЗ ДАРҲОЛ КЕТИШИМИЗ МУМКИН. ШУ БИЛАН БИРГА, СИФАТ МУКАММАЛ БЎЛИБ ҚОЛАДИ.</p>
                </div>
                <div className='col-4'>
                    <i class="fa-solid fa-medal fa-2xl" style={{ color: "#0cad00" }}></i>
                    <h3>Yetuk mutaxasislarimiz</h3>
                    <p>БИЗНИНГ ХОДИМЛАРИМИЗ ҲАММА НАРСАГА ҒАМХЎРЛИК ҚИЛАДИ: ҲИСОБ-КИТОБЛАР, ХОНАНИ ТАЙЁРЛАШ, ҚАЙТА ИШЛАШ, ЯКУНИЙ ТОЗАЛАШ, ВЕНТИЛЯТСИЯ ВА НАЗОРАТ ТЕКШИРУВИ.</p>
                </div>
                <div className='col-4'>
                    <i class="fa-solid fa-handshake fa-2xl" style={{ color: "#0cad00" }}></i>
                    <h3>Sizga maqul vaqtda</h3>
                    <p>СИЗ ЎЗИНГИЗ УЧУН МАҚУЛ ВА ҚУЛАЙ ВАҚТНИ ТАНЛАНГ ВА БИЗГА МУРОЖАТ ҚИЛИНГ. СИЗГА КАФОЛАТЛАНГАН ВА САМАРАЛИ НАТИЖАНИ ОЛИБ БОРАМИЗ</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <img src={aboutImg} alt='about' className='w-100' />
                    <h2>Kaplya va zararli hashorotlar endi yo'q deb hisoblang!!!</h2>
                    <h6>Бизнинг кўп йиллардан бери ўз фаолиятини олиб келаётган компаниямиз. Мижозларимиз биздан мамнун</h6>
                    <a href='#!' >Contact</a>
                </div>
            </div>
        </div>
    );
}

export default About;