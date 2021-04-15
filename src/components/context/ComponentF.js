import React from 'react';
import { UserContext,ChannelContext } from '../../App';

function ComponentF() {
    return (
        <div>
            ComponentF
            {/* without useContext */}
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (<div>User Context value {user}, channel context value { channel }</div>)
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
