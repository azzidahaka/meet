const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  return (
    <div id='number-of-events'>
      <input
        type='text'
        value={currentNOE}
        onChange={(e) => {
          console.log(`Set to ${e.target.value}`);
          setCurrentNOE(e.target.value);
        }}
      />
    </div>
  );
};

export default NumberOfEvents;
