import { h, Component } from 'preact';
import {mobileClosedMessageAvatarStyle, closedChatAvatarImageStyle} from './style';
import { IConfiguration } from '../typings';

export default class ChatFloatingButton extends Component<IChatFloatingButtonProps, any> {

    render({onClick, conf}: IChatFloatingButtonProps, {}) {
        return (
            <div style={{position: 'relative', cursor: 'pointer'}} onClick={this.props.onClick}>
            </div>
        );
    }
}

interface IChatFloatingButtonProps {
    onClick: any,
    conf: IConfiguration
}
