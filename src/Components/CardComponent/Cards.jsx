import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heart from "../../Assets/Heart.png";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    setIsLoggedIn(!!token);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const toggleLike = (id) => {
    if (!isLoggedIn) {
      alert("Please log in to like products");
      return;
    }
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.includes(id)
        ? prevLikedProducts.filter((productId) => productId !== id)
        : [...prevLikedProducts, id]
    );
  };

  const handlePriceClick = () => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  };

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const styles = {
    cardsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      padding: "16px",
      transition: "margin-left 0.3s ease",
      justifyContent: "space-between",
      marginLeft: isFilterVisible ? "0" : "0",
    },
    card: {
      flex: "1 1 220px",
      maxWidth: "320px",
      backgroundColor: "#fff",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      overflow: "hidden",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    cardImg: {
      width: "100%",
      height: "234px",
      objectFit: "cover",
    },
    cardDetails: {
      padding: "12px",
    },
    cardTitle: {
      fontSize: "12px",
      fontWeight: "bold",
      margin: "8px 0",
    },
    priceDetails: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#888",
    },
    pricingText: {
      fontSize: "14px",
      color: "#888",
      margin: "0",
      cursor: "pointer",
    },
    heartIcon: {
      width: "24px",
      height: "24px",
      cursor: "pointer",
      filter: "grayscale(100%)",
      transition: "filter 0.3s ease, transform 0.3s ease",
      marginLeft: "8px",
    },
    heartIconLiked: {
      filter: "grayscale(0%)",
      transform: "scale(1.1)",
    },
  };

  return (
    <div style={styles.cardsContainer}>
      {products.map((product) => (
        <div
          style={{
            ...styles.card,
            ...(likedProducts.includes(product.id) && styles.cardHover),
          }}
          key={product.id}
        >
          <div style={styles.cardImg}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={styles.cardDetails}>
            <p style={styles.cardTitle}>{product.title}</p>
            <div style={styles.priceDetails}>
              {isLoggedIn ? (
                <p style={styles.pricingText}>${product.price}</p>
              ) : (
                <p style={styles.pricingText} onClick={handlePriceClick}>
                  Sign in or Create an account to see pricing
                </p>
              )}
              <img
                src={Heart}
                alt="Like/Unlike"
                onClick={() => toggleLike(product.id)}
                style={{
                  ...styles.heartIcon,
                  ...(likedProducts.includes(product.id) &&
                    styles.heartIconLiked),
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
