export function loadSeries(data) {
  return { type: 'SERIES_INFO@LOAD_COMPLETE', data };
}

export function findCharacters(data) {
  return { type: 'CHARACTERS@FIND_ALL_COMPLETE', data };
}

export function findComics(id) {
  return { type: 'COMICS@FIND_ALL_COMPLETE', data: id };
}

export function loadModal(id) {
  return { type: 'MODAL@SET', data: id };
}

export function clearComics(id) {
  return { type: 'MODAL@CLEAR', data: id };
}

export function seriesInfoSearch(seriesInfo) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=TITLE&apikey=${seriesInfo}`)
   .then(r = r.json())
   .then((data) => {
     dispatch({
       type: 'SERIES_INFO@LOAD_COMPLETE',
       data: {
         description,
       }
     });
   });
  };
}
