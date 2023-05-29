import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await connectToDB();
  const users = await User.find({});
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  try {
    await connectToDB();
    await User.create(await request.json());
    return new Response(
      JSON.stringify({
        message: "created successfully",
      }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: (error as { message: string }).message,
      }),
      {
        status: 201,
      }
    );
  }
}
