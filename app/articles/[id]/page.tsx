import { getDetailArticle } from "@/app/blogAPI";
import Image from "next/image";

const Article = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const detailArticle = await getDetailArticle(id);
  console.log(detailArticle);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://picsum.photos/seed/${id}/800/300`}
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">ここがタイトルです。</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>ここが本文です。</p>
      </div>
    </div>
  );
};

export default Article;
