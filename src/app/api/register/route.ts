import { MongoClient, ServerApiVersion } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const uri = process.env.MONGO_URI;


  const client = new MongoClient(uri!, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    const database = client.db("dss-du-fest");

    const collection = database.collection("entries");

    await collection.insertOne(body);

    return NextResponse.json({ message: "Data saved successfully !" }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Something went wrong !" }, { status: 500 });
  } finally {
    await client.close();
  }
}