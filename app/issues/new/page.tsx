"use client";
import { TextArea, Button } from "@radix-ui/themes";
import React from "react";

const TextField = {
  Root: ({ children, ...props }: { children: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
  Input: (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
      className="border border-gray-300 rounded px-3 py-2 w-full"
      {...props}
    />
  ),
};

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
