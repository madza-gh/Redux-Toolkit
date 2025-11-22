import ModalWrapper from "./ModalWrapper";
import { useAppDispatch } from "../store/hooks";
import { closeSignupModal } from "../store/uiSlice";
import { useState } from "react";


function SingupModal(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()

    function handleModalClose(){
        dispatch(closeSignupModal)
    }
    
    return(
        <ModalWrapper onClose={handleModalClose}>
            <h2>ثبت نام</h2>

            <div>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">ثبت نام</button>
                </form>
            </div>
        </ModalWrapper>
    )
}

export default SingupModal