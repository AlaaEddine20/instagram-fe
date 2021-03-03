import React, { useCallback, useEffect } from "react";
// icons
import { GrClose, GrEmoji } from "react-icons/gr";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
// css
import "./Modal.css";

const PostModal = ({ showModal, closeModal }) => {
  // to allow user close the modal with ESC button
  const onKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        closeModal(true);
      }
    },
    [showModal, closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  }, [onKeyPress]);

  return (
    <>
      {showModal && (
        <div id="modal-container">
          <div id="modal-content">
            <div id="modal-left">
              <img src="https://via.placeholder.com/400x500" alt="modal-img" />
            </div>
            <div id="modal-right">
              <div id="modal-top">
                <div id="modal-top-left">
                  <img
                    id="profile-pic-nav"
                    src="https://via.placeholder.com/150"
                    alt="profile-pic"
                  />
                  <h6 className="ml-4">Username</h6>
                </div>

                <div id="modal-top-right">
                  <BiDotsHorizontalRounded style={{ cursor: "pointer" }} />
                </div>
              </div>
              <hr />
              <div id="modal-center">
                <div id="modal-center-left">
                  <img
                    id="profile-pic-nav"
                    src="https://via.placeholder.com/150"
                    alt="profile-pic"
                  />
                </div>
                <div id="modal-center-right">
                  <span className="ml-4 mr-1">
                    <strong>Username</strong>
                  </span>
                  <span>Caption here</span>
                </div>
              </div>
              <hr />
              <div id="modal-bottom">
                <div id="modal-icons-bottom">
                  <div id="icons-left">
                    <div className="mx-1">
                      <FiHeart style={{ fontSize: "24px" }} />
                    </div>
                    <div className="mx-1">
                      <FaRegComment style={{ fontSize: "24px" }} />
                    </div>
                    <div className="mx-1">
                      <FiSend style={{ fontSize: "24px" }} />
                    </div>
                  </div>
                  <div>
                    <BsBookmark style={{ fontSize: "24px" }} />
                  </div>
                </div>
              </div>
              <div id="modal-insert-comment">
                <div id="emoji">
                  <GrEmoji style={{ fontSize: "24px" }} />
                </div>
                <div id="input-text-comment">
                  <input type="text" placeholder="Add your comment.." />
                </div>
                <div id="pubblish-btn">
                  <button>Pubblish</button>
                </div>
              </div>
            </div>
          </div>
          <button onClick={closeModal} id="close-modal">
            <GrClose style={{ height: "30px", width: "30px" }} />
          </button>
        </div>
      )}
    </>
  );
};

export default PostModal;