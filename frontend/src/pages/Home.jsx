import React, { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
import Header from "../components/Header";
import { USERNAME } from "../constants";

function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const user = localStorage.getItem(USERNAME);

  const getNotes = async () => {
    try {
      const res = await api.get("/api/notes/");
      setNotes(res.data);
      console.log("Notes fetched successfully:", res.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const deleteNote = async (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Note deleted successfully");
          getNotes();
        } else alert("Error deleting note");
      })
      .catch((err) => alert(err));
  };

  const createNote = async (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", {
        content,
        title,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("Note created successfully");
          setTitle("");
          setContent("");
          getNotes();
        } else {
          alert("Error creating note");
        }
      });
  };

  return (
    <div className="home-container">
      <Header username={user} />

      <div className="main-grid">
        {/* Notes grid, 2/3 width */}
        <div className="notes-area">
          <div className="notes-grid">
            {notes.map((note) => (
              <Note note={note} onDelete={deleteNote} key={note.id} />
            ))}
          </div>
        </div>

        {/* Form, 1/3 width */}
        <div className="form-area">
          <div className="form-container">
            <h2>Create a New Note</h2>
            <form onSubmit={createNote} className="note-form">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                name="content"
                value={content}
                required
                onChange={(e) => setContent(e.target.value)}
              ></textarea>

              <button type="submit" className="form-button">
                ➕ Create Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
