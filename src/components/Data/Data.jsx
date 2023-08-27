import css from "./Data.module.css";

export const Data = ({ submitData }) => {
  const { amount, interest, years } = submitData;
  return (
    <div className={css.data}>
      Credit Amount: {amount}, Interest Rate: {interest}%, Years: {years}
    </div>
  );
};
