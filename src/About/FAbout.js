import './FAbout.css';
import { FaCouch, FaCube, FaDraftingCompass, FaVideo } from 'react-icons/fa';

const FAbout = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gray-100">
      {/* Hero Section */}
      <section className="hero-section2 relative h-full w-full flex items-center justify-center">
        {/* Content Section */}
        <div className="absolute top-20 right-40 text-center px-6 md:px-10 lg:max-w-2xl">
          {/* Header */}
          <h1 className="text-[40px] sm:text-[26px] font-bold text-black leading-tight mb-4">
            Hey there! I'm Ayoub Rahim
          </h1>
          <p className="text-[18px] font-bold text-gray-700  mb-4   leading-relaxed">
            Designing Spaces, Crafting Experiences.
          </p>

          {/* About Section */}
          <p className="text-[20px]">
          <strong>  I am an Architect, Interior Designer, and 3D Visualizer with 
             5+ years of experience in this field. 
            Over the last few years<br></br> I have collaborated with individuals and organizations to 
            transform architectural ideas into stunning, realistic visual experiences.</strong>
          </p>

          {/* Specialization Section */}
          <div className="grid grid-cols-2 gap-6">

  <div className="col-span-1">
    <div className="mt-6 text-left">
      <h2 className="text-[18px] font-semibold text-black mb-3">I specialize in:</h2>
      <ul className="list-none text-gray-700 space-y-2">
        <li className="flex items-center">
          <FaCouch className="text-customBrown mr-2" /> Interior Design
        </li>
        <li className="flex items-center">
          <FaCube className="text-customBrown mr-2" /> 3D Modeling
        </li>
        <li className="flex items-center">
          <FaDraftingCompass className="text-customBrown mr-2" /> 3D Visualization
        </li>
        <li className="flex items-center">
          <FaVideo className="text-customBrown mr-2" /> Walkthrough Animations
        </li>
      </ul>
    </div>
  </div>

 
  <div className="col-span-1">
    <div className="mt-8 top-20 text-left">
      <p className="text-gray-900 top-10 font-semibold text-[18px] mb-2">
        Let’s bring your vision to life!
      </p>
      <a
        href="tel:0646053376"
        className="inline-block bg-customBrown text-white py-2 px-6 rounded-md hover:bg-customBrown transition duration-300"
      >
        Contact Me
      </a>
    </div>
  </div>
</div>


          {/* Tools & Technologies 
          <div className="mt-6">
            <p className="text-[16px] text-gray-800">
              I use advanced software like <strong>Blender</strong>, <strong>AutoCAD</strong>, and 
              <strong> Unreal Engine</strong> to create high-quality 3D renders, animations, 
              and virtual reality experiences that bring architectural concepts to life.
            </p>
          </div>
*/}
          {/* Call-to-Action */}
         
        </div>

        {/* Image Section */}
        <img
          src={`${process.env.PUBLIC_URL}/logo/1.png`}
          className="hidden   sm:block absolute -left-10 top-8 h-[550px] w-auto"
          alt="3D Architectural Design"
        />
      </section>
    </div>
  );
};

export default FAbout;
