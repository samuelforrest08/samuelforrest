import { NextResponse } from "next/server";
import { getProjects } from "../../get-projects";

export async function GET() {
  return NextResponse.json(await getProjects());
}
