import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editcomment = () => {
  const { blogId } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/blog/${blogId}/comment`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <form action="" method="post">
        {data &&
          data.length > 0 &&
          data.map((er) => {
            return (
              <div>
                <textarea
                  name="content"
                  value={er.content}
                  id=""
                  cols="20"
                  rows="4"
                  className="border border-solid w-80"
                ></textarea>
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default Editcomment;
