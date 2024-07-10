import { AJAX, updateState } from './utils/helper';

export const state = {
  IPData: {},
  userIP: {},
};

export const getUserIP = async url => {
  try {
    const IP = await AJAX(url);
    const { ip } = IP;
    state.userIP = ip;
  } catch (error) {
    throw error;
  }
};

export const getIPData = async url => {
  try {
    if (state.query === '') {
      const IPData = await AJAX(`${url}${state.userIP}`);
      updateState(IPData, IPData);
    } else {
      const IPData = await AJAX(`${url}${state.query}`);
      updateState(IPData, IPData);
    }
  } catch (error) {
    throw error;
  }
};
