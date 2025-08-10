function Input(props) {
  return (
    <input
      className="border border-gray-300 text-black placeholder:text-neutral-300 text-xs p-2 mb-3 min-[1440px]:mb-8 w-full rounded-md "
      {...props}
    />
  );
}

export default Input;
