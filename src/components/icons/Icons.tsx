import './icons.scss';

type Props = {
  dataIcons: {
    id: string;
    title: string;
    img: {
      src: string;
      alt: string;
    };
  }[];
};

const Icons = ({ dataIcons }: Props) => {
  return (
    <div className="icons">
      {dataIcons.map((item) => (
        <div key={item.id} className="icon">
          <img className="icon-img" src={item.img.src} alt={item.img.alt} />
          <p className="icon-title">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Icons;
