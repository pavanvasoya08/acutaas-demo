import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const client = new MongoClient(process.env.MONGODB_URL as string);
    await client.connect();

    const db = client.db(process.env.DB_NAME);
    const result = await db.collection('getInTouch').insertOne(body);

    await client.close();

    return NextResponse.json({ insertedId: result.insertedId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
