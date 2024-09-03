import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isOpen: false,
    type: "add",
    data: null,
  });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Dummy Note"
            date={"2nd Sept 2024"}
            isPinned={true}
            tags="#dummy"
            content="Dummy note content"
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl theme-brown absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ ...openAddEditModal, isOpen: true });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Modal
        isOpen={openAddEditModal?.isOpen}
        onRequestClose={() => {}}
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2" } }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5"
      >
        <AddEditNotes
          type={openAddEditModal?.type}
          noteData={openAddEditModal?.data}
          onClose={() =>
            setOpenAddEditModal({
              isOpen: false,
              type: "add",
              data: null,
            })
          }
        />
      </Modal>
    </div>
  );
};

export default Home;
