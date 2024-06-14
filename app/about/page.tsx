import { CircleArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="container flex flex-col gap-2 md:h-[84vh] justify-center">
      <h1 className=" text-4xl md:text-8xl honk">About</h1>
      <h1 className="text-3xl mt-5">Hey there! 👋</h1>
      <div className="text-xl ms:2xl flex flex-col gap-4 md:w-2/3">
        <p>
          Every year, NEET students face the same struggle: counseling. 🤯 Which
          college can I get into with my rank? Most websites that offer this
          info aren’t free. While searching for a solution, I found a Reddit{" "}
          <Link
            className="text-red-500 underline font-bold "
            href={
              "https://www.reddit.com/r/indianmedschool/comments/15f1oqz/i_have_created_a_collection_of_college_wise_final/"
            }
          >
            post
          </Link>{" "}
          where{" "}
          <Link
            className="text-red-500 underline font-bold"
            href={"https://www.reddit.com/user/CarbonylChloride/"}
          >
            u/CarbonylChloride
          </Link>{" "}
          had shared a drive of 400+ colleges with their opening and closing
          ranks. 💡 That’s when the idea hit me to build this tool!
        </p>
        <p>
          It’s a simple Python script 🐍 that scans those PDFs for keywords and
          gives you a list of colleges you’re eligible for. It takes about 3
          minutes ⏳, which might feel like forever, but it’s just doing its
          thing, scanning all the files every time to make sure you get the
          right info.
        </p>
        <p>
          Thanks for being patient, and if you love this tool, show some love
          and give it a ⭐ on GitHub! 🙌
        </p>
      </div>
    </div>
  );
}
