import Login from './Login';
import Logout from './Logout';

function Log (props) {
     const isLogin = props.isLogin;

     if(isLogin) {
          return <Login />
     }
     return <Logout />
}

export default Log;