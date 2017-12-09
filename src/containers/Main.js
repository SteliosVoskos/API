import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actionCreators/actions';
import App from '../components/App';

function mapStateToProps(state) {
    return {
        users: state.users.users,
        isLoading: state.users.isLoading,
        isError: state.users.isError
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
};

const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default Main;
