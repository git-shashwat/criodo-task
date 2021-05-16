import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsRestaurantsListFetching } from "../../redux/restaurant/restaurant.selectors";
import { RootState } from "../../redux/root/root.reducer";
import WithSpinner from "../with-spinner/with-spinner.component";
import RestaurantsList from "./restaurants-list.component";
import { IRestaurantsListDesiredSelection } from "./restaurants-list.types";

const mapStateToProps = createStructuredSelector<
  RootState,
  IRestaurantsListDesiredSelection
>({
  isLoading: selectIsRestaurantsListFetching,
});

const RestaurantsListContainer: any = compose(
  connect(mapStateToProps),
  WithSpinner
)(RestaurantsList);

export default RestaurantsListContainer;
