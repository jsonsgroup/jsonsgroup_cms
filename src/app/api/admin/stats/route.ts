import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Page from '@/models/Page';
import Product from '@/models/Product';
import Media from '@/models/Media';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const [pages, products, media, users] = await Promise.all([
      Page.countDocuments(),
      Product.countDocuments(),
      Media.countDocuments(),
      User.countDocuments()
    ]);

    return NextResponse.json({
      pages,
      products,
      media,
      users
    });
  } catch (error) {
    console.error('Stats API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}