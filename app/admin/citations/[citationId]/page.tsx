import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/src/lib/prisma";
import { CitationForm } from "../citation-form";

export default async function Page(props: {
  params: Promise<{ citationId: string }>;
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const params = await props.params;
  const citationId = params.citationId;

  const citation = await prisma.citation.findFirst({
    where: { id: Number(params.citationId) },
  });
  if (!citation) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Citation {citationId} does not exist</CardTitle>
        </CardHeader>
      </Card>
    );
  }
  return <CitationForm citation={citation}></CitationForm>;
}
