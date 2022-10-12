import { Fragment, useState } from "react";
import NeedhelpModal from "components/NeedhelpModal/index";
// import ContactModal from "components/ContactModal";
import ContactImage from "../../images/need-help.png";

function ChatBot() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <button
        onClick={() => setShowModal(true)}
        className="animate-bounce fixed bottom-0 hidden md:block right-4 bg-primary rounded-lg px-5 font-medium max-auto py-2 text-white hover:scale-105 duration-300 "
      >
        Need Help? Contact us!
      </button>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 md:hidden right-6 bg-white rounded-full font-medium max-auto p-4 drop-shadow-xl hover:scale-105 duration-300 animate-bounce "
      >
        <img src={ContactImage} width={40} height={40} alt="Contact Us" />
      </button>
      {showModal ? (
        <NeedhelpModal setShowModal={setShowModal} showModal={showModal} />
      ) : null}
    </Fragment>
  );
}

export default ChatBot;
