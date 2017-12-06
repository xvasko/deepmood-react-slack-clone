import { combineReducers } from 'redux';
import { allIds } from './allIds';
import { byId } from './byId';
import { isFetchingChannels } from './isFetchingChannels'
import { activeChannel } from './activeChannel'
import { isInviteModalOpen } from './isInviteModalOpen'

export const channels = combineReducers({
    activeChannel,
    allIds,
    byId,
    isInviteModalOpen,
    isFetchingChannels
});
