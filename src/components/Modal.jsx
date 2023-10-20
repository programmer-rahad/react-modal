import { useState, useEffect } from "react";
import "./Modal.scss";

function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  useEffect(() => { 
    document.addEventListener("keydown", function (e) {
      if (e.keyCode === 27 || e.key === "Escape") {    
       setModal(false)
      }
    });
  }, []);
  return (
    <div className="modal-wrapper">
      <button className="btn" onClick={toggleModal}>
        show modal
      </button>
      <div className={`modal-overlay ${modal ? "show-modal" : ""}`}>
        <div className="modal-container">
          <h3>React Modal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            eligendi minus dolorum vero magni, natus saepe animi architecto,
            rerum ullam soluta nihil facilis nam et! A incidunt assumenda amet!
            Aspernatur unde commodi ex temporibus quisquam, quod sit praesentium
            exercitationem voluptatum, corrupti eaque enim dolorem. Quidem amet
            aliquam exercitationem voluptatibus aliquid libero aspernatur alias
            autem. Possimus molestiae nam alias blanditiis placeat quo commodi
            voluptatum asperiores distinctio magni obcaecati saepe, quisquam
            eveniet eum atque est pariatur iure cupiditate, odit dolore vitae
            rem. Maiores aut nemo quia? Maxime nam unde rem cumque, explicabo
            adipisci aliquam necessitatibus, iure consectetur consequatur aut
            illum numquam mollitia.
          </p>
          <button className="close-modal-btn" onClick={toggleModal}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 352 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
