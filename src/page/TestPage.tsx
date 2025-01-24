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
      {isLoading && <Loader />}
      {!isLoading && (!isSuccess) && <SuscribeSection />}
      {!isLoading && (isSuccess) && <SubcribeSucces />}
      <Span text={rightsReserved} />
    </main>
  );
};
