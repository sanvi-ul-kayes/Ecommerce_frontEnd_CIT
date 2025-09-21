const List = () => {
  return (
    <div className="flex justify-between items-center gap-[51px] border-gray-400 border-b mt-[13px]">
      <div className="flex justify-center items-center gap-[14px] mb-[13px]">
        <img
          className="w-[70px] h-[70px] rounded-full"
          src="login.jpg"
          alt="login"
        />
        <div>
          <h2 className="text-[18px] font-semibold">Friends Reunion</h2>
          <p className="text-[14px] font-normal text-gray-500">
            Hi Guys, Wassup!
          </p>
        </div>
      </div>
      <button className="w-[87px] h-[30px] bg-teal text-white rounded-[5px] text-[20px] font-semibold">
        Join
      </button>
    </div>
  );
};

export default List;
