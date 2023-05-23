import ContainerRow from "./Bootstrap/ContainerRow";

const Home = () => {
  return (
    <div className="Home">
      <ContainerRow fluid={true}>
        <div className="col-12">
          <h1 className="display-4 AppHeading text-center">
            Welcome to Praveen&rsquo;s Modified Create React App!
          </h1>
        </div>
      </ContainerRow>
    </div>
  );
};

export default Home;
