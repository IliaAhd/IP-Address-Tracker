import { state } from '../model';

export const AJAX = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error('Something went wrong!');

    // if (data.status === 'fail') return;
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateState = data => {
  state.IPData = data;
};
