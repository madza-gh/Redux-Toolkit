import { useAppDispatch } from "../store/hooks"
import { closeLoginModal } from "../store/uiSlice"


function LoginModal(){

const dispatch = useAppDispatch()

function handleCloseButton(){
    dispatch(closeLoginModal())
}

    return(
        <div className="modal-backdrop">
            <div className="modal">
                <button className="close-btn" onClick={handleCloseButton}>x</button>

                <h2>ورود</h2>

                <form>
                    <input type="email" placeholder="ایمیل" />
                    <input type="password"  placeholder="رمز عبور"/>
                    <button type="submit">ورود</button>
                </form>
            </div>
        </div>
    )
}

export default LoginModal