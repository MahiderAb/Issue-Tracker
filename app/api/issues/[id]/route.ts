import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { createIssueSchema } from "../../../ValidationSchemas";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const body = await request.json();
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const updated = await prisma.issue.update({
    where: { id: parseInt(id) },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updated, { status: 200 });
}
