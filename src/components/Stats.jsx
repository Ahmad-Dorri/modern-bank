import { stats } from '../constants';
import styles from '../style';
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex flex-1 flex-row  items-center sm:justify-start justify-center m-3  `}>
          <h4 className="text-white  sm:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] font-semibold font-poppins">
            {stat.value}
          </h4>
          <p className="text-gradient  sm:text-[20px] text-[15px] xs:leading-[25px] leading-[21px] font-normal font-poppins ml-3 uppercase truncate">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
