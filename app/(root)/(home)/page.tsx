import { Button } from "@/components/ui/button";
import Link from "next/link";

 
export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-dark100_light900 h1-bold ">All Questions</h1>
      <Link href="/ask-question" className="flex justify-end max-sm:w-full ">
      <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
        Ask a question
      </Button>
      </Link>
      </div>
      <div className="1lex mt-11 justify-between gap-5 max-sm:flex-col sm:items-center">
      LocalSearchBar
      Filters
      </div>
    </>
  )
}