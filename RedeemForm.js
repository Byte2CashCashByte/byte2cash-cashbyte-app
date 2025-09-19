import React from 'react';
import axios from 'axios';

export default function RedeemForm({ data }) {
  const handleRedeem = async () => {
    alert(`You are redeeming ${data.gb} GB / ${data.mb} MB`);
    // Here you will call Paystack sandbox API
    // axios.post('/api/paystack', { amount: data.price });
  };

  return (
    <button onClick={handleRedeem}>Redeem</button>
  );
}
