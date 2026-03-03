import { IssueSchema } from "@/app/ValidationSchemas";
import prisma from "@/prisma/client";
import { Prisma, status } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params?: { id?: string } },
) {
  try {
    // dynamic params in route handlers are promises in Next 16
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "Issue ID not provided" },
        { status: 400 },
      );
    }

    const issueId = parseInt(id);
    if (isNaN(issueId)) {
      return NextResponse.json({ error: "Invalid issue ID" }, { status: 400 });
    }

    const body = await request.json();
    const validation = IssueSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const { title, description } = validation.data;

    const issue = await prisma.issue.findUnique({ where: { id: issueId } });
    if (!issue) {
      return NextResponse.json({ error: "Issue not found" }, { status: 404 });
    }

    const updatedIssue = await prisma.issue.update({
      where: { id: issueId },
      data: { title, description },
    });

    return NextResponse.json(updatedIssue);
  } catch (err) {
    console.error("PATCH /issues error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params?: { id?: string } },
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "Issue ID not provided" },
        { status: 400 },
      );
    }

    const issueId = parseInt(id);

    if (isNaN(issueId))
      return NextResponse.json({ error: "Invalid issue ID" }, { status: 400 });

    const issue = await prisma.issue.findUnique({
      where: { id: issueId },
    });

    if (!issue)
      return NextResponse.json({ error: "Issue not found" }, { status: 404 });

    await prisma.issue.delete({
      where: { id: issueId },
    });

    return NextResponse.json({ message: "Issue deleted successfully" });
  } catch (err) {
    console.error("DELETE /issues error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
