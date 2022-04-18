import React from 'react';
import SingleService from './SingleService/SingleService';
import service1 from '../../../images/service/service1.png.png'
import service2 from '../../../images/service/service2.png.png'
import service3 from '../../../images/service/service2.png.png'


const Services =[
{id:1, img:service1,name:'Low quality photo', price:2,describe:'This Service is low qualatiy photo shot, per photo price$2'},
{id:2, img:service3,  name:'mediem quality photo', price:3,describe:'This Service is mediem qualatiy photo shot, per photo price$3'},
{id:3, img:service2,name:'high quality photo', price:4,describe:'This Service is high qualatiy photo shot, per photo price$5'},
]

const Service = () => {
    return (
        <div id='service' className=' container'>
        <h1 className='text-primary text-center  mt-5'>Service</h1>
    <div className='row'>
    {
          Services.map(service=> <SingleService  key={service.id} service={service}></SingleService>)

       }
    </div>
   
        </div>
    );
};

export default Service;