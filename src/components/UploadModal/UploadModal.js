/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../atom/modalAtom";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/24/outline";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { useSession } from "next-auth/react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);

  const uploadPost = async function () {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      caption: captionRef.current.value,
      username: session.user.username,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const addImageToPost = function (e) {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-48 left-[50%] translate-x-[-50%] bg-white border-2 rounded-lg shadow-md"
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className="flex flex-col items-center justify-center h-[100%]">
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt="uploaded photo"
                className="object-contain w-full cursor-pointer max-h-64"
              />
            ) : (
              <CameraIcon
                onClick={() => filePickerRef.current.click()}
                className="h-16 p-2 text-red-500 transition-transform bg-red-200 border-2 rounded-full cursor-pointer duration-250 hover:scale-110"
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
