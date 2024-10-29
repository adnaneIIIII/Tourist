import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/db_client";

export async function GET() {
  const cars = await prisma.carslists.findMany();
  return Response.json(cars);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newbooking = await prisma.booking.create({
    data: {
      fullname: body.fullname,
      number: body.number,
      email: body.email,
      pickup: body.pickup,
      dropoff: body.dropoff,
      carname: body.carname,
    },
  });
  return Response.json(newbooking, { status: 201 });
}
