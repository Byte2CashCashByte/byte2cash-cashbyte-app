import React, { useState } from 'react';
import RedeemForm from './RedeemForm';

export default function DataList() {
  const [dataList] = useState([
    { id: 1, gb: 1, mb: 1000, price: 1000 },
    { id: 2, gb: 5, mb: 5000, price: 5000 },
    { id: 3, gb: 10, mb: 10000, price: 10000 }
  ]);

  return (
    <div>
      <h2>Available Data to Redeem</h2>
      <ul>
        {dataList.map(item => (
          <li key={item.id}>
            {item.gb} GB / {item.mb} MB - ₦{item.price} 
            <RedeemForm data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
                      }
