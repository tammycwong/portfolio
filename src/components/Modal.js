function Modal({isOpen, setIsOpen, activeVideo}) {
    function handleClose() {
        setIsOpen(false);
    }
    if (isOpen) {
        return (
            <div className="modal-background" onClick={(handleClose)} >
                <div className="modal">
                {/* <button className="close" onClick={(handleClose)}>Close</button> */}
                <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${activeVideo}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
    
                </div>
            </div>
        ) 
    } else {
        return null
    }
}

export default Modal;