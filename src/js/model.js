import { AJAX, updateState } from './utils/helper';

export const state = {
  IPData: {},
  userIP: {},
};

export const getUserIP = async url => {
  try {
    // Get user IP
    const IP = await AJAX(url);

    // Store user IP
    state.userIP = IP.ip;
  } catch (error) {
    throw error;
  }
};

export const getIPData = async url => {
  try {
    // Check if user puts an IP
    if (state.query === undefined) {
      const IPData = await AJAX(`${url}${state.userIP}`);
      updateState(IPData);
    } else {
      const IPData = await AJAX(`${url}${state.query.trim()}`);
      updateState(IPData);
    }
    console.log(state);

  } catch (error) {
    throw error;
  }
};
