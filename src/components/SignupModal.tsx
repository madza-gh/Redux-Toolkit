import ModalWrapper from "./ModalWrapper";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeSignupModal, openLoginModal } from "../store/uiSlice";
import { useState, useEffect } from "react";
import { registerUser } from "../store/userSlice";

function SignupModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error, userInfo } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) dispatch(closeSignupModal());
  }, [userInfo]);

  function handleModalClose() {
    dispatch(closeSignupModal());
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()

    dispatch(registerUser({ name, email, password }));
  }

  function handelSwitchToLogin() {
    dispatch(closeSignupModal());
    dispatch(openLoginModal());
  }

  return (
    <ModalWrapper onClose={handleModalClose}>
      <h2>ثبت نام</h2>

      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="نام کاربری"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="ایمیل"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="پسورد"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "در حال ثبت نام" : "ثبت نام"}
          </button>
        </form>
        {error && <p>{error}</p>}
        <p>
          قبلا ثبت نام کردی؟ <button onClick={handelSwitchToLogin}>ورود</button>
        </p>
      </div>
    </ModalWrapper>
  );
}

export default SignupModal;
