import Span from "../components/Span";
import SuscribeSection from "../components/SuscribeSection";
import { rightsReserved } from "../const/rightsReserved";

export default function TestPage() {
  return (
    <main className="main">
      <SuscribeSection />
      <Span text={rightsReserved} />
    </main>
  );
};
