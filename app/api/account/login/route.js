import { db } from "@/app/lib/db";
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function POST(req,res) {
    const {email,password} = await req.json();
    const query = `SELECT * FROM jagan.user WHERE email = ? AND password = ?;`
    const data = await db(query,[email,password]);

    console.log(email,password);

    if(data.length > 0){

        const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1d' });
        

        cookies().set("token",token);


        return NextResponse.json({ message: "Successful login!" },{ status: 200 });
    } else {
        return NextResponse.json({ message: "Invalid email or password." },{ status: 500 });
    }
}