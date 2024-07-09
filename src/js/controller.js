import * as model from './model';
import { GET_IP_INFO, GET_USER_IP } from './utils/config';
import { ShowIPDataView, SearchIPView, ShowMap } from './view';
import 'leaflet';

const showIPDataView = new ShowIPDataView();
const searchIPView = new SearchIPView();
const showMap = new ShowMap();

const controlShowIPData = async query => {
  try {
    showIPDataView.renderLoadingSpinner();

    model.state.query = query;

    await model.getUserIP(GET_USER_IP);

    await model.getIPData(GET_IP_INFO);

    showIPDataView.render(model.state.IPData);

    showMap.renderMap([model.state.lat, model.state.lon]);

    console.log(model.state);
  } catch (error) {
    console.error(error);
  }
};

const init = () => {
  searchIPView.addHandlerShowIPData(controlShowIPData);
};

init();
