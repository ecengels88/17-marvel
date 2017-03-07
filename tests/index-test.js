/* eslint-env qunit */


test('it is working', (assert) => {
  assert.ok(true);
});


test('When loading series info replace the old series info', (assert) => {
  const oldState = { seriesInfo: [{ title: 'Spider-Girl', dates: '2010-2011' }] };
  const actionOne = { type: 'SERIES_INFO@LOAD_COMPLETE', data: [{ title: 'Red Hulk', dates: '2005-2007' }] };

  assert.deepEqual(reducer(oldState, actionOne), { seriesInfo: actionOne.data });
});
