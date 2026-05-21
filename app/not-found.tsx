import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-accent-violet mb-4">404</p>
      <h1 className="font-display text-4xl font-bold text-white mb-4">Page not found</h1>
      <p className="text-muted mb-8">The page you are looking for does not exist or has been moved.</p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  )
}
