import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const showAlertAndRedirect = async () => {
      alert("로그인이 필요합니다.");
      // 로그인 페이지로 리다이렉트
      navigate("/login");
    };

    // 로그인이 되어 있지 않은 경우 경고창과 리다이렉트를 수행
    const token = localStorage.getItem("userToken");
    if (!token) {
      showAlertAndRedirect();
    }
  }, []);

  return !!localStorage.getItem("userToken");
};

export default useAuthentication;

{
  /*  //로그인 토큰 조회후 유무에따른 사용자 접근제어
  const isAuthenticated = useAuthentication();
  const token = localStorage.getItem("userToken");
  const authenticated = !!token;
 사용 컴포넌트에 기본적으로 사용하면될듯
  */
}
