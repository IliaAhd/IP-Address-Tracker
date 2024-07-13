import * as model from './model';
import { GET_IP_INFO, GET_USER_IP } from './utils/config';
import { ShowIPDataView, SearchIPView, ShowMap } from './view';

const showIPDataView = new ShowIPDataView();
const searchIPView = new SearchIPView();
const showMap = new ShowMap();

const controlShowIPData = async query => {
  try {
    // Show loading spinner
    showIPDataView.renderLoadingSpinner();

    // Get user IP
    await model.getUserIP(GET_USER_IP);

    // Get input value (IP address)
    model.state.query = query;

    // Get IP data
    await model.getIPData(GET_IP_INFO);

    // Render IP data
    showIPDataView.render(model.state.IPData);

    // Render map
    controlShowMap(model.state.IPData.latitude, model.state.IPData.longitude);
  } catch (error) {
    showIPDataView.renderError();
    console.error(error);
  }
};

const controlShowMap = (lat, lon) => {
  const coords = [lat, lon];

  // Show map based on coordinate
  showMap.renderMap(coords);
};

const init = () => {
  searchIPView.addHandlerShowIPData(controlShowIPData);
  controlShowIPData();
};

init();
