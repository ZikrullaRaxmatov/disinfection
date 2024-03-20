import React from 'react';
import virusImg from '../assets/virus.jpg'
import insectImg from '../assets/dis-hashorot.png'
import mouseImg from '../assets/dis-mouse.jpg'

import kalpa from '../assets/kalpalar.jpg'
import tarakan from '../assets/tarakanlar.jpg'
import chayon from '../assets/chayonlar.jpg'
import sichqon from '../assets/kalamushlar.jpg'
import burga from '../assets/burgalar.jpg'
import pest from '../assets/pestControl.jpg'


function Services() {
    return (
        <div className='container'>
            {/* Services */}
            <div className='row mt-5'>
                <h1 id='services'>Services</h1>
                <hr />
                <h5>We provide you with efficient and guaranteed service.</h5>
            </div>
            <div className='row border border-success rounded-pill mt-3'>
                <div className='col-3'>
                    <img src={virusImg} alt='virus' className='w-100 rounded-pill' />
                </div>
                <div className='col-9 '>
                    <h2 className='mt-5'>Disinfection is the destruction of harmful microorganisms</h2>
                    <p>The main task of any disinfection is to destroy dangerous microorganisms that can cause infections and diseases. Disinfection measures clean the space from mold, virus, mildew and bacteria. The process cleans the environment of pathogenic organisms. If you feel bad, you may feel tired or weak for no reason.</p>
                </div>
            </div>
            <div className='row border border-success rounded-pill mt-3'>
                <div className='col-3'>
                    <img src={insectImg} alt='virus' className='w-100 rounded-pill' />
                </div>
                <div className='col-9 '>
                    <h2 className='mt-5'>Disinsection is the destruction of insects</h2>
                    <p>Many people first come across the word 'disinfestation' when they are looking for a way to get rid of their unwanted neighbors - bed bugs, cockroaches, ants and other insects. They themselves are harmless, and they are also known carriers of infection. Disinsection is the destruction of insects: mosquitoes, flies, bedbugs, cockroaches, moths, ticks, bark beetles, wood lice and other crawling and flying creatures.</p>
                </div>
            </div>
            <div className='row border border-success rounded-pill mt-3'>
                <div className='col-3'>
                    <img src={mouseImg} alt='virus' className='w-100 rounded-pill' />
                </div>
                <div className='col-9 '>
                    <h2 className='mt-5'>Deratization is the destruction of rodents.</h2>
                    <p>Deratization in Ferghana is a complex set of measures aimed at eliminating rodents. It is known that rodents are very hardy creatures that can withstand various dangerous effects. Therefore, a number of methods should be used to eliminate them. Deratization is carried out in places where rodents appear in Ferghana: apartment buildings, warehouses, shops, catering establishments.</p>
                </div>
            </div>

            {/* Type of services */}
            <div className='row mt-5'>
                <h1>Service types</h1>
            </div>
            <div className='row mt-4'>
                <div className='col-6'>
                    <div class="card shadow text-center">
                        <div class="card-header">
                            VALVES
                        </div>
                        <div class="card-body">
                            <img src={kalpa} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p class="card-text">They live in beds, upholstered furniture, textiles, under door frames and window frames. They feed on the blood of humans and warm-blooded animals...</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} class="btn">Contact</a>
                        </div>
                        <div class="card-footer text-body-secondary">
                            A number of contact 23 times
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div class="card shadow text-center">
                        <div class="card-header">
                            COCKROACHES
                        </div>
                        <div class="card-body">
                            <img src={tarakan} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p class="card-text">They carry pathogens. They live in crevices, under the floorboards, behind furniture, under the bathroom, under cabinets, etc. They feed on food, household waste, leather goods and paper.</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} class="btn">Contact</a>
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
                            SCORPION
                        </div>
                        <div class="card-body">
                            <img src={chayon} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p class="card-text">Heat-loving creatures that feed on insects and arachnids. They can live in barns and houses, but most often they are found in wooden buildings ...</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} class="btn">Contact</a>
                        </div>
                        <div class="card-footer text-body-secondary">
                            A number of contact 23 times
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="card shadow text-center">
                        <div className="card-header">
                            RODENTS
                        </div>
                        <div className="card-body">
                            <img src={sichqon} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p className="card-text">The most common are rats and mice. They carry pathogens, work on all surfaces, create passages in walls and ceilings, reduce the reliability of the structure. They feed on food and household waste...</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} class="btn">Contact</a>
                        </div>
                        <div class="card-footer text-body-secondary">
                            A number of contact 23 times
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-6'>
                    <div className="card shadow text-center">
                        <div className="card-header">
                            FLEAS
                        </div>
                        <div className="card-body">
                            <img src={burga} alt='kalpa' className='w-25 border border-success rounded-pill' />
                            <p class="card-text">They enter the body of pets and migrate from neighbors. They live in upholstered furniture, beds, carpets, soft toys, under mattresses and in window and door frames. They feed on the blood of humans and animals. They cause diseases...</p>
                            <a href="#contact" style={{ backgroundColor: "#5cad00", color: "white" }} class="btn">Contact</a>
                        </div>
                        <div className="card-footer text-body-secondary">
                            A number of contact 23 times
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate */}
            <div className='row mt-5 border border-success rounded'>
                <div className='col-7 d-flex justify-content-center align-items-center p-3'>
                    <img src={pest} alt='certificate' className=' w-75 rounded ' />
                </div>
                <div className='col-5 text-center'>
                    <i className="fa-solid fa-file-shield fa-2xl mt-5" style={{ color: "#0cad00" }}></i>
                    <h1>
                        Official warranty - 1 year. We provide services to individuals and legal entities. Services are licensed!!!
                    </h1>
                    <a href='#contact' style={{ backgroundColor: "#5cad00", color: "white" }} className='btn mt-2'>Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Services;