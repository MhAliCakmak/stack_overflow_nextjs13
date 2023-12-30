import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filters";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

export default async function Home() {
  const questions = [
    {
      _id: "1",
      title: "What is the best way to approach learning JavaScript?",
      tags: [
        { _id: "1", name: "javascript" },
        { _id: "2", name: "New Starter" },
      ],
      author: {
        _id: "1",
        name: "Mehmet Ali Çakmak",
        picture: "https://avatars.githubusercontent.com/u/60389574?v=4",
      },
      answers: ["Use React hooks", "Use React hooks"],
      upvotes: 12,
      views: 891,
      createdAt: new Date(),
    },
    {
      _id: "2",
      title:
        "An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell",
      tags: [
        { _id: "1", name: "javascript" },
        { _id: "2", name: "react.js" },
        { _id: "3", name: "salesforce" },
      ],
      author: {
        _id: "3",
        name: "Oxlade Doe",
        picture: "https://avatars.githubusercontent.com/u/60389574?v=7", // Eğer picture bilgisi yoksa burayı doldurabilirsiniz
      },
      upvotes: 22,
      answers: ["Use React hooks!", "Use React hooks"],
      views: 190,
      createdAt: new Date(), // Veya uygun bir tarih formatında string olarak atanabilir
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              answers={question.answers && question.answers.length}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
