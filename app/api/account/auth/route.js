import { db } from "@/app/lib/db";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function GET(req, res, next) {

    const cookieStore = cookies()
    const token = cookieStore.get('token')


    if (!token) {
        return NextResponse.json({ message: "Invalid token." }, { status: 500 });
    } else {
    //     jwt.verify(token.value, 'your-secret-key', (err, decoded) => {
    //         if (err) {
    //             return NextResponse.json({ message: "Invalid token." }, { status: 500 });
    //         } else {
                return NextResponse.json({ message: "success" }, { status: 200 });
    //         }
    //     })
    }

}


