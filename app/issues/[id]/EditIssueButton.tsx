<<<<<<< HEAD
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
=======
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
>>>>>>> 85f664b047b551e999fee5a986387b5145f4df0e
    </Button>
  );
};

export default EditIssueButton;
