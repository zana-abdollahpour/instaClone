import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "atom/modalAtom";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  const uploadPost = async function () {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      caption: captionRef.current.value,
    });
  };

  const addImageToPost = function (e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      selectedFile(readerEvent.target.result);
    };
  };
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-lg shadow-md"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className="flex flex-col items-center justify-center h-[100%]">
            {selectedFile ? (
              <Image
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt="uploaded photo"
                className="object-cover w-full cursor-pointer max-h-64"
              />
            ) : (
              <CameraIcon
                onClick={() => filePickerRef.current.click()}
                className="p-2 text-red-500 transition-transform duration-150 bg-red-200 border-2 rounded-full cursor-pointer hover:scale-110"
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              className="w-full m-4 text-center border-none focus:ring-0"
              type="text"
              maxLength="150"
              placeholder="Your caption..."
              ref={captionRef}
            />
            <button
              disabled={!selectedFile || loading}
              onClick={uploadPost}
              className="w-full p-2 text-white bg-red-600 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100 "
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
