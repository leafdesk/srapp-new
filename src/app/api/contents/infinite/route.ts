import prisma from '@/utils/prisma'
import { NextResponse } from 'next/server'

/**
 * GET /api/contents/infinite 요청.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const kind = searchParams.get('kind') || undefined
  const subKind = searchParams.get('subKind') || undefined
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')

  const take = parseInt(limit || '10', 10) as number
  const skip = ((parseInt(page || '1', 10) - 1) * take) as number

  try {
    const where = subKind ? { kind, subKind } : { kind }
    const totalCount = await prisma.contents.count({ where })
    const contents = await prisma.contents.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take,
      skip,
    })
    return NextResponse.json(contents)
  } catch (error) {
    console.error(error)
    NextResponse.json({ ok: false, error: 'Failed to fetch contents' })
  }
}

/**
 * POST /api/contents/infinite 요청.
 */
export async function POST(request: Request) {
  console.log('POST /api/contents/infinite')
  return NextResponse.json({ ok: true })
}
