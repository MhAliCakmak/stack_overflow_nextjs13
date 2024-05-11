"use client";

import {
  downvoteQuestion,
  upvoteQuestion,
} from "@/lib/actions/question.action";
import { formatAndDivideNumber } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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
  const handleSave = () => {};
  const pathname = usePathname();
  const router = useRouter();
  const handleVote = async (action: string) => {
    if (!userId) {
      return;
    }
    if (action === "upvote") {
      if (type === "Question") {
        upvoteQuestion({
          questionId: itemId,
          userId: userId,
          hasupVoted: hashupVoted,
          hasdownVoted: hashdownVoted,
          path: pathname,
        });
      } else if (action === "Answer") {
        // upvoteAnswer({
        //   answerId: itemId,
        //   userId: userId,
        //   hasupVoted: hashupVoted,
        //   hasdownVoted: hashdownVoted,
        //   path: pathname
        // })
      }

      // TODO: show a toast
    } else if (action === "downvote") {
      if (type === "Question") {
        downvoteQuestion({
          questionId: itemId,
          userId: userId,
          hasupVoted: hashupVoted,
          hasdownVoted: hashdownVoted,
          path: pathname,
        });
      } else if (action === "Answer") {
        // downvoteAnswer({
        //   answerId: itemId,
        //   userId: userId,
        //   hasupVoted: hashupVoted,
        //   hasdownVoted: hashdownVoted,
        //   path: pathname
        // })
      }
      // TODO: show a toast
    }
  };
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
              hashdownVoted
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
