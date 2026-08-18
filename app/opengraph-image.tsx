import { ImageResponse } from 'next/og'
import { profile } from '@/data/profile'

export const dynamic = 'force-static'
export const alt = `${profile.name} — ${profile.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Rendered once at build time (static export). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'linear-gradient(135deg, #17181d 0%, #1d1f27 60%, #24262f 100%)',
          color: '#eef0ee',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#f2c15c' }}>sureshmuruges.github.io</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ display: 'flex', fontSize: 40, marginTop: 16, color: '#a8abb4' }}>{profile.title}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#a8abb4' }}>
          Drupal 9/10/11 · Decoupled architecture · Laravel · Azure AKS · Docker & Kubernetes
        </div>
      </div>
    ),
    size,
  )
}
