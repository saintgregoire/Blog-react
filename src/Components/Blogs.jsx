import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function Blogs() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const resp = await GlobalApi.getPost();
      const result = resp.data.results.map((item, index) => ({
        id: index,
        name: item.name,
        height: item.height,
        mass: item.mass,
        hair_color: item.hair_color,
        eye_color: item.eye_color,
        gender: item.gender
      }));
      setPost(result);
    } catch (error) {
      console.error('Data loading error:', error);
    }
  };

  return (
    <div className='flex flex-wrap justify-center gap-4 mt-12'>
      {post.map((item) => (
        <article className='border-2 border-red-500 rounded-lg basis-[20%] p-4 hover:scale-110 hover:border-green-500 hover:rotate-[360deg] transition-all duration-500 ease-in-out' key={item.id}>
          <h2><strong>{item.name}</strong></h2>
          <p><strong>Gender:</strong> {item.gender}</p>
          <p><strong>Hair color: </strong>{item.hair_color}</p>
          <p><strong>Eyes color: </strong>{item.eye_color}</p>
          <p><strong>Height: </strong>{item.height}</p>
          <p><strong>Mass: </strong>{item.mass}kg</p>
        </article>
      ))}
    </div>
  )
}

export default Blogs