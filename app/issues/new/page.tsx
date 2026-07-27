"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  const [error, setError] = useState("");

  const submitIssueHandler = async (data: object) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      //   if (axios.isAxiosError(error)) {
      //     console.log("Error: ", error?.response?.data);
      //   }

      setError("An unexpected error occured.");
    }
  };

  return (
    <>
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={handleSubmit(submitIssueHandler)}>
        <TextField.Root placeholder="Title" {...register("title")} />
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMdeReact placeholder="Description" {...field} />}
        />
        <Button>Submit New Issue</Button>
      </form>
    </>
  );
};

export default NewIssuePage;
