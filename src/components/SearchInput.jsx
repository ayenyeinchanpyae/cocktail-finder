import { useRef } from "react";
import { useGlobalContext } from "../context/context";

import "./SearchInput.css";

const SearchInput = () => {
  const searchValue = useRef();
  const { setSearchTerm } = useGlobalContext();
  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Find a little taste of heaven</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
