"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { deleteCitationAction } from "./citations/citation.action";
import { useRouter } from "next/navigation";

export function DeleteCitationButton(props: { id: number }) {
  const [isConfirm, setIsConfirm] = useState(false);
  const router = useRouter();
  const onDelete = async () => {
    const result = await deleteCitationAction(props.id);
    if (result.message) {
      router.refresh();
    }
  };

  return (
    <Button
      size="sm"
      variant={isConfirm ? "destructive" : "outline"}
      onClick={() => {
        if (isConfirm) {
          onDelete();
        } else {
          setIsConfirm(true);
        }
      }}
    >
      X
    </Button>
  );
}
