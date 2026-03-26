import { NextResponse } from "next/server";
import { supabase } from "@/app/utils/supabaseClient";
import { notFound } from "next/navigation";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    notFound();
  }

  return NextResponse.json(data);
};