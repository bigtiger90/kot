'use client'
import Image from 'next/image'
import Hero from './hero'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
    </main>
  )
}
