"use client";
import React from "react";
import { useSession } from "next-auth/react";

const CheckoutButton = () => {
  const { data: session } = useSession();

  // making sure that user should be logged in
  if (!session) return;

  const createCheckoutSession = () => {
    // push a document into firestore db
    

    // stripe extenstion on firebase will create a checkout session
    // redirect use to checkout page
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* if subscribed show me user is subscribed */}
      <button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
      >
        Sign Up
      </button>
    </div>
  );
};

export default CheckoutButton;
