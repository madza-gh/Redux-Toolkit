
type ModalWrapperProps = {
    children: React.ReactNode
    onClose: () => void
}


function ModalWrapper({children, onClose}: ModalWrapperProps){

    function handleModalClick(e: React.MouseEvent){
        e.stopPropagation()
    }

    return(
        <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={handleModalClick}>
        <button className="close-btn" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
    )
}

export default ModalWrapper