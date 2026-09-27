const Footer = () => {
  return (
    <footer className="container mx-auto mt-18 lg:mt-24 px-4 py-12 flex flex-col items-center justify-center gap-2 text-gray-400 border-t border-gray-800">

      <p>@{new Date().getFullYear()} Quesslyn</p>
      
      <p>Made with 💖 by Somenath Choudhury</p>

    </footer>
  );
};
export default Footer;
