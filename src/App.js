import "./App.css";
import "./index.css";
import "./Services/Services";
import Services from "./Services/Services";

function App() {
  const services = [
    {
      title: "Emergency Plumbing Services",
      description:
        "Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 48 48"
          className="spin-icon rounded-full border-4 bottom-14 relative border-violet-900 bg-white"
        >
          <path fill="#FF4C4C" d="M24 4L4 44h40L24 4z" />
          <path fill="#FFF" d="M22 10h4v16h-4z" />
          <path fill="#FFF" d="M10 22h16v4H10z" />
        </svg>
      ),
    },
    {
      title: "Plumbing and Drains",
      description:
        "As the largest plumbing and drain service company, we make thousands of repairs everyday.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 64 64"
          className="spin-icon rounded-full border-4 bottom-14 relative border-violet-900 bg-white"
        >
          <path
            fill="#3498db"
            d="M32 2C15.5 2 2 15.5 2 32c0 14.1 10.2 25.8 23.6 29.5 1.1-1.6 2.5-2.9 4.2-3.9 1.8-1.1 3.9-1.6 6.2-1.6s4.4.5 6.2 1.6c1.7 1 3.1 2.3 4.2 3.9C51.8 57.8 62 46.1 62 32 62 15.5 48.5 2 32 2zm0 12c3.5 0 6.5 2.8 6.5 6.5S35.5 27 32 27s-6.5-2.8-6.5-6.5S28.5 14 32 14zm0 36c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm15.3-8.7c-1.1 1.7-2.9 2.8-5.3 2.8H12.7c-2.4 0-4.2-1.1-5.3-2.8-.6-.9-1.3-2.2-1.4-3.4-.2-1.3 0-2.6.6-3.7.7-1.4 2.1-2.2 3.6-2.2h35.3c1.5 0 2.9.8 3.6 2.2.6 1.1.8 2.4.6 3.7-.1 1.2-.8 2.5-1.4 3.4z"
          />
        </svg>
      ),
    },

    {
      title: "Water Damage",
      description:
        " Our teams are epuipped with state of the art water extraction and cleanup equipment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="72"
          width="72"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 508 508"
          className="spin-icon rounded-full border-4 bottom-14 relative border-violet-900"
        >
          <circle fill="#324A5E" cx="254" cy="254" r="254" />
          <path
            fill="#54C0EB"
            d="M252,414h4c62.8,0,115.2-50.4,114-113.2c0-8-1.2-15.6-2.8-22.8C360,246.4,324,210,298,170.8  c-27.2-37.6-44-77.6-44-76.4c-0.4-0.8-17.2,39.2-44,76.4c-25.6,39.2-62,76-69.2,106.8c-2,7.2-2.8,14.8-2.8,22.8  C136.8,363.2,189.2,414,252,414z"
          />
          <g>
            <path
              fill="#84DBFF"
              d="M177.2,353.6c6-0.4,9.6-6,7.2-10.8c-3.2-7.2-6-14.8-7.2-22.8c-1.6-8-2-15.6-1.6-23.2   c1.2-32,32-75.2,51.6-118.4c2-3.6,3.6-7.6,5.2-11.2c-0.8,1.2-1.6,2.4-2.4,3.2c-26.4,40.4-64,78.8-70.8,110   c-1.6,7.2-2.4,15.2-2.4,23.2c0.4,16.8,4.8,32,12.4,46C171.2,352.4,174,354,177.2,353.6L177.2,353.6z"
            />
            <ellipse
              transform="matrix(-0.042 -0.9991 0.9991 -0.042 -169.3631 569.6013)"
              fill="#84DBFF"
              cx="188.401"
              cy="365.998"
              rx="8.4"
              ry="9.2"
            />
          </g>
        </svg>
      ),
    },

    {
      title: "Water Heaters",
      description:
        " Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="72"
          height="72"
          fill="#42A5F5"
          className="spin-icon rounded-full border-4 bottom-14 relative border-violet-900 bg-white"
        >
          <path d="M6 2C5.44772 2 5 2.44772 5 3V4H19V3C19 2.44772 18.5523 2 18 2H6ZM2 6C1.44772 6 1 6.44772 1 7V21C1 21.5523 1.44772 22 2 22H22C22.5523 22 23 21.5523 23 21V7C23 6.44772 22.5523 6 22 6H2ZM3 8H21V20H3V8ZM5 10H7V14H5V10ZM9 10H11V14H9V10ZM13 10H15V14H13V10ZM17 10H19V14H17V10ZM5 16H7V18H5V16ZM9 16H11V18H9V16ZM13 16H15V18H13V16ZM17 16H19V18H17V16Z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div id="assignment">
        <div className="diagonal">
          <div className="text-white text-4xl p-4 font-bold">
            <p className="mt-12 text-6xl">Our Services</p>
            <div className="flex p-4 space-x-4 mt-48 gap-10 text-center">
              {services.map((service, index) => (
                <Services {...service} key={index} />
              ))}
            
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
