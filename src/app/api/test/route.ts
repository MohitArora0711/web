import { MongoClient, ServerApiVersion } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const uri = process.env.MONGO_URI;

    if (!uri) {
        return NextResponse.json({ message: "MongoDB URI is missing!" }, { status: 500 });
    }

    const client = new MongoClient(uri, {
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

        const entry = {
            formType: body.formType,
            data: body.data,
            message: body.message,
            submittedAt: new Date()
        };

        await collection.insertOne(entry);

        return NextResponse.json({ success: true, message: "Data saved successfully!" }, { status: 200 });

    } catch (error) {
        console.error("MongoDB Insert Error:", error);
        return NextResponse.json({ success: false, message: " Something went wrong while saving data!" }, { status: 500 });
    } finally {
        await client.close();
    }
}
