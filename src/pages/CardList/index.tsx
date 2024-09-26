import { WizardCard } from "../../components/shared/WizardCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSearchCards } from "../../services/hooks/useSearchWizard";
import { WizardCharacter } from "../../utils/types";

const CardList = () => {
  const { data, isLoading } = useSearchCards();
  const wizards = data as WizardCharacter[];

  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="flex flex-wrap ">
          <Skeleton
            count={100}
            width={380}
            height={450}
            inline={true}
            className="mb-12 mr-16 mt-8"
            containerClassName="justify-between"
          />
        </div>
      </SkeletonTheme>
    );
  }
  return (
    <section className="my-8">
      <div className="flex flex-wrap gap-8 justify-between">
        {wizards?.map((wizard: WizardCharacter) => {
          return <WizardCard wizard={wizard} key={wizard.id} />;
        })}
      </div>
    </section>
  );
};

export { CardList };
