import { createAction, props } from '@ngrx/store';
import { Group, Record } from '../models/bookmarks.model';

export const addBookmark = createAction('[bookmarks] add new bookmark', props<{ record: Record }>());
export const removeBookmark = createAction('[bookmarks] remove bookmark', props<{ id: string }>());
export const addGroup = createAction('[bookmarks] add new group', props<{ group: Group }>());
