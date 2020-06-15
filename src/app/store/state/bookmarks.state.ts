import { Record, Group } from '../models/bookmarks.model';
import * as uuid from 'uuid';

export interface BookmarksState {
  records: Record[];
  groups: Group[];
}

export const initialBookmarksState: BookmarksState = {
  records: [],
  groups: [
    {
      id: uuid.v4(),
      name: 'work'
    },
    {
      id: uuid.v4(),
      name: 'leisure'
    },
    {
      id: uuid.v4(),
      name: 'personal'
    }
  ]
};
