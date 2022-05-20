import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import routeMain from "./routes";
import {loadNews} from "store/news/actions";
import {selectList} from "store/news/selectors";
import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";

import "./styles.scss";

const MainPage = () => {
    const dispatch = useDispatch();
    const newsList = useSelector(selectList)
    
    useEffect(() => {
        dispatch(loadNews());
    }, [dispatch])
    
    return (
        <section className="mainPage">
            <PageTitle
                title={
                    <h2>
                        Always <br/> fresh <span>news</span>
                    </h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList.slice(0,6)}/>}
        </section>
    );
  }
  
  export {routeMain};
  
  export default MainPage;