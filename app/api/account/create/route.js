import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";


export async function POST(req,res) {
    const {username,email,password} = await req.json();
    const time = Date.now();
    const query = `INSERT INTO jagan.user (username, email, time, password)VALUES (?, ?, ?, ?);`;

  const data = await db(query, [username, email, time, password]);
  if (data.affectedRows){
    return NextResponse.json({message:"success"},{ status: 200 })
  }else{
  return NextResponse.json({message:"unsuccessful"},{ status: 500 })
  }

}