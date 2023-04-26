import { clients } from '../constants';
import styles from '../style';

const Clients = () => {
  return (
    <section
      className={`flex flex-row  justify-between items-center w-full gap-10`}>
      {clients.map((client) => (
        <div key={client.id}>
          <img src={client.logo} />
        </div>
      ))}
    </section>
  );
};

export default Clients;
