import { NextResponse } from 'next/server';
import { createDemoSnippets } from '@/scripts/createDemoSnippets';

export async function POST() {
  try {
    await createDemoSnippets();
    return NextResponse.json({ 
      success: true, 
      message: 'Demo snippets created successfully' 
    });
  } catch (error) {
    console.error('Error creating demo snippets:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create demo snippets' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Use POST to create demo snippets' 
  });
} 