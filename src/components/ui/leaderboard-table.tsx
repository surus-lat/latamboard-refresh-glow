import { ChevronUp, ChevronDown, Trophy, Medal, Award } from 'lucide-react'

type LeaderboardRow = Record<string, string | number | null>

interface LeaderboardTableProps {
  data: LeaderboardRow[]
  visibleColumns: string[]
  orderedColumns: string[]
  aggregates: Set<string>
  sortBy: string
  sortDir: 'asc' | 'desc'
  onSort: (column: string) => void
  loading?: boolean
  error?: string | null
}

export function LeaderboardTable({
  data,
  visibleColumns,
  orderedColumns,
  aggregates,
  sortBy,
  sortDir,
  onSort,
  loading = false,
  error = null
}: LeaderboardTableProps) {
  
  const getScoreClass = (value: number) => {
    if (value >= 0.8) return 'text-score-excellent bg-score-excellent/10'
    if (value >= 0.6) return 'text-score-good bg-score-good/10'
    if (value >= 0.4) return 'text-score-average bg-score-average/10'
    return 'text-score-poor bg-score-poor/10'
  }

  const formatScore = (value: any) => {
    if (typeof value !== 'number') return String(value || '-')
    return (value * 100).toFixed(1) + '%'
  }

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
      case 1: return <Medal className="h-5 w-5 text-gray-500 dark:text-gray-400" />
      case 2: return <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      default: return <span className="text-sm text-muted-foreground font-mono bg-muted/30 px-2 py-1 rounded-full">#{index + 1}</span>
    }
  }

  const getColumnHeaderStyle = () => {
    return "px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider cursor-pointer select-none hover:text-foreground transition-colors"
  }

  const visibleOrderedColumns = orderedColumns.filter(col => visibleColumns.includes(col))

  if (loading) {
    return (
      <div className="card-elevated">
        <div className="p-12 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-muted-foreground">Loading leaderboard data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="card-elevated border-destructive/50">
        <div className="p-12 text-center">
          <p className="text-destructive font-medium">Failed to load leaderboard data</p>
          <p className="text-sm text-muted-foreground mt-2">Please try refreshing the page</p>
        </div>
      </div>
    )
  }

  return (
    <div className="card-elevated overflow-hidden backdrop-blur-sm">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/40 bg-gradient-to-r from-muted/30 to-muted/10">
              <th className="sticky left-0 z-10 bg-gradient-to-r from-background to-background/95 px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Rank
              </th>
              {visibleOrderedColumns.map((col) => (
                <th
                  key={col}
                  className={getColumnHeaderStyle()}
                  onClick={() => onSort(col)}
                >
                  <div className="flex items-center gap-2">
                    <span className="truncate">{col.replace(/_/g, ' ')}</span>
                    {sortBy === col && (
                      <div className="flex-shrink-0 text-primary">
                        {sortDir === 'asc' ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {data.map((row, index) => (
              <tr 
                key={index} 
                className="hover:bg-muted/20 transition-colors duration-200 group"
              >
                <td className="sticky left-0 z-10 bg-gradient-to-r from-background to-background/95 group-hover:from-muted/20 group-hover:to-muted/10 px-6 py-4 border-r border-border/20">
                  <div className="flex items-center justify-center">
                    {getRankIcon(index)}
                  </div>
                </td>
                {visibleOrderedColumns.map((col) => (
                  <td key={col} className="px-6 py-4 whitespace-nowrap">
                    {col === 'model_name' ? (
                      <div className="font-semibold text-foreground max-w-xs truncate text-base">
                        {String(row[col] || '')}
                      </div>
                    ) : typeof row[col] === 'number' && (aggregates.has(col) || col.includes('_score')) ? (
                      <div className="flex items-center justify-center">
                        <span className={`inline-flex items-center justify-center min-w-[64px] px-3 py-1.5 rounded-full text-sm font-semibold ${getScoreClass(row[col] as number)} border border-border/20`}>
                          {formatScore(row[col])}
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm font-mono text-muted-foreground bg-muted/30 px-2 py-1 rounded border border-border/20">
                        {typeof row[col] === 'number' ? (row[col] as number).toFixed(4) : String(row[col] || '-')}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}