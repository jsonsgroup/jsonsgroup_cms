import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/mongodb';
import Page from '@/models/Page';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    
    const pages = await Page.find()
      .populate('author', 'name email')
      .sort({ updatedAt: -1 });

    return NextResponse.json(pages);
  } catch (error) {
    console.error('Pages API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, slug, content, company, status, seo } = body;

    await dbConnect();

    const page = new Page({
      title,
      slug,
      content,
      company,
      status: status || 'draft',
      seo,
      author: session.user.id
    });

    await page.save();
    await page.populate('author', 'name email');

    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    console.error('Pages API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}