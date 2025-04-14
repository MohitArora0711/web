import { MongoClient, ServerApiVersion } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios"; // ✅ Added axios import

export async function POST(req: NextRequest) {
    const body = await req.json();
    const uri = process.env.MONGO_URI;
    
    if (!uri) {
        return NextResponse.json({ message: "MongoDB URI is missing!" }, { status: 500 });
    }
    
    if (!body?.formType || !body?.data) {
        return NextResponse.json({ success: false, message: "Missing formType or data in request!" }, { status: 400 });
    }
    
    const client: MongoClient = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    
    try {
        await client.connect();
        const database = client.db("DelhiStartupSummit");
        const collection = database.collection("entries");
        
        if (body.data.email || body.data.phone) {
            const query: { $or: { [key: string]: string }[] } = {
                $or: []
            };
            
            if (body.data.email) {
                query.$or.push({ "data.email": body.data.email });
            }
            
            if (body.data.phone) {
                query.$or.push({ "data.phone": body.data.phone });
            }
            
            if (query.$or.length > 0) {
                const existingEntry = await collection.findOne(query);
                
                if (existingEntry) {
                    let duplicateField = "";
                    if (existingEntry.data.email === body.data.email) {
                        duplicateField = "email";
                    } else if (existingEntry.data.phone === body.data.phone) {
                        duplicateField = "phone number";
                    }
                    
                    return NextResponse.json({
                        success: false,
                        message: `This ${duplicateField} is already registered in our database.`
                    }, { status: 400 });
                }
            }
        }
        
        if (body.formType === "startup" && body.data.username) {
            try {
                const response = await axios.get(`https://d6wmewta323aj.cloudfront.net/api/v1/company/verify/${body.data.username}/${body.data.email}/${body.data.phone}`);
                const validationResult = response.data;
                
                if (!validationResult || validationResult === false) {
                    return NextResponse.json({
                        success: false,
                        message: "Your code is not valid."
                    }, { status: 400 });
                }
            } catch (validationError) {
                console.error("Code validation error:", validationError);
                return NextResponse.json({
                    success: false,
                    message: "Failed to validate your code. Please try again."
                }, { status: 500 });
            }
        }
        
        const entry = {
            formType: body.formType,
            data: body.data,
            submittedAt: new Date(),
        };
        
        await collection.insertOne(entry);
        
        return NextResponse.json({ 
            success: true, 
            message: "Data saved successfully!" 
        }, { status: 200 });
    } catch (error) {
        console.error("MongoDB Insert Error:", error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong while saving data!",
            error: error instanceof Error ? error.message : String(error),
        }, { status: 500 });
    } finally {
        await client.close();
    }
}
