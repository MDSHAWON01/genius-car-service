import React from 'react';
import expert1 from '../../../image/download (1).jpg'
import expert2 from '../../../image/download.jpg'
import expert3 from '../../../image/download (1).jpg'
import expert4 from '../../../image/download (2).jpg'
import expert5 from '../../../image/download (3).jpg'
import expert6 from '../../../image/download (4).jpg'
import Expert from '../Expert/Expert';
import './Experts.css'

const experts = [
    { id: 1, name: 'John', img: expert1 },
    { id: 2, name: 'Abir', img: expert2 },
    { id: 3, name: 'Doe', img: expert3 },
    { id: 4, name: 'Maiky', img: expert4 },
    { id: 5, name: 'Paul', img: expert5 },
    { id: 6, name: 'Broke', img: expert6 }
]

const Experts = () => {
    return (
        <div id="experts" >
            <h2 className="text-primary text-center">Our Experts</h2>
            <div className="containers">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;