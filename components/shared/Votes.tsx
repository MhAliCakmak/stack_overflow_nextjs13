"use client";

import { formatAndDivideNumber } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hashupVoted: boolean;
  downvotes: number;
  hashdownVoted: boolean;
  hasSaved?: boolean;
}
const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  hashupVoted,
  downvotes,
  hashdownVoted,
  hasSaved,
}: Props) => {
    const handleSave=()=>{

    }
    const handleVote=(voteType:string)=>{
            
        }
  return (
    <div className="flex gap-5">
      <div className="flex-center gap-2.5">
        <div className="flex-center gap-1.5">
          <Image
            src={
              hashupVoted
                ? "/assets/icons/upvoted.svg"
                : "/assets/icons/upvote.svg"
            }
            width={18}
            height={18}
            alt="Upvote button"
            className="cursor-pointer"
            onClick={() => handleVote("upvote")}
          />
          <div className="flex-center bacground-light700_dark400 min-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatAndDivideNumber(upvotes)}
            </p>
          </div>
        </div>
        <div className="flex-center gap-1.5">
          <Image
            src={
              hashupVoted
                ? "/assets/icons/downvoted.svg"
                : "/assets/icons/downvote.svg"
            }
            width={18}
            height={18}
            alt="Downvote button"
            className="cursor-pointer"
            onClick={() => handleVote("downvote")}
          />
          <div className="flex-center bacground-light700_dark400 min-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatAndDivideNumber(downvotes)}
            </p>
          </div>
        </div>
      </div>
      <Image
        src={
          hasSaved
            ? "/assets/icons/star-filled.svg"
            : "/assets/icons/star-red.svg"
        }
        width={18}
        height={18}
        alt="star"
        className="cursor-pointer"
        onClick={handleSave}
      />
    </div>
  );
};

export default Votes;
