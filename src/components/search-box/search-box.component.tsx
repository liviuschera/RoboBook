import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

interface ISearchBoxProps {
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  className: string;
}

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: ISearchBoxProps) => (
  <div>
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
