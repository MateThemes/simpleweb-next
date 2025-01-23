import { readdir, unlink, stat } from 'fs/promises'
import path from 'path'
import { createGzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'

export class LogRotation {
  private logDir: string
  private retentionDays: number
  private compressAfterDays: number

  constructor(retentionDays = 30, compressAfterDays = 7) {
    this.logDir = path.join(process.cwd(), 'logs')
    this.retentionDays = retentionDays
    this.compressAfterDays = compressAfterDays
  }

  private async compressFile(filePath: string): Promise<void> {
    const gzipPath = `${filePath}.gz`
    
    await pipeline(
      createReadStream(filePath),
      createGzip(),
      createWriteStream(gzipPath)
    )

    await unlink(filePath)
  }

  private async getFileAge(filePath: string): Promise<number> {
    const stats = await stat(filePath)
    const ageInDays = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24)
    return ageInDays
  }

  async rotate(): Promise<void> {
    try {
      const files = await readdir(this.logDir)
      const logFiles = files.filter(f => f.startsWith('form-errors-'))

      for (const file of logFiles) {
        const filePath = path.join(this.logDir, file)
        const fileAge = await this.getFileAge(filePath)

        // Delete old files
        if (fileAge > this.retentionDays) {
          await unlink(filePath)
          console.log(`Deleted old log file: ${file}`)
          continue
        }

        // Compress files older than compression threshold
        if (fileAge > this.compressAfterDays && !file.endsWith('.gz')) {
          await this.compressFile(filePath)
          console.log(`Compressed log file: ${file}`)
        }
      }

      console.log('Log rotation completed successfully')
    } catch (error) {
      console.error('Error during log rotation:', error)
      throw new Error('Failed to rotate logs')
    }
  }

  // Run this method daily via cron job
  static async runDailyRotation(): Promise<void> {
    const rotation = new LogRotation()
    await rotation.rotate()
  }
}