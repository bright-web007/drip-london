const SearchProgress = ({ progress }: { progress: number }) => {
  return (
    <div className="absolute inset-0 z-50 w-full h-full flex items-center justify-center bg-black/70">
      <div className="w-[90%] 2xl:w-[85%] mx-auto flex items-center gap-2 flex-col">
        <div className="bg-beige-500 w-[40%] mx-auto h-2 rounded-full overflow-hidden">
          <div
            className="bg-beige-300 h-full transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <h1 className="text-white font-monserrat text-xl mt-4">Searching</h1>
      </div>
    </div>
  );
};

export default SearchProgress;
