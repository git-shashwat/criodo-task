import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import "./App.css";
import Header from "./components/header/header.component";
import RestaurantsList from "./components/restaurants-list/restaurants-list.component";
import { fetchRestaurantsListStart } from "./redux/restaurant/restaurant.actions";
import { RestaurantActionTypes } from "./redux/restaurant/restaurant.types";

interface IAppProps {
  fetchRestaurantsListStart: () => RestaurantActionTypes;
}

const App: React.FC<IAppProps> = ({ fetchRestaurantsListStart }) => {
  useEffect(() => {
    fetchRestaurantsListStart();
  }, [fetchRestaurantsListStart]);

  return (
    <div className='App container'>
      <Header />
      <RestaurantsList />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRestaurantsListStart: () => dispatch(fetchRestaurantsListStart()),
});

export default connect(null, mapDispatchToProps)(App);
