import styles, { layout } from '../style';
import { apple, bill, google } from '../assets';
import useScrollAnimation from '../utils/UseScrollAnimation';
const Billing = () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      id="product"
      className={`${layout.sectionReverse} ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
      } transition-all duration-500 `}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} className="w-[100%] h-[100%] relative z-[5]" />
        <div className="top-0 -left-1/2 white__gradient z-[3] absolute rounded-full w-[50%] h-[50%]"></div>
        <div className="bottom-0 -left-1/2 pink__gradient z-[0] absolute rounded-full w-[50%] h-[50%]"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple store"
            className="w-[128px] h-[42px] mr-5 object-contain cursor-pointer"
          />
          <img
            src={google}
            alt="google store"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
