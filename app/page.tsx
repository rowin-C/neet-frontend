"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [rank, setRank] = useState<number>();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchCollage() {
    // call api which returns an excel file
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_LINK}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rank: rank,
          category: category,
        }),
      });
      const data = await response.blob();

      const url = window.URL.createObjectURL(data);
      const link = document.createElement("a");
      link.href = url;
      link.download = "collage.xlsx";
      link.click();
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="w-screen h-screen flex justify-center md:mt-32 items-center md:items-start ">
          <div className="flex p-2   md:w-1/2 h-3/6 flex-col shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg justify-around bg-white">
            <div className="flex flex-col  justify-between text-center nunito">
              <h1 className="text-center text-4xl  md:text-5xl  ">
                Rank to college
              </h1>
              <h2 className="text-center text-2xl  md:text-3xl ">
                Neet 2023 (Round 1)
              </h2>
            </div>
            <div className="flex flex-col gap-5 justify-between text-center ">
              <Input
                placeholder="Enter category rank"
                className="w-2/3 mx-auto"
                type="number"
                value={rank}
                onChange={(e) => setRank(Number(e.target.value))}
              />
              <Select
                value={category}
                onValueChange={(value: string) => setCategory(value)}
              >
                <SelectTrigger className="w-2/3 mx-auto">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=" Open ">Open</SelectItem>
                  <SelectItem value=" EWS ">EWS</SelectItem>
                  <SelectItem value=" OBC ">OBC</SelectItem>
                  <SelectItem value=" SC ">SC</SelectItem>
                  <SelectItem value=" ST ">ST</SelectItem>
                </SelectContent>
              </Select>

              <button
                onClick={fetchCollage}
                className="group relative w-1/3 px-3 py-2 mx-auto inline-flex  items-center justify-center overflow-hidden rounded-md bg-blue-500 font-medium text-neutral-200"
              >
                <span>{loading ? "Scanning..." : "Fetch Collage"}</span>
                <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
