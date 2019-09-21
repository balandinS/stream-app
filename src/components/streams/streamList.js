import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStreams } from '../../action'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
    }
    renderAdmin = (streams) => {
        if (streams.userId === this.props.currentUserId) {
            return (
                <div className="right floated content ">
                    <button className="ui blue button">Edit</button>
                    <button className="ui red button">Delete</button>
                </div>
            )
        }
    }
    renderStreams = () => {
        return this.props.streams.map(stream => {
            return (
                <div key={stream.id} className="item">
                    {this.renderAdmin(stream)}
                    <i className="middle aligned large play icon"></i>
                    <div className="content">
                        <div className="header">{stream.title}</div>
                        {stream.description}
                    </div>

                </div>
            )
        })
    }

    renderCreate = () => {
    if(this.props.isSignedIn){
        return (
            <div style={{textAlign: "right"}}>
                 <Link className="ui blue button" to="/streams/new">
                    Create New Stream
                 </Link>
            </div>
        )
    }
    }
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderStreams()}
                </div>
                {this.renderCreate()}
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);