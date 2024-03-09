const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>Your {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the time with <strong>X seconds left.</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
