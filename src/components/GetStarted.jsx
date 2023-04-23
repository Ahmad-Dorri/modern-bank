import styles from '../style';
import { arrowUp } from '../assets';
const GetStarted = () => {
  return (
    <button
      className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}>
      <div
        className={`${styles.flexCenter} bg-primary rounded-full w-[100%] flex-col h-[100%]`}>
        <div className={`${styles.flexStart} flex-row gap-1`}>
          <p className="text-[18px] font-poppins font-medium leading-[23px]">
            <span className="text-gradient ">Get</span>
          </p>
          <img
            className="object-contain w-[23px] h-[23px] "
            src={arrowUp}
            alt="arrow"
          />
        </div>
        <p className="text-[18px] font-poppins font-medium leading-[23px]">
          <span className="text-gradient ">Started</span>
        </p>
      </div>
    </button>
  );
};

export default GetStarted;
