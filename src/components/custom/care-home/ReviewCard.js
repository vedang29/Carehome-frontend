const ReviewCard = ({ name, review }) => {
    return (
      <div className="mt-4 border-b pb-4">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-gray-600 text-sm">{review}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
  