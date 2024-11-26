import React from 'react';
import "./Mytest.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Mytest() {
  return (
    <div className='container'>
      {/* Test Part 1 */}
      <div className='testpart my-3 p-2 rounded-3 d-flex justify-content-between align-items-center'>
        <span className='px-3 d-flex align-items-center'>
          
          SBI Part
        </span>
        <FontAwesomeIcon icon={faAngleRight} className='px-3' />
      </div>

      {/* Test Part 2 */}
      <div className='testpart my-3 p-2 rounded-3 d-flex justify-content-between align-items-center'>
        <span className='px-3 d-flex align-items-center'>
          
          SBI Part
        </span>
        <FontAwesomeIcon icon={faAngleRight} className='px-3' />
      </div>

      {/* Test Part 3 */}
      <div className='testpart my-3 p-2 rounded-3 d-flex justify-content-between align-items-center'>
        <span className='px-3 d-flex align-items-center'>
         
          SBI Part
        </span>
        <FontAwesomeIcon icon={faAngleRight} className='px-3' />
      </div>
    </div>
  );
}

export default Mytest;
