"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import UserAvatar from "./UserAvatar";
import { signIn, signOut } from "next-auth/react";

const UserButton = ({ session }: { session: any }) => {
  // subscription listener

  // session : Logged In or not
  if (!session)
    return (
      <Button variant="outline" onClick={() => signIn()}>
        {/* The reason why this error happens is that we are trying to use a UI event handler in a non-client component. */}
        Sign In
      </Button>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar name={session?.user?.name} image={session?.user?.image} />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
