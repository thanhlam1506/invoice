import { useNavigate } from 'react-router-dom';

type NavigatorProp = {
  currentPage: string,
}
const navigateToLogin = (navigatorProp: NavigatorProp) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
    navigate('login');
}

export default navigateToLogin;