const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={` ${styles} py-4 px-6 bg-blue-gradient font-poppins font-normal text-[18px] outline-none font-primary`}>
      Get Started
    </button>
  );
};

export default Button;
