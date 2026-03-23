import Link from "next/link";
import Image from "next/image";
import React from "react";

export const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
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
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2026/03/23</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quibusdam, optio corporis aliquam quae iste accusantium tenetur cum
            molestias possimus consectetur explicabo natus obcaecati doloribus
            quis aperiam numquam minus neque?
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
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
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2026/03/23</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quibusdam, optio corporis aliquam quae iste accusantium tenetur cum
            molestias possimus consectetur explicabo natus obcaecati doloribus
            quis aperiam numquam minus neque?
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};
