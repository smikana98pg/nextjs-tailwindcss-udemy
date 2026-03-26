import { supabase } from "@/app/utils/supabaseClient";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { id, title, content } = await req.json();

  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, createdAt: new Date().toISOString() }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
};
