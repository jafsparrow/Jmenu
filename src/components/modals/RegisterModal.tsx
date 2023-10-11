import { component$, useSignal, $, useContext } from "@builder.io/qwik";
import Modal from "./modal";
import Heading from "../Heading";
import { ModalContext } from "~/providers/ModalProvider";

export default component$(() => {
  const isLoading = useSignal(false);
  // below should be a context
  const modalContext = useContext(ModalContext);
  const isOpen = modalContext.isOpen && modalContext.modalType == "register";
  const handleSome = $(() => {
    modalContext.isOpen = false;
    return;
  });
  return (
    <Modal
      disabled={isLoading.value}
      isOpen={isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={handleSome}
      onSubmit={handleSome}
    >
      <div q:slot="body">
        <Heading title="Welcome to Blah" subtitle="bro code 1234 " center />
      </div>
      <div q:slot="footer">footer conent</div>
    </Modal>
  );
});
