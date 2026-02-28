import { status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";
const statusMap: Record<
  status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "open", color: "red" },
  IN_PROGRESS: { label: "inprogress", color: "violet" },
  CLOSED: { label: "closed", color: "green" },
};
const IssueStatusBadge = ({ status }: { status: status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
