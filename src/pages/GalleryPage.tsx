import React, { useReducer, useState } from "react";
import styles from "./GalleryPage.module.css";

// Import gallery images
import treeImg from "../assets/images/tree.jpg";
import homeImg from "../assets/images/home.jpg";
import blendImg from "../assets/images/blend.jpg";
import lavaImg from "../assets/images/lava.jpg";
import neonImg from "../assets/images/neon.jpg";
import flowerImg from "../assets/images/flower.jpg";
import lava2Img from "../assets/images/lava2.jpg";
import newImg from "../assets/images/new.jpeg"; 
import twoImg from "../assets/images/two.jpg"; 
import threeImg from "../assets/images/three.jpg"; 

// Image array
const images = [
  treeImg,
  homeImg,
  blendImg,
  lavaImg,
  neonImg,
  flowerImg,
  lava2Img,
  newImg, 
  twoImg, 
  threeImg, 
];

// ---------------- STATE TYPES ----------------
interface GalleryItem {
  likes: number;
  comments: number;
  shares: number;
}

interface GalleryState {
  data: { [key: number]: GalleryItem };
}

interface GalleryAction {
  type: "LIKE" | "COMMENT" | "SHARE";
  payload: { imageId: number };
}

// ---------------- INITIAL STATE ----------------
const initialGalleryState: GalleryState = {
  data: {
    0: { likes: 10, comments: 2, shares: 1 },
    1: { likes: 5, comments: 1, shares: 0 },
    2: { likes: 20, comments: 5, shares: 3 },
    3: { likes: 15, comments: 3, shares: 1 },
    4: { likes: 8, comments: 0, shares: 0 },
    5: { likes: 12, comments: 4, shares: 2 },
    6: { likes: 25, comments: 7, shares: 4 },
    7: { likes: 0, comments: 0, shares: 0 }, // Stats for new.jpeg
    8: { likes: 0, comments: 0, shares: 0 }, // Stats for two.jpg
    9: { likes: 0, comments: 0, shares: 0 }, // Stats for three.jpg
  },
};

// ---------------- REDUCER ----------------
const galleryReducer = (state: GalleryState, action: GalleryAction): GalleryState => {
  const id = action.payload.imageId;

  return {
    ...state,
    data: {
      ...state.data,
      [id]: {
        ...state.data[id],
        [action.type.toLowerCase()]: state.data[id][action.type.toLowerCase() as keyof GalleryItem] + 1,
      },
    },
  };
};

// ---------------- IMAGE DESCRIPTIONS ----------------
const imageDescriptions: { [key: number]: React.ReactNode } = {
  7: (
    <>
      <p><strong>Technical Specifications</strong></p>
      <p>Device: Camera<br />ISO: 200<br />F 1.4<br />1/100s<br />24mm</p>

      <p><strong>Editing Specifications</strong></p>
      <p>In post-production, I focused on enhancing the natural quality and professional sharpness of the image. I slightly adjusted the overall brightness to keep the image feeling airy and added a subtle warmth to my skin tone, giving it a natural, healthy glow that prevents the studio white balance from looking too cold. I ensured the focus remained on my face and applied a gentle clarity boost to the fabric of the light blue dress and the strands of my hair. I used light touch ups to ensure my skin looked smooth, professional, and consistent, while carefully preserving all natural texture. The goal was polish, not perfection maintaining an approachable and authentic look.</p>

      <p><strong>What the Picture Depicts</strong></p>
      <p>This headshot is designed to convey confidence and approachability perfect for my LinkedIn and portfolio. I chose the light, pastel blue dress because it is a soft, professional color that stands out cleanly against the bright background and complements my features. My expression is calm and direct, engaging the viewer professionally. By utilizing the wide aperture to blur the background, the focus remains entirely on my expression, which projects a warm yet dedicated professional image.</p>
    </>
  ),
  8: (
    <>
      <p><strong>Technical Specifications</strong></p>
      <p>Device: iPhone 15 Plus<br />ISO: 64<br />F 1.6<br />1/100s<br />26mm</p>

      <p><strong>Editing Specifications</strong></p>
      <p>The finishing touches came in the form of enhancing the dramatic and aesthetic quality. The overall exposure was lifted to bring out details of the building without blowing out the streetlights, while the contrast was boosted to heighten the visual separation between the bright signs and the deep shadows. Saturation was slightly increased, making the red signage truly pop and giving a vibrant nature to the background. Subtle vignetting was applied specifically to draw the viewer’s eye inward, to draw the visual focus on the Supermac’s sign and the building's central lines. Finally, targeted sharpening was used to keep the text and architectural lines crisp, with noise smoothing applied to the darkest areas to maintain a clean, quality finish.</p>

      <p><strong>What the Picture Depicts</strong></p>
      <p>This picture perfectly captures the moody, cinematic atmosphere of a late city night. It shows a Supermac’s fast-food restaurant standing brightly illuminated on a street corner. The scene's aesthetic composition is highly intentional: the building’s symmetry is balanced by the bold artificial lighting, with the glowing signs drawing the eye to the center. The use of a wide angle perspective makes the building feel prominent and solid. Whereas, the minimal presence of traffic and a single figure walking below adds a moment of solitary peace. This juxtaposition of vibrant artificial light and calming shadows evokes the quiet comfort of finding a familiar spot in a city that is otherwise sleeping, encouraging the viewer to appreciate the often overlooked beauty of urban lights after hours.</p>
    </>
  ),
  9: (
    <>
      <p><strong>Technical Specifications</strong></p>
      <p>26mm<br />F1.6<br />ISO 64<br />1/50s</p>

      <p><strong>Editing Specifications</strong></p>
      <p>I edited this photo to make the food look as appetizing as it tasted, while enhancing the cozy atmosphere. I increased the warmth and vibrance slightly to make those gorgeous yellow yolks really pop and give the toasted bread a rich, golden-brown look. I used a touch of clarity to emphasize texture, particularly on the crispy edges of the eggs and the seasoning sprinkled on top, ensuring the details are sharp. The shadows were slightly lifted to reveal the grain of the wooden table without losing the cozy, warm feeling. The goal was to create an image that looks inviting, warm, and comforting.</p>

      <p><strong>What the Picture Depicts</strong></p>
      <p>Cooking, even simple eggs on toast, is my creative outlet. This photo highlights the satisfaction of creating nourishment, from the perfect toast to the bright, runny yolks. It's a tribute to the mindful pause and fulfillment I find in the kitchen, proving simple food is a great source of happiness.</p>
    </>
  ),
};

// ---------------- COMPONENT ----------------
const GalleryPage = () => {
  const [state, dispatch] = useReducer(galleryReducer, initialGalleryState);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleLike = (id: number) => dispatch({ type: "LIKE", payload: { imageId: id } });
  const handleComment = (id: number) => dispatch({ type: "COMMENT", payload: { imageId: id } });
  const handleShare = (id: number) => dispatch({ type: "SHARE", payload: { imageId: id } });

  return (
    <>
      <main className={styles.page}>
        <h1>Photo Gallery</h1>

        <div className={styles.galleryGrid}>
          {images.map((image, index) => {
            const stats = state.data[index];

            return (
              <div key={index} className={styles.gridItem}>
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className={styles.clickableImage}
                  onClick={() => setSelectedImage(index)}
                />

                <div className={styles.interactionBar}>
                  <button onClick={() => handleLike(index)}>👍 {stats.likes}</button>
                  <button onClick={() => handleComment(index)}>💬 {stats.comments}</button>
                  <button onClick={() => handleShare(index)}>🔗 {stats.shares}</button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* ---------- MODAL ---------- */}
      {selectedImage !== null && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage]}
              alt="Large"
              className={styles.largeImage}
            />

            <div className={styles.modalInfo}>
              <p><strong>Likes:</strong> {state.data[selectedImage].likes}</p>
              <p><strong>Comments:</strong> {state.data[selectedImage].comments}</p>
              <p><strong>Shares:</strong> {state.data[selectedImage].shares}</p>

              {/* Image description */}
              {imageDescriptions[selectedImage] && (
                <div className={styles.imageDescription}>
                  {imageDescriptions[selectedImage]}
                </div>
              )}

              <div className={styles.modalButtons}>
                <button onClick={() => handleLike(selectedImage)}>👍 Like</button>
                <button onClick={() => handleComment(selectedImage)}>💬 Comment</button>
                <button onClick={() => handleShare(selectedImage)}>🔗 Share</button>
              </div>

              <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
