export async function payWithPaystack(email, amount) {
  // Use sandbox mode first
  alert(`Paystack sandbox payment: ${amount} for ${email}`);
  return true;
}
