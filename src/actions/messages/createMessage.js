import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers';

export const createMessage = (channelId, message) =>
    (dispatch, getState) => {
        axios.post(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message`,
            JSON.stringify({'value': `${message}`, 'customData': 'nedefinovane'}),
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then((result) =>
                dispatch({type: 'CHANNELS_CREATE_MESSAGE', payload: { channelId: '43303430-1d01-472e-aef9-6eb0dda69549', data: result.data}})
            )
            .catch((error) =>
                console.log(error)
            );
    }