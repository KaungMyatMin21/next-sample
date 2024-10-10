// /app/page.js
'use client'; // This makes the component a Client Component

import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'World'; // Get 'name' from query params or default to "World"

  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  );
}
