import {io} from 'socket.io-client';
import AppConfig from '../Config/AppConfig';

const socket = io(AppConfig.APP_URL);

export default socket;
