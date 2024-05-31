import Login from './Login';
import Logout from './Logout';

function Log (props) {
     const isLogin = props.isLogin;
     return (
          <>
          { isLogin ? <Login /> : <Logout />}
          </>
     )
}

export default Log;