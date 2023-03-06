import "./App.css";
import Brands from "./Components/Brands/Brands";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MiddleComponent from "./Components/MiddleComponent/MiddleComponent";
import Navbar from "./Components/Navbar/Navbar";
import VideoTextComponent from "./Components/VideoTextComponent/VideoTextComponent";
import WelcomeComponent from "./Components/WelcomeComponent/WelcomeComponent";
import video1 from "./Assets/video1.webm";
import video2 from "./Assets/video2.webm";
import video3 from "./Assets/video3.webm";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brands />
      <VideoTextComponent
        video={video1}
        heading="Bring your team together"
        text="At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies."
        learnMore="Learn more about channels"
        left={true}
      />
      <VideoTextComponent
        video={video2}
        heading="Choose how you want to work"
        text="In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
        learnMore="Learn more about flexible communication"
        left={false}
      />
      <VideoTextComponent
        video={video3}
        heading="Move faster with your tools in one place"
        text="With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
        learnMore="Learn more about the Slack platform"
        left={true}
      />


      <MiddleComponent />
      {/* <VideoTextComponent /> */}
      <WelcomeComponent />
      <Footer />
    </div>
  );
}

export default App;
