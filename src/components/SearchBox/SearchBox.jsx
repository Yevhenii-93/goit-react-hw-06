import css from "./SearchBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function SearchBar() {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounce(value, 1000);

  useEffect(() => {
    dispatch(changeFilter(debouncedValue));
  }, [debouncedValue, dispatch]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={css.container}>
      <input
        className={css.search}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
