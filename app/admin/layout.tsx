import { Header } from "@/components/header";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
return <div className="flex flex-col gap-4">
    <Header />
    {props.children}
</div>
}