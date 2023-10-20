import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const [nftName, setNftName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '5px',
  };

  const textareaStyle = {
    marginBottom: '10px',
    padding: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleNftNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNftName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const createNFT = () => {
    // ... Add NFT creation logic here ...
  
    // After successfully creating the NFT, get the image URL and navigate to the NFTDetails page with query parameters
    const imageUrl = 'https://example.com/path-to-your-uploaded-image.png'; // Replace with the actual image URL
    router.push({
      pathname: '/NFTDetails',
      query: { name: nftName, description: description, image: imageUrl },
    });
  };

  return (
    <div style={containerStyle}>
      {/* ... your existing code ... */}
      
      <main>
        <ConnectButton />
        
        <div>
          <h2>Create NFT</h2>
          <input
            type="text"
            placeholder="NFT Name"
            value={nftName}
            onChange={handleNftNameChange}
            style={inputStyle}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            style={textareaStyle}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={inputStyle}
          />
          <button onClick={createNFT} style={buttonStyle}>Create NFT</button>
        </div>
      </main>

      {/* ... your existing code ... */}
    </div>
  );
};

export default Home;
