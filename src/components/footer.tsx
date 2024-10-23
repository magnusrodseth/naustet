import { Muted } from "./typography";

const Footer = () => {
  return (
    <Muted className="pb-2">
      <div>
        Developed by{" "}
        <a
          href="https://github.com/magnusrodseth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition transform duration-150 ease-in-out"
        >
          Magnus Rødseth
        </a>
      </div>
    </Muted>
  );
};

export default Footer;
