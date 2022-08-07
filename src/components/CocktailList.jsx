import React from "react";
import Loader from "./Loader";
import { useGlobalContext } from "../context/context";
import CocktailCard from "./CocktailCard";

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loader />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-8">
      {cocktails.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </div>
  );
}
