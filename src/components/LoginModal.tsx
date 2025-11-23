import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeLoginModal, openSignupModal } from "../store/uiSlice";
import { useEffect, useState } from "react";
import { loginUser } from "../store/userSlice";
import ModalWrapper from "./ModalWrapper";

function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const { loading, error, userInfo } = useAppSelector((state) => state.user);

  useEffect(() =>{
    if(userInfo){
        dispatch(closeLoginModal())
    }
  },[userInfo])

  function handleCloseButton() {
    dispatch(closeLoginModal());
  }
  function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();

    dispatch(
      loginUser({
        email,
        password,
      })
    );
  }
  function handleSwitchToSignup(){
    dispatch(closeLoginModal())
    dispatch(openSignupModal())
  }

  return (
    <ModalWrapper onClose={handleCloseButton}>
      <h2>ورود</h2>

        <form onSubmit={handleOnSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="ایمیل"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="رمز عبور"
          />
          <button type="submit" disabled={loading}>
            {loading ? "درحال ورود" : "ورود"}
          </button>
        </form>
        {error && <p>{error}</p>}

        <p>حساب کاربری نداری؟ {' '}
          <button onClick={handleSwitchToSignup}>ثبت نام</button>
        </p>
    </ModalWrapper>
  );
}

export default LoginModal;
