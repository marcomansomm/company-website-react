import Featurette from './Featurette';
import './CompanyInfo.css'

const CompanyInfo = () => {
  return (
    <div className="container marketing">
      <hr className="featurette-divider" />

      <Featurette
        heading="Saiba como é trabalhar conosco"
        subheading=""
        text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
        mediaSrc="https://www.youtube.com/embed/YLLUDwIjD6Q"
        isVideo={true}
      />

      <hr className="featurette-divider" />

      <Featurette
        heading="Oh yeah, it's that good."
        subheading="See for yourself."
        text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
        mediaSrc="https://classic.exame.com/wp-content/uploads/2017/04/mercado-livre-c3a1rea_interna_.jpg?quality=70&strip=info&w=1024"
        isReversed={true}
      />

      <hr className="featurette-divider" />

      <Featurette
        heading="And lastly, this one."
        subheading="Checkmate."
        text="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo."
        mediaSrc="https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2018/06/199802-como-montar-a-estrutura-de-ti-da-sua-empresa-1.png"
      />

      <hr className="featurette-divider" />
    </div>
  );
};

export default CompanyInfo;
