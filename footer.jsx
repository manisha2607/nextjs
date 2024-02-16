import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer bg'>
      <h4 className='text-center'>All Right Reserved &copy; Manisha</h4>
      <p className='text-center mt-3'>
        <Link href="/about">About</Link> |
        <Link href="/contact">contact</Link> |
        <Link href="/policy">Privacy Policy</Link>
      </p>

    </div>

  )
}

