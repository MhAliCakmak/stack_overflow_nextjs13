import React from "react";
import LocalSearchbar from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/Filters";
import { TagFilters, UserFilters } from "@/constants/filter";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";
import TagCard from "@/components/cards/TagCard";
import { GetAllTags } from "@/lib/actions/tag.action";
import NoResult from "@/components/shared/NoResult";

const Page = async () => {
    const result = await GetAllTags({});
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Tags</h1>
      </div>
      <div className="mt-11 flex justify-between  gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing tags"
          otherClasses="flex-1"
        />
        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses=" "
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
    {
        result.tags.length ? (
            result.tags.map((tag)=>{
                return <TagCard key={tag._id} tag={tag}/> 
            })
        ):<NoResult
        title="No Tags Found"
        description="No tags found, please try again with different filters"
        link="/ask-question"
        />
    }
      </section>
    </>
  );
};

export default Page;
