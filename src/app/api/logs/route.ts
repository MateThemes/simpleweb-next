import { NextRequest, NextResponse } from 'next/server'
import { LogManager } from '@/utils/logs/logManager'
import { createHash } from 'crypto'

// Basic auth middleware
function validateApiKey(request: NextRequest): boolean {
  const apiKey = request.headers.get('x-api-key')
  if (!apiKey) return false
  
  // Hash the incoming API key and compare with stored hash
  const hashedKey = createHash('sha256')
    .update(apiKey)
    .digest('hex')
  
  return hashedKey === process.env.LOG_API_KEY_HASH
}

export async function GET(request: NextRequest) {
  try {
    // Validate API key
    if (!validateApiKey(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const searchParams = request.nextUrl.searchParams
    const logManager = new LogManager()

    // Parse query parameters
    const params = {
      startDate: searchParams.get('startDate') || undefined,
      endDate: searchParams.get('endDate') || undefined,
      errorType: searchParams.get('errorType') || undefined,
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined,
      offset: searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : undefined
    }

    // Get logs based on query parameters
    const logs = await logManager.getLogs(params)

    return NextResponse.json({ logs })
  } catch (error) {
    console.error('Error in logs API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Validate API key
    if (!validateApiKey(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { action } = await request.json()

    const logManager = new LogManager()

    switch (action) {
      case 'getStatistics':
        const stats = await logManager.getStatistics()
        return NextResponse.json({ statistics: stats })

      case 'getCategories':
        const categories = await logManager.getErrorCategories()
        return NextResponse.json({ categories })

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error in logs API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}