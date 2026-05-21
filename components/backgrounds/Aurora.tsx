'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Aurora() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let animId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      frame += 0.0025
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const blobs = [
        { cx: width * 0.3, cy: height * 0.4, r: width * 0.45, color: [58, 0, 112] },
        { cx: width * 0.7, cy: height * 0.6, r: width * 0.35, color: [0, 26, 64] },
        { cx: width * 0.5 + Math.sin(frame) * 80, cy: height * 0.5 + Math.cos(frame * 0.7) * 60, r: width * 0.3, color: [79, 70, 229] },
      ]

      blobs.forEach((blob) => {
        const grad = ctx.createRadialGradient(blob.cx, blob.cy, 0, blob.cx, blob.cy, blob.r)
        grad.addColorStop(0, `rgba(${blob.color[0]},${blob.color[1]},${blob.color[2]},0.35)`)
        grad.addColorStop(0.5, `rgba(${blob.color[0]},${blob.color[1]},${blob.color[2]},0.12)`)
        grad.addColorStop(1, 'rgba(10,10,20,0)')
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, width, height)
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [reduced])

  if (reduced) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      aria-hidden
    />
  )
}
