import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDogPic } from "./../redux/selectors/dogs";
import { getDogPic } from "./../redux/thunks/dogs";


export function IndexPage() {
  const dispatch = useDispatch();
  const dog = useSelector(selectDogPic);

  useEffect(() => {
    dispatch(getDogPic());
  }, []);
  return <Fragment>
    <h1>Index Page</h1>
    <img src={dog} alt="Dog" />
  </Fragment>;
}
