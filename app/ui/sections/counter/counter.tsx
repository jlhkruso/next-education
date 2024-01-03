"use client";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const counter = () => {
  const count = useSelector((state) => {
    state.counter.count;
  });
  const dispatch = useDispatch();
  return (
    <section>
      <p>Count</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default counter;
