import React from 'react';
import SingleService from './SingleService/SingleService';



const Services =[
{id:1,name:'Low quality photo', price:2,describe:'This Service is low qualatiy photo shot, per photo price$2'},
{id:1,name:'Low quality photo', price:2,describe:'This Service is mediem qualatiy photo shot, per photo price$3'},
{id:1,name:'Low quality photo', price:2,describe:'This Service is high qualatiy photo shot, per photo price$5'},

]

const Service = () => {
    return (
        <div>
        <h1>Service</h1>
       {
          Services.map(service=> <SingleService  key={service.id} service={service}></SingleService>)

       }
        </div>
    );
};

export default Service;