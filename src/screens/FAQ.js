import React from 'react';

function FAQ() {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <h1 id='faqs' >FAQs</h1>
                <hr />
            </div>
            <div className='row'>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                How is pest control done?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">With the help of special equipment, insecticides become an aerosol mist and penetrate into the smallest gaps between wallpaper, walls and floorboards, potential 'hiding places' for invisible insects.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Are the drugs you use dangerous?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Medicines are not dangerous for people, pets and plants. But after treatment, the room should be ventilated for 40 minutes.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Do I need some way to prepare my home for treatment?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Basically, you need to isolate dishes and personal hygiene products. Pets should also be isolated during treatment. No need to move furniture or appliances.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;