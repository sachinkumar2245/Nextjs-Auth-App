import {connect} from "@/dbConfig/dbConfig.ts";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { error } from "console";

connect()

export async function POST(request:NextRequest){
    try{

    }catch(error: any){
        return NextResponse.json({error: error.message}, {status: 500})
    }
} {
    
}


