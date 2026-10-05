import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
      <h2>Product Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='px-4 py-2 rounded-xl border border-white/50 hover:border-white/80 transition-all duration-500' href="/">Return Home</Link>
    </div>
  );
}