import { createReducer, on } from '@ngrx/store';
import { initialBookmarksState } from '../state/bookmarks.state';
import { addBookmark, addGroup, removeBookmark } from '../actions/bookmarks.actions';

const bookmarksReducer = createReducer(initialBookmarksState,
  on(addBookmark, (state, { record}) => {
    return { ...state, records: [...state.records, record] };
  }),
  on(removeBookmark, (state, { id }) => {
    const records = [...state.records];
    const index = records.findIndex((item) => item.id === id);
    records.splice(index, 1);

    return { ...state, records };
  }),
  on(addGroup, (state, { group }) => {
    return { ...state, groups: [...state.groups, group] };
  })
);

export function getBookmarksReducer(state, action) {
  return bookmarksReducer(state, action);
}
