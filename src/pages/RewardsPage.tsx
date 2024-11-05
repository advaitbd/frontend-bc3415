import { PointsOverview } from '../components/rewards/PointsOverview';
import { NFTTransfer } from '../components/rewards/NFTTransfer';

export const RewardsPage = () => {
  return (
    <div className="space-y-6">
     <div className="grid grid-cols-1 gap-6">
        <PointsOverview />
        <NFTTransfer />
      </div>
    </div>
  );
};