import { robot, discount } from '../assets';
import styles from '../style';
import GetStarted from './GetStarted';
const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col  ${styles.paddingY}  `}>
      <div
        className={`flex-col ${styles.flexStart} flex-1 sm:px-16 xl:px-0 px-6 `}>
        <div className="flex items-center flex-row bg-discount-gradient px-4 py-[6px] rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount For <span className="text-white">1 Month </span>
            Account
          </p>
        </div>
        <div className=" flex flex-row items-center justify-start gap-8 w-full">
          <h1 className=" text-white text-[52px] ss:text-[72px] ss:leading-[100px] leading-[75px] font-semibold tracking-[0.1rem] font-poppins">
            The Next
            <br className="sm:block hidden" />{' '}
            <span className="text-gradient">Generation</span>{' '}
            <br className="sm:block hidden" />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 top-0 right-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="text-white text-[52px] ss:text-[64px] ss:leading-[100px] leading-[75px] font-semibold tracking-[0.1rem] font-poppins">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex flex-1 relative my-10 md:my-0 ${styles.flexCenter}`}>
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="w-[40%] h-[35%] absolute pink__gradient top-0 z-[0]"></div>
        <div className="w-[80%] h-[80%] rounded-full absolute white__gradient bottom-40 z-[1]"></div>
        <div className="w-[50%] h-[50%] absolute blue__gradient bottom-20 right-20 z-[0]"></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}  flex`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
