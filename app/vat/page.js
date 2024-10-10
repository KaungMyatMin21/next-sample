// /app/vat/page.js

'use client'; // To use hooks in Next.js, ensure you're in a client component

import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function VATPage() {
  const { register, handleSubmit } = useForm();
  const [vatResult, setVatResult] = useState(null);

  // Get the VAT rate from the environment variable
  const vatRate = parseFloat(process.env.NEXT_PUBLIC_VAT_RATE);

  const calculateVAT = (data) => {
    if (!vatRate) {
      alert('VAT rate is not defined in the environment variables.');
      return;
    }

    const amount = parseFloat(data.amount);
    const vat = amount * vatRate; // Use dynamic VAT rate from the environment variable
    setVatResult(vat);
  };

  return (
    <div>
      <h1>Calculate VAT</h1>
      <form onSubmit={handleSubmit(calculateVAT)}>
        <div>
          <label>Amount: </label>
          <input type="number" {...register('amount')} required />
        </div>
        <button type="submit">Calculate VAT</button>
      </form>

      {vatResult !== null && (
        <div>
          <h2>VAT Amount: {vatResult}</h2>
        </div>
      )}
    </div>
  );
}
