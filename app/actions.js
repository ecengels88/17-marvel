export function loadSeries(data) {
  return { type: 'SERIES_INFO@LOAD_COMPLETE', data: data }
};

export function findCharacters(data) {
 data.id = new Date();
 return {type: 'CHARACTERS@FIND_ALL_COMPLETE', data: data};
};

export function findComics(id) {
  data.id = new Date();
 return {type: 'COMICS@FIND_ALL_COMPLETE', data: id};
};

export function loadModal(id) {
 return {type: 'MODAL@SET', data: id};
};

export function clearComics(id) {
 return {type: 'MODAL@CLEAR', data: id};
};
