import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Editcomment = ({ commentId }) => {
  const { blogId } = useParams();
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/blog/${blogId}/comment/${commentId}`,
          { withCredentials: true }
        );
        setData(response.data);
        setContent(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:4000/blog/${blogId}/comment/${commentId}`,
        { content: content },
        { withCredentials: true }
      );
      console.log("Comment updated:", response.data);
      setData(response.data);
      setContent(response.data.content);
      setIsEdit(false);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const EditToggle = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };
  return (
    <div>
      <form action="" method="post" onSubmit={handleEdit}>
        <div>
          {isEdit && data && (
            <div>
              <input
                name="content"
                value={content}
                id=""
                onChange={(e) => setContent(e.target.value)}
                className="border border-solid w-80"
              />
            </div>
          )}
        </div>

        <button
          className="px-3   capitalize text-sm py-2"
          onClick={EditToggle}
          edit={isEdit}
        >
          
          {isEdit ? "Cancel" : "Edit"}
        </button>
        {isEdit && (
          <button type="submit" className="px-3 capitalize text-sm py-2">
            Save
          </button>
        )}
      </form>
    </div>
  );
};

export default Editcomment;
