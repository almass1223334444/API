import { useRouter } from 'next/router';
import { NextPage } from 'next';

const NFTDetails: NextPage = () => {
  const router = useRouter();
  const { name, description, image } = router.query;

  return (
    <div>
      <h2>NFT Details</h2>
      <h3>Name: {name}</h3>
      <p>Description: {description}</p>
      <img src={"https://example.com/path-to-your-uploaded-image.png"} alt="NFT Image" />
    </div>
  );
};

export default NFTDetails;
