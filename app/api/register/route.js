import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const { email, password } = await request.json();

  const user = await prisma.user.create({
    data: {
      email,
      password
    },
  });

  return NextResponse.json({message: "User create successfully", user})
}

// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";
// import Cors from "micro-cors";

// const prisma = new PrismaClient();

// // Initialize CORS middleware
// const cors = Cors();

// export default cors(async function handler(request, response) {
//   if (request.method === "OPTIONS") {
//     // Preflight request, respond successfully
//     return NextResponse.json({}, { status: 200 });
//   }

//   if (request.method === "POST") {
//     // Handle your POST request logic
//     const { email, password } = await request.json();

//     const user = await prisma.user.create({
//       data: {
//         email,
//         password,
//       },
//     });

//     return NextResponse.json({ message: "User created successfully", user });
//   } else {
//     // Handle other HTTP methods if needed
//     return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
//   }
// });
