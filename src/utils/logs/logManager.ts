import { readFile, readdir } from 'fs/promises'
import path from 'path'

export interface LogEntry {
  timestamp: string
  ip: string
  error: string
  formData?: {
    projectType?: string
    budget?: string
    timeline?: string
  }
}

export interface LogQueryParams {
  startDate?: string
  endDate?: string
  errorType?: string
  limit?: number
  offset?: number
}

export class LogManager {
  private logDir: string

  constructor() {
    this.logDir = path.join(process.cwd(), 'logs')
  }

  async getLogs(params: LogQueryParams = {}): Promise<LogEntry[]> {
    try {
      const files = await readdir(this.logDir)
      const logFiles = files.filter(f => f.startsWith('form-errors-') && f.endsWith('.log'))
      
      // Filter files by date range
      const filteredFiles = logFiles.filter(file => {
        const fileDate = file.replace('form-errors-', '').replace('.log', '')
        return (!params.startDate || fileDate >= params.startDate) &&
               (!params.endDate || fileDate <= params.endDate)
      })

      // Read and parse all matching log files
      const allLogs: LogEntry[] = []
      for (const file of filteredFiles) {
        const content = await readFile(path.join(this.logDir, file), 'utf-8')
        const logs = content.split('\n')
          .filter(line => line.trim())
          .map(line => JSON.parse(line) as LogEntry)
        allLogs.push(...logs)
      }

      // Filter by error type if specified
      let filteredLogs = params.errorType
        ? allLogs.filter(log => log.error.includes(params.errorType!))
        : allLogs

      // Sort by timestamp descending
      filteredLogs.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )

      // Apply pagination
      if (params.offset || params.limit) {
        const start = params.offset || 0
        const end = params.limit ? start + params.limit : undefined
        filteredLogs = filteredLogs.slice(start, end)
      }

      return filteredLogs
    } catch (error) {
      console.error('Error reading logs:', error)
      throw new Error('Failed to read logs')
    }
  }

  async getErrorCategories(): Promise<{ [key: string]: number }> {
    const logs = await this.getLogs()
    return logs.reduce((acc, log) => {
      acc[log.error] = (acc[log.error] || 0) + 1
      return acc
    }, {} as { [key: string]: number })
  }

  async getStatistics(): Promise<{
    totalErrors: number
    errorsByType: { [key: string]: number }
    errorsByDay: { [key: string]: number }
  }> {
    const logs = await this.getLogs()
    
    const errorsByType = logs.reduce((acc, log) => {
      acc[log.error] = (acc[log.error] || 0) + 1
      return acc
    }, {} as { [key: string]: number })

    const errorsByDay = logs.reduce((acc, log) => {
      const day = log.timestamp.split('T')[0]
      acc[day] = (acc[day] || 0) + 1
      return acc
    }, {} as { [key: string]: number })

    return {
      totalErrors: logs.length,
      errorsByType,
      errorsByDay
    }
  }
}