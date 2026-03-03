"use client";
import { AlertDialog, Button, Flex, Spinner } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [isdeleting, setdeleting] = React.useState(false);
  const handleDelete = async () => {
    try {
      setdeleting(true);
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues");
      router.refresh();
    } catch (err) {
      setdeleting(false);
      console.error("Failed to delete issue", err);
    }
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger asChild>
        <Button color="red" disabled={isdeleting}>
          Delete
          {isdeleting && <Spinner />}
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are u sure u want to delete this issue?
        </AlertDialog.Description>
        <Flex mt="4" gap="3">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button color="red" onClick={handleDelete}>
              DeleteIssue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
