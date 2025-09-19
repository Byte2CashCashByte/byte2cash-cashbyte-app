import Link from 'next/link';
import DataList from '../components/DataList';
export default function Home() {
  return (
    <div>
      <h1>Byte2Cash CashByte Dashboard</h1>
      <Link href="/login">Login</Link> | <Link href="/signup">Signup</Link>
      <DataList />
    </div>
  );
}
