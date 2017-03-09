export function loadSeries(data) {
  return { type: 'SERIES_INFO@LOAD_COMPLETE', data };
}

export function findCharacters(data) {
  return { type: 'CHARACTERS@FIND_ALL_COMPLETE', data };
}

export function findComics(data) {
  return { type: 'COMICS@FIND_ALL_COMPLETE', data };
}

export function setModal(data) {
  return { type: 'MODAL@SET', data };
}

export function clearModal() {
  return { type: 'MODAL@CLEAR' };
}

export function seriesInfoSearch(seriesInfo) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${seriesInfo}`)
   .then(r = r.json())
   .then((data) => {
     const series = data.data.results[0];
     dispatch(loadSeries(series));
     dispatch(findCharacters(series.id));
     dispatch(findComics(series.id));
   });
  };
}

export function charactersFindForId(id) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
    .then(r = r.json())
    .then((data) => {
      const characters = data.data.results;
      dispatch(findCharacters(characters));
    });
  };
}

export function comicsFindForId(id) {
  return (next) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/comics`)
    .then(r = r.json())
    .then((data) => {
      const comics = data.data.results;
      dispatch(findComics(comics));
    });
  };
}
