import { AnswerFilters } from "@/constants/filter";
import React from "react";
import Filters from "./Filters";
import { getAnswers } from "@/lib/actions/answer.action";
import Image from "next/image";
import Link from "next/link";
import { getTimestamp } from "@/lib/utils";
import ParseHTML from "./ParseHTML";
import Votes from "./Votes";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.action";

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: number;
  filter?: string;
}

const AllAnswers = async ({
  questionId,
  userId,
  totalAnswers,
  page,
  filter,
}: Props) => {
  const result = await getAnswers({ questionId });

  return (
    <div className="mt-11">
      <div className="flex  items-center justify-between">
        <h3 className="primary-text-gradient">{totalAnswers} Answers</h3>
        <Filters filters={AnswerFilters} />
      </div>
      <div className="mb-8 flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
        {result.answers.map((answer) => (
          <article key={answer._id} className="light-border border-b py-10">
            <div className="flex items-center justify-between">
              <Link
                href={`/profile/${answer.author.clerkId}`}
                className="flex flex-1 items-start gap-1 sm:items-center"
              >
                <Image
                  src={answer.author.picture}
                  alt="Profile Picture"
                  className="rounded-full object-cover max-sm:mt-0.5"
                  height={18}
                  width={18}
                />
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <p className="body-semiblod text-dark300_light700 mt-0.5 line-clamp-1">
                    {answer.author.name}
                  </p>

                  <p className="small-regular text-light400_light500 mt-0.5 ml-0.5 line-clamp-1">
                    answered {getTimestamp(answer.createdAt)}
                  </p>
                </div>
              </Link>
              <div className="flex justify-end">
                <Votes
                  type="Answer"
                  itemId={answer._id}
                  userId={userId}
                  upvotes={answer.upvotes?.length}
                  hashupVoted={answer.downvotes?.includes(userId)}
                  downvotes={answer.downvotes?.length}
                  hashdownVoted={answer.downvotes?.includes(userId)}
                />
              </div>
            </div>
            <div className="mt-4">
              <ParseHTML data={answer.content} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AllAnswers;
