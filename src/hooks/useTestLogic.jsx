import { useState } from "react";

const useTestLogic = (menuItems) => {
  const [selectedType, setSelectedType] = useState(null);

  const handleMenuClick = (type) => setSelectedType(type);

  const selectedItem = menuItems.find((item) => item.id === selectedType);

  return { selectedType, selectedItem, handleMenuClick };
};

export default useTestLogic;
