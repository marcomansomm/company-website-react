import FounderCard from './FounderCard';

const Founders = () => {
  return (
    <div className="container">
      <div className="row">
        <FounderCard
          imageSrc={`${process.env.PUBLIC_URL}/images/founders/luana.png`}
          name="Luana Dantas"
          title="CEO"
          description="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."
        />
        <FounderCard
          imageSrc={`${process.env.PUBLIC_URL}/images/founders/marco.png`}
          name="Marcoantonio Manso"
          title="CTO"
          description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
        />
        <FounderCard
          imageSrc={`${process.env.PUBLIC_URL}/images/founders/joao-gomes.jpeg`}
          name="João Guilherme"
          title="COO"
          description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
        />
      </div>
      <hr className="featurette-divider" />
    </div>
  )
};

export default Founders;