@"
import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data: metrics, error } = await supabase
    .from('METRICS')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className=`"p-8`">
        <h1 className=`"text-2xl font-bold mb-4`">Supabase METRICS Table</h1>
        <p className=`"text-red-600`">Error: {error.message}</p>
      </div>
    )
  }

  return (
    <div className=`"p-8`">
      <h1 className=`"text-2xl font-bold mb-4`">Supabase METRICS Table</h1>
      {metrics && metrics.length > 0 ? (
        <div className=`"overflow-x-auto`">
          <table className=`"min-w-full border border-gray-300`">
            <thead className=`"bg-gray-100`">
              <tr>
                <th className=`"border border-gray-300 px-4 py-2`">ID</th>
                <th className=`"border border-gray-300 px-4 py-2`">Name</th>
                <th className=`"border border-gray-300 px-4 py-2`">Age</th>
                <th className=`"border border-gray-300 px-4 py-2`">Created At</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric: any) => (
                <tr key={metric.id}>
                  <td className=`"border border-gray-300 px-4 py-2`">{metric.id}</td>
                  <td className=`"border border-gray-300 px-4 py-2`">{metric.name}</td>
                  <td className=`"border border-gray-300 px-4 py-2`">{metric.age}</td>
                  <td className=`"border border-gray-300 px-4 py-2`">
                    {new Date(metric.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  )
}
"@ | Out-File -FilePath "app\page.tsx" -Encoding UTF8