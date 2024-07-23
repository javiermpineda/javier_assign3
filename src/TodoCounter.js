import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      Completed <span>{completed}</span> From <span>{total}</span> TO DOs
    </h1>
  );
}

export { TodoCounter };
