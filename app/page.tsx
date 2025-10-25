'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'  // ✅ uses .. because lib is at the root level

export default function Home() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('METRICS').select('*')
      if (error) console.error('Supabase error:', error)
      else setRows(data)
    }
    fetchData()
  }, [])

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Supabase METRICS Table</h1>
      {rows.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <ul className="space-y-2">
          {rows.map((r) => (
            <li key={r.id} className="border p-2 rounded">
              {r.name} — {r.age}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
