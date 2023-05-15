import './App.scss';
import CraigTuffs from './sections/craig-tuffs';
import Faqs from './sections/faqs';
import Footer from './sections/footer';
import Header from './sections/header';
import Pricing from './sections/pricing';
import Last from './sections/last';
import WorkExamples from './sections/work-examples';
import Splash from './sections/last';
export default function App() {
  return (
    <>
      <Header></Header>
      <Splash></Splash>
      <Pricing></Pricing>
      <WorkExamples></WorkExamples>
      <CraigTuffs></CraigTuffs>
      <Faqs></Faqs>
      <Last></Last>
      <Footer></Footer>
    </>
  );
}
