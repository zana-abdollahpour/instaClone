import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "atom/modalAtom";
import Modal from "react-modal";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] h-72 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-lg shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-[100%]">
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
}
