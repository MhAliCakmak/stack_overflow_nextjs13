import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "./RenderTags";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: 1,
      title: " What is an example of 3 numbers that do not make up a vector? ",
    },
    {
      _id: 2,
      title:
        " Would it be appropriate to point out an error in another paper during a referee report?",
    },
    { _id: 3, title: " How can an airconditioning machine exist?" },
    { _id: 4, title: " Interrogated every time crossing UK Border as citizen" },
  ];

  const popularTags = [
    {
      _id: 1,
      name: "javascript",
      count: 20152,
    },
    {
      _id: 2,
      name: "python",
      count: 20152,
    },
    {
      _id: 3,
      name: "react",
      count: 20152,
    },
    {
      _id: 4,
      name: "nextjs",
      count: 20152,
    },
  ];
  return (
    <section className="light-border text-dark200_light900 custom-scrollbar background-light900_dark200 sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[330px]">
      <div className="flex flex-col">
        <h3 className="h3-bold items-start text-[20px] ">Top Questions</h3>
        <div className="mt-[20px] flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>

              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                className="invert-colors"
                height={20}
              />
            </Link>
          ))}
        </div>
        <div className="mt-[60px] flex flex-col">
          <h3 className="h3-bold items-start text-[20px] ">Popular Tags</h3>
          <div className="mt-[26px] flex flex-col gap-[16px]">
            {popularTags.map((tag) => (
              <RenderTags
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.count}
                showCount
              />
            ))}
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
