import css from "./Result.module.css";

export const Result = ({ res }) => {
  return <div className={css.result}>{res}</div>;
};
