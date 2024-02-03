import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { MessagesSquareIcon } from "lucide-react";

import Logo from "./Logo";
import UserButton from "./UserButton";
import Link from "@/node_modules/next/link";
import CreateChatButton from "./CreateChatButton";

const Header = async () => {
  const session = await getServerSession(authOptions);
  console.log({ session });

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* Language Select */}

          {/* Session && if loggedin */}
          {session ? (
            <>
              <Link href="/chat" prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>

              <CreateChatButton />
            </>
          ) : (
            <Link href="/pricing">Pricing</Link>
          )}

          {/* darkmode */}
          <DarkModeToggle />

          {/* useeButton */}
          <UserButton session={session} />
        </div>
      </nav>

      {/* upgrade banner - To Pro memeber */}
    </header>
  );
};

export default Header;
