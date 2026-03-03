"use client";

import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React from "react";
import Link from "@/app/components/Link"; // use custom Radix + Next link

const EditIssueButton = ({ IssueId }: { IssueId: number }) => {
  return (
    <Button asChild>
      <Link href={`/issues/${IssueId}/edit`}>
        <Pencil1Icon />
        Edit Issue
      </Link>
    </Button>
  );
};

export default EditIssueButton;
