import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <Card className=" ">
      <CardHeader>
        <CardTitle>Url: /</CardTitle>
      </CardHeader>
      <CardContent>
        <Link
          href="/admin"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          /admin
        </Link>
      </CardContent>
    </Card>
  );
}
