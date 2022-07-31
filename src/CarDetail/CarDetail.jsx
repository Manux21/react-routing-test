import React from 'react';
import {useParams} from 'react-router-dom'

const CarDetail = () => {
  const {carname} = useParams()

  return (
    <div style={{textAlign: 'center'}}>
      <h2>{carname}</h2>
    </div>
  );
};

export default CarDetail;