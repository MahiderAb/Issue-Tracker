import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const EditIssueButoon = ({ IssueId }: { IssueId: number }) => {
  return (
    <Button>
      <Pencil1Icon />
      <Link href={"/issues/${issueId}/edit"}>EditIssue</Link>
    </Button>
  );
};

export default EditIssueButoon;
