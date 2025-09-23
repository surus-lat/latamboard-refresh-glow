import { useState } from 'react'
import { ChevronDown, Filter, X } from 'lucide-react'

interface FilterPanelProps {
  visibleColumns: string[]
  aggregates: Set<string>
  groupColumnMap: Record<string, string[]>
  groupOrder: string[]
  onToggleColumn: (column: string) => void
}

export function FilterPanel({
  visibleColumns,
  aggregates,
  groupColumnMap,
  groupOrder,
  onToggleColumn
}: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getScoreType = (column: string) => {
    if (aggregates.has(column)) return 'aggregate'
    if (column.startsWith('spanish_')) return 'spanish'
    if (column.startsWith('portuguese_')) return 'portuguese'
    return 'other'
  }

  const getBadgeStyle = (column: string, isActive: boolean) => {
    const type = getScoreType(column)
    
    if (!isActive) {
      return 'badge-outline hover:bg-accent hover:text-accent-foreground'
    }

    switch (type) {
      case 'aggregate':
        return 'badge-default'
      case 'spanish':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20'
      case 'portuguese':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20'
      default:
        return 'badge-secondary'
    }
  }

  const cleanColumnName = (column: string) => {
    return column.replace(/^spanish_|^portuguese_/, '')
  }

  return (
    <div className="card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold">Column Filters</h3>
          <span className="badge-outline text-xs">
            {visibleColumns.length} selected
          </span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn-ghost p-2"
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-6 animate-fade-in">
          {/* Overall Score */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground">Overall Performance</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onToggleColumn('overall_latam_score')}
                className={`badge transition-all ${getBadgeStyle('overall_latam_score', visibleColumns.includes('overall_latam_score'))}`}
              >
                {visibleColumns.includes('overall_latam_score') && (
                  <X className="h-3 w-3 mr-1" />
                )}
                Overall LATAM Score
              </button>
            </div>
          </div>

          {/* Language Groups */}
          {groupOrder.map((groupKey) => {
            const prefixMap: Record<string, string> = { 
              latam_es: 'spanish_', 
              latam_pr: 'portuguese_' 
            }
            const prefix = prefixMap[groupKey]
            if (!prefix) return null

            const groupName = groupKey === 'latam_es' ? 'Spanish' : 'Portuguese'
            const aggCol = `${prefix.slice(0, -1)}_score`
            const subtasks = groupColumnMap[groupKey] ?? []

            return (
              <div key={groupKey} className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">{groupName} Benchmarks</h4>
                <div className="flex flex-wrap gap-2">
                  {/* Aggregate score */}
                  <button
                    onClick={() => onToggleColumn(aggCol)}
                    className={`badge transition-all ${getBadgeStyle(aggCol, visibleColumns.includes(aggCol))}`}
                  >
                    {visibleColumns.includes(aggCol) && (
                      <X className="h-3 w-3 mr-1" />
                    )}
                    {cleanColumnName(aggCol)}
                  </button>
                  
                  {/* Subtasks */}
                  {subtasks.map((column) => (
                    <button
                      key={column}
                      onClick={() => onToggleColumn(column)}
                      className={`badge text-xs transition-all ${getBadgeStyle(column, visibleColumns.includes(column))}`}
                    >
                      {visibleColumns.includes(column) && (
                        <X className="h-3 w-3 mr-1" />
                      )}
                      {cleanColumnName(column)}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Quick Actions */}
          <div className="flex gap-2 pt-4 border-t">
            <button
              onClick={() => {
                const allColumns = ['model_name', 'overall_latam_score', 'spanish_score', 'portuguese_score']
                allColumns.forEach(col => {
                  if (!visibleColumns.includes(col)) {
                    onToggleColumn(col)
                  }
                })
              }}
              className="btn-outline text-xs px-3 py-1"
            >
              Show Main Scores
            </button>
            <button
              onClick={() => {
                visibleColumns.forEach(col => {
                  if (col !== 'model_name') {
                    onToggleColumn(col)
                  }
                })
              }}
              className="btn-outline text-xs px-3 py-1"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  )
}