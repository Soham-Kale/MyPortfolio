import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <div className="text-center">
      <p className="mb-2">{`</>`} with 🫶🏻 and 🧋</p>
      <p className="mb-2">
        Copyright © {new Date().getFullYear()} Soham Kale
      </p>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");
