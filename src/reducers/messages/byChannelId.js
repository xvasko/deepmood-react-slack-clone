import * as Immutable from 'immutable';

export const byChannelId = (previousState = Immutable.Map(), action) => {
    switch (action.type) {
        case 'CHANNELS_CREATE_CHANNEL':
            return previousState.set(action.payload.id, Immutable.List());
        case 'CHANNELS_REMOVE_CHANNEL':
            return previousState.delete(action.payload);
        case 'CHANNELS_CREATE_MESSAGE':
            return previousState.set(action.payload.channelId, previousState.get(action.payload.channelId).push(action.payload.data));
        default:
            return previousState;
    }
};
