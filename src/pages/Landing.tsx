import { useEffect, useMemo, useState } from 'react'

type LeaderboardRow = Record<string, string | number | null>

type Task = {
  name: string
  group: string
  description: string
  long_description: string
}

type TasksList = { tasks: Record<string, Task> }

type TaskGroup = {
  name: string
  description: string
  long_description?: string
  repository?: string
  subtasks?: string[]
}

type TaskGroups = { task_groups: Record<string, TaskGroup> }

async function fetchLeaderboard(): Promise<LeaderboardRow[]> {
  try {
    // Try Hugging Face dataset JSON files (assumes converted to parquet/JSON compatible listing)
    // We'll hit the raw file list via the repo tree API. If that fails, fallback to local file.
    const res = await fetch('https://huggingface.co/datasets/mauroibz/leaderboard-results/resolve/main/leaderboard_table.json', { cache: 'no-store' })
    if (res.ok) {
      return await res.json()
    }
  } catch {}
  // Local fallback during dev
  const local = await fetch('/leaderboard_table.json')
  return await local.json()
}

const DEFAULT_VISIBLE = [
  'model_name',
  'overall_latam_score',
  'spanish_score',
  'portuguese_score',
]

export function Landing() {
  const [data, setData] = useState<LeaderboardRow[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [visibleColumns, setVisibleColumns] = useState<string[]>(DEFAULT_VISIBLE)
  const [sortBy, setSortBy] = useState<string>('overall_latam_score')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')
  const [taskGroups, setTaskGroups] = useState<TaskGroups | null>(null)
  const [/* tasksList */, setTasksList] = useState<TasksList | null>(null)

  useEffect(() => {
    fetchLeaderboard().then(setData).catch(() => setError('Failed to load leaderboard data'))
    Promise.all([
      fetch('/tasks_groups.json').then(r => r.json() as Promise<TaskGroups>),
      fetch('/tasks_list.json').then(r => r.json() as Promise<TasksList>),
    ]).then(([g, t]) => {
      setTaskGroups(g)
      setTasksList(t)
    }).catch(() => {/* non-fatal */})
  }, [])

  // Determine ordered columns: aggregates, then per-group tasks in JSON order (only those present in data)
  const { orderedColumns, aggregates, groupColumnMap, groupOrder } = useMemo(() => {
    if (!data || data.length === 0) {
      return { orderedColumns: [] as string[], aggregates: new Set<string>(), groupColumnMap: {} as Record<string, string[]>, groupOrder: [] as string[] }
    }
    const present = new Set(Object.keys(data[0]))
    const aggregatesArr = ['overall_latam_score', 'spanish_score', 'portuguese_score']
    const aggregatesSet = new Set(aggregatesArr)

    const groupPrefixMap: Record<string, string> = { latam_es: 'spanish_', latam_pr: 'portuguese_' }
    const map: Record<string, string[]> = {}
    const order: string[] = Object.keys(taskGroups?.task_groups ?? {})
    for (const key of order) {
      const prefix = groupPrefixMap[key]
      if (!prefix) continue
      const subtasks = taskGroups?.task_groups?.[key]?.subtasks ?? []
      const cols = subtasks.map(st => `${prefix}${st}`).filter(col => present.has(col))
      map[key] = cols
    }

    const ordered = ['model_name', ...aggregatesArr]
    for (const key of order) {
      const cols = map[key]
      if (cols && cols.length) ordered.push(...cols)
    }
    // If any remaining present numeric columns are not covered, append them
    const covered = new Set(ordered)
    for (const k of present) {
      if (!covered.has(k)) ordered.push(k)
    }
    return { orderedColumns: ordered, aggregates: aggregatesSet, groupColumnMap: map, groupOrder: order }
  }, [data, taskGroups])

  const sortedData = useMemo(() => {
    if (!data) return [] as LeaderboardRow[]
    const arr = [...data]
    arr.sort((a, b) => {
      const av = a[sortBy]
      const bv = b[sortBy]
      const an = typeof av === 'number' ? av : Number.NEGATIVE_INFINITY
      const bn = typeof bv === 'number' ? bv : Number.NEGATIVE_INFINITY
      return sortDir === 'asc' ? an - bn : bn - an
    })
    return arr
  }, [data, sortBy, sortDir])

  function toggleColumn(col: string) {
    setVisibleColumns((prev) =>
      prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]
    )
  }

  function handleSort(col: string) {
    if (sortBy === col) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortBy(col)
      setSortDir('desc')
    }
  }

  return (
    <div className="container py-10">
      <section className="text-center space-y-4 py-10">
        <div className="mx-auto h-14 w-14 rounded-lg bg-gradient-to-br from-secondary to-tertiary shadow" />
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">LATAM Leaderboard</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground">
        The community-driven platform for evaluating AI models on Spanish and Portuguese benchmarks. Advancing AI excellence across Latin America through transparent, rigorous evaluation.
        </p>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          {/* Overall row */}
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => toggleColumn('overall_latam_score')} className={`chip ${visibleColumns.includes('overall_latam_score') ? 'chip-agg-overall' : 'hover:bg-muted'}`}>
              {visibleColumns.includes('overall_latam_score') ? '✓ ' : ''}overall_latam_score
            </button>
          </div>

          {/* One row per group: aggregate first, then subtasks (auto-generated) */}
          <div className="flex flex-col gap-2">
            {groupOrder.map((groupKey) => {
              // derive aggregate column from prefix
              const prefixMap: Record<string, string> = { latam_es: 'spanish_', latam_pr: 'portuguese_' }
              const prefix = prefixMap[groupKey]
              if (!prefix) return null
              const aggCol = `${prefix.slice(0, -1)}_score`
              const chips = groupColumnMap[groupKey] ?? []
              // choose chip accent by group
              const activeAgg = visibleColumns.includes(aggCol)
              const aggClass = `chip ${activeAgg ? 'chip-agg-lang' : 'hover:bg-muted'}`
              return (
                <div key={groupKey} className="flex flex-wrap items-center gap-2">
                  <button onClick={() => toggleColumn(aggCol)} className={aggClass}>
                    {activeAgg ? '✓ ' : ''}{aggCol}
                  </button>
                  {chips.map((col) => {
                    const active = visibleColumns.includes(col)
                    const label = col.replace(/^spanish_|^portuguese_/, '')
                    const style = groupKey === 'latam_es'
                      ? (active ? 'bg-tertiary/20 border-tertiary/40 text-foreground' : 'hover:bg-muted')
                      : groupKey === 'latam_pr'
                        ? (active ? 'bg-secondary/20 border-secondary/40 text-foreground' : 'hover:bg-muted')
                        : (active ? 'bg-primary/10 border-primary/30' : 'hover:bg-muted')
                    return (
                      <button key={col} onClick={() => toggleColumn(col)} className={`px-2 py-1 rounded border text-xs ${style}`}>
                        {active ? '✓ ' : ''}{label}
                      </button>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>

        <div className="overflow-auto rounded border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr>
                {orderedColumns.filter((c) => visibleColumns.includes(c)).map((col) => (
                  <th key={col} className={`text-left px-3 py-2 whitespace-nowrap cursor-pointer select-none ${aggregates.has(col) ? 'bg-primary/5' : col.startsWith('spanish_') ? 'bg-tertiary/10' : col.startsWith('portuguese_') ? 'bg-secondary/10' : ''}`} onClick={() => handleSort(col)}>
                    <div className="inline-flex items-center gap-1">
                      <span>{col}</span>
                      {sortBy === col && (
                        <span className="text-xs text-muted-foreground">{sortDir === 'asc' ? '▲' : '▼'}</span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {error && (
                <tr>
                  <td className="px-3 py-2 text-destructive" colSpan={orderedColumns.length}>{error}</td>
                </tr>
              )}
              {!error && data === null && (
                <tr>
                  <td className="px-3 py-6 text-center text-muted-foreground" colSpan={orderedColumns.length}>Loading…</td>
                </tr>
              )}
              {!error && data && sortedData.map((row, idx) => (
                <tr key={idx} className="odd:bg-background/40">
                  {orderedColumns.filter((c) => visibleColumns.includes(c)).map((col) => (
                    <td key={col} className="px-3 py-2 whitespace-nowrap">
                      {typeof row[col] === 'number' ? (row[col] as number).toFixed(4) : String(row[col])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground">
          Source: <a className="underline" href="https://huggingface.co/datasets/mauroibz/leaderboard-results/" target="_blank" rel="noreferrer">Hugging Face dataset</a>.
        </p>
      </section>
    </div>
  )
}


