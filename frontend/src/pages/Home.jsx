import React, { useEffect, useState } from "react";
import api from "../api";

function Home() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
      .delete(`/api/notes/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted successfully");
        else alert("Error deleting note");
      })
      .catch((err) => alert(err));
    getNotes();
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
          getNotes();
        } else {
          alert("Error creating note");
        }
      });
  };

  return (
    <div>
      <div>
        <h2> Notes </h2>
      </div>
      <h2>Create Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title :</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label htmlFor="content">Content :</label>
        <br />
        <textarea
          id="content"
          name="content"
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button type="submit" value="Submit" className="form-button">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default Home;
