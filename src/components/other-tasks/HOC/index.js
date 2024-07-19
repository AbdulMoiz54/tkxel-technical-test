import React, { useState } from "react";

// Higher Order Component (HOC) to add hover functionality
const withHover = (WrappedComponent) => {
  // Return a new component that wraps the passed component
  return (props) => {
    // useState hook to manage hover state
    const [isHovered, setIsHovered] = useState(false);

    // Event handler for mouse enter
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    // Event handler for mouse leave
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Return the wrapped component with added hover state
    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <WrappedComponent {...props} isHovered={isHovered} />
      </div>
    );
  };
};

// Example Button component that receives hover state and variant as props
const Button = ({ isHovered, variant, children }) => {
  // Base style for the button
  const baseStyle = {
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  };

  // Style applied when the button is hovered
  const hoveredStyle = isHovered ? { backgroundColor: "lightgray" } : {};

  // Style applied based on the variant prop
  const variantStyle = {
    primary: { backgroundColor: "blue", color: "white" },
    secondary: { backgroundColor: "gray", color: "white" },
    default: {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
    },
  }[variant];

  // Combine all styles
  const combinedStyle = { ...baseStyle, ...variantStyle, ...hoveredStyle };

  // Return the button with combined styles
  return <button style={combinedStyle}>{children}</button>;
};

// Main component that uses the HOC to enhance the Button component
export default function HOCButtonVariants() {
  // Enhance the Button component with hover functionality
  const HoverButton = withHover(Button);

  return (
    <div className="flex gap-[10px] flex-wrap">
      {/* Render HoverButton with different variants */}
      <HoverButton variant="primary">Primary Button</HoverButton>
      <HoverButton variant="secondary">Secondary Button</HoverButton>
      <HoverButton variant="default">Default Button</HoverButton>
    </div>
  );
}
