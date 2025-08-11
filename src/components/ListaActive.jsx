function ListaActive({ children }) {
  return (
    // <li
    //   className="text-sm bg-amber-50 w-6 h-6 rounded-full pt-0.4"
    //   {...props}
    // ></li>
    <li className="text-sm bg-amber-50 w-6 h-6 rounded-full pt-0.4">
      {children}
    </li>
  );
}

export default ListaActive;
