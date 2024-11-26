import React, { useState } from 'react';
import './Banner.css';
import examimg from '../Asset/exam4.png';

function Banner() {
  const [examnames, setExamnames] = useState([]);

  const examdata = [ 
    { examname: 'RAILWAYS' },
    { examname: 'TNPSC' },
    { examname: 'BANKING' },
    { examname: 'UPSC' },
    { examname: 'RAILWAYS' },
    { examname: 'TNPSC' },
    { examname: 'JEE MAIN' },
    { examname: 'UPSC' },
  ];

  return (
    <div className='bannerpage'>
    <div className="container m-0" id="sapbanner">
      <div className="row py-5">
        {examdata.map((e, index) => (
          <div className="col-sm-12 col-md-3" key={index}>
            <div className="exampart d-flex justify-content-center align-items-center">
              <div className="exampart1 d-flex justify-content-center align-items-center">
                <img src={examimg} alt={e.examname} />
              </div>
            </div>
            <p className="text-center py-2 examnames">{e.examname}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Banner;
