"use client";

import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "@/node_modules/next/navigation";

const CreateChatButton = () => {
  const router = useRouter();

  const createNewChat = async () => {
    // logic

    router.push(`/chat/abc`);
  };

  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlusIcon />
    </Button>
  );
};

export default CreateChatButton;
