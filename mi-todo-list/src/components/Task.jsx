import { useAtom } from 'jotai'
import List from './Atom'

const Lists = () => {
    const [list, setList] = useAtom(List)
    return list.map((item) => {
      const { description, isDone, _id } = item;
      return (
        <div className="lista" key={_id}>
          <p style={{ textDecoration: isDone ? "line-through" : "none" }}>
            {description}
          </p>
          <div className="interaciones">
            <input
              type="radio"
              name={_id}
              checked={isDone}
              onChange={() => {
                const newList = list.map((task) =>
                  task._id === _id ? { ...task, isDone: !task.isDone } : task
                );
                setList(newList);
              }}
            />
  
            <p
              className="X"
              onClick={() => {
                const newList = list.filter((item) => item._id !== _id);
                setList((prev) => newList);
              }}
            >
              X
            </p>
          </div>
        </div>
      );
    });
  };

export default Lists