const SidebarLinkText = ({ text, icon }) => {
  return (
    <>
      {icon}
      <a
        className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
        href="#!"
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
      >
        {text}
      </a>
    </>
  );
};
export default SidebarLinkText;
