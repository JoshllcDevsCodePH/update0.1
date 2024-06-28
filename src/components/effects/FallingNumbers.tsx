import React, { useRef, ReactNode } from "react";
import { styled } from "@mui/system";

const FallingNumbers = styled("div")`
  position: absolute;
  font-size: 24px;
  color: #000;
  pointer-events: none;
`;

const generateRandomNumber = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
};

const generateRandomNumbers = (count: number, max: number) => {
  const numbers: number[] = [];
  for (let i = 0; i < count; i++) {
    numbers.push(generateRandomNumber(max));
  }
  return numbers;
};

interface MouseClickEffectProps {
  numberOfNumbers: number;
  maxNumber: number;
  size: number;
  children: ReactNode;
}

const MouseClickEffect: React.FC<MouseClickEffectProps> = ({
  numberOfNumbers,
  maxNumber,
  size,
  children,
}) => {
  const fallingNumbersRef = useRef<HTMLDivElement>(null);

  const handleMouseClick = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    console.log(clientX, clientY);

    if (!fallingNumbersRef.current) return;

    const numbers = generateRandomNumbers(numberOfNumbers, maxNumber);

    numbers.forEach((number, index) => {
      const numberElement = document.createElement("span");
      numberElement.textContent = number.toString();

      numberElement.style.position = "absolute";
      numberElement.style.left = `${clientX}px`;
      numberElement.style.top = `${clientY}px`;
      numberElement.style.width = `${size}px`;
      numberElement.style.height = `${size}px`;

      fallingNumbersRef.current?.appendChild(numberElement);

      // Анимация движения числа вверх
      numberElement.animate(
        [
          { transform: "translateY(0)", opacity: 1 },
          { transform: "translateY(-100px)", opacity: 0 },
        ],
        { duration: 1000, easing: "ease-out", delay: index * 10000 }
      );

      // Удаление числа из DOM после завершения анимации
      setTimeout(() => {
        if (fallingNumbersRef.current) {
          fallingNumbersRef.current.removeChild(numberElement);
        }
      }, 10000);
    });
  };

  return (
    <div style={{ position: "relative", height: "100vh" }} onClick={handleMouseClick}>
      {children}
      <FallingNumbers ref={fallingNumbersRef} />
    </div>
  );
};

export default MouseClickEffect;
