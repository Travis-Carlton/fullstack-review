import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {userLogin} from '../../redux/reducer';
// import {Link} from 'react-router-dom';


export default connect (mapStateToProps, {userLogin })(class Profile extends Component {
    constructor(){
        super();
        this.state = {
            loading: false,
            error: null
        }
    }

    componentDidMount(){
        axios.get('/api/me').then(res => {
            this.props.userLogin(res.data);
        }).catch(error => {
            this.setState({ error })
        }).then(()=>{
            this.setState({ loading: false });
        })
    }

    render() {
        const { loading, error } = this.state;
        const {user} = this.props;
        // console.log(this.props)
        const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
        const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
        // window.location = url;
        // console.log(user)
        return (
            <div>
                <h1>Profile</h1>
                {loading
                    ? <div>loading...</div>
                    : error
                        ? <div>There was an error loading</div>
                        : user
                            ? <div>
                                <div>Name: {user.name}</div>
                                <div>Email: {user.email}</div>
                                <img src={user.picture} />
                              </div>
                              : <div>You need to <a href={url}>login</a></div>
                }
            </div>
        );
    }
})

function mapStateToProps(sT){
    const {user} = sT;
    return {
        user
    }
}

// export default connect(mapStateToProps)(Profile)