import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { DeleteCitationButton } from "./delete-citation-button";

export default async function Page() {
  const citations = await prisma.citation.findMany({
    orderBy: {
      createAt: "desc",
    },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Url : /admin</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {citations.map((citation) => (
          <Card className="p-4 flex items-start gap-4" key={citation.id}>
            <div className="flex flex-col gap-2 flex-1">
              <p className="relative pl-8 italic">{citation.text}</p>
              <p>-- {citation.author}</p>
            </div>
            <div className="flex flex-col gap-2">
              <DeleteCitationButton id={citation.id} />
              <Link
                className={buttonVariants({ size: "sm", variant: "outline" })}
                href={`/admin/citations/${citation.id}`}
              >
                Edit
              </Link>
              <Link
                className={buttonVariants({ size: "sm", variant: "outline" })}
                href={`/citations/${citation.id}`}
              >
                Share
              </Link>
            </div>
          </Card>
        ))}
        <Link
          className={buttonVariants({ size: "lg", variant: "outline" })}
          href="/admin/citations/new"
        >
          Create Citation
        </Link>
      </CardContent>
    </Card>
  );
}
