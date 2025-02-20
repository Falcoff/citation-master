"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {} from "react";
import { useFormStatus } from "react-dom";
import Form from "next/form";
import { Citation } from "@prisma/client";
import { createCitationAction, updateCitationAction } from "./citation.action";

export function CitationForm(props: { citation?: Citation }) {
  const onSubmit = async (formData: FormData) => {
    let error: null | string = null;
    if (props.citation) {
      const json = await updateCitationAction(props.citation.id, {
        author: String(formData.get("author")),
        text: String(formData.get("text")),
      });
      error = json.error;
    } else {
      const json = await createCitationAction({
        author: String(formData.get("author")),
        text: String(formData.get("text")),
      });
      error = json.error;
    }

    if (error) {
      alert(error);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.citation ? "Update citation" : "Create citation"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          className="flex flex-col gap-2"
          action={async (formData) => {
            await onSubmit(formData);
          }}
        >
          <Label>
            Citation
            <Input defaultValue={props.citation?.text} name="text" />
          </Label>
          <Label>
            Author
            <Input defaultValue={props.citation?.author} name="author" />
          </Label>
          <SumbitButton />
        </Form>
      </CardContent>
    </Card>
  );
}

const SumbitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Loading ..." : "Submit"}
    </Button>
  );
};
