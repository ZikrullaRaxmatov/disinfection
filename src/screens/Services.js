import React from 'react';
import virusImg from '../assets/dis-hashorot.png'
// import insectImg from '../assets/dis-hashorot.png'
import mouseImg from '../assets/dis-mouse.jpg'

function Services() {
    return (
        <div className='container'>
            {/* Services */}
            <div className='row'>
                <h1>Xizmatlar</h1>
                <h5>Биз сизга самарали ва кафолатли хизмат тақдим етамиз.</h5>
            </div>
            <div className='row border border-success rounded-pill mt-3'>
                <div className='col-3'>
                    <img src={mouseImg} alt='virus' className='w-100 rounded-pill' />
                </div>
                <div className='col-9 '>
                    <h2 className='mt-5'>Dezinfeksiya - zararli mikroorganizmlarni yo'q qilish</h2>
                    <p>Ҳар қандай дезинфексиянинг асосий вазифаси инфексиялар ва касалликларга олиб келиши мумкин бўлган хавфли микроорганизмларни йўқ қилишдир. Дезинфексия чоралари бўш жойни моғор, вирус, чириётган ва бактериялардан тозалайди. Жараён атроф-муҳитни патоген организмлардан тозалайди.Агар ўзингизни ёмон ҳис қилсангиз, чарчоқ ёки сабабсиз заифлашсангиз керак.</p>
                </div>
            </div>
            <div className='row border border-success rounded-pill mt-3'>
                <div className='col-3'>
                    <img src={virusImg} alt='virus' className='w-100 rounded-pill' />
                </div>
                <div className='col-9 '>
                    <h2 className='mt-5'>Dezinfeksiya - zararli mikroorganizmlarni yo'q qilish</h2>
                    <p>Ҳар қандай дезинфексиянинг асосий вазифаси инфексиялар ва касалликларга олиб келиши мумкин бўлган хавфли микроорганизмларни йўқ қилишдир. Дезинфексия чоралари бўш жойни моғор, вирус, чириётган ва бактериялардан тозалайди. Жараён атроф-муҳитни патоген организмлардан тозалайди.Агар ўзингизни ёмон ҳис қилсангиз, чарчоқ ёки сабабсиз заифлашсангиз керак.</p>
                </div>
            </div>
            <div className='row border border-success rounded-pill mt-3'>
                <div className='col-3'>
                    <img src={mouseImg} alt='virus' className='w-100 rounded-pill' />
                </div>
                <div className='col-9 '>
                    <h2 className='mt-5'>Dezinfeksiya - zararli mikroorganizmlarni yo'q qilish</h2>
                    <p>Ҳар қандай дезинфексиянинг асосий вазифаси инфексиялар ва касалликларга олиб келиши мумкин бўлган хавфли микроорганизмларни йўқ қилишдир. Дезинфексия чоралари бўш жойни моғор, вирус, чириётган ва бактериялардан тозалайди. Жараён атроф-муҳитни патоген организмлардан тозалайди.Агар ўзингизни ёмон ҳис қилсангиз, чарчоқ ёки сабабсиз заифлашсангиз керак.</p>
                </div>
            </div>

            {/* Type of services */}
            <div className='row mt-5'>
                <h1>Xizmat turlari</h1>
            </div>
            <div className='row mt-4'>
                <div className='col-6'>
                    <div class="card shadow text-center">
                        <div class="card-header">
                            КЛАПАЛАР
                        </div>
                        <div class="card-body">
                            <img src={virusImg} alt='kalpa' className='w-25 border border-danger rounded-pill' />
                            <p class="card-text">Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик ноқулайликни қўзғатинг...</p>
                            <a href="#!" class="btn btn-primary">Contact</a>
                        </div>
                        <div class="card-footer text-body-secondary">
                            A number of contact 23 times
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div class="card shadow text-center">
                        <div class="card-header">
                            КЛАПАЛАР
                        </div>
                        <div class="card-body">
                            <img src={virusImg} alt='kalpa' className='w-25 border border-danger rounded-pill' />
                            <p class="card-text">Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик ноқулайликни қўзғатинг...</p>
                            <a href="#!" class="btn btn-primary">Contact</a>
                        </div>
                        <div class="card-footer text-body-secondary">
                            A number of contact 23 times
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-6'>
                    <div class="card shadow text-center">
                        <div class="card-header">
                            КЛАПАЛАР
                        </div>
                        <div class="card-body">
                            <img src={virusImg} alt='kalpa' className='w-25 border border-danger rounded-pill' />
                            <p class="card-text">Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик ноқулайликни қўзғатинг...</p>
                            <a href="#!" class="btn btn-primary">Contact</a>
                        </div>
                        <div class="card-footer text-body-secondary">
                            A number of contact 23 times
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div class="card shadow text-center">
                        <div class="card-header">
                            КЛАПАЛАР
                        </div>
                        <div class="card-body">
                            <img src={virusImg} alt='kalpa' className='w-25 border border-danger rounded-pill' />
                            <p class="card-text">Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик ноқулайликни қўзғатинг...</p>
                            <a href="#!" class="btn btn-primary">Contact</a>
                        </div>
                        <div class="card-footer text-body-secondary">
                            A number of contact 23 times
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-6'>
                    <div class="card shadow text-center">
                        <div class="card-header">
                            КЛАПАЛАР
                        </div>
                        <div class="card-body">
                            <img src={virusImg} alt='kalpa' className='w-25 border border-danger rounded-pill' />
                            <p class="card-text">Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик ноқулайликни қўзғатинг...</p>
                            <a href="#!" class="btn btn-primary">Contact</a>
                        </div>
                        <div class="card-footer text-body-secondary">
                            A number of contact 23 times
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate */}
            <div className='row mt-5 border border-success rounded bg-success'>
                <div className='col-7 d-flex justify-content-center align-items-center'>
                    <img src={virusImg} alt='certificate' className=' w-50' />
                </div>
                <div className='col-5 '>
                    <i class="fa-solid fa-file-shield fa-2xl" style={{ color: "#0cad00" }}></i>
                    <h1>
                        Расмий кафолат - 1 йил. Биз жизмоний ва юридик шахсларга хизмат курсатамиз. Хизматлар лицензияланган!!!
                    </h1>
                    <a href='#!' >Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Services;