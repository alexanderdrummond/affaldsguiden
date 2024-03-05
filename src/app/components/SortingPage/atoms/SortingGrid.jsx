import { useState, useEffect } from 'react';

const SortingGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/section/1')
      .then(response => response.json())
      .then(data => setData(data.categories))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.id} className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={item.image_filepath}
            alt={item.title}
            className="w-full object-cover h-48"
          />
          <div className="p-4">
            <h5 className="text-lg font-bold">{item.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortingGrid;
