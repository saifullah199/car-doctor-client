import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-2xl my-7">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
        <img src={person} className=" rounded-lg shadow-2xl w-3/4" />
        <img src={parts} className=" rounded-lg shadow-2xl w-1/2 absolute right-0 top-1/2 border-8 border-white" />
    </div>
    <div className="lg:w-1/2">
        <h3 className="text-3xl font-bold text-orange-500"> About Us</h3>
      <h1 className="text-5xl font-bold"> We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum
       available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which donot look even slightly
         believable. </p>
      <p className="">There are many variations of passages of Lorem Ipsum
       available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which donot look even slightly
         believable. </p>
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;