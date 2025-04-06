import { MongoClient, ServerApiVersion } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  let date = new Date();
  const matchID = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`;

  if (id != matchID) {
    throw new Error("Not allowed")
  }
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

    const response = collection.find({});
    return NextResponse.json(await response.toArray());

  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Something went wrong !" }, { status: 500 });
  } finally {
    await client.close();
  }
}