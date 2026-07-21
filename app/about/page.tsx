import { redirect } from "next/navigation";

/** About lives on the landing page (the KW tab) — keep the old URL working. */
export default function AboutPage() {
  redirect("/");
}
