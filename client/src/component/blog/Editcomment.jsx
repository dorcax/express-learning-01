import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Editcomment = () => {
  const { blogId,commentId } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/blog/${blogId}/comment/${commentId}`,{withcredentials:true}
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
                <input
                  name="content"
                  value={er.content}
                  id=""
                
                  className="border border-solid w-80"
                />
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default Editcomment;
