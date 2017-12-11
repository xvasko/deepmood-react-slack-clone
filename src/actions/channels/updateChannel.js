import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';
import { createProfileChannels, removeProfileChannels } from '../profile/updateProfileChannels'

export const updateChannel = (id, newUsers) =>
    (dispatch, getState) => {
        let channel = getState().channels.byId.get(id);
        let customData = channel.customData;
        let newCustomData = customData.slice(0, customData.lastIndexOf("[")) + newUsers + "}"
        axios.patch('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502',
            JSON.stringify(
                [
                    {
                        "value":{"id": id, "name": channel.name, "customData": newCustomData},
                        "path": "/channels/" + id,
                        "op": "replace",
                        "from": getState().profile.profileDetails.email
                    }
                ]),
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then((result) => {
                let addUser = JSON.parse(newUsers).length > JSON.parse(getState().channels.byId.get(id).customData).users.length
                let removeUser = JSON.parse(newUsers).length < JSON.parse(getState().channels.byId.get(id).customData).users.length

                dispatch({type: 'CHANNELS_UPDATE_CHANNEL', payload: {channelId: id, newCustomData: newCustomData}});

                // on user add
                if(addUser) {
                    dispatch(createProfileChannels(getState().profile.profileDetails.email))
                // on user remove
                } else if (removeUser) {
                    dispatch(removeProfileChannels(id))
                }
                // on channel name change
            })
            .catch((error) =>
                console.log(error)
            );
    }