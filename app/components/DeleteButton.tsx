"use client";

import { useState } from "react";
import { deleteArticle } from "../blogAPI";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handelDelete = async () => {
    setLoading(true);
    await deleteArticle(id);
    setLoading(false);
    router.push("/");
    router.refresh();
  };
  return (
    <div
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 cursor-pointer inline-flex items-center gap-2"
      onClick={handelDelete}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" />
      )}
      削除
    </div>
  );
};

export default DeleteButton;
