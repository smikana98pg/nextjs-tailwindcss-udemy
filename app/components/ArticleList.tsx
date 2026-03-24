import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Article } from "../types";

type ArticleListProps = {
  articles: Article[];
};

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <article className="shadow my-4" key={article.id}>
          <Link href={`articles/${article.id}`} className="hover:opacity-75">
            <Image
              src="https://picsum.photos/800"
              alt=""
              width={1280}
              height={300}
            />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-700 pb-4 font-bold">
              Technology
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
            >
              {article.title}
            </Link>
            <p className="text-sm pb-3 text-slate-900">
              Published on {article.createdAt}
            </p>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 pb-6"
            >
              {article.content}
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-pink-800 hover:text-black"
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};
