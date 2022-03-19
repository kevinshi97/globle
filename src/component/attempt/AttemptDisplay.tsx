import Attempt from "../../interface/attempt";

function AttemptDisplay({ index, attempt }: any) {
  return (
    <div className="attempt">
      <div>
        {attempt.country.name} {attempt.percentage}% {attempt.direction}
        {console.log('attempt:', index, attempt)}
      </div>
    </div>
  );
}

export default AttemptDisplay;