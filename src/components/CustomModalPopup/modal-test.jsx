import { useState } from "react"
import Modal from "./modal";

export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function ToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div className="my-5">

            <button onClick={ToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal onClose={onClose} />
            }
        </div>
    )
}