"use client";

import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  const submitIssueHandler = async (data: object) => {
    await axios.post("/api/issues", data);
    router.push("/issues");
  };

  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(submitIssueHandler)}>
      <TextField.Root placeholder="Title" {...register("title")}></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMdeReact placeholder="Description" {...field} />}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
