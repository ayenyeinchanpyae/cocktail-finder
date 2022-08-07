import { useRef } from "react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import CocktailList from "../components/CocktailList";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const searchValue = useRef();
  const { setSearchTerm } = useGlobalContext();
  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      {/* <form className="flex " onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          ref={searchValue}
          onChange={searchCocktail}
          className="items-center block p-4 pl-10 w-[80%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search cocktails..."
        />
      </form> */}
      <SearchInput />

      <CocktailList className="mt-[30px]" />
    </>
    //search input
    //list
  );
};

export default Home;
