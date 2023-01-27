import React from 'react'

interface ModalProps{
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalProfile = ({setModal}:ModalProps) => {
  return (
    <div className='profile-modal'>
        <div className='modal-main'>
            <p>Changes Saved</p>
            <button className='main-button' onClick={()=>setModal(false)}>Close</button>
        </div>
    </div>
  )
}

export default ModalProfile