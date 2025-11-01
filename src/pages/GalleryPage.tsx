import { useReducer } from 'react';
//import React, { useReducer } from 'react';
import styles from './GalleryPage.module.css'; 

// Import gallery images in the specified order
import treeImg from '../assets/images/tree.jpg';
import homeImg from '../assets/images/home.jpg';
import blendImg from '../assets/images/blend.jpg';
import lavaImg from '../assets/images/lava.jpg';
import neonImg from '../assets/images/neon.jpg';
import flowerImg from '../assets/images/flower.jpg';
import lava2Img from '../assets/images/lava2.jpg';

const images = [
    treeImg,
    homeImg,
    blendImg,
    lavaImg,
    neonImg,
    flowerImg,
    lava2Img
];

// --- REDUX-LIKE STATE MANAGEMENT (useReducer) ---

// Type definitions for clear state management
interface GalleryItem {
    likes: number;
    comments: number;
    shares: number;
}

interface GalleryState {
    data: { [key: number]: GalleryItem };
}

interface GalleryAction {
    type: 'LIKE' | 'COMMENT' | 'SHARE';
    payload: { imageId: number };
}

// Initial State of the gallery items
const initialGalleryState: GalleryState = {
  data: {
    0: { likes: 10, comments: 2, shares: 1 },
    1: { likes: 5, comments: 1, shares: 0 },
    2: { likes: 20, comments: 5, shares: 3 },
    3: { likes: 15, comments: 3, shares: 1 },
    4: { likes: 8, comments: 0, shares: 0 },
    5: { likes: 12, comments: 4, shares: 2 },
    6: { likes: 25, comments: 7, shares: 4 },
  },
};

// Reducer Function to handle state changes
const galleryReducer = (state: GalleryState, action: GalleryAction): GalleryState => {
  const imageId = action.payload.imageId;

  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        data: {
          ...state.data,
          [imageId]: {
            ...state.data[imageId],
            likes: state.data[imageId].likes + 1,
          },
        },
      };
    case 'COMMENT':
      return {
        ...state,
        data: {
          ...state.data,
          [imageId]: {
            ...state.data[imageId],
            comments: state.data[imageId].comments + 1,
          },
        },
      };
    case 'SHARE':
      return {
        ...state,
        data: {
          ...state.data,
          [imageId]: {
            ...state.data[imageId],
            shares: state.data[imageId].shares + 1,
          },
        },
      };
    default:
      return state;
  }
};


const GalleryPage = () => {
  const [state, dispatch] = useReducer(galleryReducer, initialGalleryState);

  const handleLike = (id: number) => dispatch({ type: 'LIKE', payload: { imageId: id } });
  
  const handleComment = (id: number) => {
    // Console log replaces alert() for in-app message safety
    console.log(`Attempting to add comment for image ${id + 1}.`);
    dispatch({ type: 'COMMENT', payload: { imageId: id } });
  };
  
  const handleShare = (id: number) => {
    // Console log replaces alert() for in-app message safety
    console.log(`Image ${id + 1} shared.`);
    dispatch({ type: 'SHARE', payload: { imageId: id } });
  };


  return (
    <>
      {/* The inline <style> block has been removed. */}
      {/* All class names now correctly reference the imported styles object. */}
      <main className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>You don't wanna hire a robot right?</h1>
          <p className={styles.subtitle}>Because I am really a COOL human :)</p>
        </div>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => {
            const stats = state.data[index] || { likes: 0, comments: 0, shares: 0 };
            
            return (
              <div key={index} className={styles.gridItem}>
                {/* Image Wrapper to constrain aspect ratio of the visual part only */}
                <div className={styles.imageWrapper}>
                    <img src={image} alt={`Gallery image ${index + 1}`} />
                </div>
                
                {/* Interaction Bar (Like, Comment, Share buttons) */}
                <div className={styles.interactionBar}>
                  <button onClick={() => handleLike(index)} className={styles.iconButton}>
                    <span role="img" aria-label="like">👍</span> {stats.likes}
                  </button>
                  <button onClick={() => handleComment(index)} className={styles.iconButton}>
                    <span role="img" aria-label="comment">💬</span> {stats.comments}
                  </button>
                  <button onClick={() => handleShare(index)} className={styles.iconButton}>
                    <span role="img" aria-label="share">🔗</span> {stats.shares}
                  </button>
              
                </div>
                <div className={styles.commentsSection}>
                <p>View all {stats.comments} comments...</p>
              </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default GalleryPage;