"use client";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/app/redux/features/counterSlice";

const counter = () => {
  // Access the counter state
  const count = useSelector(
    (state: ReduxGlobal.IRootState) => state.counter.value,
  );

  // useDispatch hook dispath actions
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </section>
  );
};

export default counter;
