import React from 'react';
import { connect } from 'react-redux';
import {signin, signout} from '../action'

class AuthGoogle extends React.Component {

    componentDidMount() {
        //? Google's api.js is loaded by a <script> tag in 'index.html'
        //* after the 'client:auth2' library has been successfully retrieved and loaded into 'gapi' then the callback function is called
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '1013755060253-9n7a281m1r4sf81pqkr41sl7l4t79pem.apps.googleusercontent.com',
                    scope: 'email',
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange( this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.onAuthChange)
                })
        })
    }
    onAuthChange = isSignedIn => {
        if(isSignedIn){
            this.props.signin(this.auth.currentUser.get().getId())
        }else{
            this.props.signout()
        }
    }
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    renderButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Signout
                    </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Signin with google
            </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderButton()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {isSignedIn: state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signin,signout})(AuthGoogle);