import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4'>
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='' href="/dashboard">
        <p className='px-4 py-2 rounded-xl border border-black/20 hover:border-black/60 transition-all duration-500'>Return Home</p>
      </Link>
    </div>
  );
}