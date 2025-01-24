import Loader from "../components/Loader";
import Span from "../components/Span";
import SubcribeSucces from "../components/SubcribeSucces";
import SuscribeSection from "../components/SuscribeSection";
import { rightsReserved } from "../const/rightsReserved";
import { useLoaderStore } from "../providers/loader_provider";

export default function TestPage() {
  const { isLoading, isSuccess } = useLoaderStore();
  return (
    <main className="main">
      <div className={`section ${isLoading ? 'visible' : ''}`}>
        {isLoading && <Loader />}
      </div>
      <div className={`section ${(!isLoading && !isSuccess) ? 'visible' : ''}`}>
        {!isLoading && !isSuccess && <SuscribeSection />}
      </div>
      <div className={`section ${(!isLoading && isSuccess) ? 'visible' : ''}`}>
        {!isLoading && isSuccess && <SubcribeSucces />}
      </div>
      <Span text={rightsReserved} />
    </main>
  );
};
