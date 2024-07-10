import { state } from '../model';

// Fetch API method
export const AJAX = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error('Something went wrong!');

    return data;
  } catch (error) {
    throw error;
  }
};

// Add data to state.IPData
export const updateState = data => {
  state.IPData = data;
};
